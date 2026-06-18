"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ACHIEVEMENTS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Achievements() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".ach-card", {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="mb-14 flex items-baseline gap-4">
          <span className="label">(Recognition)</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <article
              key={a.title}
              className="ach-card group relative overflow-hidden rounded-2xl border border-line bg-bg-2/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-lime px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-widest text-bg">
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
