"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE, STATS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // count-up stats
      root.current
        ?.querySelectorAll<HTMLElement>("[data-count]")
        .forEach((el) => {
          const target = Number(el.dataset.count);
          if (Number.isNaN(target)) return;
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            onUpdate: () => {
              const dec = el.dataset.dec === "1";
              el.textContent = dec ? obj.v.toFixed(1) : String(Math.round(obj.v));
            },
          });
        });

      // timeline line draw
      gsap.from(".tl-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".tl-track",
          start: "top 70%",
          end: "bottom 75%",
          scrub: true,
        },
      });

      gsap.from(".tl-item", {
        x: -40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: { trigger: ".tl-track", start: "top 75%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-24 sm:py-32">
      <div className="shell">
        {/* stats band */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg p-7">
              <span className="font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-none text-ink">
                {s.glyph ? (
                  <span className="text-lime">{s.glyph}</span>
                ) : (
                  <>
                    <span data-count={s.num} data-dec={s.dec ? "1" : "0"}>
                      0
                    </span>
                    {s.suffix && <span className="text-lime">{s.suffix}</span>}
                  </>
                )}
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* timeline */}
        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <span className="label">(Experience)</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.95]">
              Where I&rsquo;ve been building.
            </h2>
          </div>

          <div className="tl-track relative pl-8">
            <span className="tl-line absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-lime" />
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="tl-item relative mb-12 last:mb-0">
                <span className="absolute -left-8 top-1.5 h-2 w-2 rounded-full bg-lime ring-4 ring-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {e.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-lime">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-ink-soft">
                  {e.org} · {e.place}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-ink-soft">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-line-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
