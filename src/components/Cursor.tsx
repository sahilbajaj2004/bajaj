"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Blend-mode follower cursor. Grows + labels on interactive targets
 * carrying [data-cursor]. Only mounts on fine pointers.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  // 1. decide whether to mount at all
  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine);
  }, []);

  // 2. wire gsap ONLY once the nodes are actually in the DOM
  useEffect(() => {
    if (!enabled || !ring.current || !dot.current) return;
    document.documentElement.classList.add("has-cursor");

    const xTo = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const dxTo = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const dyTo = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });

    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dxTo(e.clientX);
      dyTo(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]",
      );
      const txt = t?.getAttribute("data-cursor") ?? "";
      setLabel(t ? txt : "");
      gsap.to(ring.current, {
        scale: t ? (txt ? 2.6 : 1.9) : 1,
        duration: 0.35,
        ease: "power3",
      });
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-cursor"
      style={{ mixBlendMode: "difference" }}
      aria-hidden
    >
      <div
        ref={ring}
        className="absolute -left-5 -top-5 grid h-10 w-10 place-items-center rounded-full border border-white/90"
      >
        {label && (
          <span className="font-mono text-[8px] uppercase tracking-widest text-white">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dot}
        className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-white"
      />
    </div>
  );
}
