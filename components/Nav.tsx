"use client";

import { useEffect, useState } from "react";
import { nav, site, navCta } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  /* Over the dark hero film the bar is transparent and the mark relies on
     mix-blend-difference to read as white. Past the film the page is light
     paper, so the same mark turns dark and collided with headlines for ~half
     the page (measured: 49% desktop / 65% mobile of all scroll positions).
     A solid paper bar from that point on gives the chrome its own readable
     zone. Pages whose top is already light (/harga) are solid from the start. */
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".walk-track");
    if (!hero) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(hero.getBoundingClientRect().bottom <= 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* bar */}
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          solid
            ? "border-line bg-paper/95 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-7">
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="pointer-events-auto"
            aria-label="YF ARCH — beranda"
          >
            <img
              src="/images/logo.png"
              alt="YF ARCHITECT"
              className="h-9 w-auto md:h-11 [filter:drop-shadow(0_1px_6px_rgba(0,0,0,0.45))]"
            />
          </a>
          <div className="pointer-events-auto flex items-center gap-6 md:gap-8">
            <a
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="t-mono hidden items-center gap-2 text-white mix-blend-difference transition-opacity duration-300 hover:opacity-60 sm:inline-flex"
            >
              {navCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="t-mono flex items-center gap-3 text-white mix-blend-difference"
            >
            <span className="hidden sm:inline">
              {open ? "CLOSE" : "MENU"}
            </span>
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-white transition-transform duration-500 ${
                  open ? "translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-6 bg-white transition-transform duration-500 ${
                  open ? "-translate-y-[5.5px] rotate-45" : ""
                }`}
              />
            </span>
            </button>
          </div>
        </div>
      </header>

      {/* full-screen menu */}
      <nav
        className={`menu-overlay fixed inset-0 z-40 bg-ink ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pt-36">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="menu-link-wrap border-b border-paper/10"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="menu-link-inner group flex items-baseline justify-between py-4 md:py-5"
                  style={{ "--i": i } as React.CSSProperties}
                  tabIndex={open ? 0 : -1}
                >
                  <span className="t-display text-[clamp(1.9rem,6vw,4.6rem)] text-paper transition-colors duration-300 group-hover:text-sand">
                    {item.label}
                  </span>
                  <span className="t-mono text-paper/35">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <img
              src="/images/logo.png"
              alt="YF ARCHITECT"
              className="menu-meta mb-10 h-16 w-auto md:h-20"
            />
            <div className="menu-meta grid grid-cols-2 gap-6 [&>*]:min-w-0 md:grid-cols-4">
            <div>
              <div className="t-mono mb-2 text-paper/35">STUDIO</div>
              <div className="t-mono text-paper/75">{site.location.toUpperCase()}</div>
            </div>
            <div>
              <div className="t-mono mb-2 text-paper/35">EMAIL</div>
              <a
                href={`mailto:${site.email}`}
                className="t-mono break-words text-paper/75 hover:text-paper"
                tabIndex={open ? 0 : -1}
              >
                {site.email.toUpperCase()}
              </a>
            </div>
            <div>
              <div className="t-mono mb-2 text-paper/35">WHATSAPP</div>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="t-mono break-words text-paper/75 hover:text-paper"
                tabIndex={open ? 0 : -1}
              >
                {site.whatsapp}
              </a>
            </div>
            <div className="text-left md:text-right">
              <div className="t-mono mb-2 text-paper/35">LOCAL TIME</div>
              <div className="t-mono text-paper/75">{time} WIB</div>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
