"use client";

/* ------------------------------------------------------------------ */
/*  THEME TOGGLE — Elegant / Calm (Theme Duo).                          */
/*                                                                     */
/*  The whole site is skinned through CSS variables, so switching      */
/*  data-theme on <html> re-colors everything with no layout change.    */
/*  Choice persists in localStorage; a ?theme= param forces one theme   */
/*  (handy for sharing previews). Defaults to elegant.                 */
/* ------------------------------------------------------------------ */

import { useEffect, useState } from "react";

export const THEMES = [
  { id: "elegant", label: "Elegant" },
  { id: "calm", label: "Calm" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export function resolveTheme(): ThemeId {
  if (typeof window === "undefined") return "elegant";
  const m = /[?&]theme=(elegant|calm)/.exec(window.location.search);
  if (m) return m[1] as ThemeId;
  return (window.localStorage.getItem("yfarch-theme") as ThemeId) || "elegant";
}

export function applyTheme(id: ThemeId) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.dataset.theme = id;
  try {
    window.localStorage.setItem("yfarch-theme", id);
  } catch {
    /* private mode — theme just won't persist */
  }
  window.setTimeout(() => root.classList.remove("theme-transition"), 650);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>("elegant");

  useEffect(() => {
    setTheme(resolveTheme());
  }, []);

  return (
    <div
      className="hidden items-center gap-2 text-white mix-blend-difference sm:flex"
      role="group"
      aria-label="Pilih tema / Choose theme"
    >
      {THEMES.map((t, i) => (
        <span key={t.id} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => {
              applyTheme(t.id);
              setTheme(t.id);
            }}
            aria-pressed={theme === t.id}
            className={`t-mono px-1.5 py-1 text-[11px] uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-70 ${
              theme === t.id ? "underline underline-offset-4" : "opacity-45"
            }`}
          >
            {t.label}
          </button>
        </span>
      ))}
    </div>
  );
}
