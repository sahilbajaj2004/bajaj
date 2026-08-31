"use client";

import { FAQS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="mb-14 flex items-baseline gap-4">
          <span className="label">(FAQ)</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.95]">
              Common questions, straight answers.
            </h2>
            <p className="mt-4 max-w-sm text-ink-soft">
              Everything about who I am, what I build, and how to work with me —
              clearly stated for people and search engines alike.
            </p>
          </div>

          <div className="divide-y divide-line">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group py-5"
                open={f.q === FAQS[0].q}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                  <span className="mt-1 shrink-0 text-lime transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-pretty text-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
