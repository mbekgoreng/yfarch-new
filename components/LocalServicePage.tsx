import { site, projects } from "@/lib/data";
import type { LocalPage } from "@/lib/local-pages";
import { localPages } from "@/lib/local-pages";
import Img from "./Img";

/* ------------------------------------------------------------------ */
/*  Local service page — shared editorial layout for /jasa-arsitek-*   */
/*  Content comes from lib/local-pages.ts and differs per area.        */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  {
    title: "Konsultasi Awal",
    body: "Gratis. Ceritakan lahan, kebutuhan, dan anggaran Anda melalui WhatsApp — kami jawab dengan pertanyaan yang tepat, bukan brosur.",
  },
  {
    title: "Survei & Brief",
    body: "Kunjungan lapangan sesuai jadwal untuk membaca ukuran, kontur, akses, arah matahari, dan lingkungan tapak. Hasilnya menjadi brief tertulis.",
  },
  {
    title: "Konsep & Visualisasi 3D",
    body: "Arah desain dikembangkan dan ditunjukkan dalam 3D agar Anda dapat menilai ruang, cahaya, dan material sebelum detail teknis digambar.",
  },
  {
    title: "Gambar Kerja & RAB",
    body: "Dokumen teknis untuk pelaksanaan beserta rencana anggaran sesuai paket — dasar yang jelas untuk memilih pelaksana dan mengendalikan biaya.",
  },
];

function waLink(message: string) {
  return `${site.whatsappLink}?text=${encodeURIComponent(message)}`;
}

function SignalDot() {
  return (
    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
  );
}

export default function LocalServicePage({ page }: { page: LocalPage }) {
  const portfolio = page.portfolioSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const others = localPages.filter((p) => p.slug !== page.slug);

  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="px-6 pt-32 md:px-10 md:pt-44">
        <nav aria-label="Breadcrumb" className="t-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
          <a href="/" className="transition-colors hover:text-ink">Beranda</a>
          <span aria-hidden="true" className="mx-2 text-ink/30">/</span>
          <span aria-current="page" className="text-ink/70">{page.eyebrow}</span>
        </nav>

        <div className="t-mono mt-12 flex items-center gap-3 text-ink/45">
          <SignalDot />
          {page.eyebrow}
        </div>
        <h1 className="t-display mt-7 max-w-5xl text-[clamp(2.3rem,6.2vw,4.9rem)] leading-[0.98]">
          {page.h1}
        </h1>
        <div className="mt-9 grid gap-6 md:grid-cols-12">
          <div className="space-y-5 md:col-span-7">
            {page.intro.map((para) => (
              <p key={para.slice(0, 24)} className="t-statement text-[1.02rem] leading-relaxed text-ink/65 md:text-[1.13rem]">
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:col-start-9 md:pt-2">
            <a
              href={waLink(page.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="t-mono inline-flex items-center gap-3 bg-ink px-8 py-4 text-paper transition-opacity duration-300 hover:opacity-80"
            >
              Konsultasi via WhatsApp <span aria-hidden="true">→</span>
            </a>
            <a
              href="/harga"
              className="t-mono inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-ink/70 transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              Lihat Harga & Paket <span aria-hidden="true">→</span>
            </a>
            <p className="t-mono text-[11px] leading-5 text-ink/40">
              {site.consultationId}
            </p>
          </div>
        </div>

        <figure className="img-frame mt-14 md:mt-20">
          <Img
            src={page.heroImage}
            alt={page.heroAlt}
            sizes="100vw"
            className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
          />
          <figcaption className="t-mono mt-3 text-[11px] uppercase tracking-[0.14em] text-ink/40">
            {page.heroCaption}
          </figcaption>
        </figure>
      </section>

      {/* ---------------------------- LAYANAN ---------------------------- */}
      <section className="px-6 pt-24 md:px-10 md:pt-36">
        <div className="t-mono flex items-center gap-3 text-ink/45">
          <SignalDot />
          Layanan di {page.city}
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {page.services.map((s, i) => (
            <article key={s.title} className="border-t border-ink/15 pt-6">
              <div className="t-mono text-ink/35">0{i + 1}</div>
              <h2 className="t-display mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight">
                {s.title}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/60">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/15 pt-8">
          <div className="t-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
            Jenis proyek yang ditangani
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
            {page.projectTypes.map((type) => (
              <li
                key={type}
                className="t-mono border border-ink/20 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-ink/70"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------- TANTANGAN --------------------------- */}
      <section className="px-6 pt-24 md:px-10 md:pt-36">
        <h2 className="t-display max-w-4xl text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.02]">
          {page.challengesTitle}
        </h2>
        <div className="mt-12">
          {page.challenges.map((c, i) => (
            <article
              key={c.title}
              className="grid gap-3 border-t border-ink/12 py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="t-mono text-ink/35 md:col-span-1">0{i + 1}</div>
              <h3 className="t-display text-[clamp(1.3rem,2.4vw,1.9rem)] leading-tight md:col-span-5">
                {c.title}
              </h3>
              <p className="leading-relaxed text-ink/60 md:col-span-6">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- PROSES ----------------------------- */}
      <section className="px-6 pt-24 md:px-10 md:pt-36">
        <div className="t-mono flex items-center gap-3 text-ink/45">
          <SignalDot />
          Proses Kerja
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <article key={step.title} className="border-t border-ink/15 pt-6">
              <div className="t-mono text-signal">0{i + 1}</div>
              <h3 className="t-display mt-3 text-xl leading-tight">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <h3 className="t-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight md:col-span-4">
            Yang Anda Terima
          </h3>
          <ul className="space-y-3 md:col-span-8">
            {page.deliverables.map((d) => (
              <li key={d.slice(0, 28)} className="flex gap-3 leading-relaxed text-ink/65">
                <span aria-hidden="true" className="text-signal">—</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="t-mono text-[11px] leading-5 text-ink/40 md:col-span-8 md:col-start-5">
            Komposisi dokumen mengikuti paket yang dipilih — lihat{" "}
            <a href="/harga" className="underline underline-offset-4 hover:text-ink">halaman Harga</a>{" "}
            untuk struktur paket dan kalkulator estimasinya.
          </p>
        </div>
      </section>

      {/* --------------------------- PORTOFOLIO --------------------------- */}
      <section className="px-6 pt-24 md:px-10 md:pt-36">
        <div className="t-mono flex items-center gap-3 text-ink/45">
          <SignalDot />
          Portofolio Terkait
        </div>
        <p className="t-statement mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/60">
          {page.portfolioNote}
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-6">
          {portfolio.map((p) => (
            <a key={p.slug} href={`/proyek/${p.slug}`} className="group block">
              <div className="img-frame overflow-hidden">
                <Img
                  src={p.hero}
                  alt={`${p.name} — ${p.category}, ${p.location}`}
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
                <h3 className="t-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-none">
                  {p.name}
                </h3>
                <span aria-hidden="true" className="t-mono text-ink/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink">
                  →
                </span>
              </div>
              <p className="t-mono mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/50">
                {p.location} — {p.year} — {p.status}
              </p>
            </a>
          ))}
        </div>
        <a
          href="/#projects"
          className="t-mono mt-12 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-ink/70 transition-colors duration-300 hover:border-ink hover:text-ink"
        >
          Lihat Semua Proyek <span aria-hidden="true">→</span>
        </a>
      </section>

      {/* ------------------------- AREA & FAQ ------------------------- */}
      <section className="px-6 pt-24 md:px-10 md:pt-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="t-mono flex items-center gap-3 text-ink/45">
              <SignalDot />
              Area Layanan
            </div>
            <p className="mt-6 leading-relaxed text-ink/60">{page.areaNote}</p>
            <div className="mt-8 space-y-3">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="t-mono flex items-center gap-3 text-ink/70 transition-colors hover:text-ink"
                >
                  Jasa Arsitek {o.city} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="t-display text-[clamp(1.7rem,3.6vw,2.7rem)] leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="mt-8">
              {page.faqs.map((f) => (
                <article key={f.q.slice(0, 30)} className="border-t border-ink/12 py-6 last:border-b">
                  <h3 className="t-display text-[1.15rem] leading-snug md:text-[1.3rem]">{f.q}</h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink/60">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="mt-24 bg-ink text-paper md:mt-36">
        <div className="px-6 py-20 md:px-10 md:py-28">
          <div className="t-mono flex items-center gap-3 text-paper/50">
            <SignalDot />
            Mulai dari Percakapan
          </div>
          <h2 className="t-display mt-7 max-w-4xl text-[clamp(2rem,5.4vw,4.2rem)] leading-[1.0]">
            Punya Rencana Proyek di {page.city}?
          </h2>
          <p className="t-statement mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-paper/70">
            {site.consultationId} Ceritakan lahan dan kebutuhan Anda — kami bantu menyusun langkah pertamanya.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={waLink(page.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-paper t-mono inline-flex items-center gap-3 px-8 py-4 !tracking-[0.22em]"
            >
              Start a Conversation <span aria-hidden="true">→</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="t-mono text-paper/60 transition-colors hover:text-paper"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------- structured data ------------------------- */

export function LocalPageJsonLd({ page }: { page: LocalPage }) {
  const url = `https://www.yfarch.my.id/${page.slug}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://www.yfarch.my.id/" },
        { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: "Architecture and design services",
      url,
      provider: {
        "@type": "ProfessionalService",
        name: "YF ARCH",
        url: "https://www.yfarch.my.id/",
        telephone: site.whatsapp,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Probolinggo",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
      },
      areaServed: page.city,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <>
      {data.map((d) => (
        <script
          key={d["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
