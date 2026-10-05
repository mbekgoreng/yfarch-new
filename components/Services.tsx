"use client";

/* LAYANAN — four interactive disciplines, then a compact pricing strip
   that links to the full /harga page. Hovering (or focusing) a service
   swaps the architectural image beside it. */

import { useState } from "react";
import Link from "next/link";
import { serviceOffering } from "@/lib/data";
import { packages, rab, rp } from "@/lib/pricing";
import { useI18n } from "@/lib/i18n";
import { usePromo } from "@/lib/usePromo";
import Reveal from "./Reveal";
import Img from "./Img";

export default function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const promo = usePromo();
  const showPromo = promo.mounted && promo.active;
  const svc = serviceOffering[active];

  return (
    <section id="services" className="bg-ink pb-28 pt-24 text-paper md:pb-40 md:pt-36">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-paper/35">
          <span>{t.services.eyebrow}</span>
          <span className="hidden sm:inline">ARCHITECTURE · INTERIOR · CONSTRUCTION</span>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="t-display text-[clamp(2.4rem,7.5vw,6.6rem)] md:leading-[0.9]">
                {t.services.headingA}
                <br />
                {t.services.headingB}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={120}>
              <p className="t-statement text-[1.02rem] leading-relaxed text-paper/60 md:text-[1.12rem]">
                {t.services.copy}
                {showPromo && (
                  <span className="text-sand">
                    {" "}
                    {t.services.promoNote}
                  </span>
                )}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------------- interactive services ---------------- */}
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            {serviceOffering.map((s, i) => {
              const on = active === i;
              return (
                <Reveal key={s.index} delay={i * 50}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group block w-full border-t border-paper/12 py-6 text-left last:border-b md:py-7"
                  >
                    <span className="flex items-baseline gap-5">
                      <span
                        className={`t-mono transition-colors duration-500 ${
                          on ? "text-signal" : "text-paper/30"
                        }`}
                      >
                        {s.index}
                      </span>
                      <span
                        className={`t-display text-[clamp(1.6rem,4.4vw,3rem)] transition-colors duration-500 ${
                          on ? "text-paper" : "text-paper/45"
                        }`}
                      >
                        {s.name}
                      </span>
                    </span>
                    <span
                      className={`t-statement mt-3 block max-w-md pl-10 text-[0.98rem] transition-opacity duration-500 ${
                        on ? "text-paper/65 opacity-100" : "text-paper/35 opacity-70"
                      }`}
                    >
                      {s.summary}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div className="md:col-span-6">
            <Reveal variant="mask" className="img-frame relative h-[42vh] w-full overflow-hidden md:h-[58vh]">
              {serviceOffering.map((s, i) => (
                <Img
                  key={s.index}
                  src={s.image}
                  alt={`${s.name} — YF ARCH`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <span className="t-mono pointer-events-none absolute bottom-5 left-5 text-paper/75">
                {svc.index} — {svc.name}
              </span>
            </Reveal>
          </div>
        </div>

        {/* ---------------- pricing strip ---------------- */}
        <div className="mt-20 md:mt-28">
          <div className="t-mono mb-6 flex items-baseline justify-between text-paper/35">
            <span>{t.services.pricePerM2}</span>
            <span className="hidden sm:inline">{t.services.transparent}</span>
          </div>

          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 40} className="border-t border-paper/12 last:border-b">
              <Link href="/harga" className="group flex w-full items-baseline gap-4 py-5 md:gap-10 md:py-6">
                <span className="t-mono w-7 shrink-0 text-paper/30">0{i + 1}</span>
                <span className="flex min-w-0 grow flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="t-display text-[clamp(1.3rem,3.6vw,2.6rem)] transition-colors duration-300 group-hover:text-sand">
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

          <Reveal delay={80}>
            <div className="mt-6 border-t border-paper/12 pt-6">
              <span className="t-mono text-paper/45">
                {t.services.rabLine.trim()}{" "}
                {rp(rab.price)} / m² · OUTPUT {rab.output.toUpperCase()}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/harga" className="btn-paper t-mono px-10 py-5 !tracking-[0.24em]">
                {t.services.cta.title}
              </Link>
              <Link
                href="/harga#kalkulator"
                className="t-mono inline-flex items-center justify-center gap-3 border border-paper/25 px-10 py-5 !tracking-[0.24em] text-paper transition-colors hover:border-paper/70"
              >
                {t.services.cta.calc}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
