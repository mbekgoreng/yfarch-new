"use client";

/* ------------------------------------------------------------------ */
/*  SMOOTH SCROLL — Lenis, site-wide (Fase 2).                         */
/*                                                                     */
/*  Buttery inertial scrolling that makes the whole site feel           */
/*  expensive. Uses native scrolling under the hood, so the Walk        */
/*  scroll-scrub engine, sticky sections, IntersectionObservers and     */
/*  anchor jumps keep working unchanged. In-page anchors glide via      */
/*  lenis.scrollTo; cross-page hashes navigate normally. Disabled       */
/*  entirely when the user prefers reduced motion.                     */
/* ------------------------------------------------------------------ */

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      /* same-page anchors only — /#x links from other pages navigate normally */
      if (a.pathname !== window.location.pathname) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -8, duration: 1.4 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
