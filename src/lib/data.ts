export const SITE = {
  name: "Sahil Bajaj",
  role: "Full-Stack MERN & Python Developer",
  location: "Delhi, India",
  email: "sahilbajaj2004@gmail.com",
  phone: "+91 98110 57531",
  resume: "/assets/Sahil_Bajaj_Resume.pdf",
  audio: "/assets/bgaudio.mp3",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
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
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "AlgoAnalyzer",
    blurb:
      "A full-stack algorithm visualizer. Pick an algorithm, feed your input, and step through every operation while the exact line of code highlights in real time — in Java and C++.",
    tags: ["React", "Express", "Visualizer"],
    image: "/assets/algo.png",
    year: "2025",
    kind: "Full-stack",
  },
  {
    index: "02",
    title: "SoberDev",
    blurb:
      "An agency-grade marketing experience engineered around motion. Precision meets raw creativity — pinned scrolls, split reveals, and a deliberate type system.",
    tags: ["Next.js", "GSAP", "Motion"],
    image: "/assets/sober.png",
    year: "2025",
    kind: "Brand site",
  },
  {
    index: "03",
    title: "DevCrafter",
    blurb:
      "A studio landing experience with a constellation hero and scroll-choreographed sections. Built to feel crafted, not templated.",
    tags: ["React", "Canvas", "Animation"],
    image: "/assets/DevCrafter.png",
    year: "2025",
    kind: "Brand site",
  },
  {
    index: "04",
    title: "CodeToResume",
    blurb:
      "Turn a profile into a polished, recruiter-ready resume from configurable templates. A modern editor with live template properties and instant preview.",
    tags: ["Next.js", "Tooling", "UX"],
    image: "/assets/webpic.png",
    year: "2025",
    kind: "Product",
  },
  {
    index: "05",
    title: "Nike Store",
    blurb:
      "A high-fidelity commerce front-end clone — product storytelling, motion-led hero, and a clean, responsive catalog built for feel.",
    tags: ["React", "Tailwind", "E-commerce"],
    image: "/assets/Nike.png",
    year: "2024",
    kind: "Front-end",
  },
  {
    index: "06",
    title: "Prerna",
    blurb:
      "A purpose-built web platform delivering structured content with a calm, readable interface and a considered information architecture.",
    tags: ["React", "Node.js", "Web app"],
    image: "/assets/Prerna.png",
    year: "2024",
    kind: "Web app",
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
