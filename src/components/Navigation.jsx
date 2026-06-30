import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from './Icons';
import { IDENTITY } from '../config/siteMeta';

export const Navigation = () => {
  const { colors, theme, toggleTheme, isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const glassPanel = { background: colors.card, backdropFilter: 'blur(14px) saturate(1.4)', borderBottom: `1px solid ${colors.border}` };

  return (
    <>
      <nav style={{ ...glassPanel, position: 'fixed', top: 0, width: '100%', zIndex: 100, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 4vw, 3.5rem)', animation: 'navSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}>
        <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', display: 'flex', alignItems: 'center', letterSpacing: '0.05em' }}>
          <span style={{ color: colors.accent }}>A</span>
          <span style={{ color: colors.fg }}>DITYA</span>
          <span style={{ color: colors.fg, opacity: 0.3, margin: '0 0.4rem' }}>|</span>
          <span style={{ color: colors.fg, opacity: 0.4, fontSize: '1.4rem' }}>DEV</span>
        </div>

        <div className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Work', 'Stack', 'Contact'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => {
                e.preventDefault();
                window.lenis?.scrollTo(`#${link.toLowerCase()}`);
              }}
              style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.fg, opacity: 0.45, textDecoration: 'none', transition: 'all 0.2s' }} 
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = colors.accent; }} 
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.45; e.currentTarget.style.color = colors.fg; }}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a className="desktop-only" href={IDENTITY.githubUrl} target="_blank" rel="noreferrer" style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: colors.muted, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.1em' }} onMouseEnter={e => e.currentTarget.style.color = colors.fg} onMouseLeave={e => e.currentTarget.style.color = colors.muted}>GITHUB</a>
          <button onClick={toggleTheme} style={{ background: 'none', border: `1px solid ${colors.border}`, color: colors.fg, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s', borderRadius: '50%' }} onMouseEnter={e => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.backgroundColor = 'rgba(255,61,0,0.05)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            {isDark ? <SunIcon color={colors.accent} /> : <MoonIcon color={colors.accent} />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ height: '1.5px', width: 24, backgroundColor: colors.fg }} />
              <div style={{ height: '1.5px', width: 24, backgroundColor: colors.fg }} />
              <div style={{ height: '1.5px', width: 24, backgroundColor: colors.fg }} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div style={{ position: 'fixed', inset: 0, backgroundColor: colors.bg, zIndex: 1000, transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <button onClick={() => setMenuOpen(false)} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: colors.fg, fontSize: '2rem', cursor: 'pointer', fontFamily: 'Outfit' }}>✕</button>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', alignItems: 'flex-start' }}>
          {['About', 'Work', 'Stack', 'Contact'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                window.lenis?.scrollTo(`#${link.toLowerCase()}`);
              }} 
              style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 15vw, 5rem)', color: colors.fg, textDecoration: 'none' }}
            >
              {link}
            </a>
          ))}
          <a href={IDENTITY.githubUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'DM Mono', fontSize: '1.2rem', color: colors.accent, textDecoration: 'none', marginTop: '2rem', letterSpacing: '0.2em' }}>GITHUB</a>
        </div>
      </div>
    </>
  );
};
