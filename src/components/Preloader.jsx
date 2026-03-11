import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

export const Preloader = ({ phase, setPhase }) => {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (phase !== 'counting') return;
    let startTime = null;
    let rafId;
    const duration = 2600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const t = progress;
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const nextCount = Math.floor(ease * 100);
      setCount(nextCount);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(100);
        setPhase('hold');
        setTimeout(() => setPhase('exit'), 700);
        setTimeout(() => setPhase('done'), 1300);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [phase, setPhase]);

  if (phase === 'done') return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#070707', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)', transform: phase === 'exit' ? 'translateY(-100%)' : 'translateY(0)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(255,61,0,0.06) 0%, transparent 65%)', animation: 'accentPulse 2s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent 3px, rgba(240,235,224,0.012) 3px, rgba(240,235,224,0.012) 4px)' }} />

      <div style={{ zIndex: 2, position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', padding: '2rem 3rem', position: 'absolute', top: '-40vh', left: 0, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ height: '1.5px', width: 24, backgroundColor: colors.accent, animation: 'barExpand 1s ease-out forwards' }} />
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: 'rgba(240,235,224,0.30)', textTransform: 'uppercase' }}>Portfolio | 2025</span>
          </div>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: 'rgba(240,235,224,0.25)', textTransform: 'uppercase' }}>Aditya Srivastava</span>
        </div>

        <div style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(130px, 34vw, 520px)', lineHeight: 0.82, color: '#F0EBE0', letterSpacing: '-0.025em' }}>
          {count.toString().padStart(3, '0')}
        </div>
        
        <div style={{ width: '34vw', height: '1px', background: `linear-gradient(to right, transparent, ${colors.accent}, transparent)`, opacity: count > 10 ? 1 : 0, transition: 'opacity 0.3s', marginTop: '1rem' }} />

        <div style={{ width: '100%', padding: '2rem 3rem', position: 'absolute', bottom: '-40vh', left: 0, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.58rem', color: 'rgba(240,235,224,0.28)', textTransform: 'uppercase' }}>Initializing Experience</span>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.58rem', color: 'rgba(240,235,224,0.28)' }}>{count}%</span>
        </div>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '55%', transform: 'translate(-50%, -50%)', fontFamily: 'Bebas Neue', fontSize: 'clamp(6rem, 20vw, 28rem)', color: '#F0EBE0', opacity: 0.03, pointerEvents: 'none', userSelect: 'none' }}>PSYODRZ</div>
      
      <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, backgroundColor: colors.accent, width: `${count}%`, transition: 'width 0.05s linear', boxShadow: `0 0 12px ${colors.accent}, 0 0 24px rgba(255,61,0,0.4)` }} />
    </div>
  );
};
