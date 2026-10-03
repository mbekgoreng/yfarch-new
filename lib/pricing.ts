/* ------------------------------------------------------------------ */
/*  YF ARCH — pricing system (packages, promo, RAB, calculator, WA)    */
/* ------------------------------------------------------------------ */

export type Pkg = {
  id: string;
  name: string;
  title: string;
  badge?: string;
  emphasis?: "popular" | "focal";
  promo: number; // Rp / m² (launching)
  normal: number; // Rp / m²
  render: string; // render description
  renderWa: string; // for WhatsApp message
  features: string[];
  note?: string;
};

export const packages: Pkg[] = [
  {
    id: "basic",
    name: "BASIC",
    title: "Gambar Dasar + Visualisasi",
    badge: "DISKON 30%",
    promo: 35_000,
    normal: 50_000,
    render: "3× render",
    renderWa: "3 View",
    features: [
      "Site plan",
      "Denah rencana",
      "Denah ukuran",
      "Tampak",
      "Potongan",
      "Rencana atap",
      "Rencana pintu & jendela",
      "Detail pondasi dasar",
      "Sloof",
      "Kolom",
      "Balok",
      "Detail struktur atap",
    ],
  },
  {
    id: "standard",
    name: "STANDARD",
    title: "Gambar Kerja + Visualisasi",
    badge: "PALING POPULER",
    emphasis: "popular",
    promo: 66_500, // 30% off 95.000
    normal: 95_000,
    render: "6× render",
    renderWa: "6 View",
    features: [
      "Semua fasilitas Basic",
      "Denah plafon",
      "Denah lantai",
      "Tampak lengkap",
      "Detail kusen",
      "Detail struktur",
      "Detail pondasi",
      "MEP dasar",
      "Instalasi listrik dasar",
      "Air bersih",
      "Air kotor",
      "Air hujan",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    title: "Gambar Kerja Lengkap",
    badge: "PRO",
    promo: 101_500, // 30% off 145.000
    normal: 145_000,
    render: "Render sesuai kebutuhan desain",
    renderWa: "sesuai kebutuhan desain",
    features: [
      "Semua fasilitas Standard",
      "Detail arsitektur",
      "Detail facade",
      "Detail tangga",
      "Detail kamar mandi",
      "Detail konstruksi",
      "Struktur lebih lengkap",
      "MEP lebih lengkap",
      "Detail penulangan",
      "Detail area khusus",
    ],
  },
  {
    id: "interior",
    name: "INTERIOR",
    title: "Interior Design",
    promo: 101_500, // 30% off 145.000
    normal: 145_000,
    render: "Render sesuai kebutuhan desain",
    renderWa: "sesuai kebutuhan desain",
    note: "Perhitungan berdasarkan area interior yang didesain.",
    features: [
      "Konsep interior",
      "Moodboard",
      "Layout furniture",
      "Flooring",
      "Ceiling",
      "Material",
      "Warna",
      "Elevasi interior",
      "Detail furniture",
      "Detail aksesoris",
    ],
  },
  {
    id: "exterior",
    name: "EXTERIOR",
    title: "Exterior Design",
    promo: 101_500, // 30% off 145.000
    normal: 145_000,
    render: "Render sesuai kebutuhan desain",
    renderWa: "sesuai kebutuhan desain",
    features: [
      "Konsep facade",
      "Komposisi massa",
      "Material facade",
      "Warna",
      "Pintu & jendela",
      "Lighting exterior",
      "Landscape dasar",
      "Detail facade",
      "Detail elemen exterior",
    ],
  },
  {
    id: "complete",
    name: "COMPLETE",
    title: "Interior + Exterior",
    badge: "BEST VALUE",
    emphasis: "focal",
    promo: 175_000,
    normal: 250_000,
    render: "Render sesuai kebutuhan desain",
    renderWa: "sesuai kebutuhan desain",
    features: [
      "Interior Design",
      "Exterior Design",
      "Konsep material",
      "Furniture",
      "Ceiling",
      "Flooring",
      "Facade",
      "Lighting",
      "Landscape",
      "Detail interior",
      "Detail exterior",
    ],
  },
];

/* ------------------------------- RAB ------------------------------- */

export const rab = {
  price: 15_000, // Rp / m²
  output: "Excel + PDF",
  features: [
    "Rekap pekerjaan",
    "Pekerjaan persiapan",
    "Pekerjaan tanah",
    "Pondasi",
    "Struktur",
    "Dinding",
    "Lantai",
    "Plafon",
    "Atap",
    "Kusen / pintu / jendela",
    "Sanitair",
    "Elektrikal",
    "Plumbing",
    "Finishing",
    "Rekapitulasi total biaya",
  ],
};

/* ---------------------------- comparison --------------------------- */

export const compareA = {
  cols: ["BASIC", "STANDARD", "PRO"],
  rows: [
    ["Denah", "✓", "✓", "✓"],
    ["Tampak", "✓", "✓", "✓"],
    ["Potongan", "✓", "✓", "✓"],
    ["Struktur", "Dasar", "Lengkap", "Lengkap"],
    ["MEP", "—", "Dasar", "Lengkap"],
    ["Detail", "Dasar", "Standard", "Lengkap"],
    ["Render", "3", "6", "Sesuai kebutuhan"],
    ["Harga / m²", "35K", "66,5K", "101,5K"],
  ],
};

export const compareB = {
  cols: ["INTERIOR", "EXTERIOR", "COMPLETE"],
  rows: [
    ["Interior", "✓", "—", "✓"],
    ["Exterior", "—", "✓", "✓"],
    ["Furniture", "✓", "—", "✓"],
    ["Facade", "—", "✓", "✓"],
    ["Render", "Sesuai kebutuhan", "Sesuai kebutuhan", "Sesuai kebutuhan"],
    ["Harga / m²", "101,5K", "101,5K", "175K"],
  ],
};

/* ------------------------------ promo ------------------------------ */
/*  Persistent promotion: the deadline is written to localStorage on   */
/*  first visit and NEVER reset. Once expired, it stays expired.       */
/*  Key is versioned so a new campaign gets a fresh 60-minute window.  */

const PROMO_KEY = "yfarch_promo_deadline_v2";
export const PROMO_DURATION_MS = 60 * 60 * 1000; // 60 minutes

export function getPromoDeadline(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(PROMO_KEY);
    if (raw) {
      const n = parseInt(raw, 10);
      if (!Number.isNaN(n)) return n;
    }
    const d = Date.now() + PROMO_DURATION_MS;
    window.localStorage.setItem(PROMO_KEY, String(d));
    return d;
  } catch {
    return Date.now() + PROMO_DURATION_MS;
  }
}

export function isPromoActive(): boolean {
  if (typeof window === "undefined") return true;
  return getPromoDeadline() - Date.now() > 0;
}

/* ----------------------------- helpers ----------------------------- */

export function rp(n: number): string {
  return "Rp" + n.toLocaleString("id-ID");
}

export function activePrice(p: Pkg, promoActive: boolean): number {
  return promoActive ? p.promo : p.normal;
}

/* -------------------------- whatsapp link -------------------------- */

export function buildWaMessage(opts: {
  area: number;
  pkg: Pkg;
  rabOn: boolean;
  promoActive: boolean;
}): string {
  const { area, pkg, rabOn, promoActive } = opts;
  const unit = activePrice(pkg, promoActive);
  const design = area * unit;
  const rabCost = rabOn ? area * rab.price : 0;
  const total = design + rabCost;
  const lines = [
    "Halo, saya ingin konsultasi desain.",
    "",
    `Luas bangunan: ${area} m²`,
    `Paket: ${pkg.name.charAt(0) + pkg.name.slice(1).toLowerCase()}`,
    `Render: ${pkg.renderWa}`,
    `RAB: ${rabOn ? "Ya" : "Tidak"}`,
    `Estimasi harga: ${rp(total)}`,
    "",
    "Saya ingin mengetahui detail layanan dan proses pengerjaannya.",
  ];
  return lines.join("\n");
}

export function waUrl(message: string): string {
  return `https://wa.me/6285606345978?text=${encodeURIComponent(message)}`;
}
