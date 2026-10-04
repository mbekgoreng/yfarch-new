"use client";

/* TESTIMONIAL — a single large quotation, editorial and quiet. No cards,
   no avatars, no star ratings: just the words, the name, the place. */

import { useState } from "react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-paper py-28 md:py-40">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span>06 — TESTIMONIAL</span>
          <span className="hidden sm:inline">
            {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-9">
            <Reveal key={i}>
              <blockquote className="t-statement text-[clamp(1.5rem,3.6vw,3rem)] !leading-[1.28] text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal key={`m-${i}`} delay={120}>
              <div className="t-mono mt-10 flex items-center gap-4 text-ink/45">
                <span className="block h-px w-10 bg-signal" aria-hidden="true" />
                {t.client} — {t.location}
              </div>
            </Reveal>
          </div>

          <div className="flex items-end gap-5 md:col-span-3 md:justify-end">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="t-mono border border-ink/15 px-5 py-3 text-ink/55 transition-colors duration-400 hover:border-ink hover:text-ink"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="t-mono border border-ink/15 px-5 py-3 text-ink/55 transition-colors duration-400 hover:border-ink hover:text-ink"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
