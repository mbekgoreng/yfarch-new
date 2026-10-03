"use client";

/* ------------------------------------------------------------------ */
/*  THE FILM — a scroll-driven cinematic walk through the architecture */
/*                                                                     */
/*  One sticky viewport inside a tall (800vh) scroll track.            */
/*  A <canvas> paints the six scenes with continuous camera moves      */
/*  (slow push-in, drift, crossfades), driven by a lerp-smoothed       */
/*  scroll position inside a single requestAnimationFrame loop.        */
/*  All text is written to the DOM directly via refs — React never     */
/*  re-renders during scroll.                                          */
/* ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from "react";
import { scenes, site } from "@/lib/data";

/* timeline (fractions of total track) */
const HERO_OUT = 0.07; // hero fully gone
const FILM_A = 0.055; // scenes begin
const FILM_B = 0.845; // scene motion ends (rests on scene 6)
const DARK_A = 0.86; // darken for final statement
const DARK_B = 0.945;
const FINAL_A = 0.875; // final statement lines

const N = scenes.length;

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
/* plateau window: 0→1→1→0 across [a, a+f] … [b-f, b] */
function win(p: number, a: number, b: number, f: number) {
  if (p <= a || p >= b) return 0;
  if (p < a + f) return (p - a) / f;
  if (p > b - f) return (b - p) / f;
  return 1;
}
function ease(t: number) {
  return t * t * (3 - 2 * t);
}

export default function Film() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const annoRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const annoBoxRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const finalLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const finalMetaRef = useRef<HTMLDivElement>(null);

  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  /* ------------------------- the engine --------------------------- */
  useEffect(() => {
    if (reduced !== false) return;
    const track = trackRef.current;
    const canvas = canvasRef.current;
    if (!track || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let W = 0,
      H = 0,
      dpr = 1,
      trackTop = 0,
      trackH = 0,
      vh = 0;
    let target = 0;
    let current = -1; // force first paint
    let raf = 0;
    let running = false;
    let lastSceneShown = -1;

    /* --- images --- */
    const imgs: HTMLImageElement[] = scenes.map(() => new Image());
    const ready: boolean[] = scenes.map(() => false);
    const pickSize = () =>
      Math.min(window.innerWidth, 1920) * Math.min(window.devicePixelRatio, 2) >
      1100
        ? "1920"
        : "960";
    const size = pickSize();
    scenes.forEach((s, i) => {
      const img = imgs[i];
      img.decoding = "async";
      img.onload = () => {
        ready[i] = true;
        current = -1; // repaint
        kick();
      };
      /* stagger: first two immediately, rest shortly after */
      const load = () => (img.src = `/images/${s.src}-${size}.webp`);
      if (i < 2) load();
      else setTimeout(load, 350 * (i - 1));
    });

    const measure = () => {
      vh = window.innerHeight;
      const r = track.getBoundingClientRect();
      trackTop = r.top + window.scrollY;
      trackH = track.offsetHeight - vh;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      W = window.innerWidth;
      H = vh;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      current = -1;
      kick();
    };

    const onScroll = () => {
      target = clamp01((window.scrollY - trackTop) / trackH);
      kick();
    };

    /* draw one scene with camera (cover + scale + drift) */
    const drawScene = (i: number, local: number, alpha: number) => {
      if (!ready[i]) {
        if (alpha > 0.999) {
          ctx.fillStyle = "#0c0b0a";
          ctx.fillRect(0, 0, W, H);
        }
        return;
      }
      const img = imgs[i];
      const iw = img.naturalWidth,
        ih = img.naturalHeight;
      const cover = Math.max(W / iw, H / ih);
      const scale = cover * (1.055 + 0.105 * ease(local));
      const dw = iw * scale,
        dh = ih * scale;
      /* gentle drift — alternate direction per scene */
      const dir = i % 2 === 0 ? 1 : -1;
      const dx = (W - dw) / 2 + dir * (local - 0.5) * W * 0.035;
      const dy = (H - dh) / 2 + (local - 0.5) * H * 0.045;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    };

    const paint = (p: number) => {
      /* continuous scene position 0..N */
      const s = clamp01((p - FILM_A) / (FILM_B - FILM_A)) * N;
      const idx = Math.min(Math.floor(s), N - 1);
      const local = Math.min(s - idx, 1);

      ctx.fillStyle = "#0c0b0a";
      ctx.fillRect(0, 0, W, H);

      const XF = 0.22; // crossfade width (fraction of a scene)
      drawScene(idx, local, 1);
      if (local > 1 - XF && idx < N - 1) {
        const t = ease((local - (1 - XF)) / XF);
        drawScene(idx + 1, 0, t);
      }

      /* cinematic frame: constant soft vignette */
      const vg = ctx.createLinearGradient(0, 0, 0, H);
      vg.addColorStop(0, "rgba(12,11,10,0.42)");
      vg.addColorStop(0.22, "rgba(12,11,10,0)");
      vg.addColorStop(0.75, "rgba(12,11,10,0)");
      vg.addColorStop(1, "rgba(12,11,10,0.5)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      /* darken for the final statement */
      const dk = win(p, DARK_A, 2, DARK_B - DARK_A) * 0.58;
      if (dk > 0.003) {
        ctx.fillStyle = `rgba(10,9,8,${dk})`;
        ctx.fillRect(0, 0, W, H);
      }
      return { s, idx, local };
    };

    const updateDom = (p: number, s: number, idx: number) => {
      /* hero */
      const hero = heroRef.current;
      if (hero) {
        const t = clamp01(p / HERO_OUT);
        const o = 1 - ease(t);
        hero.style.opacity = String(o);
        hero.style.filter = `blur(${t * 14}px)`;
        hero.style.transform = `scale(${1 - t * 0.04}) translateY(${t * -3}vh)`;
        hero.style.visibility = o < 0.005 ? "hidden" : "visible";
      }
      if (cueRef.current)
        cueRef.current.style.opacity = String(1 - clamp01(p / 0.025));

      /* words — one per scene 0..4 */
      const span = (FILM_B - FILM_A) / N;
      for (let i = 0; i < N - 1; i++) {
        const el = wordRefs.current[i];
        if (!el) continue;
        const a = FILM_A + span * i + span * 0.26;
        const b = FILM_A + span * i + span * 0.92;
        const o = ease(win(p, a, b, (b - a) * 0.3));
        if (o <= 0.004) {
          if (el.style.opacity !== "0") {
            el.style.opacity = "0";
            el.style.visibility = "hidden";
          }
          continue;
        }
        const t = clamp01((p - a) / (b - a));
        el.style.visibility = "visible";
        el.style.opacity = String(o);
        el.style.filter = `blur(${(1 - o) * 10}px)`;
        el.style.transform = `translateY(${(0.5 - t) * 3.4}vh) scale(${
          0.985 + t * 0.03
        })`;
      }

      /* annotations — swap text per scene, fade near cuts */
      const idxShown = p < FILM_A ? -1 : idx;
      if (idxShown !== lastSceneShown && idxShown >= 0) {
        lastSceneShown = idxShown;
        const a = scenes[idxShown].anno;
        annoRefs.current.forEach((el, k) => {
          if (el) el.textContent = a[k];
        });
        if (counterRef.current)
          counterRef.current.textContent = `SCENE ${scenes[idxShown].id} / 0${N}`;
      }
      if (annoBoxRef.current) {
        const local = s - Math.floor(s);
        const edge = Math.min(local, 1 - local); // 0 at cuts
        const o =
          win(p, FILM_A + 0.004, DARK_A, 0.02) *
          clamp01(edge / 0.12) *
          0.9;
        annoBoxRef.current.style.opacity = String(o);
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${clamp01(
          (p - FILM_A) / (FILM_B - FILM_A)
        )})`;
      }

      /* final statement */
      const fw = finalRef.current;
      if (fw) {
        const o = win(p, FINAL_A, 2, 0.03);
        fw.style.opacity = String(o);
        fw.style.visibility = o < 0.004 ? "hidden" : "visible";
        finalLineRefs.current.forEach((el, k) => {
          if (!el) return;
          const t = ease(clamp01((p - (FINAL_A + 0.012 + k * 0.022)) / 0.045));
          el.style.transform = `translateY(${(1 - t) * 108}%)`;
        });
        if (finalMetaRef.current) {
          const t = ease(clamp01((p - (FINAL_A + 0.085)) / 0.04));
          finalMetaRef.current.style.opacity = String(t);
          finalMetaRef.current.style.transform = `translateY(${(1 - t) * 10}px)`;
        }
      }
    };

    const frame = () => {
      raf = 0;
      const diff = target - current;
      current = Math.abs(diff) < 0.00012 ? target : current + diff * 0.095;
      const { s, idx } = paint(current);
      updateDom(current, s, idx);
      if (current !== target) kick();
    };
    const kick = () => {
      if (!running || raf) return;
      raf = requestAnimationFrame(frame);
    };

    /* only run while the track is near the viewport */
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
      { rootMargin: "60% 0px 60% 0px" }
    );
    io.observe(track);

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [reduced]);

  /* -------------------- reduced-motion fallback -------------------- */
  if (reduced === true) {
    return (
      <section aria-label="YF ARCH — introduction">
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
          <h1 className="sr-only">YF ARCH</h1>
          <img src="/images/logo.png" alt="YF ARCHITECT" className="h-32 w-auto" />
          <p className="t-mono mt-8 text-paper/55">{site.tagline}</p>
        </div>
        {scenes.map((sc) => (
          <figure key={sc.id} className="relative">
            <img
              src={`/images/${sc.src}-1920.webp`}
              srcSet={`/images/${sc.src}-960.webp 960w, /images/${sc.src}-1920.webp 1920w`}
              sizes="100vw"
              alt={sc.word ?? "Architecture by YF ARCH"}
              className="h-[80vh] w-full object-cover"
              loading="lazy"
            />
            {sc.word && (
              <figcaption className="absolute inset-0 flex items-center justify-center">
                <span className="text-[clamp(2rem,7vw,5rem)] font-extralight tracking-[0.3em] text-paper">
                  {sc.word}
                </span>
              </figcaption>
            )}
          </figure>
        ))}
        <div className="flex min-h-[60vh] items-center justify-center bg-ink px-6 text-center">
          <p className="t-display text-[clamp(2.5rem,8vw,6rem)] text-paper">
            DESIGNED
            <br />
            FOR
            <br />
            LIVING.
          </p>
        </div>
      </section>
    );
  }

  /* --------------------------- markup ------------------------------ */
  return (
    <section
      ref={trackRef}
      className="relative h-[650vh] md:h-[800vh] bg-ink"
      aria-label="YF ARCH — a cinematic walk through the architecture"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* film canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* scene words */}
        {scenes.slice(0, N - 1).map((sc, i) => (
          <div
            key={sc.id}
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center will-change-transform"
            style={{ opacity: 0, visibility: "hidden" }}
            aria-hidden="true"
          >
            <span className="text-[clamp(2.4rem,8vw,6.5rem)] font-extralight tracking-[0.28em] text-paper [text-indent:0.28em]">
              {sc.word}
            </span>
            <span className="t-mono mt-6 tracking-[0.3em] text-paper/55">
              {sc.sub}
            </span>
          </div>
        ))}

        {/* architectural annotations (corners) */}
        <div
          ref={annoBoxRef}
          className="pointer-events-none absolute inset-0"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          {[
            "left-6 top-20 md:left-10 md:top-24",
            "right-6 top-20 text-right md:right-10 md:top-24",
            "bottom-8 left-6 md:bottom-10 md:left-10",
            "bottom-8 right-6 text-right md:bottom-10 md:right-10",
          ].map((pos, k) => (
            <span
              key={k}
              ref={(el) => {
                annoRefs.current[k] = el;
              }}
              className={`t-mono absolute ${pos} text-paper/60`}
            />
          ))}
          {/* scene counter + progress */}
          <span
            ref={counterRef}
            className="t-mono absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/45 md:bottom-10"
          />
          <div className="absolute right-6 top-1/2 h-28 w-px -translate-y-1/2 bg-paper/15 md:right-10">
            <div
              ref={barRef}
              className="h-full w-full origin-top bg-paper/70"
              style={{ transform: "scaleY(0)" }}
            />
          </div>
        </div>

        {/* final statement */}
        <div
          ref={finalRef}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <h2 className="t-display text-center text-[clamp(3rem,10vw,9rem)] text-paper">
            {["DESIGNED", "FOR", "LIVING."].map((line, k) => (
              <span key={line} className="block overflow-hidden">
                <span
                  ref={(el) => {
                    finalLineRefs.current[k] = el;
                  }}
                  className="block will-change-transform"
                  style={{ transform: "translateY(108%)" }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>
          <div
            ref={finalMetaRef}
            className="t-mono mt-10 text-paper/50"
            style={{ opacity: 0 }}
          >
            YF ARCH — {site.tagline.toUpperCase()}
          </div>
        </div>

        {/* hero — the entrance */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex flex-col items-center justify-center bg-ink will-change-transform"
        >
          <h1 className="sr-only">YF ARCH — Architecture · Design · Construction</h1>
          <img
            src="/images/logo.png"
            alt="YF ARCHITECT"
            className="h-32 w-auto md:h-48"
          />
          <p className="t-mono mt-12 text-paper/60">
            ARCHITECTURE&nbsp;&nbsp;·&nbsp;&nbsp;DESIGN&nbsp;&nbsp;·&nbsp;&nbsp;CONSTRUCTION
          </p>
          <p className="t-mono mt-4 text-paper/30">
            EST. {site.founded} — {site.coordinates}
          </p>
          <div
            ref={cueRef}
            className="absolute bottom-10 flex flex-col items-center gap-4"
          >
            <span className="t-mono text-paper/45">SCROLL TO ENTER</span>
            <span className="scroll-cue-line block h-12 w-px bg-paper/40" />
          </div>
          {/* hero corner metadata */}
          <span className="t-mono absolute left-6 top-20 text-paper/30 md:left-10 md:top-24">
            PROJECT — THE WEBSITE
          </span>
          <span className="t-mono absolute right-6 top-20 text-right text-paper/30 md:right-10 md:top-24">
            SHEET 01 / 07
          </span>
        </div>
      </div>
    </section>
  );
}
