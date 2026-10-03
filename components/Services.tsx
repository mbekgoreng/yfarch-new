"use client";

/* Home teaser for the pricing system — elegant rows, promo-aware,
   linking to the full /harga page. */

import Link from "next/link";
import { packages, rab, rp } from "@/lib/pricing";
import { usePromo } from "@/lib/usePromo";
import Reveal from "./Reveal";

export default function Services() {
  const promo = usePromo();
  const showPromo = promo.mounted && promo.active;

  return (
    <section id="services" className="bg-ink pb-28 pt-24 text-paper md:pb-40 md:pt-36">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-paper/35">
          <span>03 — LAYANAN</span>
          <span className="hidden sm:inline">HARGA PER M² · TRANSPARAN</span>
        </div>
        <Reveal>
          <h2 className="t-display mt-6 text-[clamp(2.6rem,8vw,7.5rem)]">
            LAYANAN
            <br />& <span className="t-serif italic tracking-normal text-sand">harga</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-statement mt-10 max-w-xl text-[1.05rem] text-paper/60 md:text-[1.15rem]">
            Enam paket desain dengan harga per m² yang jelas — dari gambar
            teknis dasar hingga desain interior, exterior, dan RAB.
            {showPromo && (
              <span className="text-sand"> Diskon 30% berlaku untuk seluruh paket selama 60 menit.</span>
            )}
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 40} className="border-t border-paper/12 last:border-b">
              <Link
                href="/harga"
                className="group flex w-full items-baseline gap-4 py-6 md:gap-10 md:py-7"
              >
                <span className="t-mono w-7 shrink-0 text-paper/30">
                  0{i + 1}
                </span>
                <span className="flex min-w-0 grow flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="t-display text-[clamp(1.4rem,4vw,3rem)] transition-colors duration-300 group-hover:text-sand">
                    {p.name}
                  </span>
                  <span className="t-mono text-paper/35">{p.title}</span>
                </span>
                <span className="t-mono shrink-0 text-right text-paper/75">
                  {showPromo ? (
                    <>
                      <span className="mr-2 hidden text-paper/30 line-through sm:inline">
                        {rp(p.normal)}
                      </span>
                      {rp(p.promo)} <span className="text-paper/35">/ m²</span>
                    </>
                  ) : (
                    <>
                      {rp(p.normal)} <span className="text-paper/35">/ m²</span>
                    </>
                  )}
                </span>
                <span
                  className="t-mono hidden shrink-0 text-paper/30 transition-transform duration-300 group-hover:translate-x-1 md:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-col gap-2 border-t border-paper/12 pt-6 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="t-mono text-paper/45">
              + RAB / RENCANA ANGGARAN BIAYA — {rp(rab.price)} / m² · OUTPUT {rab.output.toUpperCase()}
            </span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/harga"
              className="btn-paper t-mono px-10 py-5 !tracking-[0.24em]"
            >
              LIHAT HALAMAN HARGA
            </Link>
            <Link
              href="/harga#kalkulator"
              className="t-mono inline-flex items-center justify-center gap-3 border border-paper/25 px-10 py-5 !tracking-[0.24em] text-paper transition-colors hover:border-paper/70"
            >
              HITUNG ESTIMASI →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
