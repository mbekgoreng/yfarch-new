import type { MetadataRoute } from "next";

/* Fase 3: web app manifest — grounded in existing brand assets only. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YF ARCH — Architecture · Design · Construction",
    short_name: "YF ARCH",
    description:
      "YF ARCH is an architecture studio in East Java, Indonesia, designing quiet, light-filled tropical buildings.",
    start_url: "/",
    display: "standalone",
    theme_color: "#121110",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
