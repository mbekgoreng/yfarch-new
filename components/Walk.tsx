"use client";

/* ------------------------------------------------------------------ */
/*  WALK — interactive scroll-scrubbed walkthrough (chapter HUD style) */
/*                                                                     */
/*  Ported from the static site (web yfarch / villa.js + villa.css):   */
/*  a real walkthrough video scrubbed by scroll, exterior → interior,  */
/*  with chapter captions that swap as the tour progresses (ID/EN/中文 */
/*  content preserved in Indonesian), progress rail + timecode.        */
/*                                                                     */
/*  Track: 1000vh (desktop) / 600vh (mobile).                          */
/*  Smoothing: lerp in a single rAF loop — super-smooth scrub.         */
/* ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";

const TRACK_VH_DESKTOP = 1000;
const TRACK_VH_MOBILE = 600;

/* chapters: start/end are fractions of the video progress */
const CHAPTERS = [
  {
    eyebrow: "01 / YF ARCHITECT",
    title: "Ruang yang tenang. Detail yang berarti.",
    body: "Kami merancang hunian yang menyatukan karakter, fungsi, dan ketepatan konstruksi.",
    start: 0,
    end: 0.19,
    cue: true,
  },
  {
    eyebrow: "02 / FASAD",
    title: "Tegas dari luar, hangat saat didekati.",
    body: "Massa, bukaan, dan material membentuk identitas yang bersih tanpa kehilangan rasa.",
    start: 0.19,
    end: 0.38,
    align: "right",
  },
  {
    eyebrow: "03 / AMBANG",
    title: "Transisi yang terasa alami.",
    body: "Kamera bergerak melalui pintu dan sirkulasi nyata — mengikuti cara ruang benar-benar dialami.",
    start: 0.38,
    end: 0.6,
  },
  {
    eyebrow: "04 / RUANG TAMU",
    title: "Cahaya, proporsi, dan material dalam satu ritme.",
    body: "Ruang bersama dibuat lapang, tenang, dan tetap hangat untuk keseharian.",
    start: 0.6,
    end: 0.81,
    align: "right",
  },
  {
    eyebrow: "05 / DAPUR",
    title: "Detail presisi untuk hidup sehari-hari.",
    body: "Fungsi yang efisien dibingkai material alami dan pencahayaan yang lembut.",
    start: 0.81,
    end: 1.01,
  },
];

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

export default function Walk() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const railFillRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<(HTMLElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);
  const [trackVh, setTrackVh] = useState(TRACK_VH_DESKTOP);
  const [videoSrc, setVideoSrc] = useState("/video/walk-desktop.mp4");
  const [poster, setPoster] = useState("/images/walk-poster-desktop.webp");

  /* responsive: track length + video source + poster */
  useEffect(() => {
    const set = () => {
      const small = window.innerWidth < 900;
      setTrackVh(small ? TRACK_VH_MOBILE : TRACK_VH_DESKTOP);
      setVideoSrc(small ? "/video/walk-mobile.mp4" : "/video/walk-desktop.mp4");
      setPoster(small ? "/images/walk-poster-mobile.webp" : "/images/walk-poster-desktop.webp");
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  /* --------------------- the scrub engine ------------------------- */
  useEffect(() => {
    if (trackVh === undefined) return;
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    let trackTop = 0;
    let trackH = 1;
    let target = 0;
    let current = 0;
    let raf = 0;
    let running = false;
    let duration = 0;

    const measure = () => {
      const r = track.getBoundingClientRect();
      trackTop = r.top + window.scrollY;
      trackH = track.offsetHeight - window.innerHeight;
      onScroll();
    };

    const onScroll = () => {
      target = clamp01((window.scrollY - trackTop) / trackH);
      kick();
    };

    const timecode = (sec: number) =>
      "00:" + String(Math.max(0, Math.floor(sec))).padStart(2, "0");

    const frame = () => {
      raf = 0;

      /* Some browsers (Chrome) can reach HAVE_METADATA before this effect
         attaches its 'loadedmetadata' listener — especially with dev-mode
         double-mount. Never rely on the event alone: also read duration
         directly once the video is ready. */
      if (duration === 0 && video.readyState >= 1) {
        const d = video.duration;
        if (isFinite(d) && d > 1) {
          duration = d;
          setReady(true);
        }
      }

      const diff = target - current;
      /* ultra-low lerp factor = heavy smoothing = buttery scrub */
      current =
        Math.abs(diff) < 0.0003 ? target : current + diff * 0.055;

      /* video scrub */
      if (duration > 0 && video.readyState >= 1) {
        try {
          const t = current * Math.max(0.01, duration - 0.04);
          if ("fastSeek" in video && video.fastSeek) {
            if (Math.abs(video.currentTime - t) > 0.02) video.fastSeek(t);
          } else {
            video.currentTime = t;
          }
        } catch {
          /* seek not ready yet */
        }
      }

      /* chapters — active class only (opacity handled by CSS transition) */
      chapterRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = CHAPTERS[i];
        const on = current >= c.start && current < c.end;
        if (on !== el.classList.contains("active"))
          el.classList.toggle("active", on);
      });

      /* rail + dots */
      const pct = (current * 100).toFixed(2) + "%";
      if (railFillRef.current) railFillRef.current.style.height = pct;
      dotsRef.current.forEach((d, i) => {
        const c = CHAPTERS[i];
        const on = current >= c.start && current < c.end;
        if (d && on !== d.classList.contains("on"))
          d.classList.toggle("on", on);
      });

      /* timecode + progress bar */
      if (counterRef.current)
        counterRef.current.textContent = timecode(current * duration);
      if (barRef.current) barRef.current.style.width = pct;

      /* brand & header fade out as the walk begins */
      if (brandRef.current) {
        const o = 1 - clamp01(current / 0.06);
        brandRef.current.style.opacity = String(o);
        brandRef.current.style.visibility = o < 0.01 ? "hidden" : "visible";
      }

      /* scroll cue fades immediately */
      if (cueRef.current) {
        cueRef.current.style.opacity = String(1 - clamp01(current / 0.02));
      }

      if (current !== target) kick();
    };
    const kick = () => {
      if (!running || raf) return;
      raf = requestAnimationFrame(frame);
    };

    const onMeta = () => {
      duration = isFinite(video.duration) && video.duration > 1 ? video.duration : 21;
      try {
        video.currentTime = 0.001;
      } catch {
        /* noop */
      }
      setReady(true);
      kick();
    };

    const io = new IntersectionObserver(
      ([e]) => {
        running = e.isIntersecting;
        if (running) {
          onScroll();
          kick();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: "80% 0px 80% 0px" }
    );
    io.observe(track);

    video.addEventListener("loadedmetadata", onMeta);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [trackVh, videoSrc, poster]);

  /* --------------------------- markup ------------------------------ */
  return (
    <section
      ref={trackRef}
      className="walk-track relative bg-ink"
      style={{ height: `${trackVh}vh` }}
      aria-label="YF ARCH — perjalanan visual dari fasad menuju ruang dalam"
    >
      <div className="sticky top-0 h-[100svh] min-h-[560px] w-full overflow-hidden">
        {/* walkthrough video — scrubbed by scroll, never autoplay */}
        <video
          ref={videoRef}
          key={videoSrc}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "saturate(0.78) contrast(1.04)" }}
          src={videoSrc}
          poster={poster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-label="Perjalanan visual dari fasad, melewati pintu masuk, menuju ruang tamu dan dapur"
        />

        {/* veil + grain (dari villa.css) */}
        <div className="walk-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="walk-grain pointer-events-none absolute inset-0" aria-hidden="true" />

        {/* header brand — fades as the walk begins */}
        <div
          ref={brandRef}
          className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
        >
          <a href="/#top" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="YF ARCH"
              className="h-9 w-auto"
            />
          </a>
          <span className="t-mono hidden text-paper/45 md:block">
            {site.tagline.toUpperCase()}
          </span>
        </div>

        {/* chapters — caption HUD, swap as the walk progresses */}
        <div className="absolute inset-0" aria-live="polite">
          {CHAPTERS.map((c, i) => (
            <article
              key={c.eyebrow}
              ref={(el) => {
                chapterRefs.current[i] = el;
              }}
              className={`walk-chapter absolute inset-x-6 bottom-[22%] md:inset-x-10 md:bottom-[24%] ${
                c.align === "right" ? "md:text-right md:items-end" : ""
              }`}
              aria-hidden={i !== 0}
            >
              {c.cue ? (
                <>
                  <div className="walk-eyebrow">{c.eyebrow}</div>
                  <h1 className="walk-title">{c.title}</h1>
                  <p className="walk-body">{c.body}</p>
                  <div
                    ref={cueRef}
                    className="t-mono mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.1em] text-paper/55"
                  >
                    <span className="walk-wheel block h-7 w-[18px] rounded-full border border-paper/50">
                      <span className="walk-wheel-dot block" />
                    </span>
                    Gulir untuk memasuki ruang
                  </div>
                </>
              ) : (
                <>
                  <div className="walk-eyebrow">{c.eyebrow}</div>
                  <h2 className="walk-title">{c.title}</h2>
                  <p className="walk-body">{c.body}</p>
                </>
              )}
            </article>
          ))}
        </div>

        {/* chapter rail (kanan) */}
        <div
          className="absolute right-6 top-[23%] hidden h-[52%] w-px bg-paper/25 md:right-10 md:block"
          aria-hidden="true"
        >
          <span
            ref={railFillRef}
            className="absolute left-0 top-0 block h-0 w-px bg-paper"
          />
          {CHAPTERS.map((c, i) => (
            <i
              key={c.eyebrow}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
              className="walk-dot absolute left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-paper/75 bg-ink"
              style={{ top: `${(i / (CHAPTERS.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        {/* timecode + progress (bawah) */}
        <div className="t-mono absolute inset-x-6 bottom-6 flex items-center gap-3.5 text-[11px] text-paper/55 md:inset-x-10">
          <span ref={counterRef}>00:00</span>
          <span className="block h-px w-28 bg-paper/25">
            <span
              ref={barRef}
              className="block h-px w-0 bg-paper"
            />
          </span>
          <span className="ml-auto tracking-[0.08em]">
            WALKTHROUGH · EXTERIOR — INTERIOR
          </span>
        </div>

        {/* loading veil */}
        {!ready && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-ink">
            <img src="/images/logo.png" alt="" className="h-32 w-auto md:h-48" />
            <span className="t-mono mt-12 text-paper/30">LOADING FILM…</span>
          </div>
        )}
      </div>
    </section>
  );
}
