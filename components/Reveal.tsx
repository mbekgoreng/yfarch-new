"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "fade" | "mask" | "line";
  delay?: number; // ms
  as?: "div" | "span" | "figure" | "h2" | "h3" | "p" | "li";
};

export default function Reveal({
  children,
  className = "",
  variant = "fade",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const node = el;

    let raf = 0;
    let done = false;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) reveal();
      },
      {
        /* The "mask" variant clips itself to zero height (clip-path: inset(0 0 100% 0)),
           which makes IntersectionObserver report a zero intersection ratio. A threshold
           above 0 would therefore never fire and the element would stay hidden forever,
           so the mask variant must trigger on any intersection (threshold 0). */
        threshold: variant === "mask" ? 0 : 0.18,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    /* Belt-and-braces: a geometry check that ignores clip-path, used as a
       fallback in case a browser reports no intersection for a fully
       clipped element. */
    const inView = () => {
      const r = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > 0;
    };

    const onScroll = () => {
      if (done || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (inView()) reveal();
      });
    };

    function reveal() {
      if (done) return;
      done = true;
      node.classList.add("is-in");
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    io.observe(node);

    if (variant === "mask") {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [variant]);

  const base =
    variant === "mask" ? "reveal-mask" : variant === "line" ? "reveal-line" : "reveal";

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`${base} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
