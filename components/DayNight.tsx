"use client";

/* ------------------------------------------------------------------ */
/*  DAY / NIGHT — auto-playing day↔night crossfade                     */
/*                                                                     */
/*  Two renderings of the same view (siang & malam) stacked, with a    */
/*  slow opacity crossfade so the house appears to move from daylight  */
/*  to night on its own. Advances automatically while on screen; the   */
/*  visitor can also click to flip.                                    */
/*  Respects prefers-reduced-motion (no autoplay — manual only).       */
/* ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from "react";

const CROSSFADE_MS = 2000;
const HOLD_MS = 4200;

type Props = {
  day: string;
  night?: string;
  alt: string;
  /** sizing classes go on the wrapper — width / aspect-ratio / height */
  className?: string;
  sizes?: string;
  eager?: boolean;
};

export default function DayNight({
  day,
  night,
  alt,
  className = "",
  sizes = "100vw",
  eager = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [nightOn, setNightOn] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);

  /* reduced motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  /* only animate while the frame is actually on screen */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* autoplay: day → night → day … */
  useEffect(() => {
    if (reduced || !visible) return;
    const id = setInterval(() => setNightOn((v) => !v), HOLD_MS);
    return () => clearInterval(id);
  }, [reduced, visible]);

  const layer = (src: string, primary: boolean) => (
    <img
      src={`/images/${src}-1920.webp`}
      srcSet={`/images/${src}-960.webp 960w, /images/${src}-1920.webp 1920w`}
      sizes={sizes}
      alt={primary ? alt : ""}
      aria-hidden={!primary}
      loading={primary && eager ? "eager" : "lazy"}
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );

  /* no night render — static frame, no HUD */
  if (!night) {
    return (
      <img
        src={`/images/${day}-1920.webp`}
        srcSet={`/images/${day}-960.webp 960w, /images/${day}-1920.webp 1920w`}
        sizes={sizes}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <div
      ref={ref}
      className={`dn-frame relative overflow-hidden ${className}`}
      onClick={() => setNightOn((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setNightOn((v) => !v);
        }
      }}
      aria-label={`${alt} — siang dan malam, klik untuk berganti.`}
    >
      {/* day */}
      {layer(day, true)}

      {/* night — crossfades in on top */}
      <div
        className="absolute inset-0"
        style={{
          opacity: nightOn ? 1 : 0,
          transition: reduced
            ? "none"
            : `opacity ${CROSSFADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          willChange: "opacity",
        }}
      >
        {layer(night!, false)}
      </div>

      {/* day / night HUD — top right. Dark pill keeps it readable over both
          the bright day sky and the dark night render. */}
      <div className="t-mono absolute right-5 top-5 flex items-center gap-3 rounded-full border border-paper/25 bg-ink/45 px-3.5 py-1.5 text-paper backdrop-blur-sm md:right-8 md:top-7">
        <span
          className="transition-opacity duration-500"
          style={{ opacity: nightOn ? 0.45 : 1 }}
        >
          SIANG
        </span>
        <span className="relative flex h-3 w-8 items-center rounded-full border border-paper/45">
          <span
            className="absolute block h-1.5 w-1.5 rounded-full bg-paper"
            style={{
              left: nightOn ? "calc(100% - 0.675rem)" : "0.3rem",
              transition: reduced
                ? "none"
                : `left ${CROSSFADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          />
        </span>
        <span
          className="transition-opacity duration-500"
          style={{ opacity: nightOn ? 1 : 0.45 }}
        >
          MALAM
        </span>
      </div>
    </div>
  );
}
