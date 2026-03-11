import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';

export const CustomCursor = () => {
  const { colors } = useTheme();
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    let dotX = window.innerWidth / 2, dotY = window.innerHeight / 2;
    let ringX = dotX, ringY = dotY;
    let isHovering = false;
    let rafId;

    const move = (e) => { dotX = e.clientX; dotY = e.clientY; };
    const hoverOn = () => { isHovering = true; };
    const hoverOff = () => { isHovering = false; };

    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseover', (e) => {
      if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        hoverOn();
      }
    });
    document.documentElement.addEventListener('mouseout', (e) => {
      if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        hoverOff();
      }
    });

    const loop = () => {
      ringX += (dotX - ringX) * 0.09;
      ringY += (dotY - ringY) * 0.09;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovering ? 2.5 : 1})`;
        ringRef.current.style.opacity = isHovering ? '0.3' : '1';
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="desktop-only" ref={dotRef} style={{ position: 'fixed', top: 0, left: 0, width: 6, height: 6, backgroundColor: colors.accent, borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', transition: 'none' }} />
      <div className="desktop-only" ref={ringRef} style={{ position: 'fixed', top: -18, left: -18, width: 36, height: 36, border: `1px solid ${colors.fg}`, borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transition: 'transform 0.1s, opacity 0.2s', mixBlendMode: 'difference' }} />
    </>
  );
};
