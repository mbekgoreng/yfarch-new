"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import Img from "./Img";
import DayNight from "./DayNight";
import { useAspect } from "@/lib/useAspect";

/* ------------------------------------------------------------------ */
/*  SELECTED PROJECTS — the editorial browse system.                   */
/*                                                                     */
/*  One fixed layout (no mode toggle):                                 */
/*    FEATURED GRID — the two newest projects as large editorial       */
/*               cards, staggered like a magazine spread.              */
/*    INDEX LIST  — the remaining projects as neat ruled rows with     */
/*               thumbnail, title and right-aligned metadata.          */
/*                                                                     */
/*  Then a full-bleed cinematic FEATURED PROJECT plate.                */
/* ------------------------------------------------------------------ */

function SignalDot() {
  return (
    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
  );
}

/* Auto day/night breathing kicks in only once the portfolio reaches
   10+ projects (Boss's rule). Below that, heros stay static. Returns
   props for DayNight — or null when the project has no night render. */
const DAYNIGHT_GATE = 10;
function daynightProps(p: Project) {
  if (projects.length < DAYNIGHT_GATE) return null;
  return p.daynight ?? null;
}

/* --------------------------- FEATURED GRID -------------------------- */

function FeaturedCard({
  p,
  className = "",
  delay = 0,
}: {
  p: Project;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal variant="mask" delay={delay} className={className}>
      <a href={`/proyek/${p.slug}`} data-project-cursor className="group block">
        <div className="img-frame relative overflow-hidden">
          {daynightProps(p) ? (
            <DayNight
              day={p.daynight!.day}
              night={p.daynight!.night}
              alt={`${p.name} — ${p.category}, ${p.location}`}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="aspect-[4/3] w-full"
            />
          ) : (
            <Img
              src={p.hero}
              alt={`${p.name} — ${p.category}, ${p.location}`}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
          <div className="flex items-baseline gap-4">
            <span className="t-mono text-ink/40">{p.index}</span>
            <h3 className="t-display text-[clamp(1.4rem,2.2vw,2rem)] leading-none">
              {p.name}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="t-mono text-ink/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink"
          >
            →
          </span>
        </div>
        <p className="t-mono mt-2 pl-9 text-[11px] uppercase tracking-[0.14em] text-ink/50">
          {p.location} — {p.year} — {p.area}
        </p>
      </a>
    </Reveal>
  );
}

function FeaturedGrid() {
  const [first, second] = projects;
  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
      <FeaturedCard p={first} className="md:col-span-7" />
      <FeaturedCard p={second} className="md:col-span-5 md:mt-24" delay={90} />
    </div>
  );
}

/* ----------------------------- INDEX LIST --------------------------- */

function ProjectList() {
  const rest = projects.slice(2);
  if (rest.length === 0) return null;
  return (
    <div className="mt-20 border-b border-ink/12 md:mt-28">
      {rest.map((p, i) => (
        <Reveal key={p.slug} delay={i * 60}>
          <a
            href={`/proyek/${p.slug}`}
            data-project-cursor
            className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-4 border-t border-ink/12 py-6 md:grid-cols-[56px_340px_1fr_auto_40px] md:gap-x-8 md:py-7"
          >
            <span className="t-mono hidden text-ink/40 md:block">{p.index}</span>
            <span className="img-frame relative col-span-2 block overflow-hidden md:col-span-1">
              <Img
                src={p.hero}
                alt={`${p.name} — ${p.category}, ${p.location}`}
                sizes="(min-width: 768px) 340px, 100vw"
                className="aspect-[16/9] w-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.05] md:aspect-[16/10]"
              />
            </span>
            <span className="min-w-0">
              <span className="flex items-baseline gap-3">
                <span className="t-mono text-ink/40 md:hidden">{p.index}</span>
                <span className="t-display block text-[clamp(1.5rem,3.4vw,2.9rem)] leading-none">
                  {p.name}
                </span>
              </span>
              <span className="t-mono mt-3 block text-[11px] uppercase tracking-[0.14em] text-ink/50">
                {p.location}
                <span className="md:hidden"> — {p.year}</span>
              </span>
            </span>
            <span className="t-mono hidden text-right text-[11px] uppercase leading-5 tracking-[0.14em] text-ink/50 md:block">
              {p.category}
              <br />
              {p.year} — {p.area}
            </span>
            <span
              aria-hidden="true"
              className="t-display text-2xl text-ink/35 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink"
            >
              →
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

/* -------------------------- FEATURED PLATE ------------------------- */

function FeaturedPlate() {
  const { t } = useI18n();
  const p = projects.find((x) => x.slug === "villa-samudra") ?? projects[0];

  return (
    <div className="mt-24 md:mt-40">
      <Reveal variant="mask" className="img-frame relative h-[68vh] w-full md:h-[88vh]">
        {daynightProps(p) ? (
          <DayNight
            day={p.daynight!.day}
            night={p.daynight!.night}
            alt={`${p.name} — ${p.category}, ${p.location}`}
            sizes="100vw"
            className="h-full w-full"
          />
        ) : (
          <Img
            src={p.hero}
            alt={`${p.name} — ${p.category}, ${p.location}`}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <Reveal>
            <div className="t-mono flex items-center gap-3 text-paper/70">
              <SignalDot />
              {t.projects.featuredPlate}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h3 className="t-display mt-5 text-[clamp(2.6rem,8vw,7rem)] text-paper">
              {p.name}
            </h3>
          </Reveal>
          <Reveal delay={150}>
            <p className="t-statement mt-4 max-w-md text-[1.05rem] text-paper/75 md:text-[1.2rem]">
              {p.tagline}
            </p>
          </Reveal>
          <Reveal delay={210}>
            <a
              href={`/proyek/${p.slug}`}
              data-project-cursor
              className="btn-paper t-mono mt-8 inline-flex w-fit items-center gap-3 px-8 py-4 !tracking-[0.22em]"
            >
              {t.projects.viewProject} <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        {/* subtle index navigation */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 md:bottom-12 md:right-12">
          {projects.map((proj, i) => (
            <span key={proj.slug} className="flex items-center gap-3">
              {i > 0 && <span className="block h-px w-3 bg-paper/30" aria-hidden="true" />}
              <span
                className={`t-mono transition-colors duration-500 ${
                  proj.slug === p.slug ? "text-paper" : "text-paper/40"
                }`}
              >
                {proj.index}
              </span>
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------ SECTION ---------------------------- */

export default function Projects() {
  const { t } = useI18n();
  const aspect = useAspect();
  const portrait = aspect === "portrait";

  /* restrained cursor label — desktop pointer-fine only */
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorOn, setCursorOn] = useState(false);
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const loop = () => {
      raf = 0;
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(x - cx) > 0.4 || Math.abs(y - cy) > 0.4) raf = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setCursorOn(!!t?.closest("[data-project-cursor]"));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" className="relative bg-paper pb-32 md:pb-48">
      <div
        ref={cursorRef}
        className={`proj-cursor ${cursorOn ? "on" : ""}`}
        aria-hidden="true"
      >
        <span className="proj-cursor-label t-mono">
          {t.projects.viewProject} <span aria-hidden="true">→</span>
        </span>
      </div>

      <div className="px-6 pt-28 md:px-10 md:pt-44">
        {/* ---------------- editorial intro ---------------- */}
        <div className={`grid gap-8 ${portrait ? "" : "md:grid-cols-12 md:gap-10 md:items-end"}`}>
          <div className={portrait ? "" : "md:col-span-7"}>
            <Reveal>
              <div className="t-mono flex items-center gap-3 text-ink/45">
                <SignalDot />
                {t.projects.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-display mt-8 text-[clamp(2.8rem,9vw,7.6rem)] md:leading-[0.88]">
                {t.projects.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>
          <div className={portrait ? "" : "md:col-span-4 md:col-start-9"}>
            <Reveal delay={140}>
              <p className="t-statement text-[1.02rem] leading-relaxed text-ink/60 md:text-[1.15rem]">
                {t.projects.copy}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------------- browse system: grid + list ---------------- */}
        <div className="mt-14 md:mt-20">
          <FeaturedGrid />
          <ProjectList />
        </div>
      </div>

      {/* ---------------- cinematic featured plate ---------------- */}
      <FeaturedPlate />
    </section>
  );
}
