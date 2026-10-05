/* ------------------------------------------------------------------ */
/*  YF ARCH — translation dictionary (EN / ID / ZH)                    */
/*                                                                     */
/*  Keys are grouped by surface area. `Dict` is the single source of   */
/*  truth for UI copy; components read from it via useI18n().t.         */
/* ------------------------------------------------------------------ */

export type Lang = "en" | "id" | "zh";

export type Dict = {
  /* generic section number labels */
  nav: { label: string; href: string }[];
  navCta: string;
  menu: { open: string; close: string; studio: string; email: string; whatsapp: string; localTime: string };

  walk: {
    tagline: string;
    loading: string;
    filmEnd: string;
    scrollCue: string;
    walkthrough: string;
    chapters: {
      eyebrow: string;
      title: string;
      body: string;
    }[];
  };

  interlude: {
    eyebrow: string;
    disciplines: string;
    year: string;
  };

  projects: {
    eyebrow: string;
    featuredPlate: string;
    viewProject: string;
    toggle: { featured: string; index: string };
    worksIntroLabel: string;
    headline: string[];
    copy: string;
    meta: { area: string; location: string; year: string };
  };

  services: {
    eyebrow: string;
    headingA: string;
    headingB: string;
    copy: string;
    promoNote: string;
    pricePerM2: string;
    transparent: string;
    rabLine: string;
    cta: { title: string; calc: string };
  };

  process: {
    eyebrow: string;
    heading: string;
    sixMovements: string;
  };

  studio: {
    eyebrow: string;
    statement: string[];
    description: string;
    facts: [string, string][];
    stats: { value: string; label: string }[];
    statYears: string;
    statClients: string;
  };

  profile: {
    eyebrow: string;
    fig01: string;
    nameA: string;
    nameB: string;
    degreeSuffix: string;
    tagline: string;
    bio: string[];
    edu: { heading: string; degree: string; school: string; year: string; gpa: string };
    contact: { heading: string; whatsapp: string; instagram: string };
    expertise: { heading: string };
    works: { heading: string };
  };

  testimonials: {
    eyebrow: string;
    prev: string;
    next: string;
    items: { quote: string; client: string; location: string }[];
  };

  contact: {
    eyebrow: string;
    responseIn: string;
    heading: string[];
    sub: string;
    cta: string;
    links: { label: string; value: string; href: string; external: boolean }[];
    footer: { location: string; instagram: string };
    logoAlt: string;
  };

  assistant: {
    intro: string;
    projects: string;
    processPre: string;
    processPost: string;
    consult: string;
    contact: string;
    studio: string;
    profile: string;
    fallback: string;
    helpList: string[];
    prompts: string[];
    placeholder: string;
    headerNote: string;
    sendLabel: string;
  };

  price: {
    heroEyebrow: string;
    h1a: string;
    h1b: string;
    intro: string;
    sheet: string;
    promoLabel: string;
    promoHeadline: string;
    promoDesc: string;
    promoLoading: string;
    promoEndsIn: string;
    promoEnded: string;
    endsIn: string;
    hour: string;
    minute: string;
    second: string;
    normalApplies: string;
    normal: string;
    perM2: string;
    cardsEyebrow: string;
    cardsTitleA: string;
    cardsTitleB: string;
    packages: { badge?: string; promoBadge?: boolean; name: string; title: string; render: string; renderWa: string; features: string[]; note?: string }[];
    compareA: { cols: string[]; rows: string[][] };
    compareB: { cols: string[]; rows: string[][] };
    rabEyebrow: string;
    rabTitle: string;
    rabSubtitle: string;
    rabCopy: string;
    rabOutput: string;
    rabAdd: string;
    rabScope: string;
    rabFeatures: string[];
    calcEyebrow: string;
    calcRealTime: string;
    calcTitle: string;
    calcSubtitle: string;
    calcIntro: string;
    calcInput1: string;
    calcInput2: string;
    calcInput3: string;
    calcPkg: string;
    calcCustom: string;
    calcRabOn: string;
    calcRabOff: string;
    calcRabAdd: string;
    estLabel: string;
    promoTag: string;
    normalTag: string;
    rows: { luas: string; pkg: string; desain: string; rab: string; total: string };
    disclaim: string;
    ctaConsult: string;
    changePick: string;
    calcPick: string;
    conEyebrow: string;
    conTitle: string;
    conSub: string;
    conHeading: string[];
    conCopy: string;
    compareTitleA: string;
    compareTitleB: string;
    conCta: string;
    conFooter: string;
  };
};

/* ------------------------------------------------------------------ */
/*  EN — base                                                          */
/* ------------------------------------------------------------------ */
const en: Dict = {
  nav: [
    { label: "PROJECTS", href: "/#projects" },
    { label: "SERVICES & PRICING", href: "/harga" },
    { label: "STUDIO", href: "/#studio" },
    { label: "CONTACT", href: "/#contact" },
  ],
  navCta: "LET'S TALK",
  menu: { open: "MENU", close: "CLOSE", studio: "STUDIO", email: "EMAIL", whatsapp: "WHATSAPP", localTime: "LOCAL TIME" },

  walk: {
    tagline: "Architecture · Design · Construction",
    loading: "LOADING FILM…",
    filmEnd: "END",
    scrollCue: "Scroll to enter — the walk starts outside",
    walkthrough: "WALKTHROUGH · EXTERIOR — INTERIOR",
    chapters: [
      { eyebrow: "01 / YF ARCHITECT", title: "Quiet spaces, meaningful details.", body: "We design homes that unite character, function and construction precision.", },
      { eyebrow: "02 / FAÇADE", title: "Bold outside, warm up close.", body: "Mass, openings and materials shape a clean identity without losing feeling.", },
      { eyebrow: "03 / THRESHOLD", title: "A natural-feeling transition.", body: "The camera moves through real doors and circulation — the way space is actually experienced.", },
      { eyebrow: "04 / LIVING ROOM", title: "Light, proportion and material in one rhythm.", body: "Shared spaces are made generous, calm and warm for daily life.", },
      { eyebrow: "05 / KITCHEN", title: "Precise detail for everyday living.", body: "Efficient function framed by natural materials and soft lighting.", },
    ],
  },

  interlude: {
    eyebrow: "YF ARCH",
    disciplines: "ARCHITECTURE / INTERIOR / LANDSCAPE",
    year: "2026",
  },

  projects: {
    eyebrow: "SELECTED PROJECTS / 2026",
    featuredPlate: "FEATURED PROJECT",
    viewProject: "VIEW PROJECT →",
    toggle: { featured: "FEATURED", index: "INDEX" },
    worksIntroLabel: "SELECTED PROJECTS / 2026",
    headline: ["SPACES", "DESIGNED", "WITH", "INTENTION."],
    copy: "A curated selection of architectural projects exploring space, material, light and context.",
    meta: { area: "AREA", location: "LOCATION", year: "YEAR" },
  },

  services: {
    eyebrow: "03 — SERVICES",
    headingA: "FROM CONCEPT",
    headingB: "TO construction",
    copy: "Four disciplines, one drawing set — from the first sketch to the last detail on site.",
    promoNote: "30% discount applies to all packages — 60 minutes only.",
    pricePerM2: "PRICE PER M²",
    transparent: "TRANSPARENT · NO HIDDEN FEES",
    rabLine: "+ RAB / RENCANA ANGGARAN BIAYA — ",
    cta: { title: "VIEW PRICING PAGE", calc: "CALCULATE →" },
  },

  process: {
    eyebrow: "04 — METHOD",
    heading: "PROCESS",
    sixMovements: "SIX MOVEMENTS · FIRST SKETCH → HANDOVER",
  },

  studio: {
    eyebrow: "05 — STUDIO",
    statement: ["WE DESIGN", "SPACES FOR ", "living"],
    description:
      "YF ARCH is the independent architecture practice of Ahmad Yusuf Fahrezzi — architect, interior designer and BIM coordinator working from Probolinggo, East Java. The studio connects architectural precision with modern tools: BIM documentation, cinematic visualization, and AI-assisted workflows.",
    facts: [
      ["PRINCIPAL", "AHMAD YUSUF FAHREZZI, S.ARS"],
      ["BASE", "PROBOLINGGO · EAST JAVA"],
      ["PRACTICE", "SINCE 2026"],
      ["FIELD", "ARCHITECT · INTERIOR · BIM · WEB · UI/UX · AI"],
    ] as [string, string][],
    stats: [
      { value: "10+", label: "PROJECTS DELIVERED" },
      { value: "03+", label: "YEARS IN PRACTICE" },
      { value: "100%", label: "CLIENT SATISFACTION" },
    ],
    statYears: "YEARS IN PRACTICE",
    statClients: "CLIENT SATISFACTION",
  },

  profile: {
    eyebrow: "06 — PRINCIPAL",
    fig01: "FIG. 01",
    nameA: "AHMAD YUSUF",
    nameB: "FAHREZZI",
    degreeSuffix: ", S.Ars",
    tagline: "Quiet buildings, clear drawings, transparent pricing.",
    bio: [
      "An architect from UPN “Veteran” Jawa Timur, combining architectural practice, BIM and visualization with digital technology — from precise working drawings to web product development and AI-assisted workflows.",
      "Committed to work that is aesthetic, functional and impactful — designed with the same care, from the first plan to the last detail.",
    ],
    edu: {
      heading: "EDUCATION",
      degree: "Bachelor of Architecture (S.Ars)",
      school: "UPN “Veteran” Jawa Timur — Surabaya",
      year: "2023",
      gpa: "GPA 3.48",
    },
    contact: { heading: "CONTACT", whatsapp: "WHATSAPP", instagram: "INSTAGRAM" },
    expertise: { heading: "EXPERTISE" },
    works: { heading: "SELECTED WORKS" },
  },

  testimonials: {
    eyebrow: "TESTIMONIAL",
    prev: "Previous testimonial",
    next: "Next testimonial",
    items: [
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
    ],
  },

  contact: {
    eyebrow: "07 — CONTACT",
    responseIn: "RESPONSE WITHIN 24 H",
    heading: ["LET'S BUILD", "SOMETHING", "MEANINGFUL."],
    sub: "The first consultation is free — a conversation about your site, your brief and your budget. No obligation.",
    cta: "START A PROJECT",
    links: [
      { label: "WHATSAPP", value: "", href: "", external: true }, // filled with site values
      { label: "EMAIL", value: "", href: "", external: false },
      { label: "PROJECT INQUIRY", value: "BRIEF US →", href: "", external: false },
    ],
    footer: { location: "", instagram: "" },
    logoAlt: "YF ARCHITECT",
  },

  assistant: {
    intro: "Hello, I'm the YF ARCH assistant. I answer based on the studio's official information — packages, prices, projects, process and consultation. How can I help?",
    projects: "Selected YF ARCH projects:\n\n{projects}\n\nOur principal's work spans: {works}.",
    processPre: "YF ARCH's process has six stages:\n\n",
    processPost: "\n\nDesign typically takes 3–6 months before construction begins.",
    consult:
      "The first consultation is free.\n\nHow to start:\n• WhatsApp: {wa}\n• Email: {email}\n\nYou can also use the calculator on the PRICING page, then press \"CONSULT PROJECT\" — your choices are sent automatically via WhatsApp.",
    contact:
      "YF ARCH is based in {location}.\n\n• WhatsApp: {wa}\n• Email: {email}\n• Instagram: {ig}\n\nResponses within 24 hours.",
    studio: "{so}",
    profile: "YF ARCH is led by {name}, S.Ars — {roles}.\n\nGraduate of {degree}, {school} ({year}, {gpa}).",
    fallback:
      "Sorry, I can only answer based on the official information on the YF ARCH site, and I could not find an answer to that.\n\nI can help with:\n{help}\n\nFor anything else, please contact {wa} or {email}.",
    helpList: [
      "packages & pricing",
      "RAB",
      "estimate calculator",
      "projects & architect profile",
      "design process",
      "consultation & contact",
    ],
    prompts: [
      "What are the packages and prices?",
      "How does the design process work?",
      "Show me the projects",
      "What services do you offer?",
      "Calculate my estimate",
      "Contact info",
    ],
    placeholder: "Ask about packages, prices, RAB…",
    headerNote: "Answers only from the studio's official info.",
    sendLabel: "SEND",
  },

  price: {
    heroEyebrow: "PRICING",
    h1a: "CLEAR DESIGN.",
    h1b: "TRANSPARENT PRICE.",
    intro:
      "Choose the design service that fits your project — from basic technical drawings to full architectural, interior, exterior and RAB.",
    sheet: "SHEET — PRICING / 01",
    promoLabel: "30% OFF — ONLY 60 MIN",
    promoHeadline: "30% OFF\nALL PACKAGES",
    promoDesc: "30% off the normal rate, valid for the next 60 minutes. Limited opportunity.",
    promoLoading: "LOADING OFFER…",
    promoEndsIn: "OFFER ENDS IN",
    promoEnded: "OFFER EXPIRED",
    endsIn: "OFFER EXPIRES IN",
    hour: "HRS",
    minute: "MIN",
    second: "SEC",
    normalApplies: "NORMAL PRICES APPLY",
    normal: "NORMAL PRICE",
    perM2: "/ m²",
    cardsEyebrow: "01 — DESIGN PACKAGES",
    cardsTitleA: "CHOOSE A PACKAGE",
    cardsTitleB: "that fits your needs.",
    packages:       [
        {
          "badge": "30% OFF",
          "promoBadge": true,
          "name": "BASIC",
          "title": "Basic drawings + visualization",
          "render": "3 renders",
          "renderWa": "3 Views",
          "features": [
            "Site plan",
            "Floor plan — layout",
            "Floor plan — dimensions",
            "Elevations",
            "Sections",
            "Roof plan",
            "Door & window schedule",
            "Basic foundation details",
            "Ground beam (sloof)",
            "Columns",
            "Beams",
            "Roof structure details"
          ]
        },
        {
          "badge": "MOST POPULAR",
          "name": "STANDARD",
          "title": "Working drawings + visualization",
          "render": "6 renders",
          "renderWa": "6 Views",
          "features": [
            "Everything in Basic",
            "Ceiling plan",
            "Flooring plan",
            "Complete elevations",
            "Frame details",
            "Structural details",
            "Foundation details",
            "Basic MEP",
            "Basic electrical layout",
            "Clean water supply",
            "Drainage",
            "Rain water"
          ]
        },
        {
          "badge": "PRO",
          "name": "PRO",
          "title": "Complete working drawings",
          "render": "Renders as needed",
          "renderWa": "as the design requires",
          "features": [
            "Everything in Standard",
            "Architectural details",
            "Facade details",
            "Stair details",
            "Bathroom details",
            "Construction details",
            "More complete structure",
            "More complete MEP",
            "Reinforcement detailing",
            "Special-area details"
          ]
        },
        {
          "name": "INTERIOR",
          "title": "Interior design",
          "render": "Renders as needed",
          "renderWa": "as the design requires",
          "features": [
            "Interior concept",
            "Moodboard",
            "Furniture layout",
            "Flooring",
            "Ceiling",
            "Material",
            "Color",
            "Interior elevations",
            "Furniture details",
            "Accessory details"
          ],
          "note": "Priced by the interior area being designed."
        },
        {
          "name": "EXTERIOR",
          "title": "Exterior design",
          "render": "Renders as needed",
          "renderWa": "as the design requires",
          "features": [
            "Facade concept",
            "Massing composition",
            "Facade materials",
            "Color",
            "Doors & windows",
            "Exterior lighting",
            "Basic landscape",
            "Facade details",
            "Exterior element details"
          ]
        },
        {
          "badge": "BEST VALUE",
          "name": "COMPLETE",
          "title": "Interior + exterior",
          "render": "Renders as needed",
          "renderWa": "as the design requires",
          "features": [
            "Interior design",
            "Exterior design",
            "Material concept",
            "Furniture",
            "Ceiling",
            "Flooring",
            "Facade",
            "Lighting",
            "Landscape",
            "Interior details",
            "Exterior details"
          ]
        }
      ],
    compareA:       {
        "cols": [
          "BASIC",
          "STANDARD",
          "PRO"
        ],
        "rows": [
          [
            "Floor plan",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Elevations",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Sections",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Structure",
            "Basic",
            "Complete",
            "Complete"
          ],
          [
            "MEP",
            "—",
            "Basic",
            "Complete"
          ],
          [
            "Detail",
            "Basic",
            "Standard",
            "Complete"
          ],
          [
            "Render",
            "3",
            "6",
            "As required"
          ],
          [
            "Price / m²",
            "35K",
            "66,5K",
            "101,5K"
          ]
        ]
      },
    compareB:       {
        "cols": [
          "INTERIOR",
          "EXTERIOR",
          "COMPLETE"
        ],
        "rows": [
          [
            "Interior",
            "✓",
            "—",
            "✓"
          ],
          [
            "Exterior",
            "—",
            "✓",
            "✓"
          ],
          [
            "Furniture",
            "✓",
            "—",
            "✓"
          ],
          [
            "Facade",
            "—",
            "✓",
            "✓"
          ],
          [
            "Render",
            "As required",
            "As required",
            "As required"
          ],
          [
            "Price / m²",
            "101,5K",
            "101,5K",
            "175K"
          ]
        ]
      },
    rabEyebrow: "02 — SEPARATE SERVICE",
    rabTitle: "RAB",
    rabSubtitle: "budget plan",
    rabCopy: "Need an estimated build cost based on your design?",
    rabOutput: "OUTPUT",
    rabAdd: "ADD RAB",
    rabScope: "DOCUMENT COVERAGE",
    rabFeatures:       [
        "Work summary",
        "Site preparation",
        "Earthworks",
        "Foundation",
        "Structure",
        "Walls",
        "Flooring",
        "Ceiling",
        "Roof",
        "Frames / doors / windows",
        "Sanitary",
        "Electrical",
        "Plumbing",
        "Finishing",
        "Total cost recap"
      ],
    calcEyebrow: "03 — CALCULATOR",
    calcRealTime: "REAL-TIME ESTIMATE",
    calcTitle: "CALCULATE",
    calcSubtitle: "your price.",
    calcIntro: "Enter your building area and choose the service you need.",
    calcInput1: "INPUT 01 — BUILDING AREA",
    calcInput2: "INPUT 02 — CHOOSE A SERVICE",
    calcInput3: "INPUT 03 — ADD RAB",
    calcPkg: "PACKAGE",
    calcCustom: "CUSTOM",
    calcRabOn: "ON",
    calcRabOff: "OFF",
    calcRabAdd: "+",
    estLabel: "PROJECT ESTIMATE",
    promoTag: "30% DISCOUNT PRICE",
    normalTag: "NORMAL PRICE",
    rows: { luas: "AREA", pkg: "PACKAGE", desain: "DESIGN", rab: "RAB", total: "TOTAL ESTIMATE" },
    disclaim:
      "Prices are estimates based on the selected area and services. Final work scope can be adjusted to your project.",
    ctaConsult: "CONSULT PROJECT",
    changePick: "CHANGE PICK",
    calcPick: "CALCULATE ESTIMATE",
    conEyebrow: "04 — COMPARISON",
    conTitle: "CHOOSE WHAT",
    conSub: "fits your needs.",
    conHeading: ["HAVE A", "PROJECT?"],
    conCopy: "Tell us what you need. We'll help you choose the package that fits your project best.",
    compareTitleA: "TABLE 01 — DRAWING PACKAGES",
    compareTitleB: "TABLE 02 — DESIGN PACKAGES",
    conCta: "CONSULT NOW",
    conFooter: "",
  },
};

/* ------------------------------------------------------------------ */
/*  ID — Bahasa Indonesia                                              */
/* ------------------------------------------------------------------ */
const id: Dict = {
  nav: [
    { label: "PROJECT", href: "/#projects" },
    { label: "LAYANAN & HARGA", href: "/harga" },
    { label: "STUDIO", href: "/#studio" },
    { label: "KONTAK", href: "/#contact" },
  ],
  navCta: "MARI BICARA",
  menu: { open: "MENU", close: "TUTUP", studio: "STUDIO", email: "EMAIL", whatsapp: "WHATSAPP", localTime: "WAKTU LOKAL" },
  walk: { tagline: "Arsitektur · Desain · Konstruksi", loading: "MEMUAT FILM…", filmEnd: "SELESAI", scrollCue: "Gulir untuk memasuki ruang — tur dimulai di luar", walkthrough: "WALKTHROUGH · EXTERIOR — INTERIOR", chapters: [
      { eyebrow: "01 / YF ARCHITECT", title: "Ruang yang tenang. Detail yang berarti.", body: "Kami merancang hunian yang menyatukan karakter, fungsi, dan ketepatan konstruksi.", },
      { eyebrow: "02 / FASAD", title: "Tegas dari luar, hangat saat didekati.", body: "Massa, bukaan, dan material membentuk identitas yang bersih tanpa kehilangan rasa.", },
      { eyebrow: "03 / AMBANG", title: "Transisi yang terasa alami.", body: "Kamera bergerak melalui pintu dan sirkulasi nyata — mengikuti cara ruang benar-benar dialami.", },
      { eyebrow: "04 / RUANG TAMU", title: "Cahaya, proporsi, dan material dalam satu ritme.", body: "Ruang bersama dibuat lapang, tenang, dan tetap hangat untuk keseharian.", },
      { eyebrow: "05 / DAPUR", title: "Detail presisi untuk hidup sehari-hari.", body: "Fungsi yang efisien dibingkai material alami dan pencahayaan yang lembut.", },
    ] },
  interlude: { eyebrow: "YF ARCH", disciplines: "ARSITEKTUR / INTERIOR / LANSEKAP", year: "2026" },
  projects: {
    eyebrow: "PROYEK TERPILIH / 2026",
    featuredPlate: "PROYEK FEATURED",
    viewProject: "LIHAT PROYEK →",
    toggle: { featured: "FEATURED", index: "INDEX" },
    worksIntroLabel: "PROYEK TERPILIH / 2026",
    headline: ["RUANG", "DIRANCANG", "DENGAN", "NIAT."],
    copy: "Kurasi proyek arsitektur yang mengeksplorasi ruang, material, cahaya dan konteks.",
    meta: { area: "LUAS", location: "LOKASI", year: "TAHUN" },
  },
  services: {
    eyebrow: "03 — LAYANAN",
    headingA: "DARI KONSEP",
    headingB: "ke konstruksi",
    copy: "Empat disiplin, satu set gambar — dari sketsa pertama hingga detail terakhir di lapangan.",
    promoNote: "Diskon 30% berlaku untuk seluruh paket — hanya 60 menit.",
    pricePerM2: "HARGA PER M²",
    transparent: "TRANSPARAN · TANPA BIAYA TERSEMBUNYI",
    rabLine: "+ RAB / RENCANA ANGGARAN BIAYA — ",
    cta: { title: "LIHAT HALAMAN HARGA", calc: "HITUNG ESTIMASI →" },
  },
  process: {
    eyebrow: "04 — METODE",
    heading: "PROSES",
    sixMovements: "ENAM LANGKAH · SKETSA PERTAMA → SERAH TERIMA",
  },
  studio: {
    eyebrow: "05 — STUDIO",
    statement: ["KAMI MERANCANG", "RUANG UNTUK ", "hidup"],
    description:
      "YF ARCH adalah praktik arsitektur independen milik Ahmad Yusuf Fahrezzi — arsitek, desainer interior, dan koordinator BIM yang bekerja dari Probolinggo, Jawa Timur. Studio ini menghubungkan presisi arsitektur dengan perangkat modern: dokumentasi BIM, visualisasi sinematik, dan alur kerja berbasis AI.",
    facts: [
      ["PRINCIPAL", "AHMAD YUSUF FAHREZZI, S.ARS"],
      ["MARKAS", "PROBOLINGGO · JAWA TIMUR"],
      ["PRAKTIK", "SEJAK 2026"],
      ["BIDANG", "ARSITEK · INTERIOR · BIM · WEB · UI/UX · AI"],
    ] as [string, string][],
    stats: [
      { value: "10+", label: "PROYEK SELESAI" },
      { value: "03+", label: "TAHUN BERKARYA" },
      { value: "100%", label: "KEPUASAN KLIEN" },
    ],
    statYears: "TAHUN BERKARYA",
    statClients: "KEPUASAN KLIEN",
  },
  profile: {
    eyebrow: "06 — PRINCIPAL",
    fig01: "GMB. 01",
    nameA: "AHMAD YUSUF",
    nameB: "FAHREZZI",
    degreeSuffix: ", S.Ars",
    tagline: "Bangunan yang tenang, gambar yang jelas, harga yang transparan.",
    bio: [
      "Arsitek lulusan UPN “Veteran” Jawa Timur yang menggabungkan praktik arsitektur, BIM, dan visualisasi dengan teknologi digital — dari gambar kerja yang presisi hingga pengembangan produk web dan alur kerja berbasis AI.",
      "Berkomitmen menghasilkan karya yang estetis, fungsional, dan berdampak — dirancang dengan ketelitian yang sama, dari denah pertama hingga detail terakhir.",
    ],
    edu: {
      heading: "PENDIDIKAN",
      degree: "Sarjana Arsitektur (S.Ars)",
      school: "UPN “Veteran” Jawa Timur — Surabaya",
      year: "2023",
      gpa: "IPK 3.48",
    },
    contact: { heading: "KONTAK", whatsapp: "WHATSAPP", instagram: "INSTAGRAM" },
    expertise: { heading: "KEAHLIAN" },
    works: { heading: "KARYA TERPILIH" },
  },
  testimonials: {
    eyebrow: "TESTIMONI",
    prev: "Testimoni sebelumnya",
    next: "Testimoni berikutnya",
    items: [
      {
        quote: "Yusuf membaca lahan kami lebih baik dari kami sendiri. Rumahnya tenang, cahayanya pas, dan setiap detail digambar sebelum dijanjikan.",
        client: "MR. ALEX",
        location: "PASURUAN, JAWA TIMUR",
      },
      {
        quote: "Luas yang kecil, kepribadian yang besar. Menara bata kini menjadi hal yang membuat seluruh jalan berhenti memandang.",
        client: "MS. TASYA",
        location: "MALANG, JAWA TIMUR",
      },
      {
        quote: "Gambar yang jelas, harga yang jujur, dan proyek yang tak pernah mengejutkan kami. Hal itu lebih langka daripada yang seharusnya.",
        client: "VILLA SAMUDRA",
        location: "LOMBOK SELATAN",
      },
    ],
  },
  contact: {
    eyebrow: "07 — KONTAK",
    responseIn: "RESPONS DALAM 24 JAM",
    heading: ["MARI MEMBANGUN", "SESUATU", "YANG BERMAKNA."],
    sub: "Konsultasi pertama gratis — percakapan tentang lahan, kebutuhan, dan anggaran Anda. Tanpa kewajiban.",
    cta: "MULAI PROYEK",
    links: [
      { label: "WHATSAPP", value: "", href: "", external: true },
      { label: "EMAIL", value: "", href: "", external: false },
      { label: "PERTANYAAN PROYEK", value: "BERI TAHU KAMI →", href: "", external: false },
    ],
    footer: { location: "", instagram: "" },
    logoAlt: "YF ARSITEK",
  },
  assistant: {
    intro: "Halo, saya Asisten YF ARCH. Saya menjawab berdasarkan informasi resmi studio — paket layanan, harga, proyek, proses desain, dan konsultasi. Ada yang bisa saya bantu?",
    projects: "Proyek terpilih YF ARCH://n//n{projects}//n//nPengalaman principal kami juga mencakup: {works}.",
    processPre: "Proses kerja YF ARCH terdiri dari enam tahap://n//n",
    processPost: "\n\nTahap desain biasanya 3–6 bulan sebelum konstruksi dimulai.",
    consult: "Konsultasi pertama gratis.\n\nCara memulai://n• WhatsApp: {wa}\n• Email: {email}\n\nAnda juga bisa memakai kalkulator di halaman HARGA, lalu tekan \"KONSULTASI PROYEK\" — detail pilihan Anda otomatis terkirim via WhatsApp.",
    contact: "Studio YF ARCH berbasis di {location}.\n\n• WhatsApp: {wa}\n• Email: {email}\n• Instagram: {ig}\n\nRespons dalam 24 jam.",
    studio: "{so}",
    profile: "YF ARCH dipimpin oleh {name}, S.Ars — {roles}.\n\nLulusan {degree}, {school} ({year}, {gpa}).",
    fallback: "Maaf, saya hanya dapat menjawab berdasarkan informasi resmi yang ada di situs YF ARCH, dan saya tidak menemukan jawaban untuk pertanyaan itu.\n\nSaya bisa membantu soal://n{help}//n//nUntuk pertanyaan lain, silakan hubungi {wa} atau {email}.",
    helpList: [
      "paket layanan & harga",
      "RAB",
      "kalkulator estimasi",
      "proyek & profil arsitek",
      "proses desain",
      "konsultasi & kontak",
    ],
    prompts: [
      "Apa saja paket dan harganya?",
      "Bagaimana proses desainnya?",
      "Tunjukkan proyek-proyeknya",
      "Layanan apa yang ditawarkan?",
      "Hitung estimasi saya",
      "Info kontak",
    ],
    placeholder: "Tanya tentang paket, harga, RAB…",
    headerNote: "Menjawab hanya dari informasi resmi studio.",
    sendLabel: "KIRIM",
  },
  price: {
    heroEyebrow: "HARGA",
    h1a: "DESAIN YANG jelas.",
    h1b: "HARGA YANG transparan.",
    intro: "Pilih layanan desain sesuai kebutuhan proyek Anda — mulai dari gambar teknis dasar hingga desain arsitektur, interior, exterior, dan RAB.",
    sheet: "SHEET — HARGA / 01",
    promoLabel: "DISKON 30% — HANYA 60 MENIT",
    promoHeadline: "DISKON 30%\nSELURUH PAKET",
    promoDesc: "Diskon 30% dari harga normal, hanya berlaku 60 menit ke depan. Kesempatan terbatas.",
    promoLoading: "MEMUAT PENAWARAN…",
    promoEndsIn: "PENAWARAN BERAKHIR DALAM",
    promoEnded: "PROMO BERAKHIR",
    endsIn: "PROMO BERAKHIR DALAM",
    hour: "JAM",
    minute: "MENIT",
    second: "DETIK",
    normalApplies: "HARGA NORMAL BERLAKU",
    normal: "HARGA NORMAL",
    perM2: "/ m²",
    cardsEyebrow: "01 — PAKET DESAIN",
    cardsTitleA: "PILIH PAKET",
    cardsTitleB: "sesuai kebutuhan.",
    packages:       [
        {
          "badge": "DISKON 30%",
          "promoBadge": true,
          "name": "BASIC",
          "title": "Gambar Dasar + Visualisasi",
          "render": "3× render",
          "renderWa": "3 View",
          "features": [
            "Site plan",
            "Denah rencana",
            "Denah ukuran",
            "Tampak",
            "Potongan",
            "Rencana atap",
            "Rencana pintu & jendela",
            "Detail pondasi dasar",
            "Sloof",
            "Kolom",
            "Balok",
            "Detail struktur atap"
          ]
        },
        {
          "badge": "PALING POPULER",
          "name": "STANDARD",
          "title": "Gambar Kerja + Visualisasi",
          "render": "6× render",
          "renderWa": "6 View",
          "features": [
            "Semua fasilitas Basic",
            "Denah plafon",
            "Denah lantai",
            "Tampak lengkap",
            "Detail kusen",
            "Detail struktur",
            "Detail pondasi",
            "MEP dasar",
            "Instalasi listrik dasar",
            "Air bersih",
            "Air kotor",
            "Air hujan"
          ]
        },
        {
          "badge": "PRO",
          "name": "PRO",
          "title": "Gambar Kerja Lengkap",
          "render": "Render sesuai kebutuhan desain",
          "renderWa": "sesuai kebutuhan desain",
          "features": [
            "Semua fasilitas Standard",
            "Detail arsitektur",
            "Detail facade",
            "Detail tangga",
            "Detail kamar mandi",
            "Detail konstruksi",
            "Struktur lebih lengkap",
            "MEP lebih lengkap",
            "Detail penulangan",
            "Detail area khusus"
          ]
        },
        {
          "name": "INTERIOR",
          "title": "Interior Design",
          "render": "Render sesuai kebutuhan desain",
          "renderWa": "sesuai kebutuhan desain",
          "features": [
            "Konsep interior",
            "Moodboard",
            "Layout furniture",
            "Flooring",
            "Ceiling",
            "Material",
            "Warna",
            "Elevasi interior",
            "Detail furniture",
            "Detail aksesoris"
          ],
          "note": "Perhitungan berdasarkan area interior yang didesain."
        },
        {
          "name": "EXTERIOR",
          "title": "Exterior Design",
          "render": "Render sesuai kebutuhan desain",
          "renderWa": "sesuai kebutuhan desain",
          "features": [
            "Konsep facade",
            "Komposisi massa",
            "Material facade",
            "Warna",
            "Pintu & jendela",
            "Lighting exterior",
            "Landscape dasar",
            "Detail facade",
            "Detail elemen exterior"
          ]
        },
        {
          "badge": "BEST VALUE",
          "name": "COMPLETE",
          "title": "Interior + Exterior",
          "render": "Render sesuai kebutuhan desain",
          "renderWa": "sesuai kebutuhan desain",
          "features": [
            "Interior Design",
            "Exterior Design",
            "Konsep material",
            "Furniture",
            "Ceiling",
            "Flooring",
            "Facade",
            "Lighting",
            "Landscape",
            "Detail interior",
            "Detail exterior"
          ]
        }
      ],
    compareA:       {
        "cols": [
          "BASIC",
          "STANDARD",
          "PRO"
        ],
        "rows": [
          [
            "Denah",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Tampak",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Potongan",
            "✓",
            "✓",
            "✓"
          ],
          [
            "Struktur",
            "Dasar",
            "Lengkap",
            "Lengkap"
          ],
          [
            "MEP",
            "—",
            "Dasar",
            "Lengkap"
          ],
          [
            "Detail",
            "Dasar",
            "Standard",
            "Lengkap"
          ],
          [
            "Render",
            "3",
            "6",
            "Sesuai kebutuhan"
          ],
          [
            "Harga / m²",
            "35K",
            "66,5K",
            "101,5K"
          ]
        ]
      },
    compareB:       {
        "cols": [
          "INTERIOR",
          "EXTERIOR",
          "COMPLETE"
        ],
        "rows": [
          [
            "Interior",
            "✓",
            "—",
            "✓"
          ],
          [
            "Exterior",
            "—",
            "✓",
            "✓"
          ],
          [
            "Furniture",
            "✓",
            "—",
            "✓"
          ],
          [
            "Facade",
            "—",
            "✓",
            "✓"
          ],
          [
            "Render",
            "Sesuai kebutuhan",
            "Sesuai kebutuhan",
            "Sesuai kebutuhan"
          ],
          [
            "Harga / m²",
            "101,5K",
            "101,5K",
            "175K"
          ]
        ]
      },
    rabEyebrow: "02 — LAYANAN TERPISAH",
    rabTitle: "RAB",
    rabSubtitle: "rencana anggaran biaya",
    rabCopy: "Butuh estimasi biaya pembangunan berdasarkan desain Anda?",
    rabOutput: "OUTPUT",
    rabAdd: "TAMBAHKAN RAB",
    rabScope: "CAKUPAN DOKUMEN",
    rabFeatures:       [
        "Rekap pekerjaan",
        "Pekerjaan persiapan",
        "Pekerjaan tanah",
        "Pondasi",
        "Struktur",
        "Dinding",
        "Lantai",
        "Plafon",
        "Atap",
        "Kusen / pintu / jendela",
        "Sanitair",
        "Elektrikal",
        "Plumbing",
        "Finishing",
        "Rekapitulasi total biaya"
      ],
    calcEyebrow: "03 — KALKULATOR",
    calcRealTime: "ESTIMASI REAL-TIME",
    calcTitle: "HITUNG ESTIMASI",
    calcSubtitle: "harga.",
    calcIntro: "Masukkan luas bangunan dan pilih layanan yang Anda butuhkan.",
    calcInput1: "INPUT 01 — LUAS BANGUNAN",
    calcInput2: "INPUT 02 — PILIH LAYANAN",
    calcInput3: "INPUT 03 — TAMBAHKAN RAB",
    calcPkg: "PAKET",
    calcCustom: "CUSTOM",
    calcRabOn: "ON",
    calcRabOff: "OFF",
    calcRabAdd: "+",
    estLabel: "ESTIMASI PROYEK",
    promoTag: "HARGA DISKON 30%",
    normalTag: "HARGA NORMAL",
    rows: { luas: "LUAS", pkg: "PAKET", desain: "DESAIN", rab: "RAB", total: "TOTAL ESTIMASI" },
    disclaim:
      "Harga merupakan estimasi berdasarkan luas dan layanan yang dipilih. Detail akhir pekerjaan dapat disesuaikan berdasarkan kebutuhan proyek.",
    ctaConsult: "KONSULTASI PROYEK",
    changePick: "UBAH PILIHAN",
    calcPick: "HITUNG ESTIMASI",
    conEyebrow: "04 — PERBANDINGAN",
    conTitle: "PILIH SESUAI",
    conSub: "kebutuhan Anda.",
    conHeading: ["PUNYA", "PROYEK?"],
    conCopy: "Ceritakan kebutuhan Anda. Kami akan membantu menentukan paket yang paling sesuai dengan proyek Anda.",
    compareTitleA: "TABEL 01 — PAKET GAMBAR",
    compareTitleB: "TABEL 02 — PAKET DESAIN",
    conCta: "KONSULTASI SEKARANG",
    conFooter: "",
  },
};

/* ------------------------------------------------------------------ */
/*  ZH — 中文                                                            */
/* ------------------------------------------------------------------ */
const zh: Dict = {
  nav: [
    { label: "PROJECT", href: "/#projects" },
    { label: "SERVICES & PRICING", href: "/harga" },
    { label: "STUDIO", href: "/#studio" },
    { label: "CONTACT", href: "/#contact" },
  ],
  navCta: "联系我们",
  menu: { open: "MENU", close: "CLOSE", studio: "STUDIO", email: "EMAIL", whatsapp: "WHATSAPP", localTime: "LOCAL TIME" },
  walk: { tagline: "建筑 · 设计 · 施工", loading: "正在加载影片…", filmEnd: "结束", scrollCue: "向下滚动进入空间——从室外开始", walkthrough: "导览 · 室外 — 室内", chapters: [
      { eyebrow: "01 / YF ARCHITECT", title: "安静的空间，有意义的细节。", body: "我们设计的居所，将个性、功能与施工精度融为一体。", },
      { eyebrow: "02 / 外立面", title: "外观分明，走近温暖。", body: "体量、开窗与材料塑造出干净而富有情感的身份。", },
      { eyebrow: "03 / 门廊", title: "自然过渡的边界。", body: "镜头穿过真实的门与动线——模拟空间被真正体验的方式。", },
      { eyebrow: "04 / 客厅", title: "光、比例与材质在同一节奏中。", body: "公共空间被营造得开阔、宁静，同时保持日常的温暖。", },
      { eyebrow: "05 / 厨房", title: "为日常生活的精准细节。", body: "高效的功能被天然材质与柔和光线所框定。", },
    ] },
  interlude: { eyebrow: "YF ARCH", disciplines: "建筑 / 室内 / 景观", year: "2026" },
  projects: {
    eyebrow: "精选项目 / 2026",
    featuredPlate: "精选项目",
    viewProject: "查看项目 →",
    toggle: { featured: "精选", index: "索引" },
    worksIntroLabel: "精选项目 / 2026",
    headline: ["空间", "以", "意图", "设计。"],
    copy: "精选建筑项目，探索空间、材料、光线与文脉。",
    meta: { area: "面积", location: "地点", year: "年份" },
  },
  services: {
    eyebrow: "03 — 服务",
    headingA: "从概念",
    headingB: "到施工",
    copy: "四个专业，一套图纸——从第一张草稿到现场的最后细节。",
    promoNote: "所有套餐立享 30% 折扣——仅限 60 分钟。",
    pricePerM2: "每平方米价格",
    transparent: "透明 · 无隐藏费用",
    rabLine: "+ RAB / 预算计划 — ",
    cta: { title: "查看价格页面", calc: "计算估算 →" },
  },
  process: { eyebrow: "04 — 方法", heading: "流程", sixMovements: "六个阶段 · 从首张草图到交付" },
  studio: {
    eyebrow: "05 — 事务所",
    statement: ["我们设计", "为", "居住的空间。"],
    description:
      "YF ARCH 是 Ahmad Yusuf Fahrezzi 的独立建筑事务所——一位常驻东爪哇普罗博林戈的建筑师、室内设计师兼 BIM 协调员。事务所将建筑精度与现代工具相结合：BIM 文档、电影级可视化以及 AI 辅助工作流。",
    facts: [
      ["主理人", "AHMAD YUSUF FAHREZZI, S.ARS"],
      ["所在地", "普罗博林戈 · 东爪哇"],
      ["实践", "2026 年至今"],
      ["领域", "建筑 · 室内 · BIM · 网页 · UI/UX · AI"],
    ] as [string, string][],
    stats: [
      { value: "10+", label: "完成项目" },
      { value: "03+", label: "从业年限" },
      { value: "100%", label: "客户满意度" },
    ],
    statYears: "从业年限",
    statClients: "客户满意度",
  },
  profile: {
    eyebrow: "06 — 主理人",
    fig01: "图 01",
    nameA: "AHMAD YUSUF",
    nameB: "FAHREZZI",
    degreeSuffix: ", S.Ars",
    tagline: "安静的建筑、清晰的图纸、透明的价格。",
    bio: [
      "毕业于东爪哇 UPN“老兵”大学的注册建筑师，将建筑实践、BIM 与数字化技术相结合——从精准的施工图纸到网站开发与 AI 辅助工作流。",
      "致力于创作兼具美学、功能与影响力的作品——从第一张平面到最后一个细节，始终以同样的严谨去设计。",
    ],
    edu: {
      heading: "教育背景",
      degree: "建筑学学士 (S.Ars)",
      school: "东爪哇 UPN“老兵”大学 — 泗水",
      year: "2023",
      gpa: "GPA 3.48",
    },
    contact: { heading: "联系方式", whatsapp: "WHATSAPP", instagram: "INSTAGRAM" },
    expertise: { heading: "专业领域" },
    works: { heading: "代表作品" },
  },
  testimonials: {
    eyebrow: "客户评价",
    prev: "上一条评价",
    next: "下一条评价",
    items: [
      {
        quote: "尤素夫比我们更了解我们的场地。房子宁静、光线恰到好处，每个细节在承诺之前都已被绘制出来。",
        client: "ALEX 先生",
        location: "帕苏鲁安 · 东爪哇",
      },
      {
        quote: "小小的占地，大大的个性。那座砖塔如今成了整条街驻足观看的焦点。",
        client: "TASYA 女士",
        location: "玛琅 · 东爪哇",
      },
      {
        quote: "图纸清晰、价格诚实、工地从不让我们意外。这比想象中更难得。",
        client: "VILLA SAMUDRA",
        location: "南龙目",
      },
    ],
  },
  contact: {
    eyebrow: "07 — 联系我们",
    responseIn: "24 小时内回复",
    heading: ["让我们", "一起建造", "有意义的东西。"],
    sub: "首次咨询免费——聊一聊您的场地、需求与预算，无任何义务。",
    cta: "开始项目",
    links: [
      { label: "WHATSAPP", value: "", href: "", external: true },
      { label: "EMAIL", value: "", href: "", external: false },
      { label: "项目咨询", value: "告知我们 →", href: "", external: false },
    ],
    footer: { location: "", instagram: "" },
    logoAlt: "YF ARCHITECT",
  },
  assistant: {
    intro: "您好，我是 YF ARCH 助手。我根据事务所的官方信息为您解答——套餐服务、价格、项目、设计流程与咨询。有什么可以帮您？",
    projects: "YF ARCH 精选项目：\n\n{projects}\n\n主理人的作品领域还包括：{works}。",
    processPre: "YF ARCH 的工作流程分为六个阶段：\n\n",
    processPost: "\n\n设计阶段通常在施工开始前需要 3–6 个月。",
    consult: "首次咨询免费。\n\n如何开始：\n• WhatsApp: {wa}\n• 邮箱: {email}\n\n您也可以使用价格页的计算器，然后点击“咨询项目”——您的选择将自动通过 WhatsApp 发送。",
    contact: "YF ARCH 位于 {location}。\n\n• WhatsApp: {wa}\n• 邮箱: {email}\n• Instagram: {ig}\n\n24 小时内回复。",
    studio: "{so}",
    profile: "YF ARCH 由 {name}（S.Ars）主持——{roles}。\n\n毕业于 {degree}，{school}（{year}，{gpa}）。",
    fallback: "抱歉，我只能依据 YF ARCH 网站上的官方信息作答，未能找到相关答案。\n\n我可以帮助解答：\n{help}\n\n其他问题请联系 {wa} 或 {email}。",
    helpList: [
      "套餐服务与价格",
      "RAB",
      "估算计算器",
      "项目与主理人简介",
      "设计流程",
      "咨询与联系方式",
    ],
    prompts: [
      "有哪些套餐和价格？",
      "设计流程是怎样的？",
      "展示项目",
      "提供哪些服务？",
      "计算我的估算",
      "联系方式",
    ],
    placeholder: "询问套餐、价格、RAB…",
    headerNote: "仅依据事务所的官方信息作答。",
    sendLabel: "发送",
  },
  price: {
    heroEyebrow: "服务与价格",
    h1a: "设计清晰。",
    h1b: "价格透明。",
    intro: "选择适合您项目的设计服务——从基础施工图到完整的建筑、室内、外立面及 RAB 预算。",
    sheet: "SHEET — 价格 / 01",
    promoLabel: "立减 30% — 仅限 60 分钟",
    promoHeadline: "全部套餐\n立减 30%",
    promoDesc: "所有套餐立减 30%，仅限未来 60 分钟，机会有限。",
    promoLoading: "正在加载优惠…",
    promoEndsIn: "优惠即将结束",
    promoEnded: "优惠已结束",
    endsIn: "优惠将于以下时间后结束",
    hour: "小时",
    minute: "分钟",
    second: "秒",
    normalApplies: "已恢复原价",
    normal: "原价",
    perM2: "/ ㎡",
    cardsEyebrow: "01 — 设计套餐",
    cardsTitleA: "选择套餐",
    cardsTitleB: "满足您的需求。",
    packages:       [
        {
          "badge": "立减 30%",
          "promoBadge": true,
          "name": "BASIC",
          "title": "基础图纸 + 可视化",
          "render": "3 张效果图",
          "renderWa": "3 个视角",
          "features": [
            "场地平面图",
            "平面布置图",
            "平面尺寸图",
            "立面图",
            "剖面图",
            "屋顶平面图",
            "门窗表",
            "基础详图",
            "地梁 (sloof)",
            "柱",
            "梁",
            "屋顶结构详图"
          ]
        },
        {
          "badge": "最受欢迎",
          "name": "STANDARD",
          "title": "施工图纸 + 可视化",
          "render": "6 张效果图",
          "renderWa": "6 个视角",
          "features": [
            "含 Basic 全部内容",
            "吊顶平面图",
            "地面铺装图",
            "完整立面图",
            "门窗框细节",
            "结构详图",
            "基础详图",
            "基础机电 (MEP)",
            "基础电气布置图",
            "给水",
            "排水",
            "雨水"
          ]
        },
        {
          "badge": "PRO",
          "name": "PRO",
          "title": "完整施工图纸",
          "render": "按设计需求出效果图",
          "renderWa": "按设计需求",
          "features": [
            "含 Standard 全部内容",
            "建筑细部",
            "外立面详图",
            "楼梯详图",
            "卫生间详图",
            "构造详图",
            "更完整结构",
            "更完整机电",
            "配筋详图",
            "特殊区域详图"
          ]
        },
        {
          "name": "INTERIOR",
          "title": "室内设计",
          "render": "按设计需求出效果图",
          "renderWa": "按设计需求",
          "features": [
            "室内概念",
            "情绪板 (Moodboard)",
            "家具布置图",
            "地面铺装",
            "吊顶",
            "材料",
            "配色",
            "室内立面图",
            "家具详图",
            "软装品详图"
          ],
          "note": "按所设计的室内面积计价。"
        },
        {
          "name": "EXTERIOR",
          "title": "外立面设计",
          "render": "按设计需求出效果图",
          "renderWa": "按设计需求",
          "features": [
            "外立面概念",
            "体块构成",
            "外立面材料",
            "配色",
            "门窗",
            "外立面照明",
            "基础景观",
            "外立面详图",
            "外立面构件详图"
          ]
        },
        {
          "badge": "最超值",
          "name": "COMPLETE",
          "title": "室内 + 外立面",
          "render": "按设计需求出效果图",
          "renderWa": "按设计需求",
          "features": [
            "室内设计",
            "外立面设计",
            "材料概念",
            "家具",
            "吊顶",
            "地面铺装",
            "外立面",
            "照明",
            "景观",
            "室内详图",
            "外立面详图"
          ]
        }
      ],
    compareA:       {
        "cols": [
          "BASIC",
          "STANDARD",
          "PRO"
        ],
        "rows": [
          [
            "平面图",
            "✓",
            "✓",
            "✓"
          ],
          [
            "立面图",
            "✓",
            "✓",
            "✓"
          ],
          [
            "剖面图",
            "✓",
            "✓",
            "✓"
          ],
          [
            "结构",
            "基础",
            "完整",
            "完整"
          ],
          [
            "机电",
            "—",
            "基础",
            "完整"
          ],
          [
            "细部",
            "基础",
            "标准",
            "完整"
          ],
          [
            "效果图",
            "3",
            "6",
            "按需求"
          ],
          [
            "价格 / ㎡",
            "35K",
            "66,5K",
            "101,5K"
          ]
        ]
      },
    compareB:       {
        "cols": [
          "INTERIOR",
          "EXTERIOR",
          "COMPLETE"
        ],
        "rows": [
          [
            "室内",
            "✓",
            "—",
            "✓"
          ],
          [
            "外立面",
            "—",
            "✓",
            "✓"
          ],
          [
            "家具",
            "✓",
            "—",
            "✓"
          ],
          [
            "立面",
            "—",
            "✓",
            "✓"
          ],
          [
            "效果图",
            "按需求",
            "按需求",
            "按需求"
          ],
          [
            "价格 / ㎡",
            "101,5K",
            "101,5K",
            "175K"
          ]
        ]
      },
    rabEyebrow: "02 — 独立服务",
    rabTitle: "RAB",
    rabSubtitle: "预算计划",
    rabCopy: "需要基于您的设计估算建造成本？",
    rabOutput: "交付成果",
    rabAdd: "添加 RAB",
    rabScope: "文档范围",
    rabFeatures:       [
        "工程汇总",
        "场地准备",
        "土方工程",
        "基础",
        "结构",
        "墙体",
        "地面",
        "吊顶",
        "屋顶",
        "窗框 / 门窗",
        "卫浴洁具",
        "电气",
        "管道",
        "饰面工程",
        "总造价汇总"
      ],
    calcEyebrow: "03 — 计算器",
    calcRealTime: "实时估算",
    calcTitle: "计算估算",
    calcSubtitle: "您的价格。",
    calcIntro: "输入建筑面积并选择所需服务。",
    calcInput1: "输入 01 — 建筑面积",
    calcInput2: "输入 02 — 选择服务",
    calcInput3: "输入 03 — 添加 RAB",
    calcPkg: "套餐",
    calcCustom: "自定义",
    calcRabOn: "开",
    calcRabOff: "关",
    calcRabAdd: "+",
    estLabel: "项目估算",
    promoTag: "折扣价 30%",
    normalTag: "原价",
    rows: { luas: "面积", pkg: "套餐", desain: "设计", rab: "RAB", total: "估算总额" },
    disclaim: "价格基于所选面积与服务估算，最终工作范围可根据项目需求调整。",
    ctaConsult: "咨询项目",
    changePick: "更改选择",
    calcPick: "计算估算",
    conEyebrow: "04 — 对比",
    conTitle: "选择符合",
    conSub: "您需求的项目。",
    conHeading: ["有项目", "想咨询？"],
    conCopy: "告诉我们您的需求，我们会帮助您选择最适合您项目的事务套餐。",
    compareTitleA: "表格 01 — 图纸套餐",
    compareTitleB: "表格 02 — 设计套餐",
    conCta: "立即咨询",
    conFooter: "",
  },
};

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */
export const dicts: Record<Lang, Dict> = { en, id, zh };
export const defaultLang: Lang = "id";
