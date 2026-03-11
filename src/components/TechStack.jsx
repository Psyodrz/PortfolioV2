import React from 'react';
import { useTheme } from '../ThemeContext';
import { LogoLoop } from './LogoLoop';

export const TechStack = ({ revealedSections }) => {
  const { colors, isDark } = useTheme();

  return (
    <section id="stack" data-section="stack" style={{ padding: 'clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)', background: isDark ? '#070707' : '#F0EBE0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'Bebas Neue', fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>02</span>
          <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>TECH STACK</span>
        </div>

        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3.5rem,7vw,9rem)', color: colors.fg, margin: '0 0 4rem 0', lineHeight: 0.9 }}>
          <span style={{ color: 'transparent', WebkitTextStroke: `1px ${colors.fg}` }}>MY</span> <span style={{ color: colors.accent }}>ARSENAL</span>
        </h2>

        <LogoLoop
          logos={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Unity', 'C#', 'C++']}
          direction="left"
          speed={50}
          gap={20}
          style={{ marginBottom: '1.5rem', height: '44px' }}
          renderItem={(item) => (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${colors.border}`,
                padding: '0.4rem 1.1rem',
                fontFamily: 'DM Mono',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
                borderRadius: 50,
                color: colors.fg,
              }}
            >
              {item}
            </span>
          )}
        />

        <LogoLoop
          logos={['TensorFlow', 'Three.js', 'Ionic', 'Capacitor', 'Tailwind', 'Git', 'WebGL']}
          direction="right"
          speed={50}
          gap={20}
          style={{ marginBottom: '5rem', height: '44px' }}
          renderItem={(item) => (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${colors.border}`,
                padding: '0.4rem 1.1rem',
                fontFamily: 'DM Mono',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
                borderRadius: 50,
                color: colors.fg,
              }}
            >
              {item}
            </span>
          )}
        />

        <div style={{ width: '100%', maxWidth: 800 }}>
          {[
            { lbl: 'JavaScript / TypeScript', pct: 90 },
            { lbl: 'React / Next.js', pct: 85 },
            { lbl: 'Game Development', pct: 80 },
            { lbl: 'AI & Machine Learning', pct: 70 },
            { lbl: 'Mobile Development', pct: 65 }
          ].map((skill, idx) => (
            <div key={skill.lbl} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Mono', fontSize: '0.65rem', color: colors.fg, marginBottom: '0.4rem' }}>
                <span>{skill.lbl}</span>
                <span>{revealedSections.has('stack') ? skill.pct : 0}%</span>
              </div>
              <div style={{ width: '100%', height: 1, backgroundColor: colors.border, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: 1, background: `linear-gradient(to right, ${colors.accent}, ${colors.accentB})`, boxShadow: `0 0 8px rgba(255,61,0,0.5)`, width: `${skill.pct}%`, transformOrigin: 'left', transform: revealedSections.has('stack') ? 'scaleX(1)' : 'scaleX(0)', transition: `transform 1.2s cubic-bezier(0.16,1,0.3,1) ${(idx*120)+200}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
