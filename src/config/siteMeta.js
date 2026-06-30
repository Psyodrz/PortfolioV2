/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   src/config/siteMeta.js
   Single source of truth for all portfolio data.
   Hero, About, LaserStatsSection, Projects, and App
   all import from here — edit in ONE place only.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ── Identity ─────────────────────────────────── */
export const IDENTITY = {
  firstName:      'ADITYA',
  lastName:       'SRIVASTAVA',
  fullName:       'Aditya Srivastava',
  backgroundText: 'PSYODRZ',                          // large faded bg text in Hero
  github:         'Psyodrz',
  githubUrl:      'https://github.com/Psyodrz',
  email:          'Adisrivastav23@gmail.com',                   // ← filled
  linkedin:       'https://www.linkedin.com/in/adisrivastav23', // ← filled
  location:       'Based in India',
  availability:   'Open to US Remote',
  education:      'B.Tech CSE | MUIT | 2023–2027',
};

/* ── Cycling role titles shown in Hero ───────── */
export const ROLES = [
  'GAME DEVELOPER',
  'AI ENGINEER',
  'FULL-STACK DEV',
  'CREATIVE CODER',
  'HORROR LOVER',
  'VISUAL BUILDER',
];

/* ── Core numeric metrics ─────────────────────── */
// One place to update a number and have it flow everywhere.
export const METRICS = {
  projects:      25,  // total shipped (About + LaserStats)
  domains:        4,  // distinct tech domains
  yearsExp:       3,  // years experience (About + LaserStats)
  liveProjects:  10,  // live / deployed (About)
  techMastered:  10,  // unique techs (LaserStats)
  heroRepos:     19,  // repos stat in Hero
  heroDomains:    4,  // domains stat in Hero
  heroYears:      3,  // years stat in Hero
};

/* ── Bio copy ─────────────────────────────────── */
export const BIO = {
  hero:  'Building immersive games, intelligent AI tools, and full-stack web apps. Horror obsessed. Always shipping something wild.',
  about: "I'm Aditya Srivastava — a CS engineer who builds immersive games, trains neural nets, and ships full-stack products. I'm obsessed with horror aesthetics, interactive experiences, and pushing what browsers can do.",
  quote: 'A GAME DEVELOPER JUGGLING AI PASSION, HORROR OBSESSION, AND JUST A HINT OF ACADEMIC SANITY',
};

/* ── Hero bottom-right stat cluster ──────────── */
export const HERO_STATS = [
  { val: `${METRICS.heroRepos}+`,   lbl: 'Repos'   },
  { val: `${METRICS.heroDomains}+`, lbl: 'Domains' },
  { val: `${METRICS.heroYears}+`,   lbl: 'Years'   },
];

/* ── About section stat grid ─────────────────── */
export const ABOUT_STATS = [
  { lbl: 'Projects', val: METRICS.projects     },
  { lbl: 'Domains',  val: METRICS.domains      },
  { lbl: 'Years',    val: METRICS.yearsExp     },
  { lbl: 'Live',     val: METRICS.liveProjects },
];

/* ── LaserStatsSection count-up data ─────────── */
// null value → renders `display` string instead of animating
export const STATS = [
  { value: METRICS.projects,     suffix: '+', label: 'Projects Shipped' },
  { value: METRICS.yearsExp,     suffix: '+', label: 'Years Building'   },
  { value: METRICS.techMastered, suffix: '+', label: 'Tech Mastered'    },
  { value: null, display: '∞',               label: 'Lines of Code'     },
];

/* ── Projects section config ─────────────────── */
export const PROJECTS_CONFIG = {
  githubUrl:     `${IDENTITY.githubUrl}?tab=repositories`,
  terminalPath:  `~/${IDENTITY.github}`,
  // Domain tags per featured-repo index (must match order GitHub API returns)
  tags: [
    'WEB | PORTFOLIO',
    'AI | BROWSER EXT',
    'GAME DEV | 3D',
    'WEB APP | TYPESCRIPT',
    'WEB APP | AI',
    'GAME DEV | HORROR',
    'AI | MOBILE',
  ],
  // Which featured-repo index badge shows "IN PROGRESS" instead of "LIVE"
  inProgressIdx: 5,
};

