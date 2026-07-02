import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Timeline = ({ phase, revealedSections }) => {
  const { colors, isDark } = useTheme();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const timelineData = [
    { yr: '2023', title: 'STARTED B.TECH CSE', sub: 'Maharishi University of Information Technology', body: 'Began the computer science journey. Laid down the fundamentals of programming and discovered a passion for building things from scratch.' },
    { yr: 'MAR 2025', title: 'FIRST GAME DEV', sub: 'flippy-Floppy & Library Management', body: 'Took the first major steps into interactive media, full-stack development, and raw JavaScript game logic.' },
    { yr: 'SEP 2025', title: 'THE BIG LEAP', sub: 'AI Code Generator & Horror Arena', body: 'Dove headfirst into AI-powered tools, browser extensions, and horror-themed interactive game development.' },
    { yr: 'DEC 2025', title: 'ENTERPRISE & SEC', sub: 'Rakshak-AI & DefenceX', body: 'Expanded into Python, computer vision, and robust full-stack architecture for cloud-security and defense analysis.' },
    { yr: 'MID 2026', title: 'VISION & IMMERSION', sub: 'FaceVault, SentinelAI & PortfolioV2', body: 'Pushing boundaries with advanced face detection models, React-based AI tools, and this exact 3D interactive portfolio.' }
  ];

  const yPositions = [15, 32.5, 50, 67.5, 85];

  const desktopPath = "M 50,0 L 50,5 L 90,5 L 90,15 L 50,15 L 50,22.5 L 10,22.5 L 10,32.5 L 50,32.5 L 50,40 L 90,40 L 90,50 L 50,50 L 50,57.5 L 10,57.5 L 10,67.5 L 50,67.5 L 50,75 L 90,75 L 90,85 L 50,85 L 50,100";
  const mobilePath = "M 15,0 L 15,100";

  /* ── Timeline Card Content (shared between desktop/mobile) ── */
  const TimelineCardContent = ({ item }) => (
    <div style={{ 
      border: `1px solid ${colors.accent}30`, 
      padding: isMobile ? 'clamp(1.2rem, 4vw, 1.8rem)' : '2rem', 
      background: isDark 
        ? `linear-gradient(135deg, ${colors.card} 0%, rgba(5,5,5,0.95) 100%)`
        : `linear-gradient(135deg, ${colors.card} 0%, rgba(240,240,240,0.95) 100%)`, 
      backdropFilter: 'blur(12px)',
      boxShadow: isDark 
        ? `0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)`
        : `0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)`,
      borderRadius: '16px',
      overflowWrap: 'break-word', 
      wordBreak: 'break-word' 
    }}>
      <div style={{ fontFamily: 'Bebas Neue', fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : '3rem', color: colors.accent, lineHeight: 1, textShadow: `0 0 20px ${colors.accent}40` }}>{item.yr}</div>
      <div style={{ fontFamily: 'Bebas Neue', fontSize: isMobile ? 'clamp(1.1rem, 4vw, 1.5rem)' : '1.5rem', color: colors.fg, marginTop: '0.8rem', letterSpacing: '0.05em' }}>{item.title}</div>
      <div style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: colors.muted, marginBottom: '0.8rem', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.sub}</div>
      <BlurText 
        text={item.body} 
        delay={20} 
        animateBy="words" 
        direction="top" 
        style={{ fontFamily: 'Outfit', fontSize: isMobile ? '0.82rem' : '0.9rem', lineHeight: 1.6, color: colors.muted, fontWeight: 300, margin: 0 }} 
      />
    </div>
  );

  /* ══════════════════════════════════════════════════════════════
     MOBILE LAYOUT — flow-based vertical timeline
     ══════════════════════════════════════════════════════════════ */
  if (isMobile) {
    return (
      <section id="timeline" data-section="timeline" style={{ padding: 'clamp(4rem,8vw,10rem) clamp(1rem,4vw,1.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Bebas Neue', fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>05</span>
            <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>TIMELINE</span>
          </div>

          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem,8vw,5rem)', color: colors.fg, margin: '0 0 3rem 0' }}>THE JOURNEY</h2>

          <div ref={containerRef} style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '0.6rem',
              width: '2px',
              height: '100%',
              background: `linear-gradient(to bottom, transparent, ${colors.accent}60 10%, ${colors.accentB || colors.accent}60 90%, transparent)`,
              zIndex: 0,
            }} />
            {/* Animated progress line */}
            <motion.div 
              style={{ 
                position: 'absolute',
                top: 0,
                left: '0.6rem',
                width: '2px',
                height: '100%',
                background: `linear-gradient(to bottom, ${colors.accent}, ${colors.accentB || colors.accent})`,
                transformOrigin: 'top',
                scaleY: smoothProgress,
                zIndex: 1,
                filter: `drop-shadow(0 0 6px ${colors.accent})`,
              }} 
            />

            {/* Cards in flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 6vw, 3rem)' }}>
              {timelineData.map((item, idx) => (
                <div key={item.title} style={{ position: 'relative' }}>
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      left: '-2.5rem',
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      backgroundColor: colors.bg,
                      border: `2px solid ${colors.accent}`,
                      boxShadow: `0 0 12px ${colors.accent}`,
                      zIndex: 5,
                      transform: 'translateX(calc(-50% + 0.6rem))',
                    }}
                  >
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 4, height: 4, borderRadius: '50%', backgroundColor: colors.accent }} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 20 }}
                  >
                    <TimelineCardContent item={item} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ══════════════════════════════════════════════════════════════
     DESKTOP LAYOUT — absolute positioned with SVG path (unchanged)
     ══════════════════════════════════════════════════════════════ */
  return (
    <section id="timeline" data-section="timeline" style={{ padding: 'clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <span style={{ fontFamily: 'Bebas Neue', fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>05</span>
          <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>TIMELINE</span>
        </div>

        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem,6vw,8rem)', color: colors.fg, margin: '0 0 6rem 0' }}>THE JOURNEY</h2>

        <div ref={containerRef} style={{ position: 'relative', height: '280vh', marginTop: '4rem' }}>
          
          <svg 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.accent} stopOpacity="0" />
                <stop offset="5%" stopColor={colors.accent} stopOpacity="1" />
                <stop offset="95%" stopColor={colors.accentB} stopOpacity="1" />
                <stop offset="100%" stopColor={colors.accentB} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d={desktopPath} 
              fill="none" 
              stroke={colors.border} 
              strokeWidth="0.15" 
              vectorEffect="non-scaling-stroke" 
              strokeDasharray="2 4" 
              strokeLinejoin="round"
            />
            
            <motion.path 
              d={desktopPath}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              style={{ pathLength: smoothProgress }}
              filter={`drop-shadow(0 0 6px ${colors.accent})`}
            />
          </svg>

          {timelineData.map((item, idx) => {
            const isRightCard = idx % 2 !== 0;
            const yPos = yPositions[idx];
            
            return (
              <React.Fragment key={item.title}>
                {/* Connecting Laser Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: `${yPos}%`,
                    left: isRightCard ? '10%' : '45%',
                    width: '45%',
                    height: '1px',
                    background: `linear-gradient(to ${isRightCard ? 'right' : 'left'}, ${colors.accent}, transparent)`,
                    opacity: 0.4,
                    transformOrigin: isRightCard ? 'left' : 'right',
                    zIndex: 1
                  }} 
                />

                {/* Tracking Dot on the Path */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    position: 'absolute', 
                    top: `${yPos}%`, 
                    left: isRightCard ? '10%' : '90%', 
                    transform: 'translate(-50%, -50%)', 
                    width: 14, height: 14, borderRadius: '50%', 
                    backgroundColor: colors.bg, 
                    border: `2px solid ${colors.accent}`,
                    boxShadow: `0 0 15px ${colors.accent}`,
                    zIndex: 20
                  }} 
                >
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 4, height: 4, borderRadius: '50%', backgroundColor: colors.accent }} />
                </motion.div>

                {/* 3D Holographic Card WRAPPER */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${yPos}%`, 
                  left: isRightCard ? '55%' : '10%', 
                  width: '35%', 
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  perspective: '1200px'
                }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.85, rotateX: 30, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
                  >
                    <TiltedCard 
                      containerHeight="auto" 
                      containerWidth="100%" 
                      imageHeight="auto" 
                      imageWidth="100%" 
                      rotateAmplitude={12} 
                      scaleOnHover={1.04} 
                      showTooltip={false}
                      showMobileWarning={false}
                    >
                      <TimelineCardContent item={item} />
                    </TiltedCard>
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
