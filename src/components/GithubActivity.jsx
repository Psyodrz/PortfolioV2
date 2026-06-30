import { memo, useMemo, useState, useEffect, useRef, useId } from 'react';
import { useTheme } from '../ThemeContext';
import { IDENTITY } from '../config/siteMeta';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDate(dateStr) {
  const parts = dateStr.split('-').map(Number);
  return new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const FULL_MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) { case 1: return 'st'; case 2: return 'nd'; case 3: return 'rd'; default: return 'th'; }
}

function formatTooltipDate(dateStr) {
  try {
    const date = parseDate(dateStr);
    return `${FULL_MONTH_NAMES[date.getMonth()]} ${date.getDate()}${getOrdinalSuffix(date.getDate())}`;
  } catch { return dateStr; }
}

function playSound(type) {
  // Silent sound to prevent annoying the user, but logic is here
}

// ─── API fetch ────────────────────────────────────────────────────────────────

async function fetchContributions(username) {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
  if (!res.ok) throw new Error(`Could not fetch contributions for "${username}" (${res.status})`);
  const json = await res.json();
  const result = {};
  for (const entry of json.contributions) {
    result[entry.date] = { level: Math.min(4, Math.max(0, entry.level)), count: entry.count };
  }
  return result;
}

// ─── Build calendar grid ──────────────────────────────────────────────────────

function buildGrid(startDate, endDate, startsOnSunday) {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const startDay = startsOnSunday ? 0 : 1;
  const offset = (start.getDay() - startDay + 7) % 7;
  const gridStart = addDays(start, -offset);

  const weeks = [];
  const monthLabels = [];
  let current = new Date(gridStart);
  let weekIndex = 0;
  let lastMonth = -1;

  while (current <= end || (weeks.length > 0 && (weeks[weeks.length - 1]?.length ?? 0) < 7)) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = formatDate(current);
      const isInRange = current >= start && current <= end;
      week.push(isInRange ? dateStr : null);
      if (isInRange && current.getMonth() !== lastMonth) {
        lastMonth = current.getMonth();
        monthLabels.push({ label: MONTH_NAMES[current.getMonth()], weekIndex });
      }
      current = addDays(current, 1);
    }
    weeks.push(week);
    weekIndex++;
    if (current > end && weeks.length > 0 && (weeks[weeks.length - 1]?.every(dd => dd === null || parseDate(dd) > end) ?? false)) break;
  }

  return { weeks, monthLabels, gridStart: formatDate(gridStart) };
}

// ─── Main Component ───────────────────────────────────────────────────────────

const GithubCalendar = memo(function GithubCalendar({ username = IDENTITY.github }) {
  const id = useId();
  const { colors, isDark } = useTheme();
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, date: '', count: undefined, x: 0, y: 0 });
  
  // Game Mode State
  const [gameActive, setGameActive] = useState(false);

  // Theme-aware contribution colors
  const levelColors = useMemo(() => {
    if (isDark) {
      return {
        level0: 'rgba(255,255,255,0.04)',
        level1: 'rgba(255,61,0,0.25)',
        level2: 'rgba(255,61,0,0.45)',
        level3: 'rgba(255,61,0,0.70)',
        level4: '#FF3D00',
      };
    }
    return {
      level0: 'rgba(0,0,0,0.05)',
      level1: 'rgba(255,61,0,0.20)',
      level2: 'rgba(255,61,0,0.40)',
      level3: 'rgba(255,61,0,0.65)',
      level4: '#FF3D00',
    };
  }, [isDark]);

  // Fetch contributions
  useEffect(() => {
    if (!username) return;
    setFetchedData(null);
    setFetchError(null);
    setLoading(true);
    fetchContributions(username)
      .then(d => setFetchedData(d))
      .catch(e => setFetchError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, [username]);

  const data = fetchedData ?? {};

  // Date range
  const resolvedEnd = formatDate(new Date());
  const resolvedStart = useMemo(() => {
    const d = parseDate(resolvedEnd);
    d.setFullYear(d.getFullYear() - 1);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  }, [resolvedEnd]);

  // Build grid
  const { weeks, monthLabels, gridStart } = useMemo(
    () => buildGrid(resolvedStart, resolvedEnd, true),
    [resolvedStart, resolvedEnd]
  );

  // Stats
  const stats = useMemo(() => {
    const entries = Object.entries(data);
    const total = entries.reduce((sum, [, v]) => sum + (v.count ?? (v.level > 0 ? 1 : 0)), 0);
    const activeDays = entries.filter(([, v]) => v.level > 0).length;
    const maxStreak = (() => {
      let max = 0, cur = 0;
      const sorted = entries.filter(([, v]) => v.level > 0).map(([d]) => d).sort();
      for (let i = 0; i < sorted.length; i++) {
        if (i === 0) { cur = 1; max = 1; continue; }
        const prev = parseDate(sorted[i - 1]);
        const curr = parseDate(sorted[i]);
        const diff = (curr.getTime() - prev.getTime()) / 86400000;
        cur = diff === 1 ? cur + 1 : 1;
        max = Math.max(max, cur);
      }
      return max;
    })();
    return { total, activeDays, maxStreak };
  }, [data]);

  // Dimensions
  const cellSize = 16;
  const cellGap = 4;
  const step = cellSize + cellGap;
  const monthLabelHeight = gameActive ? 0 : 24;
  const svgWidth = weeks.length * step - cellGap;
  const svgHeight = monthLabelHeight + 7 * step - cellGap;

  // Auto-scroll to right
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [fetchedData, gameActive]);

  // ─── Game Loop ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!gameActive) {
      // Restore cells
      weeks.forEach((week) => {
        week.forEach((date) => {
          if (!date) return;
          const rect = document.getElementById(`cell-${id}-${date}`);
          if (rect) {
            rect.style.opacity = "1";
            rect.style.pointerEvents = "auto";
            const originalLevel = data[date]?.level ?? 0;
            const originalColor = levelColors[`level${originalLevel}`] || levelColors.level0;
            rect.setAttribute("fill", originalColor);
          }
        });
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    const width = svgWidth;
    const height = svgHeight + 80;
    canvas.width = width;
    canvas.height = height;

    // Mutate state of blocks
    const cellLevels = new Map();
    weeks.forEach((week) => {
      week.forEach((date) => {
        if (!date) return;
        const entry = data[date];
        const initialLevel = entry?.level ?? 0;
        cellLevels.set(date, initialLevel);
        const rect = document.getElementById(`cell-${id}-${date}`);
        if (rect) {
          if (initialLevel === 0) {
            rect.style.opacity = "0";
            rect.style.pointerEvents = "none";
          } else {
            rect.style.opacity = "1";
            rect.style.pointerEvents = "auto";
          }
        }
      });
    });

    const player = {
      x: width / 2 - 20,
      y: height - 35,
      width: 40,
      height: 30,
      speed: 5,
      direction: 1,
      color: "#38bdf8",
    };

    let bullets = [];
    let lastShot = 0;
    const cooldown = 140;

    const shoot = () => {
      bullets.push({
        x: player.x + player.width / 2 - 2,
        y: player.y - 6,
        vy: -8,
        width: 4,
        height: 12,
        color: "#fbbf24",
      });
    };

    const stars = Array.from({ length: 140 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 0.4 + 0.1,
      size: Math.random() * 1.2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let particles = [];
    const explode = (x, y, color) => {
      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 1.2;
        particles.push({
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          color, size: Math.random() * 2 + 1, alpha: 1, life: 0, maxLife: Math.random() * 15 + 15,
        });
      }
    };

    const update = () => {
      let minWi = -1, maxWi = -1;
      weeks.forEach((week, wi) => {
        week.forEach((date) => {
          if (!date) return;
          if ((cellLevels.get(date) ?? 0) > 0) {
            if (minWi === -1) minWi = wi;
            minWi = Math.min(minWi, wi);
            maxWi = Math.max(maxWi, wi);
          }
        });
      });

      let minX = 0;
      let maxX = width - player.width;
      if (minWi !== -1 && maxWi !== -1) {
        minX = minWi * step;
        maxX = Math.max(minX, Math.min(width - player.width, (maxWi + 1) * step - player.width));
      }

      player.x = Math.max(minX, Math.min(maxX, player.x));
      player.x += player.speed * player.direction;
      if (player.x >= maxX) { player.x = maxX; player.direction = -1; }
      else if (player.x <= minX) { player.x = minX; player.direction = 1; }

      const now = Date.now();
      if (now - lastShot >= cooldown) { shoot(); lastShot = now; }

      let anyActive = false;
      cellLevels.forEach((level) => { if (level > 0) anyActive = true; });

      if (!anyActive) {
        weeks.forEach((week) => {
          week.forEach((date) => {
            if (!date) return;
            const originalLevel = data[date]?.level ?? 0;
            cellLevels.set(date, originalLevel);
            const rect = document.getElementById(`cell-${id}-${date}`);
            if (rect) {
              const originalColor = levelColors[`level${originalLevel}`] || levelColors.level0;
              rect.setAttribute("fill", originalColor);
              if (originalLevel === 0) {
                rect.style.opacity = "0";
                rect.style.pointerEvents = "none";
              } else {
                rect.style.opacity = "1";
                rect.style.pointerEvents = "auto";
              }
            }
          });
        });
      }

      stars.forEach((s) => {
        s.y += s.speed;
        if (s.y > height) { s.y = 0; s.x = Math.random() * width; }
      });

      bullets = bullets.filter((b) => { b.y += b.vy; return b.y > 0; });

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life++; p.alpha = 1 - p.life / p.maxLife;
      });
      particles = particles.filter((p) => p.life < p.maxLife);

      bullets.forEach((bullet, bulletIdx) => {
        weeks.forEach((week, wi) => {
          week.forEach((date, di) => {
            if (!date) return;
            const currentLevel = cellLevels.get(date) ?? 0;
            if (currentLevel === 0) return;

            const cellX = wi * step;
            const cellY = monthLabelHeight + di * step;

            if (
              bullet.x < cellX + cellSize && bullet.x + bullet.width > cellX &&
              bullet.y < cellY + cellSize && bullet.y + bullet.height > cellY
            ) {
              bullets.splice(bulletIdx, 1);
              const newLevel = currentLevel - 1;
              cellLevels.set(date, newLevel);

              const rect = document.getElementById(`cell-${id}-${date}`);
              if (rect) {
                if (newLevel === 0) {
                  rect.style.opacity = "0";
                  rect.style.pointerEvents = "none";
                } else {
                  const newColor = levelColors[`level${newLevel}`] || levelColors.level0;
                  rect.setAttribute("fill", newColor);
                }
              }

              const hitColor = levelColors[`level${currentLevel}`] || levelColors.level0;
              explode(cellX + cellSize / 2, cellY + cellSize / 2, hitColor);
            }
          });
        });
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Stars
      ctx.fillStyle = "#ffffff";
      stars.forEach((s) => {
        ctx.globalAlpha = s.alpha;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });
      ctx.globalAlpha = 1.0;

      // Bullets
      bullets.forEach((b) => { ctx.fillStyle = b.color; ctx.fillRect(b.x, b.y, b.width, b.height); });

      // Particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      ctx.globalAlpha = 1.0;

      // Ship
      ctx.fillStyle = player.color;
      ctx.shadowColor = player.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(player.x + player.width / 2, player.y);
      ctx.lineTo(player.x + player.width, player.y + player.height);
      ctx.lineTo(player.x + player.width * 0.7, player.y + player.height * 0.75);
      ctx.lineTo(player.x + player.width * 0.3, player.y + player.height * 0.75);
      ctx.lineTo(player.x, player.y + player.height);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      update();
      render();
      if (gameActive) animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [gameActive, data, weeks, step, cellSize, cellGap, monthLabelHeight, levelColors, id, isDark, svgWidth, svgHeight]);

  // ── Loading skeleton ───────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ width: 'fit-content', margin: '0 auto', opacity: 0.3 }}>
        <svg width={Math.min(svgWidth, 800)} height={svgHeight} style={{ overflow: 'visible' }}>
          {Array.from({ length: Math.min(weeks.length, 53) }).map((_, wi) =>
            Array.from({ length: 7 }).map((_, di) => (
              <rect key={`${wi}-${di}`} x={wi * step} y={monthLabelHeight + di * step}
                width={cellSize} height={cellSize} rx={cellSize * 0.2}
                fill={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}
              />
            ))
          )}
        </svg>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div style={{ textAlign: 'center', fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: colors.muted, padding: '2rem' }}>
        Could not load GitHub activity.
      </div>
    );
  }

  // ── Month labels (deduplicated) ────────────────────────────────
  const deduplicatedMonths = (() => {
    const byWeek = new Map();
    monthLabels.forEach(({ label, weekIndex }) => byWeek.set(weekIndex, label));
    const entries = Array.from(byWeek.entries());
    const valid = [];
    for (let i = 0; i < entries.length; i++) {
      const current = entries[i];
      const next = entries[i + 1];
      if (i === 0 && next && next[0] - current[0] < 3) continue;
      const last = valid[valid.length - 1];
      if (last && current[0] - last[0] < 3) continue;
      valid.push(current);
    }
    return valid;
  })();

  const textColor = gameActive ? '#ffffff' : colors.fg;
  const mutedColor = gameActive ? 'rgba(255,255,255,0.5)' : colors.muted;
  const borderColor = gameActive ? 'rgba(255,255,255,0.1)' : colors.border;

  return (
    <div style={{
      width: '100%', maxWidth: 1200, margin: '0 auto',
      border: `1px solid ${borderColor}`,
      borderRadius: 12, padding: 'clamp(1.5rem, 3vw, 2.5rem)',
      background: gameActive ? '#000000' : (isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'),
      transition: 'background 0.5s',
    }}>
      {/* Stats bar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1rem',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'baseline' }}>
          {[
            { label: 'Contributions', value: stats.total.toLocaleString(), color: colors.accent },
            { label: 'Active Days', value: stats.activeDays.toString(), color: textColor },
            { label: 'Max Streak', value: `${stats.maxStreak}d`, color: colors.accentB || '#FFD600' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: s.color, letterSpacing: '0.05em' }}>
                {s.value}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', color: mutedColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer"
          style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: mutedColor,
            textDecoration: 'none', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.3rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = textColor}
          onMouseLeave={e => e.currentTarget.style.color = mutedColor}
        >
          @{username}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      {/* Calendar grid */}
      <div ref={scrollRef} style={{
        overflowX: 'auto', position: 'relative', paddingBottom: gameActive ? 80 : 4,
        transition: 'padding 0.5s',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
      }}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ overflow: 'visible' }}>
          {/* Month labels */}
          {!gameActive && deduplicatedMonths.map(([weekIndex, label]) => (
            <text key={`${label}-${weekIndex}`} x={weekIndex * step} y={14}
              fontSize={13} fill={mutedColor} fontFamily="'DM Mono', monospace" letterSpacing="0.05em">
              {label}
            </text>
          ))}

          {/* Cells */}
          {weeks.map((week, wi) =>
            week.map((date, di) => {
              const entry = date ? data[date] : undefined;
              const level = entry?.level ?? 0;
              const colorKey = `level${level}`;

              if (!date) {
                const cellDate = formatDate(addDays(parseDate(gridStart), wi * 7 + di));
                if (cellDate > resolvedEnd) return null;
              }

              return (
                <rect key={`${wi}-${di}`}
                  id={date ? `cell-${id}-${date}` : undefined}
                  x={wi * step} y={monthLabelHeight + di * step}
                  width={cellSize} height={cellSize}
                  rx={cellSize * 0.2}
                  fill={levelColors[colorKey] || levelColors.level0}
                  style={{ transition: 'opacity 0.1s, fill 0.1s' }}
                  onMouseEnter={() => {
                    if (!date || gameActive) return;
                    setTooltip({
                      visible: true, date,
                      count: entry?.count,
                      x: wi * step + cellSize / 2,
                      y: monthLabelHeight + di * step,
                    });
                  }}
                  onMouseLeave={() => setTooltip(t => ({ ...t, visible: false }))}
                />
              );
            })
          )}
        </svg>

        {/* Game Canvas */}
        {gameActive && (
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              pointerEvents: 'auto',
              zIndex: 10,
              cursor: 'crosshair',
              width: svgWidth,
              height: svgHeight + 80
            }}
          />
        )}

        {/* Tooltip */}
        {tooltip.visible && (() => {
          const count = tooltip.count ?? 0;
          const formattedDate = formatTooltipDate(tooltip.date);
          const text = count === 0
            ? `No contributions on ${formattedDate}.`
            : `${count} contribution${count !== 1 ? 's' : ''} on ${formattedDate}.`;
          return (
            <div style={{
              pointerEvents: 'none', position: 'absolute', zIndex: 50,
              borderRadius: 6, padding: '4px 10px',
              fontSize: 11, fontFamily: "'DM Mono', monospace", fontWeight: 500,
              color: '#fff', whiteSpace: 'nowrap',
              background: isDark ? '#1a1a1a' : '#24292e',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              left: tooltip.x, top: tooltip.y,
              transform: 'translate(-50%, calc(-100% - 8px))',
            }}>
              {text}
              <div style={{
                position: 'absolute', left: '50%', bottom: 0,
                transform: 'translate(-50%, 50%) rotate(45deg)',
                width: 6, height: 6,
                background: isDark ? '#1a1a1a' : '#24292e',
                borderRight: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
              }} />
            </div>
          );
        })()}
      </div>

      {/* Legend & Game Switch */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap'
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', color: mutedColor, letterSpacing: '0.1em' }}>LESS</span>
        {[0, 1, 2, 3, 4].map(level => (
          <svg key={level} width={cellSize} height={cellSize}>
            <rect width={cellSize} height={cellSize} rx={cellSize * 0.2} fill={levelColors[`level${level}`]} />
          </svg>
        ))}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', color: mutedColor, letterSpacing: '0.1em' }}>MORE</span>
        
        {/* Game Mode Switch */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          borderLeft: `1px solid ${borderColor}`, paddingLeft: '16px', marginLeft: '8px'
        }}>
          <span style={{ fontSize: '11px', color: mutedColor, userSelect: 'none', fontFamily: "'DM Mono', monospace", textTransform: 'uppercase' }}>
            Play
          </span>
          <button
            onClick={() => setGameActive(!gameActive)}
            style={{
              position: 'relative', display: 'inline-flex', height: 18, width: 32, flexShrink: 0, cursor: 'pointer', borderRadius: 9999,
              border: '2px solid transparent', transition: 'background-color 0.2s', outline: 'none',
              backgroundColor: gameActive ? colors.accent : (isDark ? '#262626' : '#d4d4d4')
            }}
          >
            <span
              style={{
                pointerEvents: 'none', display: 'inline-block', height: 14, width: 14, transform: gameActive ? 'translateX(14px)' : 'translateX(0)',
                borderRadius: 9999, backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'transform 0.2s'
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
});

// ─── Section Wrapper ──────────────────────────────────────────────────────────

const GithubActivity = () => {
  const { colors } = useTheme();

  return (
    <section style={{
      padding: 'clamp(4rem, 6vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
      position: 'relative',
    }}>
      <div className="container">
        {/* Section header */}
        <div style={{
          display: 'flex', gap: '1.5rem', alignItems: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
        }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>
            ●
          </span>
          <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>
            GITHUB ACTIVITY
          </span>
        </div>

        <GithubCalendar />
      </div>
    </section>
  );
};

export { GithubCalendar };
export default GithubActivity;
