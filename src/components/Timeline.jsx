import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';

export const Timeline = ({ phase, revealedSections }) => {
  const { colors } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (phase !== 'done') return;
    const onScroll = () => {
      const section = document.getElementById('timeline');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const vh = window.innerHeight;
      
      let p = (vh - top) / (height + vh);
      setScrollProgress(Math.max(0, Math.min(1, p * 1.5))); // speed modifier
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [phase]);

  return (
    <section id="timeline" data-section="timeline" style={{ padding: 'clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <span style={{ fontFamily: 'Bebas Neue', fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>04</span>
          <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>TIMELINE</span>
        </div>

        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem,6vw,8rem)', color: colors.fg, margin: '0 0 6rem 0' }}>THE JOURNEY</h2>

        <div style={{ position: 'relative' }}>
          {/* Center Line */}
          <div className="center-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, ${colors.accent}, ${colors.accentB}, transparent)`, transform: `scaleY(${scrollProgress})`, transformOrigin: 'top', transition: 'transform 0.1s linear' }} />

          {[
            { yr: '2023', title: 'STARTED B.TECH CSE', sub: 'Maharishi University of Information Technology · Lucknow', body: 'Began CS journey. First GitHub repos. Fell in love with game dev and building things from scratch.', dot: true },
            { yr: '2024', title: 'FIRST AI PROJECT', sub: 'Face Detection Mobile App', body: 'Built real-time face detection on mobile using Ionic + Capacitor + Computer Vision.', dot: false },
            { yr: '2024', title: 'AI CODE GENERATOR', sub: 'Chrome Browser Extension', body: 'Created AI-powered HackerRank solver extension using ML and browser APIs.', dot: false },
            { yr: '2025', title: 'SCI-FI PORTFOLIO', sub: 'psyodrz.github.io/psyodrz', body: 'Launched personal portfolio using Next.js, Three.js, TypeScript, and immersive WebGL effects.', dot: false },
            { yr: 'NOW', title: 'BUILDING ACROSS DOMAINS', sub: '21+ GitHub Repos · 4 Domains', body: 'Simultaneously shipping games, AI tools, web apps, and mobile experiences. Always building.', dot: true }
          ].map((item, idx) => {
            const isEven = idx % 2 !== 0;
            const alignment = isEven ? 'right' : 'left';
            const transformStart = isEven ? 'translateX(-40px)' : 'translateX(40px)';
            const marginArgs = isEven ? { marginRight: '56%' } : { marginLeft: '56%' };
            
            return (
              <div key={item.title} data-section={`time-${idx}`} className="timeline-entry" style={{ width: '44%', position: 'relative', marginBottom: '4rem', opacity: revealedSections.has(`time-${idx}`) ? 1 : 0, transform: revealedSections.has(`time-${idx}`) ? 'translateX(0)' : transformStart, transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)', ...marginArgs, textAlign: alignment }}>
                {item.dot && (
                  <div className="timeline-dot" style={{ position: 'absolute', top: '50%', [isEven ? 'right' : 'left']: '-13.5%', transform: 'translateY(-50%)', width: 10, height: 10, borderRadius: '50%', backgroundColor: colors.accent, boxShadow: `0 0 12px ${colors.accent}`, animation: item.yr === 'NOW' ? 'dotPulse 2s infinite' : '', zIndex: 10 }} />
                )}
                
                <TiltedCard 
                  containerHeight="auto" 
                  containerWidth="100%" 
                  imageHeight="auto" 
                  imageWidth="100%" 
                  rotateAmplitude={5} 
                  scaleOnHover={1.02} 
                  showTooltip={false}
                  showMobileWarning={false}
                >
                  <div style={{ border: `1px solid ${colors.border}`, padding: '1.5rem', background: colors.card, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.5rem', color: colors.accent, lineHeight: 1 }}>{item.yr}</div>
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', color: colors.fg, marginTop: '1rem' }}>{item.title}</div>
                    <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: colors.muted, marginBottom: '0.8rem', marginTop: '0.2rem' }}>{item.sub}</div>
                    <BlurText 
                      text={item.body} 
                      delay={30} 
                      animateBy="words" 
                      direction="top" 
                      style={{ fontFamily: 'Outfit', fontSize: '0.82rem', lineHeight: 1.7, color: colors.muted, fontWeight: 300, margin: 0 }} 
                    />
                  </div>
                </TiltedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
