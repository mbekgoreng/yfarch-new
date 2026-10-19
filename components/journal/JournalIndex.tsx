"use client";

/* ------------------------------------------------------------------ */
/*  JOURNAL — index. Editorial list, not a card grid.                  */
/*  Featured article + category filter + search + load more.           */
/* ------------------------------------------------------------------ */

import { useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Img from "@/components/Img";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/data";
import { publishedArticles, categories } from "@/lib/journal";
import type { Article } from "@/lib/journal/types";
import { RichText } from "./RichText";

const MONTHS_ID = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

export function formatDateId(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS_ID[m - 1]} ${y}`;
}

const PAGE_SIZE = 6;

function Meta({ a, minRead }: { a: Article; minRead: string }) {
  return (
    <p className="t-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
      {a.category} · {formatDateId(a.publishedAt)} · {a.readingMinutes} {minRead}
    </p>
  );
}

export default function JournalIndex() {
  const { t } = useI18n();
  const j = t.journal;
  const all = publishedArticles();
  const cats = categories();
  const [cat, setCat] = useState<string>("ALL");
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);

  const featured = all[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((a) => {
      if (cat !== "ALL" && a.category !== cat) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.primaryKeyword.toLowerCase().includes(q)
      );
    });
  }, [all, cat, query]);

  const list = filtered.slice(0, shown);
  const searching = query.trim().length > 0 || cat !== "ALL";

  return (
    <>
      <Nav />
      <main className="bg-ink text-paper">
        {/* header */}
        <section className="px-6 pb-14 pt-32 md:px-10 md:pt-40">
          <p className="t-mono mb-6 text-[11px] uppercase tracking-[0.3em] text-brass">
            {j.eyebrow}
          </p>
          <h1 className="t-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.98]">
            {j.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/60 md:text-base">
            {j.subtitle}
          </p>
        </section>

        {all.length === 0 ? (
          /* empty state — designed, not blank */
          <section className="border-t border-paper/10 px-6 py-24 md:px-10">
            <p className="t-display max-w-2xl text-[clamp(1.6rem,4vw,2.8rem)] leading-tight text-paper/70">
              {j.emptyTitle}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper/50">
              {j.emptyBody}
            </p>
          </section>
        ) : (
          <>
            {/* featured */}
            {!searching && featured && (
              <section className="px-6 pb-20 md:px-10">
                <a href={`/journal/${featured.slug}`} className="group grid gap-8 md:grid-cols-12 md:gap-10">
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal md:col-span-7">
                    <div className="ease-lux absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.03]">
                      <Img src={featured.featuredImage} alt={featured.featuredImageAlt} sizes="(max-width: 768px) 100vw, 60vw" eager className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:col-span-5">
                    <p className="t-mono mb-4 text-[11px] uppercase tracking-[0.3em] text-brass">{j.featuredLabel}</p>
                    <Meta a={featured} minRead={j.minRead} />
                    <h2 className="t-display mb-4 mt-4 text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] transition-colors duration-300 group-hover:text-sand">
                      {featured.title}
                    </h2>
                    <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-paper/60">{featured.excerpt}</p>
                    <span className="t-mono text-[11px] uppercase tracking-[0.25em] text-brass">
                      {j.readArticle} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              </section>
            )}

            {/* filter + search */}
            <section className="border-t border-paper/10 px-6 py-8 md:px-10">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label={j.filterLabel}>
                  {["ALL", ...cats].map((c) => (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={cat === c}
                      onClick={() => { setCat(c); setShown(PAGE_SIZE); }}
                      className={`t-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                        cat === c ? "text-brass" : "text-paper/45 hover:text-paper"
                      }`}
                    >
                      {c === "ALL" ? j.allLabel : c}
                    </button>
                  ))}
                </div>
                <div className="ml-auto w-full md:w-64">
                  <label htmlFor="journal-search" className="sr-only">{j.searchLabel}</label>
                  <input
                    id="journal-search"
                    type="search"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setShown(PAGE_SIZE); }}
                    placeholder={j.searchPlaceholder}
                    className="w-full border-b border-paper/20 bg-transparent py-2 text-[14px] text-paper placeholder:text-paper/30 focus:border-brass focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* article rows */}
            <section className="px-6 pb-10 md:px-10" aria-live="polite">
              {list.length === 0 ? (
                <p className="border-t border-paper/10 py-16 text-[15px] text-paper/50">{j.noResults}</p>
              ) : (
                <ol>
                  {list.map((a, i) => (
                    <li key={a.slug} className="border-t border-paper/10 last:border-b">
                      <a href={`/journal/${a.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-6">
                        <span className="t-mono text-[11px] tracking-[0.2em] text-paper/30 md:col-span-1" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="md:col-span-7">
                          <h2 className="t-display text-[clamp(1.35rem,2.8vw,2.1rem)] leading-tight transition-colors duration-300 group-hover:text-sand">
                            {a.title}
                          </h2>
                          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-paper/55">{a.excerpt}</p>
                        </div>
                        <div className="md:col-span-4 md:text-right">
                          <Meta a={a} minRead={j.minRead} />
                          <span className="t-mono mt-3 inline-block text-[11px] uppercase tracking-[0.25em] text-brass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {j.readArticle} <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
              {filtered.length > shown && (
                <div className="py-10 text-center">
                  <button
                    onClick={() => setShown((s) => s + PAGE_SIZE)}
                    className="t-mono border border-paper/25 px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-paper/70 transition-colors hover:border-brass hover:text-brass"
                  >
                    {j.loadMore} ({filtered.length - shown})
                  </button>
                </div>
              )}
            </section>
          </>
        )}

        {/* CTA band */}
        <section className="border-t border-paper/10 px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="t-mono mb-5 text-[11px] uppercase tracking-[0.3em] text-brass">{j.ctaEyebrow}</p>
              <h2 className="t-display text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.05]">
                <RichText text={j.ctaTitle} />
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-4 md:col-span-5">
              <p className="max-w-md text-[15px] leading-relaxed text-paper/60">{j.ctaBody}</p>
              <div className="flex flex-wrap gap-4">
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
                   className="t-mono bg-brass px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-opacity hover:opacity-90">
                  {j.ctaPrimary}
                </a>
                <a href="/#projects"
                   className="t-mono border border-paper/25 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-paper/80 transition-colors hover:border-brass hover:text-brass">
                  {j.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
