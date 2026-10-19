import { defineArticle, p, h2, quote, list } from "../helpers";

/* HARI 18 — 6 November 2026 · Industrial · keyword: perencanaan bangunan industri
   Catatan editorial: artikel edukatif; tidak mengklaim proyek industri YFArch. */

export default defineArticle({
  slug: "checklist-perencanaan-bangunan-industri",
  title: "Checklist Awal Sebelum Merencanakan Bangunan Industri",
  seoTitle: "Checklist Perencanaan Bangunan Industri — YF ARCH",
  seoDescription:
    "Checklist lengkap sebelum merencanakan bangunan industri: lahan, regulasi, utilitas, alur operasional, struktur, dan perizinan — agar tidak ada yang terlewat.",
  excerpt:
    "Bangunan industri yang gagal hampir selalu gagal di tahap perencanaan. Checklist 10 poin yang wajib terisi sebelum satu garis pun digambar.",
  category: "Industrial",
  primaryKeyword: "perencanaan bangunan industri",
  publishedAt: "2026-11-06",
  featuredImage: "journal-checklist-perencanaan-bangunan-industri",
  featuredImageAlt:
    "Ilustrasi editorial: pandangan udara kawasan industri dengan beberapa bangunan pabrik dan gudang yang tertata",
  status: "draft",
  blocks: [
    p("Artikel ini bersifat edukatif. Merencanakan bangunan industri — pabrik, gudang, atau fasilitas produksi — berbeda dari bangunan komersial biasa: taruhannya operasional harian selama puluhan tahun, dan kesalahannya terkunci dalam beton. Gunakan checklist ini sebelum memulai."),
    h2("1. Definisi operasional yang presisi"),
    p("Bangunan mengikuti proses, bukan sebaliknya. Sebelum desain: apa yang diproduksi/disimpan? Berapa kapasitas saat ini dan 10 tahun ke depan? Seperti apa alur material dari masuk hingga keluar? Berapa shift operasional? Tanpa jawaban ini, arsitek hanya bisa menebak — dan tebakan industrial itu mahal."),
    h2("2. Lahan: lebih dari sekadar luas"),
    list([
      "Peruntukan kawasan: pastikan zona industri sesuai peraturan setempat.",
      "Akses: jalan untuk truk trailer (lebar, radius putar, batasan tonase).",
      "Topografi dan daya dukung tanah: tanah lunak = biaya pondasi melonjak.",
      "Banjir dan drainase: kawasan industri di dataran rendah wajib dianalisis.",
      "Cadangan ekspansi: lahan untuk fase 2 dan 3.",
    ]),
    h2("3. Regulasi dan perizinan"),
    p("Petakan sejak awal: PBG dengan klasifikasi fungsi industri, persyaratan proteksi kebakaran (hidran, sprinkler, deteksi), dokumen lingkungan (AMDAL/UKL-UPL sesuai skala), dan peraturan khusus kawasan. Perizinan industrial memakan waktu paling lama — mulailah paling awal."),
    h2("4. Utilitas: kapasitas, bukan sekadar ketersediaan"),
    list([
      "Listrik: berapa KVA dibutuhkan? Apakah jaringan PLN setempat mencukupi?",
      "Air: kebutuhan proses + domestik + hidran — sumber dan cadangannya.",
      "Limbah: IPAL untuk limbah cair industri; karakteristik limbah menentukan desainnya.",
      "Gas/BBM: untuk proses termal atau genset cadangan.",
    ]),
    h2("5. Struktur dan fleksibilitas"),
    p("Tentukan sejak awal: bentang kolom, tinggi clear, beban lantai (termasuk beban titik mesin dan rak), dan kemungkinan perubahan fungsi. Struktur industrial yang baik memberi fleksibilitas 20 tahun ke depan — yang kaku memaksa renovasi mahal saat proses berubah."),
    h2("6. Sirkulasi tiga aliran"),
    p("Pisahkan sejak konsep: manusia (pejalan kaki), material (forklift/handling), dan kendaraan (truk). Ketiganya punya kecepatan, radius, dan risiko berbeda. Crossing yang tidak direncanakan adalah kecelakaan yang menunggu waktu."),
    h2("7. Fasilitas manusia"),
    p("Kantin, mushola, toilet, ruang ganti, klinik kecil, area istirahat — bukan 'fasilitas tambahan' melainkan infrastruktur produktivitas dan kepatuhan ketenagakerjaan. Rencanakan dengan standar yang sama seriusnya dengan area produksi."),
    h2("8. Keamanan dan proteksi kebakaran"),
    p("Klasifikasi bahaya kebakaran sesuai material/proses yang ada. Rancang: kompartemenisasi, jalur evakuasi, titik hidran dan APAR, akses mobil pemadam, dan sistem deteksi dini. Konsultasikan dengan ahli proteksi kebakaran — bukan sekadar 'ikut standar'."),
    h2("9. Fase konstruksi vs operasional"),
    p("Jika dibangun bertahap atau di samping fasilitas yang berjalan: bagaimana material masuk tanpa mengganggu operasi? Bagaimana debu dan getaran dikendalikan? Rencana phasing konstruksi adalah bagian dari desain, bukan urusan kontraktor belakangan."),
    h2("10. Anggaran berbasis data"),
    p("Estimasi industrial tidak bisa memakai 'harga per m² rumah' — spesifikasinya fundamentally berbeda (struktur berat, utilitas khusus, proteksi kebakaran). [RAB berbasis gambar](/journal/rab-bangunan-fungsi-komponen) dengan referensi proyek sejenis adalah satu-satunya dasar yang dapat dipertanggungjawabkan."),
    h2("Template brief industrial satu halaman (ilustrasi)"),
    p("Sebagai ilustrasi, brief awal yang cukup untuk memulai diskusi desain:"),
    list([
      "Produk & kapasitas: apa yang diproduksi/disimpan, target 5 tahun.",
      "Alur: diagram satu halaman dari receiving hingga shipping.",
      "Lahan: luas, peruntukan, akses jalan, kondisi tanah (atau butuh soil test).",
      "Utilitas: kebutuhan listrik (KVA), air (m³/hari), limbah (jenis & debit).",
      "SDM: jumlah pekerja per shift, fasilitas yang diminta.",
      "Regulasi: status perizinan saat ini, klasifikasi bahaya kebakaran.",
      "Budget & timeline: kisaran investasi dan target operasional.",
    ]),
    p("Tujuh baris ini menghemat 2–3 putaran revisi masterplan. Owner yang datang dengan brief seperti ini mendapat desain yang tepat 3× lebih cepat daripada yang datang dengan 'buatkan pabrik'."),
    h2("Red flags saat survei lahan industri"),
    list([
      "Harga jauh di bawah pasar sekitar — biasanya ada masalah legalitas atau banjir.",
      "Penjual tidak bisa menunjukkan sertifikat asli — jangan lanjutkan tanpa notaris.",
      "Tidak ada akses jalan memadai untuk truk — pelebaran jalan bukan urusan Anda.",
      "Riwayat banjir tidak diakui warga sekitar — tanya 3 sumber berbeda, termasuk saat musim hujan.",
      "Jaringan listrik PLN jauh — biaya tarikan kabel bisa ratusan juta.",
      "Sengketa batas dengan tetangga — selesaikan sebelum AJB, bukan sesudah.",
    ]),
    quote("Dalam proyek industrial, checklist yang lengkap lebih berharga daripada desain yang indah."),
    p("Sepuluh poin ini adalah fondasi — detailnya mengikuti jenis industri spesifik Anda. Untuk pendalaman per tipologi, baca [desain pabrik](/journal/desain-bangunan-pabrik-alur-operasional) dan [desain gudang](/journal/desain-gudang-modern)."),
    p("Merencanakan bangunan industrial? [Start a Conversation](https://wa.me/6282142424750) — konsultasi pertama gratis, tanpa kewajiban."),
  ],
});
