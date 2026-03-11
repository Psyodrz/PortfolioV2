import React from 'react';
import { useTheme } from '../ThemeContext';

export const GlobalStyles = () => {
  const { colors, isDark } = useTheme();

const globalCss = `
html.lenis, html.lenis-scrolling { scroll-behavior: auto !important; }
.lenis.lenis-smooth { height: auto; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }

html { scroll-behavior: smooth; cursor: none !important; overflow-x: hidden; }
body { 
  margin: 0; 
  padding: 0; 
  font-family: 'Outfit', sans-serif; 
  overflow-x: hidden; 
  background-color: ${colors.bg}; 
  background-image: 
    radial-gradient(ellipse at 20% 50%, rgba(255, 61, 0, 0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(255, 214, 0, 0.02) 0%, transparent 50%);
  color: ${colors.fg}; 
  transition: background-color 0.35s, color 0.35s; 
  cursor: none !important; 
  width: 100%;
}
* { box-sizing: border-box; cursor: none !important; }
.container { max-width: 1400px; margin: 0 auto; width: 100%; position: relative; padding: 0 16px; }
#about .grid { display: grid; grid-template-columns: 45% 55%; gap: 4rem; width: 100%; overflow: hidden; }
#about .grid > * { min-width: 0; overflow: hidden; }

::-webkit-scrollbar { width: 2px; }
::-webkit-scrollbar-thumb { background: ${colors.accent}; }
::-webkit-scrollbar-track { background: ${colors.bg}; }

@keyframes slideUp { from { transform: translateY(105%); } to { transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes revealUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scrollDrop { 0% { transform: scaleY(0); transform-origin: top; opacity: 1; } 45% { transform: scaleY(1); transform-origin: top; opacity: 1; } 55% { transform: scaleY(1); transform-origin: bottom; opacity: 1; } 100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; } }
@keyframes roleIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes roleOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-6px); } }
@keyframes accentPulse { 0%,100% { opacity: 0.06; } 50% { opacity: 0.14; } }
@keyframes navSlide { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes barExpand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.7; } }
@keyframes dotPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,61,0,0.4); } 50% { box-shadow: 0 0 0 6px rgba(255,61,0,0); } }
@keyframes avatarFloat { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1deg); } }

/* ===== TABLET (≤1024px) ===== */
@media (max-width: 1024px) {
  #work .featured-grid { gap: 1rem !important; }
  #contact .contact-grid { gap: 2.5rem !important; }
  #contact .laser-flow-layer { display: none !important; }

  /* Timeline */
  #timeline { padding-left: 1rem !important; padding-right: 1rem !important; overflow-x: hidden !important; }
  #timeline .center-line { left: 1rem !important; }
  #timeline .timeline-entry { 
    width: auto !important; 
    max-width: 100% !important; 
    margin-left: 1.5rem !important; 
    margin-right: 0 !important; 
    text-align: left !important; 
    transform: translateX(0) !important;
  }
  #timeline .timeline-dot { 
    left: calc(-0.5rem - 5px) !important; 
    right: auto !important; 
  }
}

/* ===== MOBILE (≤767px) ===== */
@media (max-width: 767px) {
  .desktop-only { display: none !important; }
  
  /* Hero */
  #hero { padding-top: 100px !important; }
  #hero .vertical-side-text { display: none; }
  
  /* 1. Make the hero section a single stacking context */
  #hero .hero-center-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative !important;
  }
  
  /* 2. The name text on mobile must be: relative, z-index 1, margin-bottom -120px */
  #hero .name-line { 
    font-size: clamp(3.2rem, 15vw, 8rem) !important; 
    text-align: center; 
    position: relative !important; 
    z-index: 1 !important; 
    margin-bottom: -120px !important;
  }
  
  /* 3. Hero image wrapper */
  #hero .hero-avatar { 
    position: relative !important;
    z-index: 2 !important;
    text-align: center !important;
    width: clamp(220px, 60vw, 300px) !important;
    margin: 0 auto !important;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    opacity: 1 !important;
  }
  
  /* 4. Hero image */
  #hero .hero-avatar img {
    width: 100% !important;
    display: block !important;
    margin: 0 auto !important;
    object-fit: cover !important;
    object-position: top !important;
  }
  
  #hero .cta-buttons { flex-direction: column; width: 100%; align-items: stretch; margin-top: 1.5rem; }
  #hero .cta-buttons > * { width: 100%; }
  #hero .cta-buttons a { min-height: 48px; display: flex; align-items: center; justify-content: center; text-align: center; }
  #hero .stats-row { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem; width: 100%; }
  #hero .stats-row > div:last-child { justify-content: center; width: 100%; margin-top: 2rem; }
  #hero .bg-text { 
    font-size: clamp(5rem, 25vw, 15rem) !important; 
    transform: translate(-50%, -50%) !important; 
    left: 50% !important; 
    top: 40% !important; 
    opacity: 0.04 !important; 
  }
  
  /* About */
  #about .grid { display: grid; grid-template-columns: 1fr !important; gap: 2.5rem !important; width: 100% !important; overflow: hidden; }
  #about .grid > * { min-width: 0 !important; overflow: hidden; }
  #about .sticky-col { position: static !important; width: 100% !important; max-width: 100% !important; padding-right: 0 !important; overflow-wrap: break-word; }
  #about .stats-container { justify-content: space-between !important; gap: 1.5rem !important; }
  #about .stats-item { width: calc(50% - 1rem); }
  #about .skill-card { padding-bottom: 3.5rem !important; }
  
  /* Tech Stack */
  #stack .logo-loop-container { height: 36px !important; margin-bottom: 2rem !important; }
  #stack h2 { font-size: clamp(3rem, 12vw, 5rem) !important; margin-bottom: 2.5rem !important; }
  
  /* Projects */
  #work .featured-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  #work .featured-grid > *:first-child { grid-column: 1 !important; }
  #work .terminal-row { grid-template-columns: 1fr !important; font-size: 0.65rem !important; gap: 0.5rem; padding: 1rem 0 !important; }
  #work .terminal-desc { display: block !important; color: ${colors.fg} !important; opacity: 0.8; }
  #work h2 { font-size: clamp(3rem, 12vw, 5rem) !important; }
  
  /* Timeline */
  #timeline h2 { font-size: clamp(3rem, 8vw, 5rem) !important; }
  
  /* Contact */
  #contact h2 { font-size: clamp(3rem, 12vw, 5rem) !important; }
  #contact .contact-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
  #contact input, #contact textarea { font-size: 16px !important; /* prevents iOS zoom */ }

  /* Footer */
  #footer .footer-content { justify-content: center !important; }
  #footer .footer-content > div:last-child { align-items: flex-start; }

  /* Touch targets */
  a, button { min-height: 44px; }
}

/* ===== SMALL MOBILE (≤480px) ===== */
@media (max-width: 480px) {
  #hero .name-line { font-size: clamp(2.5rem, 12vw, 4.5rem) !important; }
  #hero .hero-avatar { width: 85vw !important; margin: 0 auto -1.5rem auto !important; }
  
  #about .stats-item { width: 100%; text-align: center; margin-bottom: 1.5rem; }
  #about .stats-container { flex-direction: column; align-items: center; gap: 1rem !important; }
  #about .stats-item div:first-child { font-size: 3.5rem !important; }
  #about .marquee-container { height: 70px !important; margin: 2rem 0 !important; }
  #about .marquee-container div { font-size: clamp(2rem, 10vw, 3.5rem) !important; }
  
  #contact h3 { font-size: clamp(1.5rem, 5vw, 2.5rem) !important; }
  
  section { padding-left: clamp(1rem, 4vw, 1.5rem) !important; padding-right: clamp(1rem, 4vw, 1.5rem) !important; }
}

.revealed { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
.domain-tag { font-family: 'DM Mono', monospace; font-size: 0.58rem; color: ${colors.accent}; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.75rem; }

.icon-wrapper { display: inline-flex; align-items: center; justify-content: center; transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.icon-wrapper:hover { transform: scale(1.1); }
`;

  return (
    <>
      <style>{globalCss}</style>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </>
  );
};
