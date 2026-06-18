"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LINE_ONE = "Sahil".split("");
const LINE_TWO = "Bajaj".split("");

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        gsap.set(".hero-char", { yPercent: 120 });
        gsap.set(".hero-fade", { y: 24, autoAlpha: 0 });
        gsap.set(".hero-portrait", { clipPath: "inset(0 0 100% 0)", scale: 1.15 });
      }

      let started = false;
      const intro = () => {
        if (started || reduce) return;
        started = true;
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.to(".hero-char", {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.05,
        })
          .to(
            ".hero-portrait",
            { clipPath: "inset(0 0 0% 0)", scale: 1, duration: 1.2 },
            "-=0.9",
          )
          .to(
            ".hero-fade",
            { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 },
            "-=0.8",
          );
      };

      window.addEventListener("loader:done", intro, { once: true });
      const fallback = window.setTimeout(intro, 3200);

      // parallax on scroll
      gsap.to(".hero-portrait-inner", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-title", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        window.removeEventListener("loader:done", intro);
        window.clearTimeout(fallback);
      };
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-svh overflow-hidden pt-28"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -right-[10%] top-[8%] h-[42rem] w-[42rem] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 124 / 0.35), transparent 70%)",
        }}
      />

      <div className="shell relative flex min-h-[calc(100svh-7rem)] flex-col justify-between">
        {/* top meta */}
        <div className="hero-fade flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime/70" />
              <span className="h-2 w-2 rounded-full bg-lime" />
            </span>
            Open to freelance & internships
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            {SITE.location} · IST
          </span>
        </div>

        {/* main row */}
        <div className="grid flex-1 grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="hero-title">
            <p className="hero-fade mb-5 max-w-xs font-mono text-sm text-ink-soft">
              <span className="text-lime">{"// "}</span>
              Full-stack MERN &amp; Python developer, Delhi.
            </p>
            <h1 className="font-display font-extrabold uppercase leading-[0.85] text-ink">
              <span className="block overflow-hidden">
                <span className="flex">
                  {LINE_ONE.map((c, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block text-[clamp(3.5rem,15vw,11rem)]"
                    >
                      {c}
                    </span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="flex items-end">
                  {LINE_TWO.map((c, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block text-[clamp(3.5rem,15vw,11rem)]"
                    >
                      {c}
                    </span>
                  ))}
                  <span className="hero-char ml-3 mb-3 hidden text-[clamp(1rem,3vw,1.75rem)] font-mono lowercase tracking-tight text-lime sm:inline-block">
                    ·dev
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* portrait */}
          <div className="hero-portrait relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="hero-portrait-inner relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-bg-2">
              <Image
                src="/assets/bajaj.jpg"
                alt="Sahil Bajaj presenting at Bharat Shiksha Expo 2025"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover object-[35%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-soft">
                  Hangama ho gaya &rsquo;26 — keynote
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="hero-fade flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6">
          <p className="max-w-md text-pretty text-ink-soft">
            I build complete, real-world apps that actually solve problems — UI
            to APIs to deployment.
          </p>
          <a
            href="#work"
            data-cursor="scroll"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-soft"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView();
            }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors group-hover:border-lime">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-lime"
              >
                <path
                  d="M7 1v12M7 13l5-5M7 13L2 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
