"use client";

/* Minimal inline markup for journal bodies:
   [label](/path) → internal link, [label](https://…) → external link,
   **bold** → <strong>. Everything else is plain text.
   Internal /journal/<slug> links are verified: links to draft or
   nonexistent articles render as plain text (never a broken link). */

import React from "react";
import { getPublishedArticle } from "@/lib/journal";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export function headingId(text: string): string {
  return slugify(text);
}

export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  // split on links and bold segments
  const re = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      const label = m[2];
      const href = m[3];
      const external = /^https?:\/\//.test(href);
      if (external) {
        parts.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sand underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass"
          >
            {label}
          </a>,
        );
      } else {
        // Verify /journal/<slug> targets — drafts render as plain text.
        const jm = href.match(/^\/journal\/([a-z0-9-]+)\/?$/);
        if (jm && !getPublishedArticle(jm[1])) {
          parts.push(<span key={key++}>{label}</span>);
        } else {
          parts.push(
            <a
              key={key++}
              href={href}
              className="text-sand underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass"
            >
              {label}
            </a>,
          );
        }
      }
    } else if (m[4]) {
      parts.push(
        <strong key={key++} className="font-semibold text-paper">
          {m[5]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
