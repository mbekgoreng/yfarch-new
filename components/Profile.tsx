import { profile, site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Profile() {
  return (
    <section id="profile" className="hairline-t bg-paper-dim/60 py-28 md:py-40">
      <div className="px-6 md:px-10">
        <div className="t-mono flex items-baseline justify-between text-ink/40">
          <span>06 — PRINCIPAL</span>
          <span className="hidden sm:inline">{profile.degree} · UPN “VETERAN” JAWA TIMUR</span>
        </div>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
          {/* portrait */}
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
              <div className="t-mono mt-4 flex justify-between text-ink/45">
                <span>{profile.title}</span>
                <span className="text-ink/30">FIG. 01</span>
              </div>
            </Reveal>
          </div>

          {/* identity */}
          <div className="md:col-span-8 lg:col-span-9">
            <Reveal>
              <h2 className="t-display text-[clamp(2.2rem,6vw,5.2rem)]">
                AHMAD YUSUF
                <br />
                FAHREZZI
                <span className="t-serif italic tracking-normal text-ink/50">
                  , S.Ars
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="t-mono mt-5 text-ink/45">
                {profile.roles.join("  ·  ")}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="t-statement mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink/75 md:text-[1.18rem]">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal variant="line" delay={200}>
              <div className="mt-12 h-px w-full bg-ink/12" />
            </Reveal>

            {/* dossier grid */}
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* education */}
              <Reveal delay={80}>
                <h3 className="t-mono mb-5 text-ink/35">EDUCATION</h3>
                <div className="text-[0.95rem] font-light leading-relaxed text-ink/80">
                  {profile.education.degree}
                </div>
                <div className="t-mono mt-2 !normal-case !tracking-[0.08em] text-ink/50">
                  {profile.education.school}
                </div>
                <div className="t-mono mt-1.5 text-ink/40">
                  {profile.education.year} · {profile.education.gpa}
                </div>

                <h3 className="t-mono mb-5 mt-10 text-ink/35">CONTACT</h3>
                <ul className="t-mono space-y-2.5 !normal-case !tracking-[0.08em] text-ink/60">
                  <li>
                    <a href={`mailto:${site.email}`} className="hover:text-ink">
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink"
                    >
                      {site.whatsapp}
                    </a>
                  </li>
                  <li>IG {site.instagram}</li>
                </ul>
              </Reveal>

              {/* experience */}
              <Reveal delay={160}>
                <h3 className="t-mono mb-5 text-ink/35">EXPERIENCE</h3>
                <ol className="space-y-4">
                  {profile.experience.map((e) => (
                    <li key={e.period + e.office} className="hairline-b pb-4 last:border-b-0">
                      <div className="t-mono mb-1 text-ink/35">{e.period}</div>
                      <div className="text-[0.95rem] font-light text-ink/85">
                        {e.role}
                      </div>
                      <div className="t-mono mt-0.5 !normal-case !tracking-[0.08em] text-ink/50">
                        {e.office}
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* expertise + works */}
              <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
                <h3 className="t-mono mb-5 text-ink/35">EXPERTISE</h3>
                <ul className="space-y-4">
                  {profile.skills.map((s) => (
                    <li key={s.group}>
                      <div className="t-mono mb-1 text-ink/55">{s.group}</div>
                      <div className="t-mono !normal-case !tracking-[0.08em] text-ink/45">
                        {s.items}
                      </div>
                    </li>
                  ))}
                </ul>

                <h3 className="t-mono mb-5 mt-10 text-ink/35">SELECTED WORKS</h3>
                <ul className="t-mono space-y-2.5 !normal-case !tracking-[0.08em] text-ink/55">
                  {profile.works.map((w) => (
                    <li key={w} className="flex gap-3">
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
    </section>
  );
}
