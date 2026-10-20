/* ------------------------------------------------------------------ */
/*  YF ARCH — Journal content model                                     */
/*                                                                     */
/*  File-based content (no CMS/DB). Each article is one TS module in   */
/*  lib/journal/articles/. Only status:"published" articles are         */
/*  rendered publicly, listed on the index, and included in sitemap.   */
/* ------------------------------------------------------------------ */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][]; caption?: string }
  | { kind: "figure"; src: string; alt: string; caption?: string };

export type ArticleStatus = "published" | "draft";

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: string;
  primaryKeyword: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string; // YYYY-MM-DD
  featuredImage: string; // base name in public/images (without -1920.webp)
  featuredImageAlt: string;
  status: ArticleStatus;
  readingMinutes: number; // computed from blocks
  blocks: Block[];
};

/** Input shape used by article modules (readingMinutes computed). */
export type ArticleInput = Omit<Article, "readingMinutes">;
