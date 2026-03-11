import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { CheckIcon, ExternalLinkIcon } from './Icons';
import Magnet from './Magnet';
import BlurText from './BlurText';


export const Contact = () => {
  const { colors } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  return (
    <section id="contact" data-section="contact" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, transparent 10%, ${colors.bg} 90%), linear-gradient(to top, transparent 60%, ${colors.bg} 100%)`, zIndex: 1, pointerEvents: 'none' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'Bebas Neue', fontSize: '0.9rem', letterSpacing: '0.3em', color: colors.muted }}>05</span>
          <div style={{ width: 60, height: 1, backgroundColor: colors.border }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.35em', color: colors.muted, textTransform: 'uppercase' }}>CONTACT</span>
        </div>

        <div style={{ paddingTop: '15px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(4rem,11vw,14rem)', lineHeight: 1.1, margin: 0, animation: 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both' }}>
            <span style={{ color: colors.fg }}>LET'S </span>  
            <span style={{ color: 'transparent', WebkitTextStroke: `2px ${colors.fg}` }}>BUILD</span>
          </h2>
        </div>
        <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(2rem,5vw,6rem)', color: colors.accent, marginBottom: '3rem', margin: '0.5rem 0 0 0' }}>SOMETHING AMAZING TOGETHER</h3>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <BlurText
              text="I'm always excited to collaborate on innovative projects, contribute to open-source, or discuss the latest in tech and game development. Whether you need a full-stack developer, a game dev, or an AI engineer — I'd love to connect."
              delay={30}
              animateBy="words"
              direction="top"
              style={{ fontFamily: 'Outfit', fontSize: '0.9rem', lineHeight: 1.8, color: colors.muted, margin: '0 0 2rem 0' }}
            />

            <div style={{ position: 'relative', marginTop: '2rem' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.3em', color: colors.muted, marginBottom: '0.5rem' }}>REACH ME AT</div>
              <div 
                style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', color: colors.fg, cursor: 'pointer', transition: 'color 0.2s' }} 
                onClick={() => { navigator.clipboard.writeText('Adisrivastav23@gmail.com'); setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 2000); }}
                onMouseEnter={e => e.currentTarget.style.color = colors.accent}
                onMouseLeave={e => e.currentTarget.style.color = colors.fg}
              >
                Adisrivastav23@gmail.com
              </div>
              {copiedEmail && (
                <div style={{ position: 'absolute', top: -20, left: 0, color: colors.accent, fontFamily: 'DM Mono', fontSize: '0.6rem', animation: 'fadeIn 0.2s both', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckIcon size={10} color={colors.accent} /> COPIED</div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { name: 'GitHub', url: 'https://github.com/Psyodrz' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-srivastava/' },
                { name: 'Portfolio', url: 'https://psyodrz.github.io/psyodrz/' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: colors.muted, textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center', gap: '4px', minHeight: 44, minWidth: 44 }} onMouseEnter={e => { e.currentTarget.style.color = colors.fg; e.currentTarget.style.textDecoration = 'underline'; }} onMouseLeave={e => { e.currentTarget.style.color = colors.muted; e.currentTarget.style.textDecoration = 'none'; }}>
                  {social.name} <ExternalLinkIcon size={10} color={colors.muted} />
                </a>
              ))}
            </div>
          </div>

          <div>
            {formSent ? (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue', fontSize: '2rem', color: colors.accent }}>
                MESSAGE SENT
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {['Name', 'Email', 'Subject'].map(field => (
                  <div key={field} style={{ position: 'relative', borderBottom: `1px solid ${colors.border}`, padding: '0.75rem 0' }} className="form-group">
                    <input type={field === 'Email' ? 'email' : 'text'} required placeholder={field} style={{ background: 'none', border: 'none', outline: 'none', color: colors.fg, width: '100%', fontFamily: 'Outfit', fontSize: '0.9rem', minHeight: 44 }} />
                  </div>
                ))}
                <div style={{ position: 'relative', borderBottom: `1px solid ${colors.border}`, padding: '0.75rem 0' }}>
                  <textarea required placeholder="Message" rows={4} style={{ background: 'none', border: 'none', outline: 'none', color: colors.fg, width: '100%', fontFamily: 'Outfit', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
                <Magnet padding={80} magnetStrength={3} wrapperClassName="submit-magnet-wrap" innerClassName="submit-magnet-inner" style={{ width: '100%', display: 'block' }}>
                  <button type="submit" style={{ width: '100%', marginTop: '1rem', background: colors.accent, color: '#FFF', padding: '1rem', fontFamily: 'Bebas Neue', fontSize: '1.1rem', letterSpacing: '0.15em', border: 'none', cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)', minHeight: 48 }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.accentB; e.currentTarget.style.color = '#070707'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = colors.accent; e.currentTarget.style.color = '#FFF'; }} onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'} onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
                    SEND MESSAGE
                  </button>
                </Magnet>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
