"use client";

import { useEffect, useRef, useState } from "react";
import { projects, projectImages, worksIntro, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import FilmStrip from "./FilmStrip";
import Img from "./Img";
import { useAspect } from "@/lib/useAspect";

/* ------------------------------------------------------------------ */
/*  SELECTED PROJECTS — the editorial browse system.                   */
/*                                                                     */
/*  Two modes, one toggle:                                             */
/*    FEATURED — one project dominates (~70% of the visual area) as a  */
/*               drifting film strip, with its metadata beside it.     */
/*    INDEX    — every project as an asymmetric magazine spread.       */
/*                                                                     */
/*  Then a full-bleed cinematic FEATURED PROJECT plate.                */
/* ------------------------------------------------------------------ */

function SignalDot() {
  return (
    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
  );
}

/* Compact stacked metadata — area / location / year, then the services. */
function ProjectMeta({ p }: { p: Project }) {
  return (
    <div className="t-mono space-y-1.5 text-ink/55">
      <div className="text-ink/75">{p.area.toUpperCase()}</div>
      <div>{p.location.toUpperCase()}</div>
      <div>{p.year}</div>
      {p.services && (
        <ul className="mt-6 space-y-1 text-ink/45">
          {p.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ----------------------------- FEATURED ---------------------------- */

function FeaturedView({
  index,
  setIndex,
  portrait,
}: {
  index: number;
  setIndex: (i: number) => void;
  portrait: boolean;
}) {
  const p = projects[index];
  const images = projectImages(p);

  return (
    <div>
      <div className={`grid gap-8 ${portrait ? "" : "md:grid-cols-12 md:gap-10 md:items-end"}`}>
        {/* metadata — ~30% */}
        <div className={portrait ? "" : "md:col-span-4"}>
          <Reveal>
            <div className="t-mono flex items-center gap-3 text-ink/45">
              <SignalDot />
              {p.index} — FEATURED
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="t-display mt-6 text-[clamp(2.4rem,7vw,5.4rem)] md:leading-[0.9]">
              {p.name}
            </h3>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-7">
              <ProjectMeta p={p} />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#contact"
              data-project-cursor
              className="t-mono mt-9 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-ink/70 transition-colors duration-500 hover:border-ink hover:text-ink"
            >
              VIEW PROJECT <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        {/* film strip — ~70%  (min-w-0 so the max-content strip never
            forces the grid item — and the page — to overflow) */}
        <div className={`min-w-0 ${portrait ? "mt-4" : "md:col-span-8"}`}>
          <FilmStrip
            images={images}
            alt={`${p.name} — ${p.category}, ${p.location}`}
            index={p.index}
          />
        </div>
      </div>

      {/* project selector — a red rule marks the active one */}
      <div className="mt-10 flex flex-wrap items-center gap-7 md:mt-14 md:gap-9">
        {projects.map((proj, i) => (
          <button
            key={proj.slug}
            onClick={() => setIndex(i)}
            aria-current={i === index ? "true" : undefined}
            aria-label={`Show ${proj.name}`}
            className={`t-mono relative pb-1.5 transition-colors duration-500 ${
              i === index ? "text-ink" : "text-ink/35 hover:text-ink/65"
            }`}
          >
            {proj.index}
            <span
              className={`absolute inset-x-0 bottom-0 h-px origin-left bg-signal transition-transform duration-500 ${
                i === index ? "scale-x-100" : "scale-x-0"
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- INDEX ----------------------------- */

/* Asymmetric magazine spread — varied widths, offsets and (mild) ratios.
   All frames stay landscape so wide renders are never heavily cropped. */
const INDEX_LAYOUT = [
  { span: "md:col-span-8", ratio: "aspect-[16/10]", mt: "" },
  { span: "md:col-span-4", ratio: "aspect-[4/3]", mt: "md:mt-16" },
  { span: "md:col-span-5", ratio: "aspect-[3/2]", mt: "" },
  { span: "md:col-span-7", ratio: "aspect-[16/9]", mt: "md:mt-20" },
  { span: "md:col-span-6 md:col-start-4", ratio: "aspect-[16/10]", mt: "" },
];

function IndexView() {
  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-8">
      {projects.map((p, i) => {
        const l = INDEX_LAYOUT[i % INDEX_LAYOUT.length];
        return (
          <Reveal
            key={p.slug}
            variant="mask"
            as="figure"
            delay={(i % 2) * 90}
            className={`img-frame group ${l.span} ${l.mt}`}
          >
            <a href="#contact" data-project-cursor className="group block">
              <div className="relative overflow-hidden">
                <Img
                  src={p.hero}
                  alt={`${p.name} — ${p.category}, ${p.location}`}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className={`${l.ratio} w-full object-cover`}
                />
                <span className="proj-index t-mono pointer-events-none absolute left-4 top-4 text-paper/70">
                  {p.index}
                </span>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="t-display text-[clamp(1.15rem,2.4vw,1.9rem)]">{p.name}</span>
                <span className="t-mono shrink-0 text-ink/40">{p.year}</span>
              </figcaption>
              <div className="t-mono mt-2 text-ink/40">
                {p.category.toUpperCase()} — {p.location.toUpperCase()}
              </div>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}

/* -------------------------- FEATURED PLATE ------------------------- */

function FeaturedPlate() {
  const p = projects.find((x) => x.slug === "villa-samudra") ?? projects[0];

  return (
    <div className="mt-24 md:mt-40">
      <Reveal variant="mask" className="img-frame relative h-[68vh] w-full md:h-[88vh]">
        <Img
          src={p.hero}
          alt={`${p.name} — ${p.category}, ${p.location}`}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <Reveal>
            <div className="t-mono flex items-center gap-3 text-paper/70">
              <SignalDot />
              FEATURED PROJECT
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
              href="#contact"
              data-project-cursor
              className="btn-paper t-mono mt-8 inline-flex w-fit items-center gap-3 px-8 py-4 !tracking-[0.22em]"
            >
              VIEW PROJECT <span aria-hidden="true">→</span>
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
  const [mode, setMode] = useState<"featured" | "index">("featured");
  const [index, setIndex] = useState(0);
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
          VIEW PROJECT <span aria-hidden="true">→</span>
        </span>
      </div>

      <div className="px-6 pt-28 md:px-10 md:pt-44">
        {/* ---------------- editorial intro ---------------- */}
        <div className={`grid gap-8 ${portrait ? "" : "md:grid-cols-12 md:gap-10 md:items-end"}`}>
          <div className={portrait ? "" : "md:col-span-7"}>
            <Reveal>
              <div className="t-mono flex items-center gap-3 text-ink/45">
                <SignalDot />
                {worksIntro.label}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-display mt-8 text-[clamp(2.8rem,9vw,7.6rem)] md:leading-[0.88]">
                {worksIntro.headline.map((line) => (
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
                {worksIntro.copy}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------------- mode toggle ---------------- */}
        <Reveal delay={180}>
          <div className="mode-toggle t-mono mt-14 flex items-center gap-8 md:mt-20">
            {(["featured", "index"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`relative pb-1.5 transition-colors duration-500 ${
                  mode === m ? "text-ink" : "text-ink/35 hover:text-ink/60"
                }`}
              >
                {m.toUpperCase()}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-signal transition-transform duration-500 ${
                    mode === m ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* ---------------- browse system ---------------- */}
        <div className="mt-12 md:mt-16">
          {mode === "featured" ? (
            <FeaturedView index={index} setIndex={setIndex} portrait={portrait} />
          ) : (
            <IndexView />
          )}
        </div>
      </div>

      {/* ---------------- cinematic featured plate ---------------- */}
      <FeaturedPlate />
    </section>
  );
}
