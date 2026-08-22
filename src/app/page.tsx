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
import Contact from "@/components/Contact";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Sahil Bajaj",
      url: "https://sahilbajaj.tech",
      jobTitle: "Full-Stack MERN & Python Developer",
      knowsAbout: [
        "MERN Stack Development",
        "Next.js Development",
        "Python Development",
        "Full-Stack Web Applications",
        "API Development",
      ],
      sameAs: [
        "https://www.linkedin.com/in/sahilbajaj2004",
        "https://github.com/sahilbajaj2004",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Delhi",
      },
    },
    {
      "@type": "WebSite",
      name: "Sahil Bajaj",
      url: "https://sahilbajaj.tech",
      description:
        "Portfolio website for Sahil Bajaj, a full-stack MERN and Python developer building modern digital products.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://sahilbajaj.tech/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
            <Contact />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
