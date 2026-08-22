"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/data";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".cta-line span", {
        yPercent: 120,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  return (
    <footer
      id="contact"
      ref={root}
      className="relative overflow-hidden border-t border-line pt-24"
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 124 / 0.4), transparent 70%)",
        }}
      />

      <div className="shell relative">
        <span className="label">(Let&rsquo;s talk)</span>

        <h2 className="cta-line mt-6 font-display text-[clamp(2.75rem,11vw,9rem)] font-extrabold uppercase leading-[0.85]">
          <span className="block overflow-hidden">
            <span className="block">Let&rsquo;s</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-lime">build</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">together</span>
          </span>
        </h2>

        <div className="mt-12 flex flex-col gap-10 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
          <Magnetic strength={0.35}>
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="email"
              className="group inline-flex items-center gap-4 rounded-full bg-lime px-7 py-4 font-mono text-sm font-medium uppercase tracking-widest text-bg"
            >
              {SITE.email}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:text-lime"
              >
                {s.label} ↗
              </a>
            ))}
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="open"
              className="font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:text-lime"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      </div>

      {/* marquee strip — two identical groups so -50% loops seamlessly */}
      <div className="relative mt-16 overflow-hidden border-y border-line py-4">
        <div
          className="flex w-max will-change-transform"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[0, 1].map((g) => (
            <div key={g} className="flex shrink-0 items-center gap-8 pr-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 whitespace-nowrap font-display text-xl font-semibold uppercase text-ink-soft"
                >
                  Available for work <span className="text-lime">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell flex flex-col items-center justify-between gap-3 py-7 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          © {new Date().getFullYear()} Sahil Bajaj — {SITE.location}
        </p>
        
      </div>
    </footer>
  );
}
