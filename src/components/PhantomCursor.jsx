import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

export const PhantomCursor = () => {
  const { colors } = useTheme();
  const canvasRef = useRef(null);
  
  // A single ref for all mutable animation state to avoid re-renders
  const stateRef = useRef({
    x: -100,
    y: -100,
    lastX: -100,
    lastY: -100,
    velocity: 0,
    isIdle: true,
    idleTimer: null,
    globalOpacity: 0,
    ripples: []
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const s = stateRef.current;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const handleMove = (x, y) => {
      // First move initialization
      if (s.lastX === -100) {
        s.lastX = x;
        s.lastY = y;
      }
      
      const dx = x - s.lastX;
      const dy = y - s.lastY;
      s.velocity = Math.sqrt(dx * dx + dy * dy);
      
      s.x = x;
      s.y = y;
      s.lastX = x;
      s.lastY = y;
      
      s.isIdle = false;
      
      clearTimeout(s.idleTimer);
      // Fades out 0.6s after stopping
      s.idleTimer = setTimeout(() => {
        s.isIdle = true;
      }, 600);

      // Spawn ripple roughly every frame if moving fast enough
      if (s.velocity > 2) {
        s.ripples.push({
          x: s.x,
          y: s.y,
          radius: 3,
          maxRadius: 15 + s.velocity * 1.5,
          alpha: Math.min(s.velocity * 0.05, 0.6), // Velocity-based opacity
          decay: 0.02 + Math.random() * 0.015
        });
        
        // Cap max ripples to prevent lag
        if (s.ripples.length > 25) {
          s.ripples.shift();
        }
      }
    };

    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    let rafId;
    const render = () => {
      // Smoothly adjust overall global opacity (fade in on move, fade out 0.6s after stop)
      const targetOpacity = s.isIdle ? 0 : 1;
      s.globalOpacity += (targetOpacity - s.globalOpacity) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only draw if there's something to see
      if (s.globalOpacity > 0.01 || s.ripples.length > 0) {
        ctx.save();
        ctx.globalAlpha = s.globalOpacity;

        // Render expanding ripple rings
        for (let i = s.ripples.length - 1; i >= 0; i--) {
          const r = s.ripples[i];
          r.radius += (r.maxRadius - r.radius) * 0.1;
          r.alpha -= r.decay;

          if (r.alpha <= 0) {
            s.ripples.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 61, 0, ${r.alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Center dot: 3px accent color #FF3D00, always visible 
        // when global opacity is up (mouse recently moved)
        if (s.x !== -100) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2); // 1.5 radius = 3px diameter
          ctx.fillStyle = '#FF3D00';
          ctx.fill();
        }

        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      clearTimeout(s.idleTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    />
  );
};
