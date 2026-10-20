import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import I18nProvider from "@/components/I18nProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://www.yfarch.my.id";
const SITE_TITLE = "YF ARCH — Jasa Arsitek & Desain Rumah Tropis di Probolinggo, Jawa Timur";
const SITE_DESC =
  "YF ARCH is an architecture studio based in Probolinggo, East Java, Indonesia, designing quiet, light-filled tropical homes, villas and commercial buildings. Architecture, interior, working drawings, 3D visualization, construction, design & build.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "YF ARCH",
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    images: [
      {
        url: "/images/alex-house-ext-1-1920.webp",
        width: 1920,
        height: 1434,
        alt: "YF ARCH — tropical modern residence in East Java, Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/images/alex-house-ext-1-1920.webp"],
  },
  robots: { index: true, follow: true },
};

/* Fase 3: structured data — only verified facts, no invented stats. */
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "YF ARCH",
  url: SITE_URL,
  description: SITE_DESC,
  areaServed: "East Java, Indonesia",
};

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <I18nProvider>
          <SmoothScroll />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
