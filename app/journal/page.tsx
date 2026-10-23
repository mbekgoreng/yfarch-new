import type { Metadata } from "next";
import JournalIndex from "@/components/journal/JournalIndex";
import { publishedArticles } from "@/lib/journal";

export function generateMetadata(): Metadata {
  /* Share image = the featured (newest published) article's image, the same
     one the index page leads with. Falls back to the studio hero. */
  const featured = publishedArticles()[0];
  const ogImage = featured
    ? {
        url: `/images/${featured.featuredImage}-1920.webp`,
        width: 1920,
        height: 1434,
        alt: featured.featuredImageAlt,
      }
    : {
        url: "/images/alex-house-ext-1-1920.webp",
        width: 1920,
        height: 1434,
        alt: "YF ARCH — tropical modern residence in East Java, Indonesia",
      };
  return {
    title: "Journal — YF ARCH | Catatan tentang Membangun dengan Baik",
    description:
      "Journal YF ARCH — esai praktis tentang desain tropis, gambar kerja, dan biaya jujur dari arsitektur yang baik.",
    alternates: { canonical: "https://www.yfarch.my.id/journal" },
    openGraph: {
      title: "Journal — YF ARCH",
      description:
        "Esai praktis tentang desain tropis, gambar kerja, dan biaya jujur dari arsitektur yang baik.",
      url: "https://www.yfarch.my.id/journal",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: "Journal — YF ARCH",
      description:
        "Esai praktis tentang desain tropis, gambar kerja, dan biaya jujur dari arsitektur yang baik.",
      images: [ogImage.url],
    },
  };
}

export default function JournalPage() {
  return <JournalIndex />;
}
