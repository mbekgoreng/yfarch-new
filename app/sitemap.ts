import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { publishedArticles } from "@/lib/journal";

const BASE = "https://www.yfarch.my.id";

/* Fase 3: sitemap — generated from real routes + real project slugs.
   Journal: index + PUBLISHED article slugs only. Drafts never listed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/harga`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${BASE}/proyek/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...publishedArticles().map((a) => ({
      url: `${BASE}/journal/${a.slug}`,
      lastModified: new Date(a.updatedAt ?? a.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
