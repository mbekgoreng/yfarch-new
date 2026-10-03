"use client";

/* ------------------------------------------------------------------ */
/*  YF ARCH ASSISTANT                                                  */
/*  Jawaban dalam Bahasa Indonesia, dibangun HANYA dari lib/data.ts    */
/*  dan lib/pricing.ts — sumber data yang sama dengan halaman ini.     */
/*  Tidak pernah mengarang harga atau layanan.                         */
/* ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from "react";
import { projects, process, site, studio, profile } from "@/lib/data";
import { packages, rab, rp, isPromoActive, type Pkg } from "@/lib/pricing";

type Msg = { role: "user" | "bot"; text: string };

/* ---------- jawaban dibangun dari data ---------- */

function priceLine(p: Pkg, promo: boolean) {
  return promo
    ? `• ${p.name} — ${p.title}: ${rp(p.promo)}/m² (normal ${rp(p.normal)}/m²)`
    : `• ${p.name} — ${p.title}: ${rp(p.normal)}/m²`;
}

function pricingSummary(): string {
  const promo = isPromoActive();
  const head = promo
    ? "Harga YF ARCH dengan diskon 30% (berlaku 60 menit):"
    : "Harga resmi YF ARCH:";
  return `${head}\n\n${packages
    .map((p) => priceLine(p, promo))
    .join("\n")}\n• RAB — Rencana Anggaran Biaya: ${rp(
    rab.price
  )}/m² (output ${rab.output})\n\n${site.pricingNoteId}\n\nGunakan kalkulator di halaman HARGA untuk estimasi instan.`;
}

function pkgDetail(p: Pkg): string {
  const promo = isPromoActive();
  const harga = promo
    ? `${rp(p.promo)}/m² — diskon 30%, berlaku 60 menit (normal ${rp(p.normal)}/m²)`
    : `${rp(p.normal)}/m²`;
  return `${p.name} — ${p.title}\nHarga: ${harga}\n\nCakupan:\n${p.features
    .map((f) => `• ${f}`)
    .join("\n")}\n• ${p.render}${p.note ? `\n\nCatatan: ${p.note}` : ""}\n\n${
    site.pricingNoteId
  }`;
}

function rabAnswer(): string {
  return `RAB / Rencana Anggaran Biaya — layanan terpisah seharga ${rp(
    rab.price
  )}/m², output ${rab.output}.\n\nCakupan:\n${rab.features
    .map((f) => `• ${f}`)
    .join("\n")}`;
}

const A = {
  intro: `Halo, saya Asisten YF ARCH. Saya menjawab berdasarkan informasi resmi studio — paket layanan, harga, proyek, proses desain, dan konsultasi. Ada yang bisa saya bantu?`,
  projects: `Proyek terpilih YF ARCH:\n\n${projects
    .map((p) => `• ${p.name} — ${p.category}, ${p.location} (${p.year})`)
    .join("\n")}\n\nPengalaman proyek principal kami juga mencakup: ${profile.works.join(
    ", "
  )}.`,
  process: `Proses kerja YF ARCH terdiri dari enam tahap:\n\n${process
    .map((st) => `${st.index} ${st.name} — ${st.duration}`)
    .join("\n")}\n\nTahap desain biasanya 3–6 bulan sebelum konstruksi dimulai.`,
  consult: `${site.consultationId}\n\nCara memulai:\n• WhatsApp: ${site.whatsapp}\n• Email: ${site.email}\n\nAnda juga bisa memakai kalkulator di halaman HARGA, lalu tekan "KONSULTASI PROYEK" — detail pilihan Anda otomatis terkirim via WhatsApp.`,
  contact: `Studio YF ARCH berbasis di ${site.location}.\n\n• WhatsApp: ${site.whatsapp}\n• Email: ${site.email}\n• Instagram: ${site.instagram}\n\nRespons dalam 24 jam.`,
  studio: `${studio.description}`,
  profile: `YF ARCH dipimpin oleh ${profile.name}, S.Ars — ${profile.roles.join(
    ", "
  ).toLowerCase()}.\n\nLulusan ${profile.education.degree}, ${
    profile.education.school
  } (${profile.education.year}, ${
    profile.education.gpa
  }).\n\nPengalaman: ${profile.experience
    .map((e) => `${e.role} di ${e.office}`)
    .join("; ")}.`,
  fallback: `Maaf, saya hanya dapat menjawab berdasarkan informasi resmi yang ada di situs YF ARCH, dan saya tidak menemukan jawaban untuk pertanyaan itu.\n\nSaya bisa membantu soal:\n• paket layanan & harga\n• RAB\n• kalkulator estimasi\n• proyek & profil arsitek\n• proses desain\n• konsultasi & kontak\n\nUntuk pertanyaan lain, silakan hubungi ${site.whatsapp} atau ${site.email}.`,
};

/* ---------- pencocokan intent sederhana ---------- */

function hasAny(t: string, words: string[]) {
  return words.some((w) => t.includes(w));
}

function answer(raw: string): string {
  const t = raw.toLowerCase();

  const pkgKeys: [string, string[]][] = [
    ["complete", ["complete", "komplit", "interior + exterior", "best value"]],
    ["standard", ["standard", "standar", "gambar kerja + visual"]],
    ["basic", ["basic", "gambar dasar", "paket dasar"]],
    ["pro", ["paket pro", " pro", "pro "]],
    ["interior", ["interior", "furnitur", "furniture", "mebel", "moodboard"]],
    ["exterior", ["exterior", "eksterior", "facade", "fasad", "landscape", "lanskap", "taman"]],
  ];
  const matched = pkgKeys.find(([, keys]) => hasAny(t, keys));

  if (hasAny(t, ["halo", "hai", "hello", "selamat", "assalam", "pagi", "siang", "sore", "malam"]) && t.length < 32)
    return A.intro;

  if (hasAny(t, ["rab", "anggaran", "estimasi biaya bangun", "biaya pembangunan"])) return rabAnswer();
  if (matched) return pkgDetail(packages.find((p) => p.id === matched[0])!);
  if (hasAny(t, ["harga", "biaya", "tarif", "fee", "price", "berapa", "budget", "pricing", "promo", "diskon", "paket", "rp"]))
    return pricingSummary();
  if (hasAny(t, ["layanan", "jasa", "service", "menawarkan", "bisa apa"])) return pricingSummary();
  if (hasAny(t, ["kalkulator", "hitung", "kalkulasi", "estimasi"])) 
    return `Di halaman HARGA ada kalkulator estimasi: masukkan luas bangunan (m²), pilih paket, dan aktifkan RAB bila perlu — total estimasi muncul langsung, lalu bisa dikirim ke WhatsApp kami dengan satu tombol.`;
  if (hasAny(t, ["proyek", "project", "portofolio", "portfolio", "karya", "villa", "paviliun", "nganjuk", "unilever"])) return A.projects;
  if (hasAny(t, ["proses", "tahap", "alur", "cara kerja", "berapa lama", "durasi", "timeline", "waktu"])) return A.process;
  if (hasAny(t, ["konsultasi", "mulai", "start", "ketemu", "meeting", "janji"])) return A.consult;
  if (hasAny(t, ["kontak", "contact", "wa", "whatsapp", "email", "alamat", "lokasi", "dimana", "di mana"])) return A.contact;
  if (hasAny(t, ["siapa", "arsitek", "principal", "yusuf", "fahrezzi", "profil", "cv", "pengalaman", "pendidikan"])) return A.profile;
  if (hasAny(t, ["studio", "tentang", "about", "yf arch"])) return A.studio;

  return A.fallback;
}

const chips = [
  { label: "Paket & harga", q: "Apa saja paket dan harganya?" },
  { label: "RAB", q: "Apa itu layanan RAB?" },
  { label: "Proses desain", q: "Bagaimana proses desainnya?" },
  { label: "Konsultasi", q: "Bagaimana cara mulai konsultasi?" },
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: A.intro }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);

  const send = (q: string) => {
    const text = q.trim();
    if (!text || typing) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: answer(text) }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* floating trigger */}
      <button
        onClick={() => {
          setOpen((v) => !v);
          setTimeout(() => inputRef.current?.focus(), 450);
        }}
        aria-expanded={open}
        className="t-mono fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 border border-paper/20 bg-ink/90 px-4 py-3 text-paper shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 hover:bg-charcoal md:bottom-8 md:right-8"
      >
        <span className="pulse-dot block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
        {open ? "TUTUP" : "YF ARCH ASSISTANT"}
      </button>

      {/* panel */}
      <div
        className={`asst-panel fixed bottom-20 right-5 z-[60] flex h-[min(34rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col border border-paper/15 bg-ink/95 text-paper shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:bottom-24 md:right-8 ${
          open ? "open" : ""
        }`}
        role="dialog"
        aria-label="YF ARCH Assistant"
        aria-hidden={!open}
      >
        <div className="border-b border-paper/10 px-5 py-4">
          <div className="t-mono text-paper">YF ARCH ASSISTANT</div>
          <div className="t-mono mt-1.5 !normal-case !tracking-[0.08em] text-paper/40">
            Menjawab hanya dari informasi resmi studio.
          </div>
        </div>

        <div ref={logRef} className="asst-log grow space-y-4 overflow-y-auto px-5 py-5">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`max-w-[88%] whitespace-pre-line text-[0.82rem] font-light leading-relaxed ${
                m.role === "user"
                  ? "ml-auto border border-paper/15 bg-paper/10 px-3.5 py-2.5"
                  : "text-paper/85"
              }`}
            >
              {m.role === "bot" && (
                <span className="t-mono mb-1.5 block text-paper/30">YF ARCH</span>
              )}
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="typing pt-1" aria-label="Sedang mengetik">
              <i /><i /><i />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {chips.map((c) => (
            <button
              key={c.label}
              onClick={() => send(c.q)}
              className="t-mono border border-paper/15 px-2.5 py-1.5 text-paper/60 transition-colors hover:border-paper/40 hover:text-paper"
              tabIndex={open ? 0 : -1}
            >
              {c.label}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-3 border-t border-paper/10 px-5 py-3.5"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya tentang paket, harga, RAB…"
            aria-label="Pertanyaan untuk YF ARCH Assistant"
            className="w-full bg-transparent text-[0.85rem] font-light text-paper placeholder:text-paper/30 focus:outline-none"
            tabIndex={open ? 0 : -1}
          />
          <button
            type="submit"
            aria-label="Kirim"
            className="t-mono shrink-0 text-paper/60 transition-colors hover:text-paper"
            tabIndex={open ? 0 : -1}
          >
            KIRIM
          </button>
        </form>
      </div>
    </>
  );
}
