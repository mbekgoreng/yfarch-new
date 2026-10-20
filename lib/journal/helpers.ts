/* Article authoring helpers + reading-time computation. */

import type { Article, ArticleInput, Block } from "./types";

export const p = (text: string): Block => ({ kind: "p", text });
export const h2 = (text: string): Block => ({ kind: "h2", text });
export const h3 = (text: string): Block => ({ kind: "h3", text });
export const quote = (text: string): Block => ({ kind: "quote", text });
export const list = (items: string[]): Block => ({ kind: "list", items });
export const table = (
  head: string[],
  rows: string[][],
  caption?: string,
): Block => ({ kind: "table", head, rows, caption });
export const figure = (
  src: string,
  alt: string,
  caption?: string,
): Block => ({ kind: "figure", src, alt, caption });

const WORDS_PER_MINUTE = 200;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readingMinutesFor(blocks: Block[]): number {
  let words = 0;
  for (const b of blocks) {
    switch (b.kind) {
      case "p":
      case "h2":
      case "h3":
      case "quote":
        words += countWords(b.text);
        break;
      case "list":
        words += b.items.reduce((n, i) => n + countWords(i), 0);
        break;
      case "table":
        words += b.head.reduce((n, h) => n + countWords(h), 0);
        words += b.rows.flat().reduce((n, c) => n + countWords(c), 0);
        if (b.caption) words += countWords(b.caption);
        break;
      case "figure":
        if (b.caption) words += countWords(b.caption);
        break;
    }
  }
  return Math.max(2, Math.round(words / WORDS_PER_MINUTE));
}

/** Validates required metadata, computes reading time. */
export function defineArticle(input: ArticleInput): Article {
  const required: (keyof ArticleInput)[] = [
    "slug",
    "title",
    "seoTitle",
    "seoDescription",
    "excerpt",
    "category",
    "primaryKeyword",
    "publishedAt",
    "featuredImage",
    "featuredImageAlt",
    "status",
  ];
  for (const k of required) {
    if (!input[k]) throw new Error(`journal article missing required field: ${k}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input.slug)) {
    throw new Error(`journal article slug invalid: ${input.slug}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.publishedAt)) {
    throw new Error(`journal article publishedAt invalid: ${input.publishedAt}`);
  }
  if (input.blocks.length < 4) {
    throw new Error(`journal article too short: ${input.slug}`);
  }
  return { ...input, readingMinutes: readingMinutesFor(input.blocks) };
}
