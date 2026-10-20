import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { localPages } from "@/lib/local-pages";

const BASE = "https://www.yfarch.my.id";

/* Sitemap — generated from real routes + real project slugs + local
   service pages. Only canonical, indexable URLs. */
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
    ...localPages.map((p) => ({
      url: `${BASE}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
