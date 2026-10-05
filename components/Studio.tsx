"use client";

import { site } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/*  STUDIO — the practice. Editorial, quiet.                           */
/*                                                                     */
/*  Desktop: full-bleed statement, then a two-beat grid — description  */
/*  in the left column and facts as a right-aligned hairline list.     */
/*  Stats close the section as a sparse number row.                    */
/* ------------------------------------------------------------------ */

function SignalDot() {
  return (
    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
  );
}

export default function Studio() {
  const { t } = useI18n();
  const st = t.studio;
  return (
    <section id="studio" className="hairline-t bg-paper py-28 md:py-44">
      <div className="px-6 md:px-10">
        {/* eyebrow */}
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span className="flex items-center gap-3">
            <SignalDot />
            {st.eyebrow}
          </span>
          <span className="hidden sm:inline">{site.coordinates}</span>
        </div>

        {/* statement — full width, tall, left-aligned */}
        <Reveal>
          <h2 className="t-display mt-16 max-w-6xl text-[clamp(2.6rem,8vw,7.5rem)] !leading-[0.95] tracking-[-0.03em] md:mt-24">
            {st.statement.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </h2>
        </Reveal>

        {/* description + facts — balanced two columns */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <Reveal delay={100} className="md:col-span-7 md:col-start-2">
            <div className="max-w-xl">
              <p className="t-statement text-[1.05rem] leading-relaxed text-ink/75 md:text-[1.22rem] md:!leading-[1.55]">
                {st.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-3 md:col-start-10">
            <dl className="space-y-7">
              {st.facts.map(([k, v]) => (
                <div key={k} className="hairline-b pb-5">
                  <dt className="t-mono mb-2 text-ink/35">{k}</dt>
                  <dd className="t-mono text-ink/85">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* studio statistics — quiet number row */}
        <div className="mt-20 border-t border-ink/10 pt-10 md:mt-28">
          <div className="grid gap-10 sm:grid-cols-3 md:gap-8">
            {st.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="sm:col-span-1">
                  <div className="t-display text-[clamp(2.4rem,6vw,4.4rem)] leading-none">
                    {s.value}
                  </div>
                  <div className="t-mono mt-4 text-ink/45">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
