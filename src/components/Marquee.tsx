"use client";

import { SKILLS } from "@/lib/data";

function Group() {
  // one self-contained group; pr matches the internal gap so the seam
  // between two groups is identical to the spacing inside a group.
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {SKILLS.map((s, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-2xl font-semibold text-ink-soft sm:text-3xl">
            {s}
          </span>
          <span className="text-lime">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-2/40 py-5">
      {/* two identical groups → translateX(-50%) lands exactly on a seam */}
      <div
        className="flex w-max will-change-transform"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        <Group />
        <Group />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
