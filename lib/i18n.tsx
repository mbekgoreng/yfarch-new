"use client";

/* ------------------------------------------------------------------ */
/*  YF ARCH — i18n context                                            */
/*                                                                     */
/*  Lightweight trilingual support (EN / ID / ZH) without a router or  */
/*  URL rewriting. The active language lives in React context and is   */
/*  persisted to localStorage. The <html lang> attribute follows.      */
/* ------------------------------------------------------------------ */

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Dict } from "./i18n-strings";
import { dicts, defaultLang } from "./i18n-strings";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx>({ lang: defaultLang, setLang: () => {}, t: dicts[defaultLang] });

const STORAGE_KEY = "yfarch_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  /* read persisted choice on mount (client only) */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === "id" || raw === "en" || raw === "zh") setLang(raw);
    } catch {
      /* ignore */
    }
  }, []);

  const set = (l: Lang) => {
    setLang(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = dicts[lang];
  const value = useMemo<Ctx>(() => ({ lang, setLang: set, t }), [lang, t]);

  /* keep <html lang> in sync */
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
