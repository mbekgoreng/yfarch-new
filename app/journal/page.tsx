import type { Metadata } from "next";
import JournalIndex from "@/components/journal/JournalIndex";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — YF ARCH",
    description:
      "Esai praktis tentang desain tropis, gambar kerja, dan biaya jujur dari arsitektur yang baik.",
  },
};

export default function JournalPage() {
  return <JournalIndex />;
}
