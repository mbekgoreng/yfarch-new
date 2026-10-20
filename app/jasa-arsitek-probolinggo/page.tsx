import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Assistant from "@/components/Assistant";
import LocalServicePage, { LocalPageJsonLd } from "@/components/LocalServicePage";
import { getLocalPage } from "@/lib/local-pages";

const page = getLocalPage("jasa-arsitek-probolinggo")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "YF ARCH",
    title: page.seoTitle,
    description: page.seoDescription,
    url: `/${page.slug}`,
    images: [{ url: `/images/${page.heroImage}-1920.webp`, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.seoTitle,
    description: page.seoDescription,
    images: [`/images/${page.heroImage}-1920.webp`],
  },
};

export default function JasaArsitekProbolinggoPage() {
  return (
    <main>
      <Nav />
      <LocalPageJsonLd page={page} />
      <LocalServicePage page={page} />
      <Assistant />
    </main>
  );
}
