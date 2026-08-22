"use client";

import { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { SITE } from "@/lib/data";
import Magnetic from "./Magnetic";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = new Audio(SITE.audio);
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;
    return () => {
      a.pause();
    };
  }, []);

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    const el = document.querySelector(href);
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-nav">
      <nav className="shell flex items-center justify-between py-5">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="font-display text-lg font-extrabold tracking-tight"
          data-cursor="top"
        >
          SB<span className="text-lime">.</span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-line bg-bg-2/60 p-1 backdrop-blur-md">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Magnetic strength={0.5}>
          <button
            onClick={toggleAudio}
            aria-label={playing ? "Mute ambient audio" : "Play ambient audio"}
            data-cursor={playing ? "mute" : "sound"}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-bg-2/60 backdrop-blur-md"
          >
            <span className="flex h-3.5 items-end gap-[2px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full bg-lime"
                  style={{
                    height: playing ? "100%" : "30%",
                    animation: playing
                      ? `eq 0.7s ${i * 0.12}s ease-in-out infinite alternate`
                      : "none",
                  }}
                />
              ))}
            </span>
          </button>
        </Magnetic>
      </nav>
      <style>{`@keyframes eq{0%{height:20%}100%{height:100%}}`}</style>
    </header>
  );
}
