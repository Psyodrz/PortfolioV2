import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { GameIcon, AIIcon, WebIcon } from './Icons';
import { ScrollFloat } from './ReactBitsComponents';
import CountUp from './CountUp';
import BlurText from './BlurText';
import { ABOUT_STATS, BIO } from '../config/siteMeta';

export const About = ({ revealedSections }) => {
  const { colors } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCards = [
    { icon: <GameIcon size={24} />, title: 'Game Development', stack: 'Unity | Three.js | WebGL | C# | C++', count: '3 Projects', description: 'Building immersive 3D experiences with Unity, Three.js & WebGL. From physics engines to shader programming.' },
    { icon: <AIIcon size={24} />, title: 'AI & Machine Learning', stack: 'TensorFlow | Computer Vision | Python | JavaScript', count: '2 Projects', description: 'Developing computer vision pipelines, ML models, and AI-powered tools using TensorFlow and Python.' },
    { icon: <WebIcon size={24} />, title: 'Full-Stack + Mobile', stack: 'React | Next.js | Node.js | Ionic | Capacitor | TypeScript', count: '8+ Projects', description: 'End-to-end web and mobile apps with React, Next.js, Node.js, Ionic and Capacitor.' },
  ];

  return (
    <section id="about" data-section="about" style={{ minHeight:'100vh', padding:'clamp(6rem,10vw,12rem) clamp(1.5rem,5vw,5rem)' }}>
      <div className="container">
        <div style={{ display:'flex', gap:'1.5rem', alignItems:'center', marginBottom:'5rem' }}>
          <span style={{ fontFamily:'Bebas Neue', fontSize:'0.9rem', letterSpacing:'0.3em', color:colors.muted }}>01</span>
          <div style={{ width:60, height:1, backgroundColor:colors.border }} />
          <span style={{ fontFamily:'DM Mono', fontSize:'0.6rem', letterSpacing:'0.35em', color:colors.muted, textTransform:'uppercase' }}>ABOUT</span>
        </div>
        <div className="grid">
          <div className="sticky-col" style={{ position:'sticky', top:120, height:'fit-content' }}>
            <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(3rem,6vw,7rem)', lineHeight:0.9, color:colors.fg, margin:0 }}>
              WHO AM I
              <div style={{ height:2, backgroundColor:colors.accent, marginTop:'0.5rem', transformOrigin:'left', transform:revealedSections.has('about')?'scaleX(1)':'scaleX(0)', transition:'transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s', width:60 }} />
            </h2>
            <BlurText text={BIO.about} delay={30} animateBy="words" direction="top" style={{ fontFamily:'Outfit', fontSize:'0.92rem', lineHeight:1.8, fontWeight:300, color:colors.muted, marginTop:'2.5rem', width:'100%', maxWidth:'100%', display:'block', overflowWrap:'break-word' }} />
            <div style={{ borderLeft:`3px solid ${colors.accent}`, paddingLeft:'1.5rem', marginTop:'2rem' }}>
              <p style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.4rem,4vw,3rem)', lineHeight:1.2, color:colors.fg, margin:0, wordBreak:'break-word', whiteSpace:'normal', display:'block', width:'100%' }}>{BIO.quote}</p>
            </div>
            <div className="stats-container" style={{ display:'flex', gap:'2rem', marginTop:'3rem', flexWrap:'wrap' }}>
              {ABOUT_STATS.map((stat, idx) => (
                <div key={stat.lbl} className="stats-item" style={{ opacity:revealedSections.has('about')?1:0, transform:revealedSections.has('about')?'translateY(0)':'translateY(20px)', transition:`all 0.8s cubic-bezier(0.16,1,0.3,1) ${(idx*200)+300}ms` }}>
                  <div style={{ fontFamily:'Bebas Neue', fontSize:'clamp(2.5rem,4vw,4.5rem)', color:colors.accent, lineHeight:1 }}>
                    <CountUp end={stat.val} duration={1800} style={{ color:colors.accent }} /><span style={{ color:colors.fg, opacity:0.6 }}>+</span>
                  </div>
                  <div style={{ fontFamily:'DM Mono', fontSize:'0.55rem', letterSpacing:'0.2em', color:colors.muted, textTransform:'uppercase', marginTop:4 }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="marquee-container" style={{ overflow:'hidden', borderTop:`1px solid ${colors.border}`, borderBottom:`1px solid ${colors.border}`, padding:'0.5rem 0', display:'flex', whiteSpace:'nowrap' }}>
              <div style={{ fontFamily:'Bebas Neue', fontSize:'clamp(3rem,6vw,8rem)', color:colors.accent, opacity:0.15, animation:'marquee 20s linear infinite' }}>BUILDING | SHIPPING | CREATING | SOLVING | DESIGNING | GAMING | TRAINING | BUILDING | SHIPPING | CREATING | SOLVING | DESIGNING | GAMING | TRAINING | </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem', marginTop:'3rem' }}>
              {skillCards.map((cardInfo, idx) => {
                const isHovered = hoveredCard === idx;
                return (
                  <ScrollFloat key={cardInfo.title} amplitude={6} period={3} delay={idx*0.4}>
                    <div className="skill-card" tabIndex={0} onMouseEnter={()=>setHoveredCard(idx)} onMouseLeave={()=>setHoveredCard(null)} onFocus={()=>setHoveredCard(idx)} onBlur={()=>setHoveredCard(null)} style={{ border:`1px solid ${isHovered?'rgba(231,76,60,0.4)':colors.border}`, padding:'clamp(1.5rem,4vw,2.5rem)', paddingBottom:'5rem', background:colors.card, position:'relative', opacity:revealedSections.has('about')?1:0, transform:revealedSections.has('about')?'translateY(0)':'translateY(40px)', transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)', height:'auto', minHeight:'fit-content', boxShadow:isHovered?'0 0 20px rgba(231,76,60,0.3)':'none', outline:'none' }}>
                      <h3 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.4rem,3vw,2rem)', color:colors.fg, margin:'0 0 1rem 0', display:'flex', alignItems:'center', gap:'0.8rem', lineHeight:1.1 }}>{cardInfo.icon} {cardInfo.title}</h3>
                      <p style={{ fontFamily:'DM Mono', fontSize:'clamp(0.7rem,1.8vw,0.85rem)', color:colors.muted, margin:0, lineHeight:1.6 }}>{cardInfo.stack}</p>
                      <div style={{ fontFamily:'DM Mono', fontSize:'0.75rem', lineHeight:1.6, color:'#aaa', marginTop:'1rem', opacity:isHovered?1:0, transform:isHovered?'translateY(0)':'translateY(8px)', transition:'opacity 0.25s ease, transform 0.25s ease', pointerEvents:isHovered?'auto':'none' }}>{cardInfo.description}</div>
                      <div style={{ position:'absolute', bottom:'1.2rem', right:'1.2rem', fontFamily:'DM Mono', fontSize:'0.6rem', color:colors.accent, fontWeight:500, opacity:0.8 }}>{cardInfo.count}</div>
                    </div>
                  </ScrollFloat>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

