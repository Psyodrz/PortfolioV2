import React, { useMemo } from 'react';

/* ═══════════════════════════════════════════════════════════
   SCROLL FLOAT — Gentle floating animation on scroll
   ═══════════════════════════════════════════════════════════ */
export const ScrollFloat = ({
  children,
  amplitude = 6,
  period = 3,
  delay = 0,
  className = '',
  style = {},
}) => {
  const floatId = useMemo(
    () => `float-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  const keyframes = `
    @keyframes ${floatId} {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-${amplitude}px); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className={className}
        style={{
          animation: `${floatId} ${period}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

/* ═══════════════════════════════════════════════════════════
   NOISE CARD — Subtle noise texture background card
   ═══════════════════════════════════════════════════════════ */
export const NoiseCard = ({
  children,
  className = '',
  style = {},
  noiseOpacity = 0.03,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: noiseOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};
