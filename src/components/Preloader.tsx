"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const finish = () => {
        window.dispatchEvent(new Event("loader:done"));
        setGone(true);
      };

      if (reduce) {
        finish();
        return;
      }

      document.body.style.overflow = "hidden";
      const counter = { v: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          finish();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current)
            countRef.current.textContent = String(Math.round(counter.v)).padStart(
              3,
              "0",
            );
        },
      })
        .to(".pl-word", { yPercent: -110, duration: 0.6, ease: "power3.in" }, "+=0.15")
        .to(
          ".pl-count",
          { yPercent: 110, duration: 0.6, ease: "power3.in" },
          "<",
        )
        .to(
          ".pl-panel",
          {
            scaleY: 0,
            duration: 0.9,
            ease: "power4.inOut",
            transformOrigin: "top",
            stagger: 0.08,
          },
          "-=0.2",
        );
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div ref={root} className="fixed inset-0 z-overlay" aria-hidden>
      <div className="absolute inset-0 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="pl-panel h-full flex-1 bg-bg-2" />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="overflow-hidden">
          <h2 className="pl-word font-display text-[clamp(2.5rem,9vw,6rem)] font-extrabold text-ink">
            Sahil&nbsp;Bajaj
          </h2>
        </div>
        <div className="mt-4 overflow-hidden">
          <span className="pl-count block font-mono text-sm tracking-[0.4em] text-lime">
            <span ref={countRef}>000</span> / 100
          </span>
        </div>
      </div>
    </div>
  );
}
