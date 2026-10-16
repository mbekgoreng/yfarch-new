import type { MetadataRoute } from "next";

/* Fase 3: robots — allow all crawlers, point at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.yfarch.my.id/sitemap.xml",
  };
}
