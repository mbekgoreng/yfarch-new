import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Assistant from "@/components/Assistant";
import HargaContent from "@/components/harga/HargaContent";

export const metadata: Metadata = {
  title: "Harga — YF ARCH | Desain yang Jelas. Harga yang Transparan.",
  description:
    "Paket layanan desain YF ARCH — gambar teknis, gambar kerja, interior, exterior, dan RAB. Harga transparan per m², kalkulator estimasi, dan konsultasi gratis.",
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
