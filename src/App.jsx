import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { TubesCursor } from './components/TubesCursor';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import ParticleText from './components/ParticleText';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { LaserStatsSection } from './components/LaserStatsSection';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import { Footer } from './components/Footer';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // lenis@1.x ships CSS here

function AppContent() {
  const [phase, setPhase] = useState('counting'); // 'counting' | 'hold' | 'exit' | 'done'
  const [revealedSections, setRevealedSections] = useState(new Set());
  const [repos, setRepos] = useState({ featured: [], rest: [] });
  const [reposLoading, setReposLoading] = useState(true);

  // GitHub Data Fetching logic
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Psyodrz/repos?sort=updated&per_page=100');
        if (!res.ok) throw new Error('API Rate limit or network error');
        const data = await res.json();
        
        const priorityNames = [
          'PortfolioV2',
          'Rakshak-AI',
          'face-detection-app',
          'horror-hunter-arena',
          'SentinelAI',
          'FaceVault',
          'ai-code-generator',
          'dreamscape-frontend',
          'dreamscape-backend'
        ];
        let featured = [];
        let rest = [];
        
        data.forEach(repo => {
          if (!repo.fork) {
            if (priorityNames.includes(repo.name) || repo.stargazers_count > 5) featured.push(repo);
            else rest.push(repo);
          }
        });
        
        featured.sort((a, b) => b.stargazers_count - a.stargazers_count);
        rest.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        setRepos({
          featured: featured.length > 0 ? featured.slice(0, 6) : [
            { name: 'PortfolioV2', description: 'Immersive terminal portfolio', language: 'JavaScript', html_url: '#' },
            { name: 'AutoCode-AI', description: 'Browser extension for solving competitive programming', language: 'TypeScript', html_url: '#' },
            { name: 'FaceDetectionApp', description: 'Real-time mobile app', language: 'TypeScript', html_url: '#' },
            { name: 'Horror-Survival-3D', description: 'Unity game engine project', language: 'C#', html_url: '#' },
            { name: 'Neural-Style-Trans', description: 'Deep learning art generation', language: 'Python', html_url: '#' },
            { name: 'Next-Gen-Engine', description: 'Custom rendering engine', language: 'C++', html_url: '#' }
          ],
          rest: rest.length > 0 ? rest : Array(15).fill().map((_,i) => ({ name: `Project-X-${i}`, description: 'Miscellaneous scripts and utilities', language: ['Python','JavaScript','C#','TypeScript'][i%4], stargazers_count: i%3, html_url: '#' }))
        });
        setReposLoading(false);
      } catch (err) {
        console.error("Failed to fetch GitHub repos, using fallback data.");
        setRepos({
          featured: [
            { name: 'PortfolioV2', description: 'Immersive terminal portfolio built from scratch', language: 'JavaScript', html_url: '#' },
            { name: 'AutoCode-AI', description: 'Browser extension for solving competitive programming', language: 'TypeScript', html_url: '#' },
            { name: 'FaceDetectionApp', description: 'Real-time mobile app', language: 'TypeScript', html_url: '#' },
            { name: 'Horror-Survival-3D', description: 'Unity game engine project', language: 'C#', html_url: '#' },
            { name: 'Neural-Style-Trans', description: 'Deep learning art generation', language: 'Python', html_url: '#' },
            { name: 'Next-Gen-Engine', description: 'Custom rendering engine', language: 'C++', html_url: '#' }
          ],
          rest: Array(15).fill().map((_,i) => ({ name: `Utility-Script-${i}`, description: 'Miscellaneous tools and experiments', language: ['Python','JavaScript','C#','TypeScript'][i%4], stargazers_count: Math.floor(Math.random()*5), html_url: '#' }))
        });
        setReposLoading(false);
      }
    };
    fetchRepos();
  }, []);

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose lenis globally so navigation links can programmatically scroll
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  // Intersection Observer globally managed logic
  useEffect(() => {
    if (phase !== 'done') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sec = entry.target.getAttribute('data-section');
          if (sec) {
            setRevealedSections(prev => {
              const newSet = new Set(prev);
              newSet.add(sec);
              return newSet;
            });
          }
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [phase]);

  return (
    <>
      <GlobalStyles />
      <TubesCursor />
      <Preloader phase={phase} setPhase={setPhase} />
      
      <div style={{ opacity: phase === 'done' ? 1 : 0, transition: 'opacity 0.8s' }}>
        <Navigation />
        <main>
          <Hero phase={phase} totalRepos={!reposLoading ? repos.featured.length + repos.rest.length : null} />
          <About revealedSections={revealedSections} />
          <ParticleText />
          <TechStack revealedSections={revealedSections} />
          <Skills />
          <LaserStatsSection />
          <Projects repos={repos} reposLoading={reposLoading} revealedSections={revealedSections} />
          <Timeline phase={phase} revealedSections={revealedSections} />
          <GithubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
