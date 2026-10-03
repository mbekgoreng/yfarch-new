"use client";

/* ------------------------------------------------------------------ */
/*  HARGA — pricing experience                                         */
/*  Hero · promo diskon 30% (countdown 60 menit) · pricing cards ·    */
/*  RAB · calculator · WhatsApp handoff · comparison · final CTA       */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  packages,
  rab,
  rp,
  activePrice,
  buildWaMessage,
  waUrl,
  compareA,
  compareB,
  type Pkg,
} from "@/lib/pricing";
import { usePromo, fmtCountdown } from "@/lib/usePromo";
import { site } from "@/lib/data";
import Reveal from "@/components/Reveal";

const PRESETS = [36, 45, 60, 90, 100, 120, 150];

function scrollToCalc() {
  document
    .getElementById("kalkulator")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ================================ HERO ============================== */

function Hero() {
  return (
    <header className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-paper">
      {/* architectural backdrop */}
      <img
        src="/images/film-01-form-1920.webp"
        srcSet="/images/film-01-form-960.webp 960w, /images/film-01-form-1920.webp 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-paper via-paper/35 to-paper"
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <Reveal>
          <div className="t-mono mb-8 flex items-center gap-4 text-ink/45">
            <span className="block h-px w-10 bg-ink/35" />
            HARGA
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="t-display max-w-6xl text-[clamp(2.6rem,8.5vw,8rem)]">
            DESAIN YANG <span className="t-serif italic tracking-normal text-ink/60">jelas</span>.
            <br />
            HARGA YANG{" "}
            <span className="t-serif italic tracking-normal text-brass">
              transparan
            </span>
            .
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="t-statement mt-10 max-w-xl text-[1.05rem] text-ink/65 md:text-[1.2rem]">
            Pilih layanan desain sesuai kebutuhan proyek Anda — mulai dari
            gambar teknis dasar hingga desain arsitektur, interior, exterior,
            dan RAB.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="t-mono mt-12 text-ink/40">
            ARCHITECTURAL DESIGN&nbsp;&nbsp;•&nbsp;&nbsp;INTERIOR&nbsp;&nbsp;•&nbsp;&nbsp;EXTERIOR
          </div>
        </Reveal>
      </div>

      <span className="t-mono absolute right-6 top-28 hidden text-ink/30 md:right-10 md:block">
        SHEET — HARGA / 01
      </span>
    </header>
  );
}

/* ============================ PROMO BANNER ========================== */

function PromoBanner() {
  const promo = usePromo();
  const [h, m, s] = fmtCountdown(promo.remainMs);

  return (
    <section className="bg-ink text-paper">
      <div className="grid gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:px-10 md:py-20">
        <div>
          <Reveal>
            <div className="t-mono mb-5 flex items-center gap-3 text-brass">
              <span className="pulse-dot block h-1.5 w-1.5 rounded-full bg-brass" />
              DISKON 30% — HANYA 60 MENIT
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="t-display text-[clamp(1.8rem,4.5vw,3.6rem)]">
              {promo.mounted && !promo.active ? (
                <>HARGA NORMAL BERLAKU</>
              ) : (
                <>
                  DISKON{" "}
                  <span className="t-serif italic tracking-normal text-sand">30%</span>
                  <br />
                  SELURUH PAKET
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="t-statement mt-5 max-w-md text-[1rem] text-paper/55">
              {promo.mounted && !promo.active
                ? "Periode promo 60 menit telah berakhir. Seluruh paket kini menggunakan harga normal."
                : "Diskon 30% dari harga normal, hanya berlaku 60 menit ke depan. Kesempatan terbatas."}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="md:justify-self-end">
          {!promo.mounted ? (
            <div className="t-mono text-paper/40">MEMUAT PENAWARAN…</div>
          ) : promo.active ? (
            <div>
              <div className="t-mono mb-4 text-paper/40">PROMO BERAKHIR DALAM</div>
              <div
                className="flex items-baseline gap-3 font-light tabular-nums"
                role="timer"
                aria-live="polite"
                aria-label={`Promo berakhir dalam ${h} jam ${m} menit ${s} detik`}
              >
                {[h, m, s].map((v, i) => (
                  <span key={i} className="flex items-baseline gap-3">
                    {i > 0 && <span className="text-[2rem] text-paper/30 md:text-[3rem]">:</span>}
                    <span className="border border-paper/15 px-4 py-3 text-[2.6rem] tracking-tight md:px-6 md:py-4 md:text-[4rem]">
                      {v}
                    </span>
                  </span>
                ))}
              </div>
              <div className="t-mono mt-4 flex justify-between text-paper/30">
                <span>JAM</span>
                <span>MENIT</span>
                <span>DETIK</span>
              </div>
            </div>
          ) : (
            <div className="border border-paper/15 px-10 py-8 text-center">
              <div className="t-display text-[clamp(1.6rem,3.5vw,2.6rem)] text-paper/80">
                PROMO BERAKHIR
              </div>
              <div className="t-mono mt-3 text-paper/40">00 : 00 : 00</div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ PRICING CARDS ========================= */

function PriceTag({
  pkg,
  showPromo,
  dark = false,
}: {
  pkg: Pkg;
  showPromo: boolean;
  dark?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3">
        <span className="text-[2.6rem] font-light tracking-tight md:text-[3.2rem]">
          {rp(showPromo ? pkg.promo : pkg.normal)}
        </span>
        <span className={`t-mono ${dark ? "text-paper/40" : "text-ink/40"}`}>/ m²</span>
      </div>
      {showPromo && (
        <div className={`t-mono mt-1.5 ${dark ? "text-paper/35" : "text-ink/35"}`}>
          HARGA NORMAL{" "}
          <span className="line-through">{rp(pkg.normal)} / m²</span>
        </div>
      )}
    </div>
  );
}

function Cards({ onPick }: { onPick: (id: string) => void }) {
  const promo = usePromo();
  const showPromo = promo.mounted && promo.active;

  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-36">
      <div className="t-mono flex items-baseline justify-between text-ink/40">
        <span>01 — PAKET DESAIN</span>
        <span className="hidden sm:inline">6 PAKET · HARGA PER M²</span>
      </div>
      <Reveal>
        <h2 className="t-display mt-6 max-w-4xl text-[clamp(2.2rem,6.5vw,5.5rem)]">
          PILIH PAKET<br />
          <span className="t-serif italic tracking-normal text-ink/55">sesuai kebutuhan.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 lg:grid-cols-3">
        {packages.map((p, i) => {
          const focal = p.emphasis === "focal";
          const popular = p.emphasis === "popular";
          return (
            <Reveal
              key={p.id}
              delay={(i % 3) * 80}
              className={focal ? "lg:-mt-4" : popular ? "lg:-mt-4" : ""}
            >
              <article
                className={`price-card relative flex h-full flex-col border p-8 md:p-10 ${
                  focal
                    ? "price-card-dark border-ink bg-ink text-paper shadow-[0_30px_80px_rgba(18,17,16,0.25)]"
                    : popular
                      ? "border-ink bg-paper shadow-[0_24px_60px_rgba(18,17,16,0.1)]"
                      : "border-ink/15 bg-paper"
                }`}
              >
                {/* badge — discount badges (DISKON 30%) only show while the
                    promotion is active; identity ribbons always show */}
                {p.badge && (showPromo || !p.badge.startsWith("DISKON")) && (
                  <span
                    className={`t-mono absolute -top-3 left-8 px-3 py-1.5 ${
                      focal
                        ? "bg-brass text-ink"
                        : popular
                          ? "bg-ink text-paper"
                          : "border border-ink/20 bg-paper text-ink/60"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="t-display text-[2rem] md:text-[2.2rem]">{p.name}</h3>
                  <span className={`t-mono ${focal ? "text-paper/30" : "text-ink/30"}`}>
                    0{i + 1}
                  </span>
                </div>
                <p className={`t-mono mt-2 ${focal ? "text-paper/50" : "text-ink/50"}`}>
                  {p.title}
                </p>

                <div className={`my-8 h-px w-full ${focal ? "bg-paper/15" : "bg-ink/10"}`} />

                <PriceTag pkg={p} showPromo={showPromo} dark={focal} />

                <ul
                  className={`mt-8 grow space-y-2.5 text-[0.85rem] font-light ${
                    focal ? "text-paper/75" : "text-ink/70"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className={focal ? "text-brass" : "text-ink/30"}>—</span>
                      {f}
                    </li>
                  ))}
                  <li className="flex gap-3 pt-1 font-normal">
                    <span className={focal ? "text-brass" : "text-ink/30"}>—</span>
                    <strong className="font-medium">{p.render}</strong>
                  </li>
                </ul>

                {p.note && (
                  <p className={`t-mono mt-5 !normal-case !tracking-[0.06em] ${focal ? "text-paper/40" : "text-ink/40"}`}>
                    {p.note}
                  </p>
                )}

                <button
                  onClick={() => onPick(p.id)}
                  className={`t-mono mt-8 w-full px-6 py-4 !tracking-[0.24em] ${
                    focal ? "btn-paper" : popular ? "btn-ink" : "btn-ghost"
                  }`}
                >
                  PILIH {p.name}
                </button>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100}>
        <p className="t-mono mt-12 max-w-2xl !normal-case !tracking-[0.08em] text-ink/40">
          {site.pricingNoteId}
        </p>
      </Reveal>
    </section>
  );
}

/* ================================ RAB =============================== */

function RabSection({ onAddRab }: { onAddRab: () => void }) {
  return (
    <section className="hairline-t bg-paper-dim/70 px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="t-mono text-ink/40">02 — LAYANAN TERPISAH</div>
          <Reveal>
            <h2 className="t-display mt-6 text-[clamp(2rem,5.5vw,4.5rem)]">
              RAB
              <span className="t-serif block italic tracking-normal text-ink/50">
                rencana anggaran biaya
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-statement mt-8 max-w-md text-[1.05rem] text-ink/65">
              Butuh estimasi biaya pembangunan berdasarkan desain Anda?
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex items-baseline gap-3">
              <span className="text-[3.2rem] font-light tracking-tight md:text-[3.8rem]">{rp(rab.price)}</span>
              <span className="t-mono text-ink/40">/ m²</span>
            </div>
            <div className="t-mono mt-3 text-ink/50">
              OUTPUT — <span className="text-ink">{rab.output.toUpperCase()}</span>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <button
              onClick={onAddRab}
              className="btn-ink t-mono mt-10 px-10 py-5 !tracking-[0.24em]"
            >
              TAMBAHKAN RAB
            </button>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="border border-ink/12 bg-paper p-8 md:p-10">
            <div className="t-mono mb-6 text-ink/35">CAKUPAN DOKUMEN</div>
            <ul className="grid grid-cols-1 gap-x-10 gap-y-2.5 text-[0.85rem] font-light text-ink/70 sm:grid-cols-2">
              {rab.features.map((f) => (
                <li key={f} className="flex gap-3 border-b border-ink/5 pb-2.5">
                  <span className="text-ink/30">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= CALCULATOR =========================== */

function Calculator({
  area,
  setArea,
  pkgId,
  setPkgId,
  rabOn,
  setRabOn,
}: {
  area: number;
  setArea: (n: number) => void;
  pkgId: string;
  setPkgId: (s: string) => void;
  rabOn: boolean;
  setRabOn: (b: boolean) => void;
}) {
  const promo = usePromo();
  const showPromo = promo.mounted && promo.active;
  const [custom, setCustom] = useState(false);

  const pkg = packages.find((p) => p.id === pkgId)!;
  const unit = activePrice(pkg, showPromo);
  const design = area * unit;
  const rabCost = rabOn ? area * rab.price : 0;
  const total = design + rabCost;

  const wa = useMemo(
    () =>
      waUrl(
        buildWaMessage({ area, pkg, rabOn, promoActive: showPromo })
      ),
    [area, pkg, rabOn, showPromo]
  );

  const reset = () => {
    setArea(100);
    setPkgId("standard");
    setRabOn(false);
    setCustom(false);
    scrollToCalc();
  };

  return (
    <section id="kalkulator" className="scroll-mt-24 bg-ink px-6 py-24 text-paper md:px-10 md:py-36">
      <div className="t-mono flex items-baseline justify-between text-paper/35">
        <span>03 — KALKULATOR</span>
        <span className="hidden sm:inline">ESTIMASI REAL-TIME</span>
      </div>
      <Reveal>
        <h2 className="t-display mt-6 text-[clamp(2.2rem,6.5vw,5.5rem)]">
          HITUNG ESTIMASI
          <br />
          <span className="t-serif italic tracking-normal text-sand">harga.</span>
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="t-statement mt-8 max-w-lg text-[1.05rem] text-paper/55">
          Masukkan luas bangunan dan pilih layanan yang Anda butuhkan.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-5 lg:gap-16">
        {/* inputs */}
        <div className="space-y-12 lg:col-span-3">
          {/* 01 luas */}
          <Reveal>
            <div className="t-mono mb-5 text-paper/40">INPUT 01 — LUAS BANGUNAN</div>
            <div className="flex items-baseline gap-4 border-b border-paper/20 pb-4">
              <input
                type="number"
                min={10}
                max={10000}
                value={area || ""}
                onChange={(e) => {
                  setCustom(true);
                  setArea(Math.max(0, Math.min(10000, Number(e.target.value))));
                }}
                aria-label="Luas bangunan dalam meter persegi"
                className="w-40 bg-transparent text-[3rem] font-light tracking-tight text-paper focus:outline-none md:text-[4rem]"
              />
              <span className="t-mono text-paper/40">M²</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setCustom(false);
                    setArea(p);
                  }}
                  className={`t-mono border px-4 py-2.5 transition-colors ${
                    !custom && area === p
                      ? "border-paper bg-paper text-ink"
                      : "border-paper/20 text-paper/60 hover:border-paper/60 hover:text-paper"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setCustom(true)}
                className={`t-mono border px-4 py-2.5 transition-colors ${
                  custom
                    ? "border-paper bg-paper text-ink"
                    : "border-paper/20 text-paper/60 hover:border-paper/60 hover:text-paper"
                }`}
              >
                CUSTOM
              </button>
            </div>
          </Reveal>

          {/* 02 layanan */}
          <Reveal delay={80}>
            <div className="t-mono mb-5 text-paper/40">INPUT 02 — PILIH LAYANAN</div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {packages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPkgId(p.id)}
                  aria-pressed={pkgId === p.id}
                  className={`border p-4 text-left transition-colors ${
                    pkgId === p.id
                      ? "border-paper bg-paper text-ink"
                      : "border-paper/20 text-paper/70 hover:border-paper/60"
                  }`}
                >
                  <div className="t-mono">{p.name}</div>
                  <div
                    className={`t-mono mt-2 text-[0.75rem] !tracking-[0.1em] ${
                      pkgId === p.id ? "text-ink/55" : "text-paper/40"
                    }`}
                  >
                    {rp(activePrice(p, showPromo))}/m²
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* 03 RAB */}
          <Reveal delay={140}>
            <div className="t-mono mb-5 text-paper/40">INPUT 03 — TAMBAHKAN RAB</div>
            <button
              onClick={() => setRabOn(!rabOn)}
              role="switch"
              aria-checked={rabOn}
              className="flex items-center gap-5"
            >
              <span
                className={`relative block h-8 w-16 border transition-colors ${
                  rabOn ? "border-brass bg-brass/20" : "border-paper/25"
                }`}
              >
                <span
                  className={`absolute top-1 h-[22px] w-[22px] transition-all duration-300 ${
                    rabOn ? "left-[38px] bg-brass" : "left-1 bg-paper/40"
                  }`}
                />
              </span>
              <span className="t-mono text-paper/70">
                {rabOn ? "ON" : "OFF"}
                {rabOn && (
                  <span className="ml-4 text-brass">+ {rp(rab.price)}/m²</span>
                )}
              </span>
            </button>
          </Reveal>
        </div>

        {/* result */}
        <Reveal delay={120} className="lg:col-span-2">
          <div className="border border-paper/20 bg-paper p-8 text-ink md:p-10">
            <div className="t-mono flex justify-between text-ink/40">
              <span>ESTIMASI PROYEK</span>
              <span>{showPromo ? "HARGA DISKON 30%" : "HARGA NORMAL"}</span>
            </div>

            <dl className="mt-8 space-y-0">
              <div className="flex items-baseline justify-between border-b border-ink/10 py-4">
                <dt className="t-mono text-ink/45">LUAS</dt>
                <dd className="text-[1.5rem] font-light">{area || 0} m²</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink/10 py-4">
                <dt className="t-mono text-ink/45">PAKET</dt>
                <dd className="t-display text-[1.5rem]">{pkg.name}</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink/10 py-4">
                <dt>
                  <div className="t-mono text-ink/45">DESAIN</div>
                  <div className="t-mono mt-1 !tracking-[0.1em] text-ink/30">
                    {area || 0} × {rp(unit)}
                  </div>
                </dt>
                <dd className="text-[1.5rem] font-light">{rp(design)}</dd>
              </div>
              {rabOn && (
                <div className="flex items-baseline justify-between border-b border-ink/10 py-4">
                  <dt>
                    <div className="t-mono text-ink/45">RAB</div>
                    <div className="t-mono mt-1 !tracking-[0.1em] text-ink/30">
                      {area || 0} × {rp(rab.price)}
                    </div>
                  </dt>
                  <dd className="text-[1.5rem] font-light">{rp(rabCost)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between py-6">
                <dt className="t-mono text-ink/60">TOTAL ESTIMASI</dt>
                <dd className="text-[2.6rem] font-normal tracking-tight md:text-[3rem]">
                  {rp(total)}
                </dd>
              </div>
            </dl>

            <p className="t-mono !normal-case !tracking-[0.06em] text-ink/40">
              Harga merupakan estimasi berdasarkan luas dan layanan yang
              dipilih. Detail akhir pekerjaan dapat disesuaikan berdasarkan
              kebutuhan proyek.
            </p>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink t-mono mt-8 w-full px-6 py-5 !tracking-[0.24em]"
            >
              KONSULTASI PROYEK
            </a>
            <button
              onClick={reset}
              className="btn-ghost t-mono mt-3 w-full px-6 py-4 !tracking-[0.24em]"
            >
              UBAH PILIHAN
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= COMPARISON =========================== */

function CompareTable({
  title,
  data,
}: {
  title: string;
  data: { cols: string[]; rows: string[][] };
}) {
  return (
    <Reveal>
      <div className="t-mono mb-5 text-ink/35">{title}</div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left">
          <thead>
            <tr className="border-b border-ink">
              <th className="t-mono py-4 pr-4 font-normal text-ink/40">&nbsp;</th>
              {data.cols.map((c) => (
                <th key={c} className="t-display py-4 pr-4 text-[1.15rem] font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r) => (
              <tr key={r[0]} className="border-b border-ink/10">
                <td className="t-mono py-3.5 pr-4 text-ink/50">{r[0]}</td>
                {r.slice(1).map((v, i) => (
                  <td
                    key={i}
                    className={`py-3.5 pr-4 text-[0.88rem] font-light ${
                      v === "—" ? "text-ink/25" : "text-ink/80"
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

function Comparison() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-36">
      <div className="t-mono flex items-baseline justify-between text-ink/40">
        <span>04 — PERBANDINGAN</span>
        <span className="hidden sm:inline">RINGKASAN CAKUPAN PAKET</span>
      </div>
      <Reveal>
        <h2 className="t-display mt-6 max-w-4xl text-[clamp(2.2rem,6.5vw,5.5rem)]">
          PILIH SESUAI
          <br />
          <span className="t-serif italic tracking-normal text-ink/55">kebutuhan Anda.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-2 lg:gap-12">
        <CompareTable title="TABEL 01 — PAKET GAMBAR" data={compareA} />
        <CompareTable title="TABEL 02 — PAKET DESAIN" data={compareB} />
      </div>
    </section>
  );
}

/* ============================== FINAL CTA =========================== */

function FinalCta() {
  const msg = encodeURIComponent(
    "Halo, saya punya proyek dan ingin dibantu menentukan paket yang paling sesuai."
  );
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <img
        src="/images/film-05-connection-1920.webp"
        srcSet="/images/film-05-connection-960.webp 960w, /images/film-05-connection-1920.webp 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/90" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[80vh] flex-col items-start justify-center px-6 py-28 md:px-10">
        <Reveal>
          <h2 className="t-display text-[clamp(3rem,10vw,9rem)]">
            PUNYA
            <br />
            PROYEK<span className="text-brass">?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-statement mt-8 max-w-md text-[1.05rem] text-paper/65">
            Ceritakan kebutuhan Anda. Kami akan membantu menentukan paket yang
            paling sesuai dengan proyek Anda.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/6285606345978?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-paper t-mono px-12 py-5 !tracking-[0.24em]"
            >
              KONSULTASI SEKARANG
            </a>
            <Link
              href="/#projects"
              className="t-mono inline-flex items-center justify-center gap-3 border border-paper/30 px-12 py-5 !tracking-[0.24em] text-paper transition-colors hover:border-paper"
            >
              LIHAT PROJECT
            </Link>
          </div>
        </Reveal>
      </div>

      {/* footer strip */}
      <div className="t-mono relative z-10 flex flex-col gap-2 border-t border-paper/15 px-6 py-5 text-paper/35 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span className="flex items-center gap-3">
          <img src="/images/logo.png" alt="" className="h-7 w-auto" />
          © 2026 YF ARCH — {site.location.toUpperCase()}
        </span>
        <span>{site.coordinates}</span>
        <span>INSTAGRAM {site.instagram.toUpperCase()}</span>
      </div>
    </section>
  );
}

/* ================================ PAGE ============================== */

export default function HargaContent() {
  const [area, setArea] = useState(100);
  const [pkgId, setPkgId] = useState("standard");
  const [rabOn, setRabOn] = useState(false);

  const pick = (id: string) => {
    setPkgId(id);
    scrollToCalc();
  };
  const addRab = () => {
    setRabOn(true);
    scrollToCalc();
  };

  return (
    <>
      <Hero />
      <PromoBanner />
      <Cards onPick={pick} />
      <RabSection onAddRab={addRab} />
      <Calculator
        area={area}
        setArea={setArea}
        pkgId={pkgId}
        setPkgId={setPkgId}
        rabOn={rabOn}
        setRabOn={setRabOn}
      />
      <Comparison />
      <FinalCta />
    </>
  );
}
