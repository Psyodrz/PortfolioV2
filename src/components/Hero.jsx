import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import DecryptedText from './DecryptedText';
import Magnet from './Magnet';
import { IDENTITY, ROLES, BIO, HERO_STATS } from '../config/siteMeta';

export const Hero = ({ phase }) => {
  const { colors, isDark } = useTheme();
  const canvasRef       = useRef(null);
  const canvasRafRef    = useRef(null);
  const beamIntervalRef = useRef(null);
  const [roleIdx, setRoleIdx]         = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    if (phase !== 'done') return;
    const interval = setInterval(() => {
      setRoleVisible(false);
      const switchId = setTimeout(() => {
        setRoleIdx(prev => (prev + 1) % ROLES.length);
        setRoleVisible(true);
      }, 300);
      return () => clearTimeout(switchId);
    }, 2800);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'done') return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let W, H;
    const resize = () => { W = c.offsetWidth; H = c.offsetHeight; c.width = W; c.height = H; };
    window.addEventListener('resize', resize);
    resize();

    const N = window.innerWidth > 768 ? 70 : 35;
    const MAX_DIST = window.innerWidth > 768 ? 170 : 130;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * (W || 800), y: Math.random() * (H || 600),
      vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.4, pulse: Math.random() * Math.PI * 2,
    }));

    const beams = [];
    beamIntervalRef.current = setInterval(() => {
      const fromLeft = Math.random() > 0.5;
      beams.push({
        x: fromLeft ? 0 : W, y: Math.random() * H,
        angle: fromLeft ? (Math.random()*0.4-0.2) : (Math.PI+Math.random()*0.4-0.2),
        length: 100 + Math.random() * 120, life: 1.0,
        decay: 0.008 + Math.random() * 0.006, speed: 2.5 + Math.random() * 3,
        color: Math.random() > 0.3 ? '255,61,0' : (isDark ? '255,214,0' : '230,168,0'),
      });
    }, 1800);

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(${isDark?'240,235,224':'7,7,7'}, ${(1-dist/MAX_DIST)*0.14})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }
      for (let i = beams.length-1; i >= 0; i--) {
        const b = beams[i];
        b.x += Math.cos(b.angle)*b.speed; b.y += Math.sin(b.angle)*b.speed; b.life -= b.decay;
        if (b.life <= 0) { beams.splice(i,1); continue; }
        const grad = ctx.createLinearGradient(b.x, b.y, b.x-Math.cos(b.angle)*b.length, b.y-Math.sin(b.angle)*b.length);
        grad.addColorStop(0, `rgba(${b.color},0)`); grad.addColorStop(0.4, `rgba(${b.color},${b.life*0.6})`); grad.addColorStop(1, `rgba(${b.color},0)`);
        ctx.strokeStyle = grad; ctx.lineWidth = b.life*1.5; ctx.shadowColor = `rgba(${b.color},0.8)`; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.moveTo(b.x,b.y); ctx.lineTo(b.x-Math.cos(b.angle)*b.length, b.y-Math.sin(b.angle)*b.length); ctx.stroke();
        ctx.shadowBlur = 0;
      }
      for (let i = 0; i < N; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        p.pulse += 0.04;
        ctx.fillStyle = `rgba(255,61,0,${0.35+Math.sin(p.pulse)*0.15})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
      }
      canvasRafRef.current = requestAnimationFrame(render);
    };
    render();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(canvasRafRef.current); clearInterval(beamIntervalRef.current); };
  }, [phase, isDark]);

  if (phase !== 'done') return null;

  return (
    <section id="hero" style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingTop:'90px', paddingBottom:'clamp(3rem,6vw,7rem)', paddingLeft:'clamp(1.5rem,5vw,5rem)', paddingRight:'clamp(1.5rem,5vw,5rem)', overflow:'hidden' }}>
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0 }} />
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top, ${colors.bg} 10%, transparent 96%)`, zIndex:1, pointerEvents:'none' }} />
      <div className="bg-text" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-45%,-50%)', fontFamily:'Bebas Neue', fontSize:'clamp(8rem,28vw,34rem)', color:isDark?'rgba(240,235,224,0.025)':'rgba(7,7,7,0.03)', pointerEvents:'none', userSelect:'none', zIndex:1 }}>{IDENTITY.backgroundText}</div>
      <div className="vertical-side-text" style={{ position:'absolute', right:'2rem', top:'50%', transform:'translateY(-50%) rotate(90deg)', fontFamily:'DM Mono', fontSize:'0.55rem', letterSpacing:'0.4em', color:colors.muted, whiteSpace:'nowrap', zIndex:3 }}>{IDENTITY.location.toUpperCase()} | {IDENTITY.availability.toUpperCase()}</div>

      <div className="container" style={{ zIndex:4 }}>
        <div style={{ display:'flex', gap:'1rem', marginBottom:'1.8rem', animation:'fadeIn 0.8s 0.6s both' }}>
          <div style={{ width:44, height:2, backgroundColor:colors.accent, boxShadow:`0 0 8px ${colors.accent}`, alignSelf:'center' }} />
          <span style={{ fontFamily:'DM Mono', fontSize:'0.62rem', color:colors.muted, letterSpacing:'0.1em' }}>{IDENTITY.education}</span>
        </div>

        <div className="hero-center-group" style={{ position:'relative' }}>
          <div className="hero-avatar" style={{ position:'absolute', top:'-clamp(10rem,28vw,40rem)', right:'clamp(0em,5vw,10%)', width:'clamp(10rem,35vw,42rem)', zIndex:5, pointerEvents:'none', animation:'fadeIn 1s 1.2s both, avatarFloat 6s ease-in-out infinite' }}>
            <img src={`${import.meta.env.BASE_URL}avatar.png`} alt={`${IDENTITY.fullName} Avatar`} style={{ width:'100%', height:'auto', filter:'drop-shadow(0 30px 45px rgba(0,0,0,0.6))' }} />
          </div>
          <div style={{ overflow:'hidden' }}>
            <div className="name-line" style={{ fontFamily:'Bebas Neue', fontSize:'clamp(4.5rem,14vw,16rem)', lineHeight:0.85, letterSpacing:'-0.015em', color:colors.fg, animation:'slideUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
              <DecryptedText text={IDENTITY.firstName} speed={40} maxIterations={14} animateOn="mount" />
            </div>
          </div>
          <div style={{ overflow:'hidden', marginBottom:'2.5rem' }}>
            <div className="name-line" style={{ fontFamily:'Bebas Neue', fontSize:'clamp(4.5rem,14vw,16rem)', lineHeight:0.85, letterSpacing:'-0.015em', color:'transparent', WebkitTextStroke:`2px ${colors.fg}`, animation:'slideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>
              <DecryptedText text={IDENTITY.lastName} speed={40} maxIterations={16} animateOn="mount" />
            </div>
          </div>
        </div>

        <div className="stats-row" style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:'2rem', animation:'fadeIn 0.8s 0.85s both', justifyContent:'center' }}>
          <div style={{ maxWidth:420 }}>
            <div style={{ height:'1.2rem', overflow:'hidden', display:'flex', gap:'0.75rem', marginBottom:'0.8rem', alignItems:'center' }}>
              <div style={{ width:6, height:6, backgroundColor:colors.accent, borderRadius:'50%', boxShadow:`0 0 6px ${colors.accent}` }} />
              {roleVisible && <span style={{ fontFamily:'DM Mono', fontSize:'0.72rem', letterSpacing:'0.28em', textTransform:'uppercase', color:colors.accent, animation:'roleIn 0.3s ease-out' }}>{ROLES[roleIdx]}</span>}
            </div>
            <p style={{ fontFamily:'Outfit', fontSize:'0.82rem', lineHeight:1.7, color:colors.muted, fontWeight:300, margin:0 }}>{BIO.hero}</p>
            <div className="cta-buttons" style={{ display:'flex', gap:'1rem', marginTop:'1.5rem' }}>
              <Magnet padding={80} magnetStrength={3} wrapperClassName="cta-magnet-wrap" innerClassName="cta-magnet-inner">
                <a href="#work" style={{ backgroundColor:colors.accent, color:'#FFF', padding:'0.65rem 1.4rem', fontFamily:'DM Mono', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none', display:'inline-block', transition:'transform 0.2s, box-shadow 0.2s', border:`1px solid ${colors.accent}` }} onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 8px 24px rgba(255,61,0,0.4)';}} onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';}}>VIEW WORK</a>
              </Magnet>
              <Magnet padding={80} magnetStrength={3} wrapperClassName="cta-magnet-wrap" innerClassName="cta-magnet-inner">
                <a href={IDENTITY.githubUrl} target="_blank" rel="noreferrer" style={{ background:'none', border:`1px solid ${colors.border}`, color:colors.fg, padding:'0.65rem 1.4rem', fontFamily:'DM Mono', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none', display:'inline-block', transition:'all 0.2s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor=colors.fg;e.currentTarget.style.backgroundColor=colors.card;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=colors.border;e.currentTarget.style.backgroundColor='transparent';}}>GITHUB</a>
              </Magnet>
            </div>
          </div>
          <div style={{ display:'flex', gap:'2.5rem', textAlign:'right' }}>
            {HERO_STATS.map(stat => (
              <div key={stat.lbl}>
                <div style={{ fontFamily:'Bebas Neue', fontSize:'2.2rem', lineHeight:1 }}>{stat.val}</div>
                <div style={{ fontFamily:'DM Mono', fontSize:'0.55rem', letterSpacing:'0.25em', textTransform:'uppercase', color:colors.muted, marginTop:4 }}>{stat.lbl}</div>
              </div>
            ))}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', marginLeft:'1rem' }}>
              <div style={{ width:1, height:55, background:`linear-gradient(to bottom, ${colors.fg}, transparent)`, animation:'scrollDrop 2.2s ease-in-out infinite' }} />
              <span style={{ fontFamily:'DM Mono', fontSize:'0.5rem', letterSpacing:'0.3em', color:colors.muted, writingMode:'vertical-lr' }}>SCROLL</span>
            </div>
          </div>
        </div>
        <div style={{ position:'absolute', bottom:'-clamp(3rem,6vw,7rem)', left:'-clamp(1.5rem,5vw,5rem)', right:'-clamp(1.5rem,5vw,5rem)', height:1, background:`linear-gradient(to right, transparent 0%, ${colors.accent} 30%, ${colors.accentB} 70%, transparent 100%)`, opacity:0.6 }} />
      </div>
    </section>
  );
};

export default Hero;

