import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Assistant from "@/components/Assistant";
import HargaContent from "@/components/harga/HargaContent";

export const metadata: Metadata = {
  title: "Harga — YF ARCH | Desain yang Jelas. Harga yang Transparan.",
  description:
    "Paket layanan desain YF ARCH — gambar teknis, gambar kerja, interior, exterior, dan RAB. Harga transparan per m², kalkulator estimasi, dan konsultasi gratis.",
  alternates: { canonical: "/harga" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "YF ARCH",
    title: "Harga — YF ARCH | Desain yang Jelas. Harga yang Transparan.",
    description:
      "Paket layanan desain YF ARCH — gambar teknis, gambar kerja, interior, exterior, dan RAB. Harga transparan per m², kalkulator estimasi, dan konsultasi gratis.",
    url: "/harga",
    images: [
      {
        url: "/images/film-01-form-1920.webp",
        alt: "Harga layanan desain YF ARCH — paket gambar teknis, gambar kerja, dan RAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harga — YF ARCH | Desain yang Jelas. Harga yang Transparan.",
    description:
      "Paket layanan desain YF ARCH — harga transparan per m², kalkulator estimasi, dan konsultasi gratis.",
    images: ["/images/film-01-form-1920.webp"],
  },
};

export default function HargaPage() {
  return (
    <main>
      <Nav />
      <HargaContent />
      <Assistant />
    </main>
  );
}
