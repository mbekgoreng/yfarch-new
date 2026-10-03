import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
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

export const metadata: Metadata = {
  title: "YF ARCH — Architecture · Design · Construction",
  description:
    "YF ARCH is an architecture studio in East Java, Indonesia, designing quiet, light-filled tropical buildings. Architecture, interior, exterior, visualization, construction, design & build.",
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
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
