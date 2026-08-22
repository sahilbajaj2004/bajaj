export const SITE = {
  name: "Sahil Bajaj",
  role: "Full-Stack MERN & Python Developer",
  location: "Delhi, India",
  email: "sahilbajaj2004@gmail.com",
  phone: "+91 98110 57531",
  resume: "/assets/Sahil_Bajaj_Resume.pdf",
  audio: "/assets/bgaudio.mp3",
  socials: [
    { label: "GitHub", href: "https://github.com/sahilbajaj2004" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sahilbajaj2004" },
    { label: "Email", href: "mailto:sahilbajaj2004@gmail.com" },
  ],
} as const;

export const INTRO =
  "I build complete, real-world applications that actually solve problems — not just run in theory. A BCA student going deep on the MERN stack and Python, shipping front-end UI to back-end APIs to deployment.";

export type Stat = {
  num?: number;
  glyph?: string;
  suffix?: string;
  dec?: boolean;
  label: string;
};

export const STATS: Stat[] = [
  { num: 10, suffix: "+", label: "Projects shipped" },
  { num: 1.5, suffix: " yrs", dec: true, label: "Freelancing" },
  { num: 1, label: "Expo win, 2025" },
  { glyph: "∞", label: "Hackathons led" },
];

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Django",
  "Socket.io",
  "Tailwind",
  "Docker",
  "AWS",
  "Git",
  "C++",
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Frameworks & Stack",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "Tailwind"],
  },
  {
    title: "Data & Infra",
    items: ["MongoDB", "MySQL", "Firebase", "Docker", "AWS", "Git"],
  },
  {
    title: "Foundations",
    items: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

export type Project = {
  index: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  year: string;
  kind: string;
  link: string;
};

const PORTFOLIO = "https://sahilbajajkaportfolio.vercel.app/";

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "RepoSignal",
    blurb:
      "Read any codebase like a live signal. Paste a GitHub URL and it decodes the repo's structure in one pass — architecture diagram, schema points, API flow, folder map, and a learning roadmap.",
    tags: ["Next.js", "AI", "DevTool"],
    image: "/assets/githubreverser.png",
    year: "2025",
    kind: "Product",
    link: "https://bajajgithubreverse.vercel.app/",
  },
  {
    index: "02",
    title: "CodeToResume",
    blurb:
      "Point it at a project and your code writes your resume. It parses your commits, stacks, and shipped work into a structured, export-ready resume — works with GitHub, GitLab, Bitbucket, or a .zip.",
    tags: ["Next.js", "Git", "Resume"],
    image: "/assets/codetoresume.png",
    year: "2025",
    kind: "Product",
    link: "https://codetoresume.vercel.app/",
  },
  {
    index: "03",
    title: "ResumeTailor",
    blurb:
      "Rewrite your resume for the job in front of you. Paste a job description once and get an ATS-aligned resume — plus a LaTeX export and portfolio page, all from a single source of truth, in the browser.",
    tags: ["Next.js", "AI", "ATS"],
    image: "/assets/resumetailor.png",
    year: "2025",
    kind: "Product",
    link: "https://bajajresumetailor.vercel.app/",
  },
  {
    index: "04",
    title: "TextToSQL",
    blurb:
      "Ask your database in plain English and read the SQL it writes. Schema-aware and read-only by design — every question becomes a single validated SELECT, run in a sandbox with results on screen.",
    tags: ["Python", "AI", "SQL"],
    image: "/assets/txttosql.png",
    year: "2025",
    kind: "Product",
    link: "https://bajajtexttosql.vercel.app/",
  },
  {
    index: "05",
    title: "Favicon.OS",
    blurb:
      "A precision tool for pixel-perfect browser favicons. Drop a PNG, get eight sizes — client-side, no server, no signup. Brutalist mono UI: input, resize ×8, export.",
    tags: ["React", "Canvas", "Tool"],
    image: "/assets/facicon.png",
    year: "2025",
    kind: "Tool",
    link: "https://favicongenerator-neon.vercel.app/",
  },
  {
    index: "06",
    title: "AlgoAnalyzer",
    blurb:
      "A full-stack algorithm visualizer. Pick an algorithm, feed your input, and step through every operation while the exact line of code highlights in real time — in Java and C++.",
    tags: ["React", "Express", "Visualizer"],
    image: "/assets/algo.png",
    year: "2025",
    kind: "Full-stack",
    link: "https://algo-analyzer.vercel.app/",
  },
  {
    index: "07",
    title: "SoberDev",
    blurb:
      "An agency-grade marketing experience engineered around motion. Precision meets raw creativity — pinned scrolls, split reveals, and a deliberate type system.",
    tags: ["Next.js", "GSAP", "Motion"],
    image: "/assets/sober.png",
    year: "2025",
    kind: "Brand site",
    link: "https://www.soberdev.in/",
  },
  {
    index: "08",
    title: "Pi 3.14",
    blurb:
      "\"Where Developers Orbit Innovation\" — a community landing for a developer collective. Glowing cosmic hero, animated starfield, and event-led sections inviting devs to join the orbit.",
    tags: ["React", "Motion", "Community"],
    image: "/assets/pi.png",
    year: "2025",
    kind: "Brand site",
    link: "https://picommunity.vercel.app/",
  },
  {
    index: "09",
    title: "Amrit Place",
    blurb:
      "\"Flavors That Stay\" — a warm, full-bleed site for an Indian restaurant. Cinematic candle-lit hero, table reservations, catering and gift cards, and a live Google-rating badge built to drive bookings.",
    tags: ["React", "Tailwind", "Restaurant"],
    image: "/assets/amritplace.png",
    year: "2025",
    kind: "Front-end",
    link: PORTFOLIO,
  },
  {
    index: "10",
    title: "DevCrafter",
    blurb:
      "A studio landing experience with a constellation hero and scroll-choreographed sections. Built to feel crafted, not templated.",
    tags: ["React", "Canvas", "Animation"],
    image: "/assets/DevCrafter.png",
    year: "2025",
    kind: "Brand site",
    link: PORTFOLIO,
  },
  {
    index: "11",
    title: "Prerna",
    blurb:
      "A polished site for Prerna Institution — NEET / JEE / NDA coaching. Calm editorial hero, course explorer, outcome stats, and trust badges over a considered information architecture.",
    tags: ["React", "Node.js", "Web app"],
    image: "/assets/Prerna.png",
    year: "2024",
    kind: "Web app",
    link: PORTFOLIO,
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer — Intern",
    org: "Razorse Software Pvt. Ltd.",
    period: "May 2025 — Aug 2025",
    place: "Delhi, India",
    points: [
      "Shipped features on client web applications as a Junior Software Development Intern.",
      "Worked across the stack — translating designs into UI and wiring up the APIs behind them.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Fiverr · Freelancer",
    period: "May 2024 — Present",
    place: "Delhi, India",
    points: [
      "Build complete web apps with MongoDB, Express, React, Next.js and Node.",
      "Own the whole lifecycle — front-end UI, back-end APIs, and deployment.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  org: "IME College · CCS University",
  period: "2024 — 2027",
};

export const ACHIEVEMENTS = [
  {
    title: "Bharat Shiksha Expo 2025",
    tag: "Winner",
    body: "Recognized for best innovation & social impact for an AI companion built with React, Vite and Firebase.",
    image: "/assets/expo.png",
  },
  {
    title: "Hackathon Lead",
    tag: "Team Lead",
    body: "Led multiple hackathon teams as captain — guiding the build and steering each team to deserving finishes.",
    image: "/assets/profile.jpg",
  },
];
