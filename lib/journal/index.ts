/* ------------------------------------------------------------------ */
/*  YF ARCH — Journal registry                                         */
/*                                                                     */
/*  Single entry point. Only status:"published" articles are public:   */
/*  listed on the index, routable, and included in the sitemap.        */
/*  Drafts are fully structured but invisible to the public site.      */
/* ------------------------------------------------------------------ */

import type { Article } from "./types";

import a01 from "./articles/desain-rumah-minimalis-tropis";
import a02 from "./articles/desain-rumah-5x10-meter-lahan-terbatas";
import a03 from "./articles/kesalahan-denah-rumah-dihindari";
import a04 from "./articles/fasad-rumah-modern-material-proporsi";
import a05 from "./articles/rumah-tropis-indonesia-cahaya-ventilasi-naungan";
import a06 from "./articles/biaya-jasa-arsitek";
import a07 from "./articles/paket-jasa-desain-arsitektur";
import a08 from "./articles/desain-kafe-modern-konsep-alur-suasa";
import a09 from "./articles/interior-kafe-minimalis";
import a10 from "./articles/renovasi-ruko-hal-perlu-dianalisis";
import a11 from "./articles/memilih-material-interior";
import a12 from "./articles/pencahayaan-alami-dalam-arsitektur";
import a13 from "./articles/desain-kantor-modern";
import a14 from "./articles/proses-desain-arsitektur-brief-gambar-kerja";
import a15 from "./articles/desain-bangunan-pabrik-alur-operasional";
import a16 from "./articles/desain-gudang-modern";
import a17 from "./articles/kantor-kawasan-industri";
import a18 from "./articles/checklist-perencanaan-bangunan-industri";
import a19 from "./articles/koordinasi-arsitektur-struktur";
import a20 from "./articles/rab-bangunan-fungsi-komponen";
import a21 from "./articles/perbedaan-gambar-kerja-visualisasi-3d";
import a22 from "./articles/rumah-minimalis-material-komposisi";
import a23 from "./articles/kayu-beton-batu-alam-fasad";
import a24 from "./articles/model-3d-ke-bangunan-nyata";
import a25 from "./articles/ai-dalam-arsitektur";
import a26 from "./articles/checklist-konsultasi-pertama-arsitek";
import a27 from "./articles/membangun-rumah-lahan-kecil";
import a28 from "./articles/desain-bangunan-komersial";
import a29 from "./articles/brief-proyek-arsitektur";
import a30 from "./articles/memilih-partner-desain-arsitektur";

const all: Article[] = [
  a01, a02, a03, a04, a05, a06, a07, a08, a09, a10,
  a11, a12, a13, a14, a15, a16, a17, a18, a19, a20,
  a21, a22, a23, a24, a25, a26, a27, a28, a29, a30,
];

/* ---- integrity checks (fail fast at build time) ---- */
{
  const slugs = new Set<string>();
  for (const a of all) {
    if (slugs.has(a.slug)) throw new Error(`journal: duplicate slug ${a.slug}`);
    slugs.add(a.slug);
  }
}

/** All articles, newest first (editorial calendar order). */
export const articles: Article[] = [...all].sort((x, y) =>
  y.publishedAt.localeCompare(x.publishedAt),
);

/** Only published articles — the public surface. */
export function publishedArticles(): Article[] {
  return articles.filter((a) => a.status === "published");
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getPublishedArticle(slug: string): Article | undefined {
  const a = getArticle(slug);
  return a && a.status === "published" ? a : undefined;
}

export function categories(): string[] {
  const seen = new Set<string>();
  for (const a of publishedArticles()) seen.add(a.category);
  return [...seen];
}

/** Related: same category first, then newest — published only, excluding self. */
export function relatedArticles(slug: string, max = 3): Article[] {
  const self = getArticle(slug);
  const pool = publishedArticles().filter((a) => a.slug !== slug);
  const sameCat = self ? pool.filter((a) => a.category === self.category) : [];
  const rest = pool.filter((a) => !sameCat.includes(a));
  return [...sameCat, ...rest].slice(0, max);
}

/** Draft inventory for the editorial report (not public). */
export function draftArticles(): Article[] {
  return articles.filter((a) => a.status === "draft");
}
