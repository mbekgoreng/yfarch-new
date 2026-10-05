"use client";

import { useEffect, useRef } from "react";
import { process } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Process() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  /* a single quiet scroll-driven line that fills as you move through */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (lineRef.current) lineRef.current.style.transform = "scaleY(1)";
      return;
    }
    let raf = 0;
    let target = 0;
    let current = 0;
    const el = sectionRef.current;
    const line = lineRef.current;
    if (!el || !line) return;

    const frame = () => {
      raf = 0;
      current += (target - current) * 0.1;
      if (Math.abs(target - current) < 0.001) current = target;
      line.style.transform = `scaleY(${current})`;
      if (current !== target) raf = requestAnimationFrame(frame);
    };
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      target = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height - vh * 0.1)));
      if (!raf) raf = requestAnimationFrame(frame);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-paper py-28 md:py-40">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span>{t.process.eyebrow}</span>
          <span className="hidden sm:inline">{t.process.sixMovements}</span>
        </div>
        <Reveal>
          <h2 className="t-display mt-6 text-[clamp(2.6rem,8vw,7.5rem)]">{t.process.heading}</h2>
        </Reveal>

        <div className="relative mt-16 md:mt-24">
          {/* filling line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-ink/10 md:left-1/2" aria-hidden="true">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-ink"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <ol>
            {process.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={step.index} className="relative py-10 md:py-14">
                  {/* node */}
                  <span
                    className="absolute left-[4px] top-[4.3rem] block h-[7px] w-[7px] rounded-full bg-ink md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />
                  <div
                    className={`grid gap-3 pl-10 md:grid-cols-2 md:gap-24 md:pl-0 ${
                      flip ? "" : ""
                    }`}
                  >
                    <Reveal
                      className={`${
                        flip
                          ? "md:order-2 md:pl-16 md:text-left"
                          : "md:pr-16 md:text-right"
                      }`}
                    >
                      <div className="t-mono mb-3 text-ink/35">
                        {step.index} · {step.duration.toUpperCase()}
                      </div>
                      <h3 className="t-display text-[clamp(2rem,6vw,4.8rem)]">
                        {step.name}
                      </h3>
                    </Reveal>
                    <Reveal
                      delay={120}
                      className={`self-end ${
                        flip ? "md:order-1 md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <p className="t-statement max-w-md text-[1rem] text-ink/65 md:text-[1.1rem] md:[margin-inline:unset]">
                        {step.description}
                      </p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
