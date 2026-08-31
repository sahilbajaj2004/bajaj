export const SITE = {
  name: "Sahil Bajaj",
  role: "Full-Stack MERN & Python Developer",
  location: "Delhi, India",
  url: "https://sahilbajaj.tech",
  email: "sahilbajaj2004@gmail.com",
  phone: "+91 98110 57531",
  resume: "/assets/Sahil_Bajaj_Resume.pdf",
  audio: "/assets/bgaudio.mp3",
  socials: [
    { label: "GitHub", href: "https://github.com/sahilbajaj2004" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahilbajaj2004" },
    { label: "Email", href: "mailto:sahilbajaj2004@gmail.com" },
  ],
} as const;

export const FAQS = [
  {
    q: "Who is Sahil Bajaj?",
    a: "Sahil Bajaj is a full-stack MERN and Python developer from Delhi, India. He builds complete web applications end to end - React and Next.js front-ends, Node.js and Express APIs, Python with Django, and MongoDB/MySQL databases - through to deployment.",
  },
  {
    q: "What technologies does Sahil Bajaj work with?",
    a: "He works with JavaScript and TypeScript, React, Next.js, Node.js, Express.js, Python and Django, MongoDB, MySQL, Firebase, Docker, AWS, Tailwind CSS, Socket.io, and C++. His focus is full-stack MERN and Python development.",
  },
  {
    q: "What has Sahil Bajaj built?",
    a: "He has shipped 10+ projects, including AI developer tools like RepoSignal (a GitHub repo analyser), CodeToResume and ResumeTailor (resume builders), and TextToSQL (natural language to SQL), plus brand sites such as SoberDev and restaurant sites like Amrit Place.",
  },
  {
    q: "What experience does Sahil Bajaj have?",
    a: "Sahil worked as a Full-Stack Developer intern at Razorse Software Pvt. Ltd. and has been freelancing through Fiverr since May 2024. He also won the Bharat Shiksha Expo 2025 for an AI companion built with React, Vite, and Firebase, and leads hackathon teams.",
  },
  {
    q: "Is Sahil Bajaj available for hire?",
    a: "Yes. Sahil is open to freelance projects, internships, and full-time full-stack developer roles. You can reach him at sahilbajaj2004@gmail.com.",
  },
  {
    q: "Where is Sahil Bajaj based?",
    a: "Sahil Bajaj is based in Delhi, India, and works in the Indian Standard Time (IST) zone.",
  },
] as const;

export const INTRO =
  "I build complete, real-world applications that actually solve problems not just run in theory. A BCA student going deep on the MERN stack and Python, shipping front-end UI to back-end APIs to deployment.";

export const ABOUT =
  "Sahil Bajaj is a full-stack MERN and Python developer based in Delhi, India, currently pursuing his Bachelor of Computer Applications (BCA) at IME College, CCS University. He owns the full lifecycle of a product - designing and building React and Next.js front-ends, writing Node.js, Express, and Django APIs, modelling data in MongoDB and MySQL, and deploying with Docker and AWS. He has shipped 10+ projects, interned as a full-stack developer at Razorse Software, freelanced through Fiverr since 2024, and won the Bharat Shiksha Expo 2025 for an AI companion.";

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

const PORTFOLIO = "https://sahilbajaj.dpdns.org/";

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "RepoSignal",
    blurb:
      "Read any codebase like a live signal. Paste a GitHub URL and it decodes the repo's structure in one pass - architecture diagram, schema points, API flow, folder map, and a learning roadmap.",
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
      "Point it at a project and your code writes your resume. It parses your commits, stacks, and shipped work into a structured, export-ready resume - works with GitHub, GitLab, Bitbucket, or a .zip.",
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
      "Rewrite your resume for the job in front of you. Paste a job description once and get an ATS-aligned resume - plus a LaTeX export and portfolio page, all from a single source of truth, in the browser.",
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
      "Ask your database in plain English and read the SQL it writes. Schema-aware and read-only by design - every question becomes a single validated SELECT, run in a sandbox with results on screen.",
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
      "A precision tool for pixel-perfect browser favicons. Drop a PNG, get eight sizes - client-side, no server, no signup. Brutalist mono UI: input, resize ×8, export.",
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
      "A full-stack algorithm visualizer. Pick an algorithm, feed your input, and step through every operation while the exact line of code highlights in real time - in Java and C++.",
    tags: ["React", "Express", "Visualizer"],
    image: "/assets/algoanalyzer.png",
    year: "2025",
    kind: "Full-stack",
    link: "https://algo-analyzer.vercel.app/",
  },
  {
    index: "07",
    title: "SoberDev",
    blurb:
      "An agency-grade marketing experience engineered around motion. Precision meets raw creativity - pinned scrolls, split reveals, and a deliberate type system.",
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
      "\"Where Developers Orbit Innovation\" - a community landing for a developer collective. Glowing cosmic hero, animated starfield, and event-led sections inviting devs to join the orbit.",
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
      "\"Flavors That Stay\" - a warm, full-bleed site for an Indian restaurant. Cinematic candle-lit hero, table reservations, catering and gift cards, and a live Google-rating badge built to drive bookings.",
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
      "A polished site for Prerna Institution - NEET / JEE / NDA coaching. Calm editorial hero, course explorer, outcome stats, and trust badges over a considered information architecture.",
    tags: ["React", "Node.js", "Web app"],
    image: "/assets/Prerna.png",
    year: "2024",
    kind: "Web app",
    link: PORTFOLIO,
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer - Intern",
    org: "Razorse Software Pvt. Ltd.",
    period: "May 2025 - Aug 2025",
    place: "Delhi, India",
    points: [
      "Shipped features on client web applications as a Junior Software Development Intern.",
      "Worked across the stack - translating designs into UI and wiring up the APIs behind them.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Fiverr · Freelancer",
    period: "May 2024 - Present",
    place: "Delhi, India",
    points: [
      "Build complete web apps with MongoDB, Express, React, Next.js and Node.",
      "Own the whole lifecycle - front-end UI, back-end APIs, and deployment.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  org: "IME College · CCS University",
  period: "2024 - 2027",
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
    body: "Led multiple hackathon teams as captain - guiding the build and steering each team to deserving finishes.",
    image: "/assets/profile.jpg",
  },
];
