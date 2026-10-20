"use client";

/* ------------------------------------------------------------------ */
/*  JOURNAL — article page. Breadcrumb, TOC, blocks, related, CTA,      */
/*  BlogPosting + BreadcrumbList JSON-LD.                              */
/* ------------------------------------------------------------------ */

import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Img from "@/components/Img";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/data";
import { getPublishedArticle, relatedArticles } from "@/lib/journal";
import type { Block } from "@/lib/journal/types";
import { RichText, headingId } from "./RichText";
import { formatDateId } from "./JournalIndex";

const BASE = "https://www.yfarch.my.id";

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "h2":
      return (
        <h2 id={headingId(block.text)} className="t-display mb-5 mt-12 scroll-mt-28 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
          <RichText text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="t-display mb-4 mt-10 text-[clamp(1.2rem,2.4vw,1.6rem)] leading-tight text-sand">
          <RichText text={block.text} />
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-brass pl-6 md:pl-8">
          <p className="t-display text-[clamp(1.3rem,2.8vw,1.9rem)] italic leading-snug text-sand">
            “<RichText text={block.text} />”
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-8 space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-[16px] leading-relaxed text-paper/75">
              <span className="t-mono mt-1 shrink-0 text-[11px] tracking-[0.2em] text-brass" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span><RichText text={item} /></span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <figure className="my-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-brass/40">
                {block.head.map((h, i) => (
                  <th key={i} className="t-mono py-3 pr-4 text-[11px] font-normal uppercase tracking-[0.18em] text-brass">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-paper/10">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3 pr-4 align-top leading-relaxed text-paper/70">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <figcaption className="t-mono mt-3 text-[11px] tracking-[0.08em] text-paper/40">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "figure":
      return (
        <figure className="my-10">
          <div className="aspect-[16/9] overflow-hidden bg-charcoal">
            <Img src={block.src} alt={block.alt} sizes="(max-width: 900px) 100vw, 900px" className="h-full w-full object-cover" />
          </div>
          {block.caption && (
            <figcaption className="t-mono mt-3 text-[11px] tracking-[0.08em] text-paper/40">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return (
        <p className="my-6 text-[16px] leading-[1.85] text-paper/75 md:text-[17px]">
          <RichText text={block.text} />
        </p>
      );
  }
}

export default function JournalArticle({ slug }: { slug: string }) {
  const { t } = useI18n();
  const j = t.journal;
  const article = getPublishedArticle(slug);
  if (!article) return null;

  const url = `${BASE}/journal/${article.slug}`;
  const ogImage = `${BASE}/images/${article.featuredImage}-1920.webp`;
  const headings = article.blocks.filter(
    (b): b is Extract<Block, { kind: "h2" }> => b.kind === "h2",
  );
  const showToc = headings.length >= 4;
  const related = relatedArticles(slug, 3);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    image: ogImage,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: { "@type": "Organization", name: "YF ARCH", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "YF ARCH",
      logo: { "@type": "ImageObject", url: `${BASE}/images/logo-dark.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "id",
    keywords: article.primaryKeyword,
    articleSection: article.category,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${BASE}/journal` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="bg-ink text-paper">
        <article>
          <header className="px-6 pt-32 md:px-10 md:pt-40">
            {/* breadcrumb */}
            <nav aria-label="Breadcrumb" className="t-mono mb-10 text-[11px] uppercase tracking-[0.22em] text-paper/40">
              <ol className="flex flex-wrap gap-2">
                <li><a href="/" className="transition-colors hover:text-brass">{j.crumbHome}</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/journal" className="transition-colors hover:text-brass">{j.crumbJournal}</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-[40ch] truncate text-paper/60">{article.title}</li>
              </ol>
            </nav>
            <p className="t-mono mb-5 text-[11px] uppercase tracking-[0.3em] text-brass">
              {article.category} · {formatDateId(article.publishedAt)} · {article.readingMinutes} {j.minRead}
            </p>
            <h1 className="t-display max-w-4xl text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.05]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-paper/60 md:text-[17px]">
              {article.excerpt}
            </p>
          </header>

          <figure className="my-12 px-6 md:my-16 md:px-10">
            <div className="aspect-[16/9] overflow-hidden bg-charcoal">
              <Img src={article.featuredImage} alt={article.featuredImageAlt} sizes="100vw" eager className="h-full w-full object-cover" />
            </div>
          </figure>

          <div className="mx-auto max-w-3xl px-6 md:px-10">
            {showToc && (
              <nav aria-label={j.tocLabel} className="mb-12 border-y border-paper/10 py-8">
                <p className="t-mono mb-5 text-[11px] uppercase tracking-[0.3em] text-brass">{j.tocLabel}</p>
                <ol className="space-y-3">
                  {headings.map((h, i) => (
                    <li key={i}>
                      <a href={`#${headingId(h.text)}`}
                         className="group flex gap-4 text-[15px] text-paper/65 transition-colors hover:text-sand">
                        <span className="t-mono text-[11px] tracking-[0.2em] text-paper/30" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="underline-offset-4 group-hover:underline">{h.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            {article.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>

          {/* calm consultation CTA */}
          <aside className="mx-auto max-w-3xl px-6 py-14 md:px-10">
            <div className="border-y border-paper/10 py-10">
              <p className="t-display text-[clamp(1.4rem,3vw,2rem)] leading-tight">
                <RichText text={j.ctaTitle} />
              </p>
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
                 className="t-mono mt-6 inline-block bg-brass px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-opacity hover:opacity-90">
                {j.ctaPrimary}
              </a>
            </div>
          </aside>

          {/* related */}
          {related.length > 0 && (
            <nav className="px-6 pb-20 md:px-10" aria-label={j.relatedLabel}>
              <p className="t-mono mb-8 text-[11px] uppercase tracking-[0.3em] text-paper/40">{j.relatedLabel}</p>
              <ol className="grid gap-8 md:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a href={`/journal/${r.slug}`} className="group block">
                      <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-charcoal">
                        <div className="ease-lux absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.04]">
                          <Img src={r.featuredImage} alt={r.featuredImageAlt} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <p className="t-mono mb-2 text-[10px] uppercase tracking-[0.22em] text-paper/40">
                        {r.category} · {r.readingMinutes} {j.minRead}
                      </p>
                      <h3 className="t-display text-[1.15rem] leading-snug transition-colors duration-300 group-hover:text-sand">
                        {r.title}
                      </h3>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="border-t border-paper/10 px-6 py-10 md:px-10">
            <a href="/journal" className="t-mono text-[11px] uppercase tracking-[0.25em] text-paper/50 transition-colors hover:text-brass">
              {j.backToJournal}
            </a>
          </div>
        </article>
      </main>
      <Contact />
    </>
  );
}
