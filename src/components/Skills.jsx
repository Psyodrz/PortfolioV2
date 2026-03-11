import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { useTheme } from '../ThemeContext';

const CONFIG = {
  maxParticles: 40000,
  particleSize: 2.8,
  morphSpeed: 1.5,
  explosionForce: 0.5,
  primaryColor: "#00f3ff",
  secondaryColor: "#ff0055",
  bgColor: "#030305",
  bloomStrength: 3.2,
  bloomRadius: 0.8,
  bloomThreshold: 0.0
};

// ─── All 25 Skills ────────────────────────────────────────────────────────────
const SKILLS = [
  { slug: "javascript",        name: "JavaScript",   category: "Languages", color: "#F7DF1E", color2: "#a89400", details: "Advanced ES6+, React, Node.js" },
  { slug: "python",            name: "Python",        category: "Languages", color: "#3776AB", color2: "#ffd343", details: "AI/ML, Data Science" },
  { slug: "c",                 name: "C",             category: "Languages", color: "#A8B9CC", color2: "#5a7a99", details: "System Programming" },
  { slug: "dotnet",            name: "C#",            category: "Languages", color: "#239120", color2: "#6fcf6b", details: "Game Dev, .NET" },
  { slug: "cplusplus",         name: "C++",           category: "Languages", color: "#00599C", color2: "#4da6ff", details: "Game Dev, Systems" },
  { slug: "openjdk",           name: "Java",          category: "Languages", color: "#5382a1", color2: "#f89820", details: "Enterprise, Android" },
  { slug: "go",                name: "Go",            category: "Languages", color: "#00ADD8", color2: "#00d4ff", details: "Concurrent Programming" },
  { slug: "react",             name: "React",         category: "Web",       color: "#61DAFB", color2: "#0a7fa5", details: "SPAs, State Management" },
  { slug: "nextdotjs",         name: "Next.js",       category: "Web",       color: "#ffffff", color2: "#aaaaaa", details: "SSR, Static Generation" },
  { slug: "nodedotjs",         name: "Node.js",       category: "Web",       color: "#339933", color2: "#6fcf6b", details: "APIs, Microservices" },
  { slug: "tailwindcss",       name: "Tailwind",      category: "Web",       color: "#06B6D4", color2: "#0e7490", details: "Responsive Design" },
  { slug: "graphql",           name: "GraphQL",       category: "Web",       color: "#E10098", color2: "#ff66cc", details: "API Design" },
  { slug: "tensorflow",        name: "TensorFlow",    category: "AI/ML",     color: "#FF6F00", color2: "#ffd54f", details: "Deep Learning" },
  { slug: "pytorch",           name: "PyTorch",       category: "AI/ML",     color: "#EE4C2C", color2: "#ff9980", details: "Computer Vision, NLP" },
  { slug: "scikitlearn",       name: "Scikit-learn",  category: "AI/ML",     color: "#F7931E", color2: "#ffd29a", details: "ML Algorithms" },
  { slug: "ollama",            name: "Ollama",        category: "AI/ML",     color: "#ffffff", color2: "#aaaaaa", details: "Local LLMs" },
  { slug: "anthropic",         name: "Prompt Eng.",   category: "AI/ML",     color: "#412991", color2: "#a78bfa", details: "LLM Optimization" },
  { slug: "huggingface",       name: "AI Tools",      category: "AI/ML",     color: "#FFD21E", color2: "#a37d00", details: "Models & Integration" },
  { slug: "unrealengine",      name: "Unreal",        category: "Creative",  color: "#ffffff", color2: "#aaaaaa", details: "Game Development" },
  { slug: "blender",           name: "Blender",       category: "Creative",  color: "#F5792A", color2: "#ffc099", details: "3D Modeling" },
  { slug: "git",               name: "Git",           category: "DevOps",    color: "#F05032", color2: "#ffaa99", details: "Version Control" },
  { slug: "docker",            name: "Docker",        category: "DevOps",    color: "#2496ED", color2: "#8ed0ff", details: "Containerization" },
  { slug: "amazonaws",         name: "AWS",           category: "DevOps",    color: "#FF9900", color2: "#ffd280", details: "Cloud Infrastructure" },
  { slug: "vscodium",          name: "VS Code",       category: "DevOps",    color: "#007ACC", color2: "#66cfff", details: "Advanced IDE" },
  { slug: "figma",             name: "Figma",         category: "DevOps",    color: "#F24E1E", color2: "#ff9980", details: "UI/UX Design" },
];

const CATEGORIES = [...new Set(SKILLS.map(s => s.category))];

// ─── Particle Engine ──────────────────────────────────────────────────────────
class SkillsParticleSystem {
  constructor(canvasContainer, onSkillLoaded) {
    this.container = canvasContainer;
    this.onSkillLoaded = onSkillLoaded;
    this.data = SKILLS;
    this.cache = {};
    this.currentSkill = -1;
    this.isMorphing = false;
    this.morphTime = 0;
    this.lastTime = performance.now();
    this.setupFontCanvas();
    this.init();
  }

  setupFontCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    this.canvasCtx = canvas.getContext("2d", { willReadFrequently: true });
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(CONFIG.bgColor, 0.02);
    this.scene.background = new THREE.Color(CONFIG.bgColor);

    const w = Math.max(this.container.clientWidth, window.innerWidth);
    const h = Math.max(this.container.clientHeight, window.innerHeight);

    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    this.camera.position.set(0, 0, 30);

    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.container.appendChild(this.renderer.domElement);

    const renderScene = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      CONFIG.bloomStrength, CONFIG.bloomRadius, CONFIG.bloomThreshold
    );
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1.0;
    this.controls.enableZoom = false; // FIX: prevent scroll wheel from zooming out and vanishing particles
    this.controls.enablePan = false;  // FIX: prevent unwanted camera panning

    this.createParticleSystem();
    this.createStarfield();

    this.resizeHandler = this.onResize.bind(this);
    window.addEventListener("resize", this.resizeHandler);
    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  createStarfield() {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 100;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.stars = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.2, color: 0xffffff, transparent: true, opacity: 0.3 }));
    this.scene.add(this.stars);
  }

  createParticleSystem() {
    this.geometry = new THREE.BufferGeometry();
    const posCurrent = new Float32Array(CONFIG.maxParticles * 3);
    const posTarget  = new Float32Array(CONFIG.maxParticles * 3);
    const randoms    = new Float32Array(CONFIG.maxParticles);
    const actives    = new Float32Array(CONFIG.maxParticles);

    for (let i = 0; i < CONFIG.maxParticles; i++) {
      posCurrent[i*3]   = (Math.random() - 0.5) * 50;
      posCurrent[i*3+1] = (Math.random() - 0.5) * 50;
      posCurrent[i*3+2] = (Math.random() - 0.5) * 50;
      randoms[i] = Math.random();
      actives[i] = 0;
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(posCurrent, 3));
    this.geometry.setAttribute("aTarget",  new THREE.BufferAttribute(posTarget, 3));
    this.geometry.setAttribute("aRandom",  new THREE.BufferAttribute(randoms, 1));
    this.geometry.setAttribute("aActive",  new THREE.BufferAttribute(actives, 1));

    this.material = new THREE.ShaderMaterial({
      vertexShader: `
        uniform float uTime; uniform float uMix; uniform float uSize; uniform float uExplosion;
        attribute vec3 aTarget; attribute float aRandom; attribute float aActive;
        varying float vAlpha; varying float vDepth;
        vec3 noise(vec3 p){return vec3(sin(p.y*3.0+uTime),cos(p.z*3.0+uTime),sin(p.x*3.0+uTime))*0.1;}
        void main(){
          vec3 posA=position;vec3 posB=aTarget;
          float scatter=sin(uMix*3.14159)*uExplosion;
          vec3 dir=normalize(posA+vec3(0.001));
          vec3 noiseVec=noise(posA*2.0)*scatter*5.0;
          vec3 mixedPos=mix(posA,posB,uMix);
          mixedPos+=(dir*scatter*3.0)+noiseVec;
          vec4 mvPosition=modelViewMatrix*vec4(mixedPos,1.0);
          gl_Position=projectionMatrix*mvPosition;
          gl_PointSize=uSize*(20.0/-mvPosition.z);
          vDepth=-mvPosition.z;
          float blink=sin(uTime*5.0+aRandom*10.0)*0.5+0.5;
          vAlpha=aActive*(0.3+0.7*blink);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor; uniform vec3 uColor2;
        varying float vAlpha; varying float vDepth;
        void main(){
          vec2 uv=gl_PointCoord.xy-0.5; float r=length(uv);
          if(r>0.5)discard;
          float glow=pow(1.0-r*2.0,2.0);
          float fog=clamp((40.0-vDepth)/30.0,0.0,1.0);
          vec3 col=mix(uColor,uColor2,r)*4.0;
          gl_FragColor=vec4(col,vAlpha*glow*fog);
        }
      `,
      uniforms: {
        uTime:      { value: 0 }, uMix:       { value: 0 },
        uSize:      { value: CONFIG.particleSize }, uExplosion: { value: CONFIG.explosionForce },
        uColor:     { value: new THREE.Color(CONFIG.primaryColor) },
        uColor2:    { value: new THREE.Color(CONFIG.secondaryColor) },
      },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });

    this.particleSystem = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particleSystem);
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  generateTextPoints(text) {
    const width = 512, height = 512;
    this.canvasCtx.clearRect(0, 0, width, height);
    this.canvasCtx.font = "900 80px sans-serif";
    this.canvasCtx.textAlign = "center";
    this.canvasCtx.textBaseline = "middle";
    this.canvasCtx.fillStyle = "white";
    this.canvasCtx.fillText(text.slice(0, 8), width / 2, height / 2);
    return this.scanCanvas(width, height);
  }

  scanCanvas(width, height) {
    const data = this.canvasCtx.getImageData(0, 0, width, height).data;
    const points = [];
    const gap = 2;
    for (let iy = 0; iy < height; iy += gap) {
      for (let ix = 0; ix < width; ix += gap) {
        const idx = (iy * width + ix) * 4;
        if (data[idx + 3] > 20) {
          points.push(
            (ix / width - 0.5) * 10,
            ((height - iy) / height - 0.5) * 10,
            (Math.random() - 0.5) * 4.5
          );
        }
      }
    }
    return points;
  }

  async getPointsFromImage(skill) {
    const key = skill.slug;
    if (this.cache[key]) return this.cache[key];

    const width = 512, height = 512;
    this.canvasCtx.clearRect(0, 0, width, height);

    try {
      const img = await this.loadImage(`https://cdn.simpleicons.org/${skill.slug}/white`);
      const aspect = img.width / img.height;
      let dW = width, dH = height;
      if (aspect > 1) dH = width / aspect;
      else dW = height * aspect;
      this.canvasCtx.drawImage(img, (width - dW) / 2, (height - dH) / 2, dW, dH);
      const points = this.scanCanvas(width, height);
      if (points.length < 300) throw new Error('Too few points');
      this.cache[key] = points;
      return points;
    } catch {
      const points = this.generateTextPoints(skill.name);
      this.cache[key] = points;
      return points;
    }
  }

  async loadSkill(index) {
    if (this.isMorphing || index === this.currentSkill) return;
    const skill = this.data[index];
    if (!skill) return;

    if (this.onSkillLoaded) this.onSkillLoaded(index, skill, false);
    const points = await this.getPointsFromImage(skill);
    if (this.onSkillLoaded) this.onSkillLoaded(index, skill, true);

    // Shuffle for organic morph
    for (let i = Math.floor(points.length / 3) - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [points[i*3],   points[j*3]]   = [points[j*3],   points[i*3]];
      [points[i*3+1], points[j*3+1]] = [points[j*3+1], points[i*3+1]];
      [points[i*3+2], points[j*3+2]] = [points[j*3+2], points[i*3+2]];
    }

    const targetAttr = this.geometry.attributes.aTarget;
    const activeAttr = this.geometry.attributes.aActive;
    const numPoints  = Math.floor(points.length / 3);

    for (let i = 0; i < CONFIG.maxParticles; i++) {
      if (i < numPoints) {
        targetAttr.setXYZ(i, points[i*3], points[i*3+1], points[i*3+2]);
        activeAttr.setX(i, 1.0);
      } else {
        const r = 20 + Math.random() * 10;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        targetAttr.setXYZ(i, r*Math.sin(phi)*Math.cos(theta), r*Math.sin(phi)*Math.sin(theta), r*Math.cos(phi));
        activeAttr.setX(i, 0.0);
      }
    }

    targetAttr.needsUpdate = true;
    activeAttr.needsUpdate = true;
    this.isMorphing   = true;
    this.morphTime    = 0;
    this.currentSkill = index;
    this.material.uniforms.uColor.value.set(skill.color);
    this.material.uniforms.uColor2.value.set(skill.color2);
  }

  animate() {
    const now = performance.now();
    const dt  = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    if (this.isMorphing) {
      this.morphTime += dt * CONFIG.morphSpeed;
      if (this.morphTime >= 1.0) {
        this.morphTime = 1.0;
        this.isMorphing = false;
        this.geometry.attributes.position.array.set(this.geometry.attributes.aTarget.array);
        this.geometry.attributes.position.needsUpdate = true;
        this.material.uniforms.uMix.value = 0.0;
      } else {
        const t = this.morphTime * this.morphTime * (3.0 - 2.0 * this.morphTime);
        this.material.uniforms.uMix.value = t;
      }
    }

    this.material.uniforms.uTime.value += dt;
    if (this.stars) this.stars.rotation.y += 0.0005;
    this.controls.update();
    this.composer.render();
  }

  onResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    const width  = Math.max(this.container.clientWidth,  1);
    const height = Math.max(this.container.clientHeight, 1);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.composer) this.composer.setSize(width, height);
    const isMobile = width < 768;
    this.material.uniforms.uSize.value = isMobile ? CONFIG.particleSize * 2.5 : CONFIG.particleSize;
    this.camera.position.z = isMobile ? 35 : 30;
  }

  dispose() {
    window.removeEventListener("resize", this.resizeHandler);
    this.renderer?.setAnimationLoop(null);
    try {
      const gl = this.renderer.domElement.getContext("webgl2") || this.renderer.domElement.getContext("webgl");
      if (gl) { const ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); }
    } catch {}
    if (this.container.contains(this.renderer.domElement)) this.container.removeChild(this.renderer.domElement);
    this.geometry?.dispose();
    this.material?.dispose();
    this.composer?.dispose();
    this.controls?.dispose();
    this.scene?.clear();
  }
}

// ─── Style helpers ────────────────────────────────────────────────────────────
const glass = () => ({
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
  border: '1px solid rgba(255,255,255,0.10)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
});

// ─── Component ────────────────────────────────────────────────────────────────
function Skills() {
  const containerRef  = useRef(null);
  const sysRef        = useRef(null);
  const scrollRef     = useRef(null);
  const timerRef      = useRef(null);
  const { isDark }    = useTheme();

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [activeSkill,      setActiveSkill]      = useState(SKILLS[0]);
  const [isLoaded,         setIsLoaded]         = useState(false);
  const [isReady,          setIsReady]          = useState(false);
  const [activeCategory,   setActiveCategory]   = useState("All");

  const filteredSkills = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  // ── Auto-play ─────────────────────────────────────────────────────────────
  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (sysRef.current) {
        const next = (sysRef.current.currentSkill + 1) % SKILLS.length;
        sysRef.current.loadSkill(next);
      }
    }, 4500);
  }, []);

  const resetAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    startAutoPlay();
  }, [startAutoPlay]);

  // ── Engine init ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    const raf = requestAnimationFrame(() => {
      sysRef.current = new SkillsParticleSystem(containerRef.current, (index, skill, loaded) => {
        setActiveSkillIndex(index);
        setActiveSkill(skill);
        setIsLoaded(loaded);
        if (loaded) setIsReady(true);
      });
      sysRef.current.loadSkill(0);
      startAutoPlay();
    });
    return () => {
      cancelAnimationFrame(raf);
      if (timerRef.current) clearInterval(timerRef.current);
      if (sysRef.current) { sysRef.current.dispose(); sysRef.current = null; }
    };
  }, [startAutoPlay]);

  // ── Auto-scroll active pill into view ─────────────────────────────────────
  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    const btn = c.querySelector('[data-active="true"]');
    if (btn) {
      const target = btn.offsetLeft - c.offsetLeft - c.getBoundingClientRect().width / 2 + btn.offsetWidth / 2;
      c.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [activeSkillIndex, activeCategory]);

  const handleSkillClick = (globalIndex) => {
    if (sysRef.current) {
      sysRef.current.loadSkill(globalIndex);
      resetAutoPlay();
    }
  };

  const c = activeSkill.color || '#00f3ff';

  return (
    <section
      id="skills"
      style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 600, overflow: 'hidden', backgroundColor: '#030305' }}
    >
      {/* Initial loader */}
      {!isReady && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 50,
          background: '#030305', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 16,
        }}>
          <p style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.25em', color: '#00f3ff', textTransform: 'uppercase', margin: 0 }}>
            Initializing Quantum System
          </p>
          <div style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '50%', background: '#00f3ff', borderRadius: 2 }} />
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 10, width: '100%', height: '100%' }} />

      {/* Fades */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, #030305, transparent)', zIndex: 5, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #030305f0, transparent)', zIndex: 5, pointerEvents: 'none' }} />

      {/* UI Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 28px' }}>

        {/* ── Top Header ── */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', margin: 0 }}>
              Tech Universe
            </p>
            <h1 style={{ fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', margin: '4px 0 0' }}>
              04 — Skills
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, ...glass(), pointerEvents: 'auto' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
            <span style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.75)' }}>ONLINE</span>
          </div>
        </header>

        {/* ── Bottom Panel ── */}
        <div style={{ width: '100%', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* Skill name + detail */}
          <div style={{ paddingLeft: 4, marginBottom: 2 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.25em', color: c, textTransform: 'uppercase', marginBottom: 4, opacity: 0.8 }}>
              [ {activeSkill.category} ]
            </div>
            <div
              style={{
                fontFamily: "'Bebas Neue', 'Orbitron', monospace",
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 900, lineHeight: 1,
                color: c,
                textShadow: `0 0 30px ${c}50`,
                opacity: isLoaded ? 1 : 0.4,
                transition: 'opacity 0.4s ease, color 0.4s ease',
                letterSpacing: '-0.01em',
              }}
            >
              {activeSkill.name}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 4, letterSpacing: '0.05em' }}>
              {activeSkill.details}
            </div>
          </div>

          {/* Category filter row */}
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2, scrollbarWidth: 'none' }}>
            {['All', ...CATEGORIES].map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: 999,
                    border: isActive ? `1px solid ${c}` : '1px solid rgba(255,255,255,0.12)',
                    background: isActive ? `${c}18` : 'rgba(255,255,255,0.03)',
                    color: isActive ? c : 'rgba(255,255,255,0.40)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Skill pills */}
          <div
            ref={scrollRef}
            style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '4px 0', scrollbarWidth: 'none' }}
          >
            {filteredSkills.map((item) => {
              const globalIndex = SKILLS.findIndex(s => s.slug === item.slug);
              const isActive    = globalIndex === activeSkillIndex;
              return (
                <button
                  key={item.slug}
                  data-active={isActive}
                  onClick={() => handleSkillClick(globalIndex)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    padding: '7px 14px',
                    borderRadius: 10,
                    border: isActive ? `1px solid ${item.color}60` : '1px solid rgba(255,255,255,0.10)',
                    background: isActive ? `${item.color}18` : 'rgba(255,255,255,0.03)',
                    boxShadow: isActive ? `0 0 20px ${item.color}28` : 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transform: isActive ? 'scale(1.06)' : 'scale(1)',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {/* Colour dot */}
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                    background: item.color,
                    boxShadow: isActive ? `0 0 8px ${item.color}` : 'none',
                    opacity: isActive ? 1 : 0.45,
                  }} />
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? item.color : 'rgba(255,255,255,0.45)',
                    fontWeight: isActive ? 700 : 400,
                    transition: 'color 0.25s ease',
                  }}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer: progress bar + counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 2 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.30)', letterSpacing: '0.1em' }}>
              {String(activeSkillIndex + 1).padStart(2, '0')}
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.10)', borderRadius: 1, maxWidth: 120 }}>
              <div style={{
                height: '100%', background: c, borderRadius: 1,
                width: `${((activeSkillIndex + 1) / SKILLS.length) * 100}%`,
                transition: 'width 0.6s ease',
                boxShadow: `0 0 6px ${c}`,
              }} />
            </div>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.20)', letterSpacing: '0.1em' }}>
              {String(SKILLS.length).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.15em', textTransform: 'uppercase', marginLeft: 'auto' }}>
              Drag · Click
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
