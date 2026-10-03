"use client";

import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionDrawing from "./SectionDrawing";
import DayNight from "./DayNight";
import ProjectRail from "./ProjectRail";
import { useAspect, type AspectClass } from "@/lib/useAspect";

/* ------------------------------------------------------------------ */
/*  SELECTED PROJECTS — a digital architecture monograph.             */
/*                                                                     */
/*  Every project leads with ONE dominant hero image (~70%) and lets   */
/*  a small cluster of supporting images (~30%) carry the rest. Each   */
/*  project is composed asymmetrically and alternates its rhythm, so   */
/*  scrolling feels like turning the pages of a publication rather     */
/*  than scanning a card grid.                                         */
/*                                                                     */
/*  Aspect-aware: tall 9:16 screens get a vertical editorial stack;    */
/*  landscape/squareish screens get the wide asymmetric monograph.     */
/* ------------------------------------------------------------------ */

function Img({
  src,
  alt,
  className = "",
  sizes = "100vw",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={`/images/${src}-1920.webp`}
      srcSet={`/images/${src}-960.webp 960w, /images/${src}-1920.webp 1920w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}

/* Project number + identity — shared heading block for every project */
function ProjectIdentity({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <div className="relative">
      {/* subtle sequence number, never louder than the name */}
      <Reveal>
        <div className="t-mono flex items-center gap-4 text-ink/35">
          <span className="block h-px w-10 bg-ink/25" aria-hidden="true" />
          {p.index} / 05
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h3 className="t-display mt-6 text-[clamp(2.6rem,8.5vw,7.5rem)] md:text-[clamp(3.6rem,9vw,9.5rem)] md:leading-[0.86]">
          {p.name}
        </h3>
      </Reveal>

      <Reveal delay={160}>
        <div className="t-mono mt-7 flex flex-wrap gap-x-10 gap-y-2">
          <span className="text-ink/70">{p.category.toUpperCase()}</span>
          <span className="text-ink/45">{p.location.toUpperCase()}</span>
          <span className="text-ink/45">{p.year}</span>
        </div>
      </Reveal>
    </div>
  );
}

/* Dominant hero image, ~70% width, alternating edge. Composed like the */
/* opening plate of a chapter. Composition varies per project so the    */
/* scroll rhythm keeps changing (article 08: left, right, full-bleed,   */
/* asymmetric, large cinematic).                                        */
function ProjectHero({ p, flip, portrait, seq }: { p: Project; flip: boolean; portrait: boolean; seq: number }) {
  /* composition presets — each project reads differently */
  const COMPOSERS = [
    { w: "md:w-[78%]", a: "md:mr-auto" },                     // 01 left plate
    { w: "md:w-[78%]", a: "md:ml-auto" },                     // 02 right plate
    { w: "md:w-full", a: "md:mx-0" },                         // 03 full-bleed cinematic
    { w: "md:w-[72%]", a: "md:mx-auto" },                     // 04 centered, composed
    { w: "md:w-[86%]", a: "md:mr-auto md:ml-[7%]" },          // 05 large cinematic
  ];
  const c = COMPOSERS[seq % COMPOSERS.length];

  const heroClass = portrait
    ? "w-full"
    : `${c.a} ${c.w}`;

  /* day/night crossfade needs the wrapper to carry the height (it owns h-full);
     plain heroes size themselves through the image aspect ratio. */
  const frameH = p.daynight
    ? portrait
      ? "h-[58vh]"
      : "h-[62vh] md:h-[72vh]"
    : "";

  return (
    <Reveal
      variant="mask"
      className={`img-frame relative mt-12 md:mt-16 ${heroClass} ${frameH}`}
    >
      <a href={`#${p.slug}`} aria-label={`${p.name} — view project`} className="group block">
        {p.daynight ? (
          <DayNight
            day={p.daynight.day}
            night={p.daynight.night}
            alt={`${p.name} — ${p.category}, ${p.location}`}
          />
        ) : (
          <Img
            src={p.hero}
            alt={`${p.name} — ${p.category}, ${p.location}`}
            className="aspect-[16/10] w-full object-cover md:aspect-[16/9]"
          />
        )}

        {/* quiet corner meta on the plate */}
        <span className="t-mono pointer-events-none absolute bottom-5 left-6 text-paper/80 md:left-8">
          {p.index} — {p.name}
        </span>
        <span className="t-mono pointer-events-none absolute bottom-5 right-6 text-paper/60 md:right-8">
          {p.elevation}
        </span>

        {/* VIEW PROJECT — emerges quietly on hover */}
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 md:p-8">
          <span className="t-mono flex translate-y-2 items-center gap-3 border border-paper/45 px-5 py-3 text-paper opacity-0 backdrop-blur-sm transition-all duration-700 hover:border-paper group-hover:translate-y-0 group-hover:opacity-100">
            VIEW PROJECT
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </a>
    </Reveal>
  );
}

/* Small supporting images + a one-line reading. Never compete with the hero. */
function ProjectSupport({ p, portrait }: { p: Project; portrait: boolean }) {
  const common = p.gallery.filter((g) => g.svg !== "section");
  const hasDrawing = p.gallery.some((g) => g.svg === "section");
  const drawing = p.gallery.find((g) => g.svg === "section");

  return (
    <div className={`grid gap-8 ${portrait ? "" : "md:grid-cols-12 md:gap-10"}`}>
      {common.slice(0, 2).map((g, gi) => (
        <Reveal
          key={gi}
          variant="mask"
          as="figure"
          delay={gi * 90}
          className={`img-frame group ${
            portrait
              ? ""
              : gi % 2 === 1
                ? "md:col-span-5 md:mt-20"
                : "md:col-span-7"
          }`}
        >
          <a href={`#${p.slug}`} className="group block">
            <div className="proj-media relative overflow-hidden">
              <Img
                src={g.src!}
                alt={`${p.name} — ${g.caption}`}
                sizes="(min-width: 768px) 45vw, 100vw"
                className={
                  g.wide
                    ? "aspect-[16/9] w-full object-cover"
                    : "aspect-[4/3] w-full object-cover"
                }
              />
              <span className="proj-index t-mono pointer-events-none absolute left-4 top-4 text-paper/70">
                {p.index} / {String(gi + 1).padStart(2, "0")}
              </span>
            </div>
            <figcaption className="t-mono mt-3 flex justify-between gap-4 text-ink/45">
              <span className="transition-colors duration-500 group-hover:text-ink">
                {g.caption.toUpperCase()}
              </span>
              <span className="shrink-0 text-ink/30">{g.kind}</span>
            </figcaption>
          </a>
        </Reveal>
      ))}

      {hasDrawing && (
        <Reveal
          variant="mask"
          as="figure"
          delay={140}
          className={`img-frame group ${
            portrait ? "" : "md:col-span-8 md:col-start-3"
          }`}
        >
          <div className="zoomable border border-ink/10 bg-paper-dim p-6 md:p-10">
            <SectionDrawing />
          </div>
          <figcaption className="t-mono mt-3 flex justify-between gap-4 text-ink/45">
            <span>{drawing!.caption.toUpperCase()}</span>
            <span className="shrink-0 text-ink/30">{drawing!.kind}</span>
          </figcaption>
        </Reveal>
      )}
    </div>
  );
}

function ProjectBlock({ p, flip, aspect, seq }: { p: Project; flip: boolean; aspect: AspectClass; seq: number }) {
  const portrait = aspect === "portrait";
  const align = portrait ? "" : flip ? "md:text-right md:items-end md:ml-auto" : "md:text-left";

  return (
    <article
      id={p.slug}
      className={`relative border-t border-ink/10 pt-16 md:pt-28`}
    >
      <div className={`px-6 md:px-10 ${portrait ? "" : "md:grid md:grid-cols-12 md:gap-6"}`}>
        {/* identity — full name plate */}
        <div className={portrait ? "" : flip ? "md:col-span-9 md:col-start-4" : "md:col-span-9"}>
          <ProjectIdentity p={p} flip={flip} />
        </div>
      </div>

      {/* dominant hero — asymmetric, ~70% */}
      <ProjectHero p={p} flip={flip} portrait={portrait} seq={seq} />

      {/* one-line narrative, quiet */}
      <div className="px-6 md:px-10">
        <Reveal delay={120}>
          <p className={`t-statement mt-10 max-w-xl text-[1.02rem] leading-relaxed text-ink/65 md:text-[1.15rem] ${
            portrait ? "" : flip ? "md:ml-auto md:text-right" : ""
          }`}>
            {p.narrative.split(". ")[0]}.
          </p>
        </Reveal>
      </div>

      {/* supporting images — ~30%, asymmetric cluster */}
      <div className="mt-12 px-6 md:mt-16 md:px-10">
        <ProjectSupport p={p} portrait={portrait} />
      </div>

      {/* view project — quiet row */}
      <div className="px-6 md:px-10">
        <Reveal delay={160}>
          <a
            href="#contact"
            className={`t-mono mt-14 inline-flex items-center gap-3 text-ink/50 transition-colors duration-500 hover:text-ink md:mt-20 ${
              portrait ? "" : flip ? "md:ml-auto md:text-right" : ""
            }`}
          >
            VIEW PROJECT
            <span aria-hidden="true" className="transition-transform duration-500 hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  const aspect = useAspect();
  const portrait = aspect === "portrait";
  const rail = projects.map((p) => ({
    slug: p.slug,
    index: p.index,
    name: p.name,
  }));

  return (
    <section id="projects" className="relative bg-paper pb-32 md:pb-48">
      {/* desktop-only project index, pinned in the right gutter */}
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-30 ${portrait ? "hidden" : "hidden lg:block"}`}>
        <div className="sticky top-1/2 flex -translate-y-1/2 justify-end pr-4">
          <div className="pointer-events-auto">
            <ProjectRail items={rail} />
          </div>
        </div>
      </div>

      {/* ---------------- editorial title page ---------------- */}
      <div className="px-6 pt-24 md:px-10 md:pt-40">
        <Reveal>
          <div className="t-mono flex flex-col gap-2 text-ink/45">
            <span className="flex items-center gap-4">
              <span className="block h-px w-10 bg-ink/25" aria-hidden="true" />
              WORKS
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="t-display mt-8 text-[clamp(3rem,10vw,9rem)] md:leading-[0.86]">
            SELECTED
            <br />
            PROJECTS
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="t-mono mt-10 flex gap-8 text-ink/45">
            <span>2022 — 2026</span>
            <span>0{projects.length} PROJECTS</span>
          </div>
        </Reveal>
      </div>
      {/* ---------------- end title page ---------------- */}

      {projects.map((p, i) => (
        <ProjectBlock key={p.slug} p={p} flip={i % 2 === 1} aspect={aspect} seq={i} />
      ))}
    </section>
  );
}
