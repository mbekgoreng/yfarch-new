"use client";

import Reveal from "./Reveal";
import { useI18n } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  INTERLUDE — the dark breathing space between the cinematic hero    */
/*  and the editorial monograph.                                       */
/*                                                                     */
/*  Reduces the unexplained empty black area after the walkthrough and */
/*  turns it into an intentional, editorial plate.                     */
/* ------------------------------------------------------------------ */

export default function Interlude() {
  const { t } = useI18n();
  /* disciplines is a compact slash line already in the dict */
  const d = t.interlude.disciplines;
  /* split into words so the / separators stay faint */
  const parts = d.split("/").map((s) => s.trim());
  return (
    <section className="relative flex min-h-[38vh] flex-col justify-center overflow-hidden bg-ink text-paper md:min-h-[46vh]">
      {/* faint grain for cinematic texture */}
      <div className="walk-grain pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />

      <div className="relative px-6 md:px-10">
        <Reveal>
          <div className="t-mono text-paper/40">
            <span className="inline-flex items-center gap-4">
              <span className="block h-px w-10 bg-paper/25" aria-hidden="true" />
              {t.interlude.eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="t-display mt-8 text-[clamp(2.2rem,5.5vw,4.5rem)] text-paper md:text-6xl md:leading-[0.9]">
            {parts[0]}
            <span className="text-paper/55"> / </span>
            {parts[1]}
            <span className="text-paper/55"> / </span>
            {parts[2]}
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="t-mono mt-8 text-paper/40">{t.interlude.year}</div>
        </Reveal>
      </div>
    </section>
  );
}
