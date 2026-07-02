import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../ThemeContext';
import { ROLES, IDENTITY } from '../config/siteMeta';

// ─── Particle class ──────────────────────────────────────────────────────────
class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.closeEnoughTarget = 100;
    this.maxSpeed = 1.0;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;
    this.startColor = { r: 0, g: 0, b: 0 };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
  }

  move() {
    let proximityMult = 1;
    const dx = this.pos.x - this.target.x;
    const dy = this.pos.y - this.target.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const toTarget = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y };
    const mag = Math.sqrt(toTarget.x * toTarget.x + toTarget.y * toTarget.y);
    if (mag > 0) {
      toTarget.x = (toTarget.x / mag) * this.maxSpeed * proximityMult;
      toTarget.y = (toTarget.y / mag) * this.maxSpeed * proximityMult;
    }

    const steer = { x: toTarget.x - this.vel.x, y: toTarget.y - this.vel.y };
    const sMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (sMag > 0) {
      steer.x = (steer.x / sMag) * this.maxForce;
      steer.y = (steer.y / sMag) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }
    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight);
    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight);
    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  kill(width, height) {
    if (!this.isKilled) {
      const rp = Particle.randomPos(width / 2, height / 2, (width + height) / 2);
      this.target.x = rp.x;
      this.target.y = rp.y;
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }

  static randomPos(x, y, mag) {
    const rx = Math.random() * 1000;
    const ry = Math.random() * 500;
    const dir = { x: rx - x, y: ry - y };
    const m = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
    if (m > 0) { dir.x = (dir.x / m) * mag; dir.y = (dir.y / m) * mag; }
    return { x: x + dir.x, y: y + dir.y };
  }
}

// ─── Accent palette for cycling colors ───────────────────────────────────────
const ACCENT_PALETTE = [
  { r: 255, g: 61,  b: 0   },  // #FF3D00 accent
  { r: 255, g: 214, b: 0   },  // #FFD600 accentB
  { r: 231, g: 76,  b: 60  },  // #E74C3C
  { r: 0,   g: 243, b: 255 },  // #00F3FF cyber
  { r: 255, g: 0,   b: 85  },  // #FF0055
  { r: 138, g: 43,  b: 226 },  // #8A2BE2
];

// ─── Words to cycle through ─────────────────────────────────────────────────
const WORDS = [
  IDENTITY.firstName,
  ...ROLES.map(r => r.toUpperCase()),
  IDENTITY.backgroundText,
];

// ─── Component ──────────────────────────────────────────────────────────────
const ParticleText = () => {
  const { colors, isDark } = useTheme();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const wordIdxRef = useRef(0);
  const colorIdxRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false, isRight: false });
  const dimsRef = useRef({ w: 1000, h: 500 });

  const PIXEL_STEPS = 5;

  const nextWord = useCallback((word, canvas) => {
    const w = canvas.width;
    const h = canvas.height;

    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const offCtx = off.getContext('2d');

    // Responsive font size based on canvas width and word length
    const maxFontSize = Math.min(w * 0.12, 120);
    const fontSize = Math.min(maxFontSize, (w * 0.85) / (word.length * 0.6));

    offCtx.fillStyle = 'white';
    offCtx.font = `900 ${fontSize}px 'Bebas Neue', 'Arial Black', sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(word, w / 2, h / 2);

    const imageData = offCtx.getImageData(0, 0, w, h);
    const pixels = imageData.data;

    const newColor = ACCENT_PALETTE[colorIdxRef.current % ACCENT_PALETTE.length];
    colorIdxRef.current++;

    const particles = particlesRef.current;
    let pIdx = 0;

    const coords = [];
    for (let y = 0; y < h; y += PIXEL_STEPS) {
      for (let x = 0; x < w; x += PIXEL_STEPS) {
        coords.push((y * w + x) * 4);
      }
    }
    // Shuffle for organic motion
    for (let i = coords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coords[i], coords[j]] = [coords[j], coords[i]];
    }

    for (const ci of coords) {
      if (pixels[ci + 3] > 0) {
        const x = (ci / 4) % w;
        const y = Math.floor(ci / 4 / w);
        let p;

        if (pIdx < particles.length) {
          p = particles[pIdx];
          p.isKilled = false;
          pIdx++;
        } else {
          p = new Particle();
          const rp = Particle.randomPos(w / 2, h / 2, (w + h) / 2);
          p.pos.x = rp.x;
          p.pos.y = rp.y;
          p.maxSpeed = Math.random() * 6 + 4;
          p.maxForce = p.maxSpeed * 0.05;
          p.particleSize = Math.random() * 2.5 + 1.5;
          p.colorBlendRate = Math.random() * 0.0275 + 0.0025;
          particles.push(p);
        }

        p.startColor = {
          r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
          g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
          b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight,
        };
        p.targetColor = newColor;
        p.colorWeight = 0;
        p.target.x = x;
        p.target.y = y;
      }
    }

    for (let i = pIdx; i < particles.length; i++) {
      particles[i].kill(w, h);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(rect.width);
      const h = Math.floor(Math.min(rect.width * 0.45, 500));
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      dimsRef.current = { w, h };
    };

    setCanvasSize();
    nextWord(WORDS[0], canvas);

    const ctx = canvas.getContext('2d');

    const animate = () => {
      const particles = particlesRef.current;
      const w = canvas.width;
      const h = canvas.height;

      // Motion-blur trail
      ctx.fillStyle = isDark ? 'rgba(7, 7, 7, 0.12)' : 'rgba(240, 235, 224, 0.12)';
      ctx.fillRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.move();
        p.draw(ctx);
        if (p.isKilled && (p.pos.x < -50 || p.pos.x > w + 50 || p.pos.y < -50 || p.pos.y > h + 50)) {
          particles.splice(i, 1);
        }
      }

      // Mouse repel
      if (mouseRef.current.isPressed) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        for (const p of particles) {
          const dx = p.pos.x - mx;
          const dy = p.pos.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            if (mouseRef.current.isRight) {
              p.kill(w, h);
            } else {
              // Left click: push particles away
              const force = (60 - dist) / 60;
              p.vel.x += (dx / dist) * force * 8;
              p.vel.y += (dy / dist) * force * 8;
            }
          }
        }
      }

      frameRef.current++;
      if (frameRef.current % 500 === 0) {
        wordIdxRef.current = (wordIdxRef.current + 1) % WORDS.length;
        nextWord(WORDS[wordIdxRef.current], canvas);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse handlers
    const onDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isPressed: true,
        isRight: e.button === 2,
      };
    };
    const onUp = () => { mouseRef.current.isPressed = false; mouseRef.current.isRight = false; };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    // Touch handlers for mobile
    const onTouchStart = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        isPressed: true,
        isRight: false,
      };
    };
    const onTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
    };
    const onTouchEnd = () => { mouseRef.current.isPressed = false; };
    const onCtx = (e) => e.preventDefault();

    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    canvas.addEventListener('contextmenu', onCtx);

    // Resize
    const onResize = () => {
      setCanvasSize();
      // Re-render current word at new size
      nextWord(WORDS[wordIdxRef.current], canvas);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousedown', onDown);
      canvas.removeEventListener('mouseup', onUp);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('contextmenu', onCtx);
      window.removeEventListener('resize', onResize);
    };
  }, [isDark, nextWord]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: isDark ? '#070707' : '#F0EBE0',
        overflow: 'hidden',
        padding: 'clamp(3rem, 6vw, 6rem) 0',
        transition: 'background 0.35s',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
        background: `linear-gradient(to right, transparent, ${colors.accent}40, transparent)`,
      }} />

      {/* Section label */}
      <div style={{
        display: 'flex', gap: '1rem', alignItems: 'center',
        justifyContent: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}>
        <div style={{
          width: 40, height: 1,
          background: `linear-gradient(to right, transparent, ${colors.accent})`,
        }} />
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.55rem',
          letterSpacing: '0.4em', textTransform: 'uppercase',
          color: colors.accent, opacity: 0.8,
        }}>
          INTERACTIVE · PARTICLE SYSTEM
        </span>
        <div style={{
          width: 40, height: 1,
          background: `linear-gradient(to left, transparent, ${colors.accent})`,
        }} />
      </div>

      {/* Canvas container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Glow behind canvas */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%', height: '80%',
          background: `radial-gradient(ellipse, ${colors.accent}08 0%, transparent 70%)`,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }} />

        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            background: isDark ? '#070707' : '#F0EBE0',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>

      {/* Instruction hint */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: '2rem', marginTop: 'clamp(1rem, 2vw, 1.5rem)',
        flexWrap: 'wrap', padding: '0 1rem',
      }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.55rem',
          letterSpacing: '0.15em', color: colors.muted,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: colors.accent, opacity: 0.6,
          }} />
          {('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 'TAP & DRAG TO SCATTER' : 'CLICK & DRAG TO SCATTER'}
        </span>
        {!('ontouchstart' in window) && navigator.maxTouchPoints === 0 && (
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.55rem',
            letterSpacing: '0.15em', color: colors.muted,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: colors.accentB, opacity: 0.6,
            }} />
            RIGHT-CLICK TO DESTROY
          </span>
        )}
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.55rem',
          letterSpacing: '0.15em', color: colors.muted,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: '#4ade80', opacity: 0.6,
          }} />
          AUTO-CYCLES EVERY ~8s
        </span>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '10%', right: '10%', height: 1,
        background: `linear-gradient(to right, transparent, ${colors.accent}40, transparent)`,
      }} />
    </section>
  );
};

export default ParticleText;
