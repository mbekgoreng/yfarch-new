"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";

/* Client boundary around the trilingual provider so the root layout can stay
   a server component (it owns fonts + static metadata). */
export default function I18nProvider({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
