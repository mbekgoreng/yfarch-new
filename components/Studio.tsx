import { studio, site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Studio() {
  return (
    <section id="studio" className="hairline-t bg-paper py-32 md:py-48">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span>05 — STUDIO</span>
          <span className="hidden sm:inline">{site.coordinates}</span>
        </div>

        <Reveal>
          <h2 className="t-statement mt-14 max-w-5xl text-[clamp(2.2rem,6.5vw,5.8rem)] !leading-[1.04] tracking-[-0.03em]">
            WE DESIGN
            <br />
            SPACES FOR{" "}
            <span className="font-normal italic tracking-[-0.01em]">living</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <Reveal delay={100} className="md:col-span-5 md:col-start-6">
            <p className="t-statement text-[1.05rem] leading-relaxed text-ink/70 md:text-[1.2rem]">
              {studio.description}
            </p>
          </Reveal>
          <Reveal delay={200} className="md:col-span-2 md:col-start-11">
            <dl className="space-y-6">
              {studio.facts.map(([k, v]) => (
                <div key={k} className="hairline-b pb-4">
                  <dt className="t-mono mb-1.5 text-ink/35">{k}</dt>
                  <dd className="t-mono text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
