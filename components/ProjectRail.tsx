"use client";

/* ------------------------------------------------------------------ */
/*  PROJECT RAIL — desktop-only index for the works section            */
/*                                                                     */
/*  A narrow stack of drawing-style ticks pinned in the right gutter.  */
/*  Deliberately thin (max 20px) so it lives inside the 40px page      */
/*  gutter and never collides with the spec sheet. The project name    */
/*  appears on hover as an absolutely-positioned label, so revealing   */
/*  it never shifts the ticks.                                         */
/* ------------------------------------------------------------------ */

import { useEffect, useState } from "react";

type Item = { slug: string; index: string; name: string };

export default function ProjectRail({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.slug))
      .filter((e): e is HTMLElement => !!e);
    if (!els.length) return;

    /* the active project is the one crossing a thin band near the middle */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Projects" className="flex flex-col items-end gap-4">
      {items.map((it) => {
        const on = active === it.slug;
        return (
          <a
            key={it.slug}
            href={`#${it.slug}`}
            aria-current={on ? "true" : undefined}
            className="group relative flex h-3 items-center justify-end"
          >
            <span className="t-mono pointer-events-none absolute right-7 whitespace-nowrap border border-ink/10 bg-paper/95 px-2 py-1 text-[0.6rem] tracking-[0.16em] text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              {it.index} · {it.name}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                on
                  ? "w-5 bg-ink"
                  : "w-2.5 bg-ink/30 group-hover:w-4 group-hover:bg-ink/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
