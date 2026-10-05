"use client";

/* ------------------------------------------------------------------ */
/*  YF ARCH ASSISTANT                                                  */
/*  Answers built ONLY from lib/data.ts + lib/pricing.ts (the same      */
/*  sources as the site), with copy from the active-language dict so   */
/*  EN / ID / ZH all work. Never invents prices or services.           */
/* ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from "react";
import { projects, process, site, studio, profile } from "@/lib/data";
import { packages, rab, rp, isPromoActive, type Pkg } from "@/lib/pricing";
import { useI18n } from "@/lib/i18n";
import type { Dict } from "@/lib/i18n-strings";

type Msg = { role: "user" | "bot"; text: string };

function priceLine(p: Pkg, promo: boolean) {
  return promo
    ? `• ${p.name} — ${p.title}: ${rp(p.promo)}/m² (normal ${rp(p.normal)}/m²)`
    : `• ${p.name} — ${p.title}: ${rp(p.normal)}/m²`;
}

const fill = (s: string, m: Record<string, string>) =>
  Object.entries(m).reduce((acc, [k, v]) => acc.split(`{${k}}`).join(v), s);

function buildAnswers(t: Dict) {
  const a = t.assistant;
  const promo = isPromoActive();
  const head = promo ? "30% OFF:" : "OFFICIAL LIST:";

  const priceSummary = `${head}\n\n${packages
    .map((p) => priceLine(p, promo))
    .join("\n")}\n• RAB — Rencana Anggaran Biaya: ${rp(
    rab.price
  )}/m² (output ${rab.output})\n\n${site.pricingNoteId}\n\nGunakan kalkulator di halaman HARGA untuk estimasi instan.`;

  const pkgDetail = (p: Pkg): string => {
    const promoA = isPromoActive();
    const harga = promoA
      ? `${rp(p.promo)}/m² — diskon 30%, berlaku 60 menit (normal ${rp(p.normal)}/m²)`
      : `${rp(p.normal)}/m²`;
    return `${p.name} — ${p.title}\nHarga: ${harga}\n\nCakupan:\n${p.features
      .map((f) => `• ${f}`)
      .join("\n")}\n• ${p.render}${p.note ? `\n\nCatatan: ${p.note}` : ""}\n\n${site.pricingNoteId}`;
  };

  const rabAnswer = `RAB / Rencana Anggaran Biaya — layanan terpisah seharga ${rp(
    rab.price
  )}/m², output ${rab.output}.\n\nCakupan:\n${rab.features
    .map((f) => `• ${f}`)
    .join("\n")}`;

  return {
    A: {
      intro: a.intro,
      projects: fill(a.projects, {
        projects: projects
          .map((p) => `• ${p.name} — ${p.category}, ${p.location} (${p.year})`)
          .join("\n"),
        works: profile.works.join(", "),
      }),
      process:
        a.processPre +
        process.map((st) => `${st.index} ${st.name} — ${st.duration}`).join("\n") +
        a.processPost,
      consult: fill(a.consult, { wa: site.whatsapp, email: site.email }),
      contact: fill(a.contact, {
        location: site.location,
        wa: site.whatsapp,
        email: site.email,
        ig: site.instagram,
      }),
      studio: fill(a.studio, { so: studio.description }),
      profile: fill(a.profile, {
        name: profile.name,
        roles: profile.roles.join(", ").toLowerCase(),
        degree: profile.education.degree,
        school: profile.education.school,
        year: profile.education.year,
        gpa: profile.education.gpa,
      }).replace("{gpa}", profile.education.gpa),
      fallback: fill(a.fallback, { wa: site.whatsapp, email: site.email }).replace(
        "{help}",
        a.helpList.map((h) => `• ${h}`).join("\n")
      ),
    },
    priceSummary,
    pkgDetail,
    rabAnswer,
    calcHint: `Di halaman HARGA ada kalkulator estimasi: masukkan luas bangunan (m²), pilih paket, dan aktifkan RAB bila perlu — total estimasi muncul langsung, lalu bisa dikirim ke WhatsApp kami dengan satu tombol.`,
    chips: [
      { label: a.prompts[0], q: a.prompts[0] },
      { label: "RAB", q: a.prompts[1] },
      { label: a.prompts[2], q: a.prompts[2] },
      { label: a.prompts[5], q: a.prompts[5] },
    ],
    placeholder: a.placeholder,
    headerNote: a.headerNote,
    closeLabel: t.menu.close,
    openLabel: "YF ARCH ASSISTANT",
    sendLabel: a.sendLabel,
    typingAria: a.sendLabel,
  };
}


/* ---------- multi-language intent matching ---------- */

function hasAny(t: string, words: string[]) {
  return words.some((w) => t.includes(w));
}

function matchIntent(raw: string): [string] | undefined {
  const t = raw.toLowerCase();
  const keys: [string, string[]][] = [
    ["complete", ["complete", "komplit", "interior + exterior", "best value", "全套", "室内 + 外立面"]],
    ["standard", ["standard", "standar", "gambar kerja + visual", "施工图", "标准"]],
    ["basic", ["basic", "gambar dasar", "paket dasar", "基础图纸", "基础"]],
    ["pro", ["paket pro", " pro ", "pro", "专业"]],
    ["interior", ["interior", "furnitur", "furniture", "mebel", "moodboard", "室内"]],
    ["exterior", ["exterior", "eksterior", "facade", "fasad", "landscape", "lanskap", "taman", "外立面", "景观"]],
  ];
  const found = keys.find(([, kw]) => hasAny(t, kw));
  return found ? [found[0]] : undefined;
}

function detectHints(raw: string) {
  const t = raw.toLowerCase();
  const has = (ws: string[]) => hasAny(t, ws);
  return {
    greeting: has(["halo", "hai", "hello", "hi", "selamat", "assalam", "pagi", "siang", "sore", "malam", "你好"]) && t.length < 40,
    rab: has(["rab", "anggaran", "biaya bangun", "biaya pembangunan", "预算", "造价"]),
    price: has(["harga", "biaya", "tarif", "price", "pricing", "promo", "diskon", "paket", "rp", "价格", "费用", "套餐"]),
    service: has(["layanan", "jasa", "service", "menawarkan", "bisa apa", "服务", "提供"]),
    calc: has(["kalkulator", "hitung", "kalkulasi", "estimasi", "计算", "估算"]),
    project: has(["proyek", "project", "portofolio", "portfolio", "karya", "villa", "paviliun", "nganjuk", "unilever", "项目", "作品"]),
    process: has(["proses", "tahap", "alur", "cara kerja", "berapa lama", "durasi", "timeline", "waktu", "流程", "步骤", "多久"]),
    consult: has(["konsultasi", "mulai", "start", "ketemu", "meeting", "janji", "咨询", "开始"]),
    contact: has(["kontak", "contact", "wa", "whatsapp", "email", "alamat", "lokasi", "dimana", "di mana", "联系", "地址", "方式"]),
    profile: has(["siapa", "arsitek", "principal", "yusuf", "fahrezzi", "profil", "cv", "pengalaman", "pendidikan", "是谁", "建筑师", "教育"]),
    studio: has(["studio", "tentang", "about", "yf arch", "事务所", "关于"]),
  };
}



export default function Assistant() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const u = buildAnswers(t);
  const lang = t.assistant.intro; // changes identity when language switches

  /* seed intro; re-seed only while the chat is untouched */
  useEffect(() => {
    setMsgs((m) => (m.length === 0 ? [{ role: "bot", text: u.A.intro }] : m));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const answer = (raw: string): string => {
    const h = detectHints(raw);
    const matched = matchIntent(raw);
    if (h.greeting) return u.A.intro;
    if (h.rab) return u.rabAnswer;
    if (matched) return u.pkgDetail(packages.find((p) => p.id === matched[0])!);
    if (h.price || h.service) return u.priceSummary;
    if (h.calc) return u.calcHint;
    if (h.project) return u.A.projects;
    if (h.process) return u.A.process;
    if (h.consult) return u.A.consult;
    if (h.contact) return u.A.contact;
    if (h.profile) return u.A.profile;
    if (h.studio) return u.A.studio;
    return u.A.fallback;
  };

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

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);

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
        {open ? u.closeLabel : u.openLabel}
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
          <div className="t-mono text-paper">{u.openLabel}</div>
          <div className="t-mono mt-1.5 !normal-case !tracking-[0.08em] text-paper/40">
            {u.headerNote}
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
            <div className="typing pt-1" aria-label={u.typingAria}>
              <i /><i /><i />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {u.chips.map((c) => (
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
            placeholder={u.placeholder}
            aria-label={u.openLabel}
            className="w-full bg-transparent text-[0.85rem] font-light text-paper placeholder:text-paper/30 focus:outline-none"
            tabIndex={open ? 0 : -1}
          />
          <button
            type="submit"
            aria-label={u.sendLabel}
            className="t-mono shrink-0 text-paper/60 transition-colors hover:text-paper"
            tabIndex={open ? 0 : -1}
          >
            {u.sendLabel}
          </button>
        </form>
      </div>
    </>
  );
}
