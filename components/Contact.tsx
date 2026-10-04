import { site } from "@/lib/data";
import Reveal from "./Reveal";

const links = [
  {
    label: "WHATSAPP",
    value: site.whatsapp,
    href: site.whatsappLink,
    external: true,
  },
  {
    label: "EMAIL",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "PROJECT INQUIRY",
    value: "BRIEF US →",
    href: `mailto:${site.email}?subject=Project%20Inquiry%20—%20YF%20ARCH&body=Name%3A%0ALocation%20of%20site%3A%0AProgram%20(house%2C%20villa%2C%20interior...)%3A%0AApprox.%20area%20(m²)%3A%0ABudget%20range%3A%0A`,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink text-paper">
      {/* cinematic background */}
      <img
        src="/images/film-06-dusk-1920.webp"
        srcSet="/images/film-06-dusk-960.webp 960w, /images/film-06-dusk-1920.webp 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/85" aria-hidden="true" />

      <div className="relative z-10 flex items-baseline justify-between px-6 pt-28 md:px-10 md:pt-36">
        <span className="t-mono text-paper/45">07 — CONTACT</span>
        <span className="t-mono hidden text-paper/45 sm:inline">
          RESPONSE WITHIN 24 H
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-10">
        <Reveal>
          <h2 className="t-display text-[clamp(2.4rem,9vw,8rem)]">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            MEANINGFUL.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="t-statement mt-8 max-w-md text-[1.05rem] text-paper/65">
            {site.consultation}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <a
            href={`mailto:${site.email}?subject=Project%20Inquiry%20—%20YF%20ARCH&body=Name%3A%0ALocation%20of%20site%3A%0AProgram%20(house%2C%20villa%2C%20interior...)%3A%0AApprox.%20area%20(m²)%3A%0ABudget%20range%3A%0A`}
            className="btn-paper t-mono mt-10 inline-flex w-fit items-center gap-3 px-9 py-5 !tracking-[0.24em]"
          >
            START A PROJECT <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

      <div className="relative z-10 px-6 pb-8 md:px-10">
        <Reveal>
          <img
            src="/images/logo.png"
            alt="YF ARCHITECT"
            loading="lazy"
            className="mb-8 h-14 w-auto md:h-16"
          />
        </Reveal>
        <Reveal variant="line">
          <div className="h-px w-full bg-paper/20" />
        </Reveal>
        <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 90}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block py-3"
              >
                <div className="t-mono mb-2 text-paper/40">{l.label}</div>
                <div className="text-[clamp(1.1rem,2.4vw,1.6rem)] font-light tracking-tight text-paper transition-colors duration-300 group-hover:text-sand">
                  {l.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* footer strip */}
        <div className="t-mono flex flex-col gap-2 border-t border-paper/15 pt-5 text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 YF ARCH — {site.location.toUpperCase()}</span>
          <span>{site.coordinates}</span>
          <span>INSTAGRAM {site.instagram.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
