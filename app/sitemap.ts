import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { publishedArticles } from "@/lib/journal";
import { localPages } from "@/lib/local-pages";

const BASE = "https://www.yfarch.my.id";

/* Sitemap — generated from real routes only: home, /harga, project
   case studies, journal (index + PUBLISHED articles only; drafts are
   never listed), and the local service pages. Canonical URLs only. */
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
    ...localPages.map((p) => ({
      url: `${BASE}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
