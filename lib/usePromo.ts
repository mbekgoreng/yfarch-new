"use client";

import { useEffect, useState } from "react";
import { getPromoDeadline } from "./pricing";

export type PromoState = {
  mounted: boolean;
  active: boolean;
  remainMs: number;
};

export function usePromo(): PromoState {
  const [state, setState] = useState<PromoState>({
    mounted: false,
    active: false,
    remainMs: 0,
  });

  useEffect(() => {
    const deadline = getPromoDeadline();
    const tick = () => {
      const r = deadline - Date.now();
      setState({ mounted: true, active: r > 0, remainMs: Math.max(0, r) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}

export function fmtCountdown(ms: number): [string, string, string] {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return [pad(h), pad(m), pad(sec)];
}
