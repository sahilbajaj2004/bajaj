import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const siteUrl = "https://sahilbajaj.tech";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Profile",
      mainEntity: {
        "@type": "Person",
        name: "Sahil Bajaj",
        alternateName: "Sahil Bajaj developer",
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        jobTitle: "Full-Stack MERN & Python Developer",
        description:
          "Full-stack MERN and Python developer from Delhi, India, building complete web applications end to end - React and Next.js front-ends, Node.js and Python APIs, MongoDB and deployment.",
        knowsAbout: [
          "MERN Stack Development",
          "Next.js Development",
          "React Development",
          "Python Development",
          "Django",
          "Node.js Development",
          "MongoDB",
          "MySQL",
          "Full-Stack Web Applications",
          "API Development",
          "Docker",
          "AWS",
        ],
        skill: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Python",
          "Django",
          "MongoDB",
          "MySQL",
          "Firebase",
          "Docker",
          "AWS",
          "Tailwind CSS",
          "Socket.io",
          "C++",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Razorse Software Pvt. Ltd.",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "IME College · CCS University",
        },
        email: "mailto:sahilbajaj2004@gmail.com",
        telephone: "+919811057531",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "Delhi",
        },
        sameAs: [
          "https://www.linkedin.com/in/sahilbajaj2004",
          "https://github.com/sahilbajaj2004",
        ],
      },
    },
    {
      "@type": "Organization",
      name: "Sahil Bajaj",
      url: siteUrl,
      logo: `${siteUrl}/og-image.png`,
      founder: {
        "@type": "Person",
        name: "Sahil Bajaj",
      },
      email: "sahilbajaj2004@gmail.com",
      telephone: "+919811057531",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Delhi",
      },
      sameAs: [
        "https://www.linkedin.com/in/sahilbajaj2004",
        "https://github.com/sahilbajaj2004",
      ],
    },
    {
      "@type": "WebSite",
      name: "Sahil Bajaj",
      url: siteUrl,
      inLanguage: "en",
      description:
        "Portfolio website for Sahil Bajaj, a full-stack MERN and Python developer in Delhi, India, building modern digital products.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Sahil Bajaj?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sahil Bajaj is a full-stack MERN and Python developer from Delhi, India. He builds complete web applications end to end - React and Next.js front-ends, Node.js and Express APIs, Python with Django, and MongoDB/MySQL databases - through to deployment.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Sahil Bajaj work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "He works with JavaScript and TypeScript, React, Next.js, Node.js, Express.js, Python and Django, MongoDB, MySQL, Firebase, Docker, AWS, Tailwind CSS, Socket.io, and C++. His focus is full-stack MERN and Python development.",
          },
        },
        {
          "@type": "Question",
          name: "What has Sahil Bajaj built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "He has shipped 10+ projects, including AI developer tools like RepoSignal (a GitHub repo analyser), CodeToResume and ResumeTailor (resume builders), and TextToSQL (natural language to SQL), plus brand sites such as SoberDev and restaurant sites like Amrit Place.",
          },
        },
        {
          "@type": "Question",
          name: "What experience does Sahil Bajaj have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sahil worked as a Full-Stack Developer intern at Razorse Software Pvt. Ltd. and has been freelancing through Fiverr since May 2024. He also won the Bharat Shiksha Expo 2025 for an AI companion built with React, Vite, and Firebase, and leads hackathon teams.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sahil Bajaj available for hire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sahil is open to freelance projects, internships, and full-time full-stack developer roles. You can reach him at sahilbajaj2004@gmail.com.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Sahil Bajaj based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sahil Bajaj is based in Delhi, India, and works in the Indian Standard Time (IST) zone.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Preloader />
      <Cursor />
      <SmoothScroll>
        <div className="grain">
          <Nav />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <FAQ />
            <Contact />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
