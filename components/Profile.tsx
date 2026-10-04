import { profile, site } from "@/lib/data";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/*  PROFILE — the principal's page.                                    */
/*                                                                     */
/*  Monograph treatment: asymmetric 12-col grid, large display name,   */
/*  tagline as a pulled-italic statement above a two-paragraph bio,     */
/*  and a hairline-list dossier (EDUCATION / CONTACT on one column,    */
/*  EXPERTISE / SELECTED WORKS on the other) — not a card grid.        */
/* ------------------------------------------------------------------ */

function SignalDot() {
  return (
    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
  );
}

export default function Profile() {
  return (
    <section id="profile" className="hairline-t bg-paper-dim/60 py-28 md:py-44">
      <div className="px-6 md:px-10">
        {/* eyebrow */}
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span className="flex items-center gap-3">
            <SignalDot />
            06 — PRINCIPAL
          </span>
          <span className="hidden sm:inline">
            {profile.degree} · UPN &ldquo;VETERAN&rdquo; JAWA TIMUR
          </span>
        </div>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
          {/* portrait — left, narrow */}
          <div className="md:col-span-4 lg:col-span-3">
            <Reveal variant="mask" className="img-frame">
              <img
                src={profile.portrait}
                alt={`${profile.name} — Principal YF ARCH`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={150}>
              <div className="t-mono mt-4 flex items-baseline justify-between text-ink/45">
                <span>{profile.title}</span>
                <span className="text-ink/30">FIG. 01</span>
              </div>
            </Reveal>
          </div>

          {/* identity — right, wide */}
          <div className="md:col-span-8 lg:col-span-9">
            <Reveal>
              <h2 className="t-display text-[clamp(2.2rem,6vw,5.4rem)] md:leading-[0.92]">
                AHMAD YUSUF
                <br />
                FAHREZZI
                <span className="t-serif italic tracking-normal text-ink/50">
                  {" "}, S.Ars
                </span>
              </h2>
            </Reveal>

            {/* roles — clock-style chips instead of a long mono line */}
            <Reveal delay={100}>
              <ul className="t-mono mt-6 flex flex-wrap gap-x-4 gap-y-2 text-ink/45">
                {profile.roles.map((r, i) => (
                  <li key={r} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="h-px w-4 bg-ink/20" aria-hidden="true" />
                    )}
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* tagline — pulled-italic statement */}
            <Reveal delay={160}>
              <p className="t-serif mt-10 max-w-2xl text-[clamp(1.4rem,3vw,2.1rem)] italic leading-[1.25] text-ink/70 md:mt-12">
                &ldquo;{profile.tagline}&rdquo;
              </p>
            </Reveal>

            {/* bio — two short paragraphs */}
            <Reveal delay={220}>
              <div className="mt-8 max-w-2xl space-y-5 text-[1.02rem] font-light leading-[1.65] text-ink/70 md:mt-10 md:text-[1.12rem]">
                {profile.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal variant="line" delay={260}>
              <div className="mt-14 h-px w-full bg-ink/12 md:mt-16" />
            </Reveal>

            {/* dossier — two hairline-list columns */}
            <div className="mt-10 grid gap-12 sm:grid-cols-2 md:gap-16">
              {/* left — education + contact */}
              <div className="space-y-12">
                <Reveal>
                  <h3 className="t-mono mb-6 text-ink/35">EDUCATION</h3>
                  <div className="text-[0.98rem] font-light leading-relaxed text-ink/85">
                    {profile.education.degree}
                  </div>
                  <div className="t-mono mt-2 !normal-case !tracking-[0.08em] text-ink/55">
                    {profile.education.school}
                  </div>
                  <div className="t-mono mt-1.5 text-ink/40">
                    {profile.education.year} · {profile.education.gpa}
                  </div>
                </Reveal>

                <Reveal>
                  <h3 className="t-mono mb-6 text-ink/35">CONTACT</h3>
                  <ul className="t-mono space-y-3 !normal-case !tracking-[0.08em] text-ink/65">
                    <li className="hairline-b pb-3">
                      <a
                        href={`mailto:${site.email}`}
                        className="break-words transition-colors hover:text-ink"
                      >
                        {site.email}
                      </a>
                    </li>
                    <li className="hairline-b pb-3">
                      <a
                        href={site.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words transition-colors hover:text-ink"
                      >
                        {site.whatsapp}
                      </a>
                    </li>
                    <li className="pb-3">
                      <span className="text-ink/35">IG&nbsp;&nbsp;</span>
                      <a
                        href={`https://instagram.com/${site.instagram.replace(/^@/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ink"
                      >
                        {site.instagram}
                      </a>
                    </li>
                  </ul>
                </Reveal>
              </div>

              {/* right — expertise + selected works */}
              <div className="space-y-12">
                <Reveal delay={120}>
                  <h3 className="t-mono mb-6 text-ink/35">EXPERTISE</h3>
                  <ul className="space-y-5">
                    {profile.skills.map((s) => (
                      <li key={s.group} className="hairline-b pb-4 last:border-b-0">
                        <div className="t-mono mb-1 text-ink/55">{s.group}</div>
                        <div className="t-mono !normal-case !tracking-[0.08em] text-ink/45">
                          {s.items}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={200}>
                  <h3 className="t-mono mb-6 text-ink/35">SELECTED WORKS</h3>
                  <ul className="t-mono space-y-3 !normal-case !tracking-[0.08em] text-ink/60">
                    {profile.works.map((w) => (
                      <li key={w} className="flex gap-3 hairline-b pb-3 last:border-b-0">
                        <span className="text-ink/25">—</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
