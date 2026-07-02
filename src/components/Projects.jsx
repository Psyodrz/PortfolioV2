import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { StarIcon, ExternalLinkIcon } from './Icons';
import SpotlightCard from './SpotlightCard';
import GlitchText from './GlitchText';
import { PROJECTS_CONFIG } from '../config/siteMeta';

export const Projects = ({ repos, reposLoading, revealedSections }) => {
  const { colors, isDark } = useTheme();
  const [viewAllRepos, setViewAllRepos] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  React.useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
  }, []);

  return (
    <section id="work" data-section="work" style={{ padding:'clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)', background:isDark?'#070707':'#F0EBE0', position:'relative', zIndex:1 }}>
      <div className="container">
        <div style={{ display:'flex', gap:'1.5rem', alignItems:'center', marginBottom:'3rem' }}>
          <span style={{ fontFamily:'Bebas Neue', fontSize:'0.9rem', letterSpacing:'0.3em', color:colors.muted }}>03</span>
          <div style={{ width:60, height:1, backgroundColor:colors.border }} />
          <span style={{ fontFamily:'DM Mono', fontSize:'0.6rem', letterSpacing:'0.35em', color:colors.muted, textTransform:'uppercase' }}>SELECTED WORK</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'4rem', flexWrap:'wrap', gap:'1rem' }}>
          <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(3.5rem,7vw,9rem)', color:colors.fg, margin:0, lineHeight:0.9 }}>PROJECTS</h2>
          <div style={{ fontFamily:'DM Mono', color:colors.muted }}>({repos.featured.length + repos.rest.length})</div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem', flexWrap:'wrap', gap:'0.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
            <span style={{ fontFamily:'DM Mono', fontSize:'0.6rem', letterSpacing:'0.3em', color:colors.accent, textTransform:'uppercase' }}>Featured</span>
            <div style={{ width:40, height:1, backgroundColor:colors.accent }} />
          </div>
          <div style={{ display:'flex', border:`1px solid ${colors.border}`, borderRadius:4, overflow:'hidden' }}>
            <button onClick={()=>setViewAllRepos(false)} style={{ background:!viewAllRepos?colors.fg:'transparent', color:!viewAllRepos?colors.bg:colors.fg, border:'none', padding:'0.5rem 1rem', fontFamily:'DM Mono', fontSize:'0.6rem', cursor:'pointer', transition:'all 0.2s', minHeight:44 }}>Featured</button>
            <button onClick={()=>setViewAllRepos(true)}  style={{ background: viewAllRepos?colors.fg:'transparent', color: viewAllRepos?colors.bg:colors.fg, border:'none', padding:'0.5rem 1rem', fontFamily:'DM Mono', fontSize:'0.6rem', cursor:'pointer', transition:'all 0.2s', minHeight:44 }}>All</button>
          </div>
        </div>

        <div className="featured-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'5rem' }}>
          {repos.featured.map((repo, idx) => {
            const isFirst = idx === 0, isHovered = hoveredProject === idx;
            const tag    = PROJECTS_CONFIG.tags[idx] ?? 'OPEN SOURCE';
            const status = idx === PROJECTS_CONFIG.inProgressIdx ? 'IN PROGRESS' : 'LIVE';
            return (
              <SpotlightCard key={repo.name} spotlightColor={isDark?'rgba(255,61,0,0.12)':'rgba(255,61,0,0.07)'} onMouseEnter={()=>setHoveredProject(idx)} onMouseLeave={()=>setHoveredProject(null)} style={{ gridColumn:isFirst?'1 / -1':'auto', borderTop:`1px solid ${isHovered?'rgba(231,76,60,0.4)':colors.border}`, borderRight:`1px solid ${isHovered?'rgba(231,76,60,0.4)':colors.border}`, borderBottom:`1px solid ${isHovered?'rgba(231,76,60,0.4)':colors.border}`, borderLeft:isFirst?`4px solid ${colors.accent}`:`1px solid ${isHovered?'rgba(231,76,60,0.4)':colors.border}`, padding:isFirst?'2.5rem':'clamp(1.2rem,2vw,2rem)', background:colors.card, position:'relative', opacity:revealedSections.has('work')?1:0, transform:revealedSections.has('work')?'translateY(0)':'translateY(40px)', transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)', boxShadow:isHovered?'0 0 20px rgba(231,76,60,0.15)':'none' }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem' }}>
                  <div className="domain-tag" style={{ color:colors.accent }}>{tag} | {status}</div>
                </div>
                <div style={{ fontFamily:'Bebas Neue', fontSize:'clamp(4rem,15vw,8rem)', position:'absolute', right:'1.5rem', top:'0.5rem', color:colors.fg, opacity:0.05, pointerEvents:'none', zIndex:0 }}>00{idx+1}</div>
                <h3 style={{ fontFamily:'Bebas Neue', fontSize:isFirst?'clamp(2.5rem,6vw,7rem)':'clamp(1.8rem,5vw,2.4rem)', color:colors.fg, margin:'0 0 1rem 0', position:'relative', zIndex:1 }}>
                  {repo.name.toLowerCase().includes('horror')||repo.name.toLowerCase().includes('scifi') ? <GlitchText>{repo.name.replace(/-/g,' ')}</GlitchText> : repo.name.replace(/-/g,' ')}
                </h3>
                <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.5rem' }}>
                  {(repo.language ? [repo.language, ...(repo.topics || []).slice(0, 2)] : ['Code']).filter(Boolean).map((t,i)=>(
                    <span key={`${t}-${i}`} style={{ border:`1px solid ${colors.border}`, padding:'0.2rem 0.6rem', fontFamily:'DM Mono', fontSize:'0.6rem', color:colors.muted, borderRadius:50 }}>{t}</span>
                  ))}
                </div>
                <div style={{ overflow:'hidden', maxHeight:(isHovered||isTouchDevice)?'80px':'0px', opacity:(isHovered||isTouchDevice)?1:0, transform:(isHovered||isTouchDevice)?'translateY(0)':'translateY(8px)', transition:'max-height 0.3s ease, opacity 0.25s ease, transform 0.25s ease', marginBottom:(isHovered||isTouchDevice)?'2rem':'0' }}>
                  <p style={{ fontFamily:'DM Mono', fontSize:'0.75rem', color:'#aaa', margin:0, lineHeight:1.6, maxWidth:'80%' }}>{repo.description||'Awesome project building the future.'}</p>
                </div>
                <div style={{ display:'flex', gap:'1.5rem' }}>
                  {isFirst && <a href={repo.html_url} style={{ fontFamily:'DM Mono', fontSize:'0.65rem', color:colors.accent, textDecoration:'none', display:'flex', alignItems:'center', gap:'4px', minHeight:44 }}>VIEW LIVE <ExternalLinkIcon size={12} color={colors.accent} /></a>}
                  <a href={repo.html_url} style={{ fontFamily:'DM Mono', fontSize:'0.65rem', color:isFirst?colors.muted:colors.accent, textDecoration:'none', display:'flex', alignItems:'center', gap:'4px', minHeight:44 }}>GITHUB <ExternalLinkIcon size={12} color={isFirst?colors.muted:colors.accent} /></a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        <div style={{ display:viewAllRepos?'block':'none' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'2rem' }}>
            <span style={{ fontFamily:'DM Mono', fontSize:'0.6rem', letterSpacing:'0.3em', color:colors.muted, textTransform:'uppercase' }}>More Work</span>
            <div style={{ width:40, height:1, backgroundColor:colors.border }} />
            <span style={{ fontFamily:'DM Mono', color:colors.muted }}>({repos.rest.length} more repositories)</span>
          </div>
          <div style={{ background:isDark?'rgba(0,0,0,0.6)':'rgba(0,0,0,0.04)', border:`1px solid ${colors.border}`, padding:'2rem', borderRadius:6, opacity:revealedSections.has('work')?1:0, transition:'opacity 1s 0.8s' }}>
            <div style={{ display:'flex', justifyContent:'space-between', borderBottom:`1px solid ${colors.border}`, paddingBottom:'0.75rem', marginBottom:'1rem' }}>
              <div style={{ display:'flex', gap:'8px' }}>
                <div style={{ width:12, height:12, borderRadius:'50%', background:'#FF5F57' }} />
                <div style={{ width:12, height:12, borderRadius:'50%', background:'#FEBC2E' }} />
                <div style={{ width:12, height:12, borderRadius:'50%', background:'#28C840' }} />
              </div>
              <div style={{ fontFamily:'DM Mono', fontSize:'0.65rem', color:colors.muted }}>{PROJECTS_CONFIG.terminalPath}</div>
              <div style={{ width:52 }} />
            </div>
            {reposLoading && [...Array(6)].map((_,i)=>(
              <div key={i} style={{ width:'100%', height:'1.2rem', backgroundColor:colors.border, marginBottom:'0.5rem', animation:'pulse 1.5s ease-in-out infinite', animationDelay:`${i*100}ms` }} />
            ))}
            {!reposLoading && repos.rest.map((repo,idx)=>{
              const langColors={JavaScript:'#F1E05A',TypeScript:'#3178C6',Python:'#3572A5','C#':'#178600','C++':'#F34B7D'};
              return (
                <div key={repo.name} className="terminal-row" style={{ display:'grid', gridTemplateColumns:'35% 20% 15% 30%', padding:'0.5rem 0', borderBottom:`1px solid rgba(240,235,224,0.05)`, transition:'background 0.15s', animation:`fadeIn 0.4s ${idx*40}ms both` }} onMouseEnter={e=>e.currentTarget.style.backgroundColor='rgba(255,61,0,0.05)'} onMouseLeave={e=>e.currentTarget.style.backgroundColor='transparent'}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ fontFamily:'DM Mono', fontSize:'0.72rem', color:colors.fg, textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem', minHeight:44 }} onMouseEnter={e=>e.currentTarget.style.color=colors.accent} onMouseLeave={e=>e.currentTarget.style.color=colors.fg}><span style={{ color:colors.accent }}>$</span> {repo.name}</a>
                  <div style={{ fontFamily:'DM Mono', fontSize:'0.6rem', color:colors.muted, display:'flex', alignItems:'center', gap:'6px' }}><div style={{ width:8, height:8, borderRadius:'50%', backgroundColor:langColors[repo.language]||colors.muted }} /> {repo.language||'Unknown'}</div>
                  <div style={{ fontFamily:'DM Mono', fontSize:'0.6rem', color:colors.muted, display:'flex', alignItems:'center', gap:'4px' }}>{repo.stargazers_count>0?<><StarIcon size={10} color={colors.accent} /> {repo.stargazers_count}</>:''}</div>
                  <div className="terminal-desc" style={{ fontFamily:'DM Mono', fontSize:'0.58rem', color:colors.muted, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{repo.description||'—'}</div>
                </div>
              );
            })}
            <div style={{ marginTop:'2rem' }}>
              <a href={PROJECTS_CONFIG.githubUrl} target="_blank" rel="noreferrer" style={{ fontFamily:'DM Mono', fontSize:'0.65rem', color:colors.accent, textDecoration:'none', display:'flex', alignItems:'center', gap:'6px', minHeight:44 }} onMouseEnter={e=>e.currentTarget.style.textDecoration='underline'} onMouseLeave={e=>e.currentTarget.style.textDecoration='none'}>VIEW ALL ON GITHUB <ExternalLinkIcon size={12} color={colors.accent} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

