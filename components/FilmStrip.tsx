"use client";

import { useEffect, useRef, useState } from "react";
import Img from "./Img";

/* ------------------------------------------------------------------ */
/*  FILM STRIP — a project's images drifting horizontally, forever.    */
/*                                                                     */
/*  Two identical sets sit side by side and the track translates -50%, */
/*  so the loop has no visible seam. The duration is derived from the  */
/*  measured set width so the drift speed stays constant (and slow)    */
/*  no matter how many images a project has. Hovering pauses it.       */
/*                                                                     */
/*  Desktop: continuous marquee.  Mobile: native horizontal swipe      */
/*  (the marquee is switched off and the duplicate set hidden in CSS). */
/* ------------------------------------------------------------------ */

type Props = {
  images: string[];
  alt: string;
  /** frame height classes */
  frameClass?: string;
  /** per-item width classes */
  itemClass?: string;
  /** drift speed in px per second (desktop) */
  speed?: number;
  sizes?: string;
  /** small index chip prefix, e.g. "02" -> "02 / 03" */
  index?: string;
  eager?: boolean;
};

export default function FilmStrip({
  images,
  alt,
  frameClass = "h-[46vh] md:h-[58vh]",
  itemClass = "w-[80vw] md:w-[46vw] lg:w-[38vw]",
  speed = 52,
  sizes = "(min-width: 1024px) 38vw, (min-width: 768px) 46vw, 80vw",
  index,
  eager = false,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const setWidth = el.scrollWidth / 2; // two identical sets
      if (setWidth > 0) setDuration(Math.max(22, Math.round(setWidth / speed)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images, speed]);

  const set = (dup: boolean) => (
    <div
      className={dup ? "filmstrip-dup flex" : "flex"}
      aria-hidden={dup || undefined}
    >
      {images.map((src, i) => (
        <figure
          key={(dup ? "dup-" : "set-") + i}
          className={`${itemClass} shrink-0 pr-3 md:pr-5`}
        >
          <div className={`img-frame group relative overflow-hidden ${frameClass}`}>
            <Img
              src={src}
              alt={dup ? "" : `${alt} — image ${i + 1}`}
              sizes={sizes}
              eager={eager && i === 0}
              className="h-full w-full object-cover"
            />
            {index && (
              <span className="t-mono pointer-events-none absolute left-4 top-4 text-paper/70">
                {index} / {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <div className="filmstrip-track" ref={trackRef}>
      <div
        className="filmstrip"
        style={{ "--film-duration": `${duration}s` } as React.CSSProperties}
      >
        {set(false)}
        {set(true)}
      </div>
    </div>
  );
}
