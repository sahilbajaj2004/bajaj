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

export default function Home() {
  return (
    <>
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
