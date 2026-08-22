"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILL_GROUPS, EDUCATION } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MANIFESTO =
  "I build complete, real-world applications that actually solve problems — not just run in theory. Front-end UI, back-end APIs, deployment. The whole thing, owned end to end.";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        gsap.to(".word", {
          color: "var(--ink)",
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: ".manifesto",
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        });
      }

      gsap.from(".skill-group", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-grid", start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section id="about" ref={root} className="relative py-28 sm:py-36">
      <div className="shell">
        <div className="mb-14 flex items-baseline gap-4">
          <span className="label">(About)</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <p className="manifesto max-w-4xl font-display text-[clamp(1.6rem,4.2vw,3.1rem)] font-semibold leading-[1.15]">
          {MANIFESTO.split(" ").map((w, i) => (
            <span
              key={i}
              className="word"
              style={{ color: "var(--ink-faint)" }}
            >
              {w}{" "}
            </span>
          ))}
        </p>

        {/* skills + education */}
        <div className="skill-grid mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="skill-group">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
                <span className="h-1 w-1 rounded-full bg-lime" />
                {g.title}
              </h3>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="border-b border-line/60 pb-2.5 text-ink-soft transition-colors hover:text-ink"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-bg-2/40 px-7 py-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              Education
            </p>
            <p className="mt-1 font-display text-xl font-semibold">
              {EDUCATION.degree}
            </p>
            <p className="text-ink-soft">{EDUCATION.org}</p>
          </div>
          <span className="font-mono text-sm text-lime">{EDUCATION.period}</span>
        </div>
      </div>
    </section>
  );
}
