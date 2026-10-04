/* ------------------------------------------------------------------ */
/*  YF ARCH — single source of truth                                   */
/*  Everything on the site (and everything the assistant is allowed    */
/*  to say) is derived from this file + lib/pricing.ts.                */
/* ------------------------------------------------------------------ */

export const site = {
  name: "YF ARCH",
  tagline: "Architecture · Design · Construction",
  founded: 2026,
  location: "Probolinggo, East Java, Indonesia",
  coordinates: "7°45′ S · 113°13′ E",
  email: "yusuffahrezzi.arch@gmail.com",
  whatsapp: "+62 821-4242-4750",
  whatsappLink: "https://wa.me/6282142424750",
  instagram: "@yf_arch",
  linkedin: "linkedin.com/in/ahmad-yusuf-fahrezzi-84ab9412a",
  consultation:
    "The first consultation is free — a conversation about your site, your brief and your budget. No obligation.",
  consultationId:
    "Konsultasi pertama gratis — percakapan tentang lahan, kebutuhan, dan anggaran Anda. Tanpa kewajiban apa pun.",
  pricingNoteId:
    "Harga dihitung per m² luas bangunan/area desain, dikonfirmasi dalam proposal tertulis setelah konsultasi pertama.",
};

/* ------------------------------ profile ---------------------------- */

export const profile = {
  name: "AHMAD YUSUF FAHREZZI",
  shortName: "Yusuf Fahrezzi",
  title: "PRINCIPAL — YF ARCH",
  degree: "S.Ars",
  roles: [
    "ARCHITECT DESIGN",
    "INTERIOR DESIGN",
    "BIM",
    "WEB DEVELOP",
    "UI/UX",
    "AI ENGINEER",
  ],
  portrait: "/images/profile-portrait.webp",
  /* a short editorial line — the headline above the body copy. Kept
     separate from the long bio so the layout can break it as a pull
     quote / italic statement, in monograph fashion. */
  tagline:
    "Quiet buildings, clear drawings, transparent pricing.",
  bio: [
    "Arsitek lulusan UPN “Veteran” Jawa Timur yang menggabungkan praktik arsitektur, BIM, dan visualisasi dengan teknologi digital — dari gambar kerja yang presisi hingga pengembangan produk web dan alur kerja berbasis AI.",
    "Berkomitmen menghasilkan karya yang estetis, fungsional, dan berdampak — dirancang dengan ketelitian yang sama, dari denah pertama hingga detail terakhir.",
  ],
  education: {
    degree: "Bachelor of Architecture (S.Ars)",
    school: "UPN “Veteran” Jawa Timur — Surabaya",
    year: "2023",
    gpa: "GPA 3.48",
  },
  experience: [
    {
      period: "2026 — NOW",
      role: "Principal",
      office: "YF ARCH — Freelance Arsitek Studio",
    },
    {
      period: "2025",
      role: "Senior Arsitek",
      office: "Kinaya Interior",
    },
    {
      period: "2025",
      role: "BIM Modeler · CadMan",
      office: "PT Indra Karya (Persero)",
    },
    {
      period: "2025",
      role: "Arsitek & Draftman",
      office: "CV Moedji Kawanti",
    },
    {
      period: "2024",
      role: "Arsitek",
      office: "PT Mega Pratama Elektrindo",
    },
  ],
  skills: [
    {
      group: "ARCHITECT DESIGN",
      items: "Architectural Design · Design Development · Technical Documentation",
    },
    {
      group: "INTERIOR DESIGN",
      items: "Interior Layout · Space Planning · Material & Finish Selection",
    },
    {
      group: "BIM",
      items: "BIM Modeling · Revit · AutoCAD · BIM Coordination",
    },
    {
      group: "WEB DEVELOP",
      items: "Next.js · React · TypeScript · REST & Cloud Integration",
    },
    {
      group: "UI/UX",
      items: "User Interface · User Experience · Design Systems & Prototyping",
    },
    {
      group: "AI ENGINEER",
      items: "Prompt Engineering · Generative AI · Workflow Automation",
    },
  ],
  works: [
    "Interior MPP Kab. Nganjuk",
    "Rehab Interior & Eksterior MPP Nganjuk",
    "Green Living Villa — Lawang",
    "Unilever Interior Cooperative Space",
    "Adhy House",
    "3D Model — Dental Clinic & Hotel",
  ],
};

/* ------------------------------- film ----------------------------- */

export type Scene = {
  id: string;
  src: string;
  word: string | null;
  sub: string | null;
  anno: [string, string, string, string]; // TL, TR, BL, BR
};

export const scenes: Scene[] = [
  {
    id: "01",
    src: "film-01-form",
    word: "FORM",
    sub: "A single volume, placed with intention.",
    anno: ["SECTION 01", "SITE · EAST JAVA", "+0.00", "NORTH ↑"],
  },
  {
    id: "02",
    src: "film-02-light",
    word: "LIGHT",
    sub: "The sun is the first material.",
    anno: ["SECTION 02", "ENTRY AXIS", "+0.45", "SUN 64° W"],
  },
  {
    id: "03",
    src: "film-03-space",
    word: "SPACE",
    sub: "Emptiness, held precisely.",
    anno: ["SECTION 03", "LIVING VOLUME", "+3.20", "CH 6.80 M"],
  },
  {
    id: "04",
    src: "film-04-material",
    word: "MATERIAL",
    sub: "Teak. Basalt. Lime. Nothing else.",
    anno: ["SECTION 04", "JUNCTION DTL 1:5", "TEAK · BASALT", "LIME PLASTER"],
  },
  {
    id: "05",
    src: "film-05-connection",
    word: "CONNECTION",
    sub: "Inside and outside, one room.",
    anno: ["SECTION 05", "COURTYARD", "±0.00", "12.4 M"],
  },
  {
    id: "06",
    src: "film-06-dusk",
    word: null,
    sub: null,
    anno: ["SECTION 06", "WEST ELEVATION", "DUSK · 12 LUX", "SILENCE"],
  },
];

/* ----------------------------- projects --------------------------- */

export type GalleryItem = {
  src?: string;
  svg?: "section";
  caption: string;
  kind: string;
  wide?: boolean;
};

export type Project = {
  index: string;
  slug: string;
  name: string;
  location: string;
  year: string;
  category: string;
  area: string;
  /** services delivered on this project, e.g. ARCHITECTURE / INTERIOR */
  services?: string[];
  /** short cinematic line used on the featured plate */
  tagline?: string;
  status: string;
  elevation: string;
  hero: string;
  /** when present, the hero auto-crossfades between the day and night render */
  daynight?: { day: string; night: string };
  narrative: string;
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "mr-alex-house",
    name: "MR. ALEX HOUSE",
    location: "Pasuruan Regency, East Java",
    year: "2026",
    category: "Private Residence",
    area: "280 m²",
    services: ["ARCHITECTURE", "INTERIOR", "CONSTRUCTION"],
    status: "Design & visualization",
    elevation: "+18 M ASL",
    hero: "alex-house-ext-1",
    daynight: { day: "alex-house-ext-1", night: "alex-house-ext-night" },
    narrative:
      "A two-storey family house composed as three stacked horizontal planes. A floating roof with one continuous line of warm cove light shelters a calm composition of white plaster, charcoal stone and dark timber. At dusk the house glows quietly — the soffits above the carport and entrance turning the facade into a soft lantern. Inside, the palette deepens: smoked oak cabinetry, book-matched grey marble and brass accents frame the family room and kitchen, while the master suite pairs fluted timber with warm veined stone. Designed, modelled and visualized entirely in-house by YF ARCH.",
    gallery: [
      {
        src: "alex-house-ext-2",
        caption: "Entrance & carport — layered roof lines",
        kind: "EXTERIOR",
      },
      {
        src: "alex-house-living",
        caption: "Family room — coffered timber ceiling & smoked oak",
        kind: "INTERIOR",
      },
      {
        src: "alex-house-kitchen-1",
        caption: "Kitchen — grey marble island & brass pendant",
        kind: "INTERIOR",
      },
      {
        src: "alex-house-kitchen-2",
        caption: "Kitchen — smoked oak cabinetry, backlit shelves",
        kind: "INTERIOR",
      },
      {
        src: "alex-house-bedroom",
        caption: "Master bedroom — fluted timber & stone panel",
        kind: "INTERIOR",
      },
    ],
  },
  {
    index: "02",
    slug: "ms-tasya-house",
    name: "MS. TASYA HOUSE",
    location: "Malang, East Java",
    year: "2026",
    category: "Private Residence",
    area: "145 m²",
    services: ["ARCHITECTURE", "INTERIOR"],
    status: "Design & visualization",
    elevation: "+440 M ASL",
    hero: "tasya-house-ext-1",
    daynight: { day: "tasya-house-ext-1", night: "tasya-house-ext-night" },
    narrative:
      "A compact two-storey house in Malang that turns humble materials into character. Exposed red brick climbs a curved corner tower — punched with a round window and capped by a perforated rooster — against a soft white volume with arched openings. Terracotta brick, white plaster, terrazzo and warm teak doors give the facade its warmth; inside, the same arches echo through the plan. A tropical garden of palms and monstera wraps the house, so the brick glows against deep green. Proof that a small footprint can carry a big personality.",
    gallery: [
      {
        src: "tasya-house-ext-2",
        caption: "Street perspective — brick tower & arched entry",
        kind: "EXTERIOR",
      },
      {
        src: "tasya-house-detail",
        caption: "Close detail — round window, terracotta & teak",
        kind: "DETAIL",
      },
    ],
  },
  {
    index: "03",
    slug: "rumah-cahaya",
    name: "RUMAH CAHAYA",
    location: "East Java",
    year: "2024",
    category: "Private Residence",
    area: "420 m²",
    services: ["ARCHITECTURE", "INTERIOR", "CONSTRUCTION"],
    status: "Design study",
    elevation: "+412 M ASL",
    hero: "project-rumah-cahaya",
    narrative:
      "A house for a family of five on a hillside facing the volcano. Three stacked volumes step down the slope; every room receives morning light filtered through deep teak loggias. The house is cooled entirely by cross-ventilation — there is no air conditioning on the main floor.",
    gallery: [
      {
        src: "film-02-light",
        caption: "Entry corridor — morning, 07:40",
        kind: "INTERIOR",
        wide: true,
      },
      {
        src: "film-04-material",
        caption: "Junction of teak, basalt and lime plaster",
        kind: "DETAIL",
        wide: true,
      },
      {
        src: "drawing-plan",
        caption: "Ground floor plan — courtyard as the center of the house",
        kind: "DRAWING · 1:100",
        wide: true,
      },
    ],
  },
  {
    index: "04",
    slug: "villa-samudra",
    name: "VILLA SAMUDRA",
    location: "South Lombok",
    year: "2025",
    category: "Villa · Hospitality",
    area: "680 m²",
    services: ["ARCHITECTURE", "INTERIOR", "CONSTRUCTION"],
    tagline: "Architecture between landscape and horizon.",
    status: "Design study",
    elevation: "+38 M ASL",
    hero: "project-villa-samudra",
    narrative:
      "A single low pavilion on a cliff above the Indian Ocean. One roof, eighteen meters of uninterrupted opening, and a pool whose edge disappears into the horizon. The architecture does as little as possible — the ocean does the rest.",
    gallery: [
      {
        src: "film-03-space",
        caption: "Main volume — fully opened to the garden",
        kind: "INTERIOR",
        wide: true,
      },
      {
        src: "film-05-connection",
        caption: "Courtyard threshold — late afternoon",
        kind: "EXTERIOR",
        wide: true,
      },
      {
        svg: "section",
        caption: "Cross section — the roof as a single sheltering plane",
        kind: "DRAWING · 1:50",
        wide: true,
      },
    ],
  },
  {
    index: "05",
    slug: "paviliun-teduh",
    name: "PAVILIUN TEDUH",
    location: "Ubud, Bali",
    year: "2025",
    category: "Pavilion · Cultural",
    area: "96 m²",
    services: ["ARCHITECTURE", "CONSTRUCTION"],
    status: "Concept",
    elevation: "+310 M ASL",
    hero: "project-paviliun-teduh",
    narrative:
      "A tea pavilion floating over a black reflecting pond in a dense garden. An ironwood frame wrapped in finely spaced teak slats: closed, it reads as a lantern; open, it is barely there at all.",
    gallery: [
      {
        src: "film-06-dusk",
        caption: "The pavilion as a lantern — blue hour",
        kind: "EXTERIOR",
        wide: true,
      },
      {
        src: "film-01-form",
        caption: "Study of the volume in the landscape",
        kind: "CONTEXT",
        wide: true,
      },
    ],
  },
];

/* All images for a project in cinematic order — exterior, night, then the
   detail/interior/context gallery. De-duplicated, order preserved. Used by
   the horizontal film strip so a project's imagery can drift as one film. */
export function projectImages(p: Project): string[] {
  const out: string[] = [];
  if (p.hero) out.push(p.hero);
  if (p.daynight?.night) out.push(p.daynight.night);
  for (const g of p.gallery) if (g.src) out.push(g.src);
  return Array.from(new Set(out));
}

/* ------------------------------ process ---------------------------- */

export type Step = {
  index: string;
  name: string;
  duration: string;
  description: string;
};

export const process: Step[] = [
  {
    index: "01",
    name: "DISCOVER",
    duration: "1 – 2 weeks",
    description:
      "We walk the site, read its light and wind, and listen. The brief is written together — what the building must do, and what it must never do.",
  },
  {
    index: "02",
    name: "DEFINE",
    duration: "1 – 2 weeks",
    description:
      "Budget, program and ambition are fixed in writing. A clear brief is the cheapest building material there is.",
  },
  {
    index: "03",
    name: "DESIGN",
    duration: "4 – 8 weeks",
    description:
      "Concept. One strong idea, tested in models, sections and light studies until the site agrees with it.",
  },
  {
    index: "04",
    name: "DEVELOP",
    duration: "4 – 6 weeks",
    description:
      "The idea becomes a building: structure, materials, openings, air. Every junction is drawn before it is promised.",
  },
  {
    index: "05",
    name: "DOCUMENT",
    duration: "4 – 6 weeks",
    description:
      "Construction drawings, specifications and budgets (RAB). The quiet, unglamorous work that makes a calm construction site.",
  },
  {
    index: "06",
    name: "BUILD",
    duration: "8 – 18 months",
    description:
      "We stay close to the site — reviewing, correcting, supervising — until the last shadow falls where the drawings said it would.",
  },
];

/* ------------------------------ studio ----------------------------- */

export const studio = {
  statement: "WE DESIGN SPACES FOR LIVING.",
  description:
    "YF ARCH is the independent architecture practice of Ahmad Yusuf Fahrezzi — architect, interior designer and BIM coordinator working from Probolinggo, East Java. The studio connects architectural precision with modern tools: BIM documentation, cinematic visualization, and AI-assisted workflows. Quiet buildings, clear drawings, transparent pricing — designed with the same care, from the first sketch to the last detail.",
  facts: [
    ["PRINCIPAL", "AHMAD YUSUF FAHREZZI, S.ARS"],
    ["BASE", "PROBOLINGGO · EAST JAVA"],
    ["PRACTICE", "SINCE 2026"],
    ["FIELD", "ARCHITECT · INTERIOR · BIM · WEB · UI/UX · AI"],
  ] as [string, string][],
};

/* ------------------------- services (layanan) ---------------------- */
/* The four disciplines the studio offers. `image` is a public/images
   basename (no size suffix), reused from the project photography.       */

export type ServiceOffering = {
  index: string;
  name: string;
  summary: string;
  image: string;
  icon: "plan" | "interior" | "structure" | "renovate";
};

export const serviceOffering: ServiceOffering[] = [
  {
    index: "01",
    name: "ARCHITECTURE",
    summary: "Concept, schematic design and full technical documentation.",
    image: "alex-house-ext-1",
    icon: "plan",
  },
  {
    index: "02",
    name: "INTERIOR",
    summary: "Space planning, material and finish selection, detailing.",
    image: "alex-house-living",
    icon: "interior",
  },
  {
    index: "03",
    name: "CONSTRUCTION",
    summary: "Supervision and build delivery, from structure to handover.",
    image: "project-villa-samudra",
    icon: "structure",
  },
  {
    index: "04",
    name: "RENOVATION",
    summary: "Reworking existing buildings into clearer, calmer space.",
    image: "tasya-house-detail",
    icon: "renovate",
  },
];

/* ---------------------------- testimonials ------------------------- */
/* PLACEHOLDER COPY — replace with real client quotes before launch.   */

export const testimonials = [
  {
    quote:
      "Yusuf read our site better than we did. The house is calm, the light is right, and every detail was drawn before it was promised.",
    client: "MR. ALEX",
    location: "PASURUAN, EAST JAVA",
  },
  {
    quote:
      "A small footprint, a big personality. The brick tower is now the thing the whole street stops to look at.",
    client: "MS. TASYA",
    location: "MALANG, EAST JAVA",
  },
  {
    quote:
      "Clear drawings, honest pricing, and a construction site that never surprised us. That is rarer than it should be.",
    client: "VILLA SAMUDRA",
    location: "SOUTH LOMBOK",
  },
];

/* ------------------------- studio statistics ----------------------- */
/* PLACEHOLDER FIGURES — editable. Swap for real numbers when available. */

export const stats = [
  { value: "40+", label: "PROJECTS DELIVERED" },
  { value: "03+", label: "YEARS IN PRACTICE" },
  { value: "100%", label: "CLIENT SATISFACTION" },
];

/* ------------------------- selected works intro -------------------- */

export const worksIntro = {
  label: "SELECTED PROJECTS / 2026",
  headline: ["SPACES", "DESIGNED", "WITH", "INTENTION."],
  copy: "A curated selection of architectural projects exploring space, material, light and context.",
};

/* ------------------------------- nav ------------------------------- */

export const nav = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "LAYANAN & HARGA", href: "/harga" },
  { label: "STUDIO", href: "/#studio" },
  { label: "CONTACT", href: "/#contact" },
];

export const navCta = { label: "LET'S TALK", href: "/#contact" };
