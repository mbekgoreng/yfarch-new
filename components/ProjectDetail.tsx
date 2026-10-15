"use client";

/* ------------------------------------------------------------------ */
/*  PROJECT DETAIL — the case-study page template (Fase 1).             */
/*                                                                     */
/*  One template for every project: cinematic hero, editorial meta      */
/*  table, narrative, asymmetric gallery (images + SVG drawings),       */
/*  next-project plate and a compact CTA. Content comes from lib/data;  */
/*  chrome labels come from t.projectPage (ID/EN/中文).                */
/* ------------------------------------------------------------------ */

import { projects, type Project } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import Img from "./Img";
import Reveal from "./Reveal";
import DayNight from "./DayNight";
import SectionDrawing from "./SectionDrawing";

function HeroMedia({ p }: { p: Project }) {
  const alt = `${p.name} — ${p.category}, ${p.location}`;
  if (p.daynight) {
    return (
      <DayNight
        day={p.daynight.day}
        night={p.daynight.night}
        alt={alt}
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
      />
    );
  }
  return (
    <Img
      src={p.hero}
      alt={alt}
      sizes="100vw"
      eager
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export default function ProjectDetail({ project: p }: { project: Project }) {
  const { t } = useI18n();
  const pp = t.projectPage;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const metaRows: [string, string][] = [
    [pp.meta.area, p.area],
    [pp.meta.location, p.location],
    [pp.meta.year, p.year],
    [pp.meta.category, p.category],
    [pp.meta.status, p.status],
    [pp.meta.elevation, p.elevation],
  ];

  const imageItems = p.gallery.filter((g) => g.src);
  const drawingItems = p.gallery.filter((g) => g.svg === "section");

  return (
    <>
      {/* ------------------------------ hero ------------------------------ */}
      <section className="relative h-[94svh] min-h-[560px] w-full overflow-hidden bg-ink">
        <HeroMedia p={p} />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/40"
          aria-hidden="true"
        />
        <a
          href="/#projects"
          className="t-mono absolute left-6 top-24 z-10 text-paper/60 transition-colors duration-300 hover:text-paper md:left-10"
        >
          {pp.backToProjects}
        </a>
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 md:pb-14">
          <Reveal>
            <div className="t-mono flex items-center gap-3 text-paper/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              {pp.eyebrow} — {p.index}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="t-display mt-5 text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.9] text-paper">
              {p.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="t-mono mt-5 text-paper/60">
              {p.category.toUpperCase()} — {p.location.toUpperCase()} — {p.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- meta table --------------------------- */}
      <section className="bg-paper px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {metaRows.map(([label, value], i) => (
            <Reveal key={label} delay={(i % 3) * 70}>
              <div className="border-t border-ink/15 pt-4">
                <div className="t-mono text-ink/40">{label}</div>
                <div className="mt-2 text-[1.35rem] font-light tracking-tight text-ink">
                  {value}
                </div>
              </div>
            </Reveal>
          ))}
          {p.services && (
            <Reveal delay={140}>
              <div className="border-t border-ink/15 pt-4">
                <div className="t-mono text-ink/40">{pp.meta.services}</div>
                <ul className="t-mono mt-3 space-y-1.5 text-ink/70">
                  {p.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------------------------- narrative ---------------------------- */}
      <section className="bg-paper px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="t-mono flex items-center gap-3 text-ink/40">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {pp.narrativeHeading}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="t-statement max-w-3xl text-[clamp(1.25rem,2.6vw,1.9rem)] font-light leading-[1.5] text-ink/85">
                {p.narrative}
              </p>
            </Reveal>
            {p.tagline && (
              <Reveal delay={140}>
                <p className="t-display mt-8 text-[clamp(1.4rem,3vw,2.2rem)] italic text-ink/50">
                  “{p.tagline}”
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------- gallery ----------------------------- */}
      {imageItems.length > 0 && (
        <section className="bg-paper px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <div className="t-mono mb-10 flex items-center gap-3 text-ink/40">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              {pp.galleryHeading}
            </div>
          </Reveal>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-12">
            {imageItems.map((g, i) => (
              <Reveal
                key={g.src}
                variant="mask"
                as="figure"
                delay={(i % 2) * 90}
                className={
                  i % 3 === 0
                    ? "md:col-span-12"
                    : i % 3 === 1
                      ? "md:col-span-7"
                      : "md:col-span-5"
                }
              >
                <div className="img-frame overflow-hidden">
                  <Img
                    src={g.src!}
                    alt={g.caption}
                    sizes="(min-width: 768px) 80vw, 100vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <figcaption className="t-mono mt-3 flex items-baseline justify-between gap-4 text-ink/45">
                  <span>{g.caption}</span>
                  <span className="shrink-0">{g.kind}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ----------------------------- drawings ----------------------------- */}
      <section className="bg-paper px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <div className="t-mono mb-10 flex items-center gap-3 text-ink/40">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {pp.drawingsHeading}
          </div>
        </Reveal>
        {drawingItems.length > 0 ? (
          <div className="grid gap-10">
            {drawingItems.map((g, i) => (
              <Reveal key={i} variant="mask" as="figure">
                <div className="img-frame border border-ink/12 bg-paper px-4 py-8 md:px-10 md:py-12">
                  <SectionDrawing />
                </div>
                <figcaption className="t-mono mt-3 flex items-baseline justify-between gap-4 text-ink/45">
                  <span>{g.caption}</span>
                  <span className="shrink-0">{g.kind}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border border-dashed border-ink/20 px-6 py-14 text-center md:py-20">
              <p className="t-mono mx-auto max-w-xl leading-relaxed text-ink/45">
                {pp.drawingsNote}
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* --------------------------- next project --------------------------- */}
      <a
        href={`/proyek/${next.slug}`}
        data-project-cursor
        className="group relative block h-[62vh] min-h-[420px] w-full overflow-hidden bg-ink"
        aria-label={`${pp.nextProject}: ${next.name}`}
      >
        <div className="ease-lux absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.04]">
          <Img
            src={next.hero}
            alt=""
            aria-hidden="true"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="t-mono flex items-center gap-3 text-paper/55">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {pp.nextProject} — {next.index}
          </div>
          <div className="t-display mt-4 text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.92] text-paper">
            {next.name}
          </div>
          <div className="t-mono mt-4 text-paper/60 transition-colors duration-300 group-hover:text-paper">
            {t.projects.viewProject}
          </div>
        </div>
      </a>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="bg-ink px-6 py-20 text-paper md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="t-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95]">
                {pp.startProject}
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="t-statement mt-5 max-w-md text-paper/60">{pp.startProjectSub}</p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Reveal delay={140}>
              <a
                href="/#contact"
                className="btn-paper t-mono inline-flex items-center gap-3 px-8 py-4 !tracking-[0.22em]"
              >
                {pp.startProjectCta}
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
