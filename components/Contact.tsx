"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const inquiryHref = `mailto:${site.email}?subject=Project%20Inquiry%20—%20YF%20ARCH&body=Name%3A%0ALocation%20of%20site%3A%0AProgram%20(house%2C%20villa%2C%20interior...)%3A%0AApprox.%20area%20(m²)%3A%0ABudget%20range%3A%0A`;

  /* contact links: values come from the site data (stable), labels from the
     active-language dict so they swap with the language. */
  const links = c.links.map((l) => {
    if (l.label === "WHATSAPP")
      return { label: l.label, value: site.whatsapp, href: site.whatsappLink, external: true };
    if (l.label === "EMAIL")
      return { label: l.label, value: site.email, href: `mailto:${site.email}`, external: false };
    return { label: l.label, value: site.email, href: inquiryHref, external: false };
  });

  return (
    <section id="contact" className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-paper">
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

      <div className="relative z-10 flex items-baseline justify-between px-6 pt-24 md:px-10 md:pt-32">
        <span className="t-mono text-paper/45">{c.eyebrow}</span>
        <span className="t-mono hidden text-paper/45 sm:inline">
          {c.responseIn}
        </span>
      </div>

      {/* middle content — grows to center in the space above the footer block;
          never overlaps the brand mark below because the footer is a sibling
          that flows after this grown block, not a justified extreme */}
      <div className="relative z-10 flex grow flex-col justify-center px-6 py-10 md:px-10">
        <Reveal>
          <h2 className="t-display text-[clamp(2rem,7vw,6.5rem)] !leading-[0.95]">
            {c.heading.map((ln) => (
              <span key={ln} className="block">
                {ln}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-statement mt-6 max-w-md text-[1rem] text-paper/65 md:text-[1.05rem]">
            {c.sub}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a
            href={inquiryHref}
            className="btn-paper t-mono mt-8 inline-flex w-fit items-center gap-3 px-8 py-4 !tracking-[0.24em] md:px-9 md:py-5"
          >
            {c.cta} <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

      {/* bottom block — brand + links + footer strip, fixed height, never
          overlapped because it is the last (shrink-0) flex child */}
      <div className="relative z-10 shrink-0 px-6 pb-6 md:px-10">
        <Reveal>
          <img
            src="/images/logo.png"
            alt={c.logoAlt}
            loading="lazy"
            className="mb-6 h-12 w-auto md:h-14"
          />
        </Reveal>
        <Reveal variant="line">
          <div className="h-px w-full bg-paper/20" />
        </Reveal>
        <div className="grid gap-2 py-5 sm:grid-cols-3 sm:gap-8">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 80}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block py-3"
              >
                <div className="t-mono mb-2 text-paper/40">{l.label}</div>
                <div className="text-[clamp(1rem,2.2vw,1.5rem)] font-light tracking-tight text-paper transition-colors duration-300 group-hover:text-sand">
                  {l.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* footer strip */}
        <div className="t-mono flex flex-col gap-2 border-t border-paper/15 pt-4 text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 YF ARCH — {site.location.toUpperCase()}</span>
          <span>{site.coordinates}</span>
          <span>INSTAGRAM {site.instagram.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
