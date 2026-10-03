/* A precise architectural cross-section, drawn as inline SVG —
   crisp at any size, 3 KB, and perfectly on-brand. */

export default function SectionDrawing() {
  const ink = "var(--ink)";
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-label="Architectural cross section drawing with level markers"
      className="h-auto w-full"
    >
      <g stroke={ink} strokeWidth="1" fill="none">
        {/* ground */}
        <line x1="40" y1="420" x2="920" y2="420" strokeWidth="2" />
        {[...Array(22)].map((_, i) => (
          <line
            key={i}
            x1={46 + i * 40}
            y1="420"
            x2={34 + i * 40}
            y2="434"
            strokeWidth="0.75"
            opacity="0.55"
          />
        ))}

        {/* roof plane with overhang */}
        <line x1="120" y1="150" x2="880" y2="150" strokeWidth="3" />
        <line x1="120" y1="158" x2="880" y2="158" strokeWidth="0.75" />

        {/* poché walls */}
        <rect x="236" y="158" width="14" height="262" fill={ink} />
        <rect x="610" y="158" width="14" height="262" fill={ink} />
        <rect x="830" y="158" width="14" height="140" fill={ink} />

        {/* mezzanine slab */}
        <rect x="250" y="288" width="200" height="10" fill={ink} />
        {/* mezzanine railing */}
        <line x1="440" y1="288" x2="440" y2="252" strokeWidth="0.75" />
        <line x1="250" y1="252" x2="440" y2="252" strokeWidth="0.75" />

        {/* teak screen (right bay) */}
        {[...Array(13)].map((_, i) => (
          <line
            key={i}
            x1={648 + i * 14}
            y1="168"
            x2={648 + i * 14}
            y2="420"
            strokeWidth="1.1"
            opacity="0.8"
          />
        ))}

        {/* glazing line (left bay) */}
        <line x1="243" y1="158" x2="243" y2="420" strokeWidth="0.5" opacity="0" />
        <line x1="160" y1="420" x2="160" y2="166" strokeWidth="0.9" />
        <line x1="164" y1="420" x2="164" y2="166" strokeWidth="0.5" opacity="0.5" />

        {/* pool at right */}
        <rect x="854" y="420" width="66" height="0.1" />
        <line x1="854" y1="420" x2="854" y2="446" />
        <line x1="854" y1="446" x2="920" y2="446" />
        <line x1="858" y1="427" x2="916" y2="427" strokeWidth="0.6" opacity="0.6" />

        {/* human figure */}
        <circle cx="520" cy="352" r="9" strokeWidth="1" />
        <line x1="520" y1="361" x2="520" y2="398" />
        <line x1="520" y1="372" x2="506" y2="386" />
        <line x1="520" y1="372" x2="534" y2="386" />
        <line x1="520" y1="398" x2="508" y2="420" />
        <line x1="520" y1="398" x2="532" y2="420" />

        {/* level markers */}
        {[
          ["+0.00", 420],
          ["+3.20", 288],
          ["+6.80", 150],
        ].map(([label, y]) => (
          <g key={label as string}>
            <line x1="60" y1={y as number} x2="92" y2={y as number} strokeWidth="0.75" />
            <path
              d={`M 92 ${(y as number) - 5} l 10 5 l -10 5 z`}
              fill={ink}
              stroke="none"
            />
          </g>
        ))}

        {/* dimension line */}
        <line x1="236" y1="470" x2="844" y2="470" strokeWidth="0.75" />
        <line x1="236" y1="462" x2="236" y2="478" strokeWidth="0.75" />
        <line x1="844" y1="462" x2="844" y2="478" strokeWidth="0.75" />
      </g>

      {/* lettering */}
      <g
        fill={ink}
        fontFamily="var(--font-mono), monospace"
        fontSize="12"
        letterSpacing="2"
      >
        <text x="24" y="412">+0.00</text>
        <text x="24" y="280">+3.20</text>
        <text x="24" y="142">+6.80</text>
        <text x="512" y="492" textAnchor="middle">12.4 M</text>
        <text x="880" y="142" textAnchor="end">RF +6.80</text>
        <text x="40" y="508" opacity="0.6">SECTION A–A · 1:50</text>
        <text x="920" y="508" textAnchor="end" opacity="0.6">YF ARCH</text>
      </g>
    </svg>
  );
}
