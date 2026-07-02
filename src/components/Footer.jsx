import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { IDENTITY } from '../config/siteMeta';

export const Footer = () => {
  const { colors } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Mobile: simple static footer ── */
  if (isMobile) {
    return (
      <footer id="footer" style={{ position: 'relative', padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div className="footer-title" style={{ textAlign: 'center', fontFamily: 'Bebas Neue', fontSize: 'clamp(4rem, 20vw, 10rem)', color: colors.fg, lineHeight: 0.85, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>PSY</span>
          <div style={{ width: 'clamp(2rem, 10vw, 5rem)', height: 'clamp(2rem, 10vw, 5rem)', borderRadius: '50%', border: `clamp(4px, 1.5vw, 12px) solid ${colors.fg}`, margin: '0 clamp(0.3rem, 1.5vw, 1rem)' }} />
          <span>DRZ</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', color: colors.muted, textTransform: 'uppercase' }}>© {new Date().getFullYear()} {IDENTITY.fullName.toUpperCase()}</div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', color: colors.muted, textTransform: 'uppercase' }}>{IDENTITY.location.toUpperCase()}</div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', color: colors.muted, textTransform: 'uppercase' }}>DESIGNED & ENGINEERED FROM SCRATCH</div>
        </div>
      </footer>
    );
  }

  /* ── Desktop: full-viewport sticky reveal ── */
  return (
    <footer id="footer" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', overflow: 'hidden', clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className="footer-content" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '2rem' }}>
        <div className="footer-title" style={{ width: '100%', textAlign: 'center', fontFamily: 'Bebas Neue', fontSize: 'clamp(6rem, 25vw, 32rem)', color: colors.fg, lineHeight: 0.8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <span>PSY</span>
            <div style={{ width: 'clamp(3rem, 12vw, 15rem)', height: 'clamp(3rem, 12vw, 15rem)', borderRadius: '50%', border: `clamp(6px, 2vw, 24px) solid ${colors.fg}`, margin: '0 clamp(0.5rem, 2vw, 2rem)' }} />
            <span>DRZ</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 clamp(1rem, 4vw, 3rem)', marginTop: '2rem' }}>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: colors.muted, textTransform: 'uppercase' }}>© {new Date().getFullYear()} {IDENTITY.fullName.toUpperCase()}</div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: colors.muted, textTransform: 'uppercase' }}>{IDENTITY.location.toUpperCase()}</div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: colors.muted, textTransform: 'uppercase' }}>DESIGNED & ENGINEERED FROM SCRATCH</div>
        </div>
      </div>
      
      {/* Spacer to push content down and reveal fixed background */}
      <div style={{ flex: 1 }} />
    </footer>
  );
};
