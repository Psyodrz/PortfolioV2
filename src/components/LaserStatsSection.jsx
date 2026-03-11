import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { LaserFlow } from './LaserFlow';
import { STATS } from '../config/siteMeta';

const useCountUp = (target, duration, delay, trigger) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    if (!trigger || target === null) return;
    const timeoutId = setTimeout(() => {
      const start = performance.now();
      const ease = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(ease(progress) * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timeoutId); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger, target, duration, delay]);
  return count;
};

const StatItem = ({ value, suffix, display, label, delay, trigger, theme }) => {
  const count = useCountUp(value, 1800, delay, trigger);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      flex: '1 1 auto',
      minWidth: 0,
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', cursive",
        fontSize: 'clamp(64px, 9vw, 120px)',
        lineHeight: 1,
        color: theme.numberColor,
        textShadow: theme.numberGlow,
        transition: 'text-shadow 0.4s ease, color 0.4s ease',
        whiteSpace: 'nowrap',
      }}>
        {display || `${count}${suffix}`}
      </div>
      <div style={{
        fontFamily: "'DM Mono', 'Space Mono', monospace",
        fontSize: 'clamp(9px, 1.1vw, 12px)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: theme.labelColor,
        transition: 'color 0.4s ease',
        textAlign: 'center',
        maxWidth: 140,
        lineHeight: 1.6,
        paddingTop: 8,
        borderTop: `1px solid ${theme.dividerColor}`,
      }}>
        {label}
      </div>
    </div>
  );
};

export const LaserStatsSection = () => {
  const { isDark } = useTheme();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const h = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const fadeBg = isDark ? '#070707' : '#F0EBE0';
  const isMobile = windowWidth < 768;

  const theme = {
    sectionBg:    fadeBg,
    laserColor:   isDark ? '#e74c3c' : '#c0392b',
    numberColor:  isDark ? '#ffffff' : '#1a1a1a',
    numberGlow:   isDark
      ? '0 0 20px rgba(231,76,60,0.95), 0 0 50px rgba(231,76,60,0.5), 0 0 90px rgba(231,76,60,0.2)'
      : '0 0 16px rgba(192,57,43,0.5), 0 0 40px rgba(192,57,43,0.25)',
    labelColor:   isDark ? '#888888' : '#666666',
    dividerColor: isDark ? 'rgba(231,76,60,0.35)' : 'rgba(192,57,43,0.30)',
  };

  const fadeStops = isDark
    ? '#070707 0%, rgba(7,7,7,0.85) 30%, rgba(7,7,7,0.4) 60%, rgba(7,7,7,0) 100%'
    : '#F0EBE0 0%, rgba(240,235,224,0.85) 30%, rgba(240,235,224,0.4) 60%, rgba(240,235,224,0) 100%';

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <section
        ref={sectionRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          width: '100%',
          background: theme.sectionBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.4s ease',
        }}
      >
        {/* ── LaserFlow: originates from BOTTOM, shoots upward ── */}
        <LaserFlow
          color={theme.laserColor}
          horizontalBeamOffset={0.0}
          verticalBeamOffset={0.85}       /* FIX: 0.85 = near bottom of canvas */
          horizontalSizing={isMobile ? 2.5 : 0.8}   /* narrower = sharper central beam */
          verticalSizing={isMobile ? 28 : 26}        /* very tall — fills full screen height */
          wispDensity={3}
          wispSpeed={10}
          wispIntensity={8}
          flowSpeed={0.35}
          flowStrength={0.2}
          fogIntensity={0.9}
          fogScale={0.9}
          fogFallSpeed={0.4}
          decay={0.25}           /* less decay = beam travels all the way to top */
          falloffStart={0.1}     /* falloff starts very late = longer visible beam */
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />

        {/* Top fade — softer so beam shows through */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 160,
          background: `linear-gradient(to bottom, ${fadeStops})`,
          pointerEvents: 'none', zIndex: 4,
          transition: 'background 0.4s ease',
        }} />
        {/* Bottom fade — stronger so beam source blends into section edge */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
          background: `linear-gradient(to top, ${fadeStops})`,
          pointerEvents: 'none', zIndex: 4,
          transition: 'background 0.4s ease',
        }} />

        {/* ── Content ── */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          padding: isMobile ? '80px 20px' : '0 24px',
          width: '100%',
        }}>
          {/* Heading */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: isDark ? 'rgba(231,76,60,0.7)' : 'rgba(192,57,43,0.7)',
              marginBottom: '1rem',
              transition: 'color 0.4s ease',
            }}>
              — THE NUMBERS —
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: theme.numberColor,
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              transition: 'color 0.4s ease',
            }}>
              IMPACT IN<br />
              <span style={{ color: isDark ? '#e74c3c' : '#c0392b', transition: 'color 0.4s ease' }}>
                MOTION
              </span>
            </h2>
          </div>

          {/* Stats row */}
          <div
            className="laser-stats-content"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 1100,
              padding: isMobile ? '0 16px' : '0 48px',
              gap: isMobile ? '40px 20px' : '0 48px',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}
          >
            {STATS.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  display={stat.display}
                  label={stat.label}
                  delay={idx * 130}
                  trigger={inView}
                  theme={theme}
                />
                {idx < STATS.length - 1 && !isMobile && (
                  <div style={{
                    width: 1,
                    height: 80,
                    alignSelf: 'center',
                    background: `linear-gradient(to bottom, transparent, ${theme.dividerColor}, transparent)`,
                    flexShrink: 0,
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 639px) {
          .laser-stats-content > div {
            width: calc(50% - 10px) !important;
            flex: 0 0 calc(50% - 10px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LaserStatsSection;
