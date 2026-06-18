"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const el = track.current!;
          const getAmount = () => el.scrollWidth - window.innerWidth;

          const tween = gsap.to(el, {
            x: () => -getAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: () => "+=" + getAmount(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // depth parallax on each panel image, driven by the horizontal tween
          el.querySelectorAll<HTMLElement>(".proj-img").forEach((img) => {
            gsap.fromTo(
              img,
              { xPercent: -8 },
              {
                xPercent: 8,
                ease: "none",
                scrollTrigger: {
                  trigger: img,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(el, { x: 0 });
          };
        },
      );

      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <section id="work" ref={section} className="relative bg-bg py-20 md:py-0">
      {/* heading — sits above the pinned track on desktop */}
      <div className="shell pointer-events-none absolute inset-x-0 top-8 z-10 hidden items-end justify-between md:flex">
        <div>
          <span className="label">(Selected work)</span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none">
            Things I&rsquo;ve shipped
          </h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          Drag-free · scroll →
        </span>
      </div>

      {/* mobile heading */}
      <div className="shell mb-10 md:hidden">
        <span className="label">(Selected work)</span>
        <h2 className="mt-3 font-display text-[clamp(2rem,9vw,3rem)] font-extrabold leading-none">
          Things I&rsquo;ve shipped
        </h2>
      </div>

      <div className="md:flex md:h-svh md:items-center md:overflow-hidden">
        <div
          ref={track}
          className="flex flex-col gap-12 px-[var(--gutter)] md:w-max md:flex-row md:gap-8 md:px-[8vw] md:pt-20"
        >
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative w-full shrink-0 md:w-[46vw] lg:w-[40vw]"
              data-cursor="view"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-bg-2">
                <Image
                  src={p.image}
                  alt={`${p.title} — project screenshot`}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="proj-img scale-[1.18] object-cover object-top transition-transform duration-700 group-hover:scale-[1.24]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-ink backdrop-blur-md">
                  {p.kind}
                </span>
                <span className="absolute right-4 top-4 font-display text-3xl font-extrabold text-ink/30">
                  {p.index}
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-pretty text-ink-soft">
                    {p.blurb}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {p.year}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* end card */}
          <div className="flex w-full shrink-0 flex-col justify-center md:w-[28vw]">
            <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight">
              + more on
              <br />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lime underline-offset-8 hover:underline"
                data-cursor="open"
              >
                GitHub →
              </a>
            </p>
            <p className="mt-4 max-w-xs text-ink-soft">
              SyncNote, DocConverter, and a growing pile of side quests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
