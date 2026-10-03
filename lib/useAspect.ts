"use client";

import { useEffect, useState } from "react";

export type AspectClass =
  | "portrait" // tall / narrow (9:16 monitors, mobile portrait)
  | "squareish" // near-square
  | "landscape" // normal desktop wide
  | "ultra" // very wide short (cinematic)

export function classifyAspect(w: number, h: number): AspectClass {
  if (w < 768) return "portrait"; // phone portrait always portrait
  const ratio = w / h;
  if (ratio < 0.9) return "portrait"; // 9:16 vertical monitor
  if (ratio < 1.35) return "squareish"; // ~4:3 / 5:4
  if (ratio < 2.0) return "landscape"; // 16:9 typical
  return "ultra"; // 21:9 or wider
}

export function useAspect(): AspectClass {
  /* IMPORTANT: the initial state must be hydration-safe. Both server and the
     first client render use the same SSR default ("landscape"); the real value
     is computed and applied in an effect, which runs on the client only and
     never causes a hydration mismatch. */
  const [cls, setCls] = useState<AspectClass>("landscape");

  useEffect(() => {
    let live = true;
    const apply = () => {
      if (!live) return;
      setCls(classifyAspect(window.innerWidth, window.innerHeight));
    };
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      live = false;
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return cls;
}
