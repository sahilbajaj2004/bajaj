"use client";

import { SKILLS } from "@/lib/data";

export default function Marquee() {
  const row = [...SKILLS, ...SKILLS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-2/40 py-5">
      <div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-semibold text-ink-soft sm:text-3xl">
              {s}
            </span>
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
