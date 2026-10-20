import { defineArticle, p, h2, quote, list, table } from "../helpers";

/* HARI 20 — 8 November 2026 · Process · keyword: RAB bangunan */

export default defineArticle({
  slug: "rab-bangunan-fungsi-komponen",
  title: "RAB Bangunan: Fungsi, Komponen, dan Kapan Sebaiknya Disiapkan",
  seoTitle: "RAB Bangunan: Fungsi, Komponen & Waktu Tepat — YF ARCH",
  seoDescription:
    "Panduan RAB (Rencana Anggaran Biaya): fungsinya dalam proyek, komponen penyusunnya per divisi pekerjaan, dan kapan RAB sebaiknya disiapkan.",
  excerpt:
    "RAB bukan sekadar 'perkiraan harga' — ia adalah instrumen kendali proyek. Fungsi, komponen, dan timing yang tepat untuk menyusunnya.",
  category: "Process",
  primaryKeyword: "RAB bangunan",
  publishedAt: "2026-11-08",
  featuredImage: "journal-rab-bangunan-fungsi-komponen",
  featuredImageAlt:
    "Ilustrasi editorial: dokumen RAB dengan tabel volume dan harga satuan di atas gambar kerja",
  status: "draft",
  blocks: [
    p("RAB — Rencana Anggaran Biaya — adalah dokumen yang paling sering diminta dan paling jarang dipahami. Banyak yang mengira RAB sekadar 'total harga bangun rumah'. Padahal RAB yang benar adalah instrumen kendali: ia memberi tahu ke mana setiap rupiah pergi, menjadi dasar negosiasi dengan kontraktor, dan acuan pembayaran termin."),
    h2("Fungsi RAB dalam proyek"),
    list([
      "Perencanaan anggaran: mengetahui total kebutuhan dana sebelum komitmen membangun.",
      "Lelang/negosiasi: membandingkan penawaran kontraktor secara apple-to-apple.",
      "Pengendalian: pembayaran termin berbasis progres volume yang terukur.",
      "Deteksi pembengkakan: deviasi volume atau harga terlihat sejak dini.",
      "Dokumentasi: dasar penyelesaian sengketa volume pekerjaan.",
    ]),
    h2("Komponen penyusun RAB"),
    p("RAB disusun dari tiga elemen per item pekerjaan: volume (berapa banyak), harga satuan (berapa per unitnya — terdiri dari upah + material + alat), dan jumlah (volume × harga satuan). Item-item dikelompokkan per divisi:"),
    table(
      ["Divisi", "Contoh item pekerjaan", "Catatan"],
      [
        ["Persiapan", "Pembersihan lahan, bouwplank, direksi kit", "Sering diremehkan, padahal 2–5% total"],
        ["Struktur bawah", "Galian, pondasi, sloof", "Tergantung kondisi tanah"],
        ["Struktur atas", "Kolom, balok, pelat, tangga", "Ikuti gambar struktur"],
        ["Arsitektur", "Dinding, kusen, lantai, plafon, atap", "Porsi terbesar, 40–60%"],
        ["MEP", "Listrik, plumbing, drainase", "Jangan dihemat sembarangan"],
        ["Finishing & luar", "Cat, lansekap, pagar", "Menentukan kesan akhir"],
      ],
      "Sebagai ilustrasi: struktur umum divisi pekerjaan dalam RAB rumah tinggal.",
    ),
    h2("Kapan RAB sebaiknya disiapkan?"),
    p("Jawabannya tegas: setelah gambar kerja selesai — bukan sebelumnya. RAB yang disusun dari sketsa kasar atau 'perkiraan per m²' bukan RAB, melainkan tebakan berlabel. Volume yang akurat hanya bisa dihitung (take-off) dari gambar yang presisi. Urutan yang benar: desain final → gambar kerja → take-off volume → RAB."),
    h2("RAB vs penawaran kontraktor: cara membaca"),
    p("Saat kontraktor mengajukan penawaran, bandingkan item per item dengan RAB Anda — bukan totalnya saja. Waspadai:"),
    list([
      "Harga satuan jauh di bawah pasar: indikasi material disubstitusi atau pekerjaan tidak lengkap.",
      "Item hilang: pekerjaan yang tidak tercantum akan ditagih sebagai 'pekerjaan tambah' di kemudian hari.",
      "Volume berbeda: pastikan satuan dan volume memakai dasar hitung yang sama.",
      "Spesifikasi material tidak jelas: 'cat tembok' tanpa merek/tipe adalah celah.",
    ]),
    h2("Contoh: membaca satu baris RAB (ilustrasi)"),
    p("Sebagai ilustrasi cara membaca: baris 'Pekerjaan dinding bata ringan 10 cm — volume 120 m² — Rp185.000/m² — jumlah Rp22.200.000'. Dari satu baris ini Anda bisa memverifikasi: volume dari gambar (keliling × tinggi dikurangi bukaan), harga satuan (upah pasang + material bata, semen, pasir per m²), dan kewajaran total. Kontraktor yang menawar Rp120.000/m² untuk item yang sama wajib menjelaskan: material apa yang disubstitusi, atau volume apa yang dihitung berbeda."),
    p("Keterampilan membaca RAB baris-per-baris inilah yang membedakan owner yang mengendalikan proyek dari owner yang hanya membayar tagihan."),
    h2("RAB dan pajak: yang sering terlupakan"),
    list([
      "Harga satuan dalam RAB umumnya belum termasuk PPN — tanyakan eksplisit.",
      "PPh final jasa konstruksi (untuk proyek tertentu) — pahami siapa menanggung.",
      "Biaya perizinan (PBG) tidak masuk RAB konstruksi — anggarkan terpisah.",
      "Asuransi proyek (CAR) untuk nilai besar — lindungi dari risiko force majeure.",
      "Biaya pengawasan independen (MK) — 2–4% nilai proyek untuk proyek menengah-besar.",
    ]),
    p("RAB konstruksi yang 'lengkap' tetapi melupakan pos-pos di atas tetap menghasilkan kejutan anggaran. Minta arsitek atau QS Anda menyusun 'total project budget' — bukan hanya RAB fisik bangunan."),
    h2("Indeks keterbacaan RAB: 5 menit test"),
    p("Berikan RAB kepada orang awam dan minta ia menemukan: total biaya, biaya struktur, dan asumsi harga besi. Jika ia menemukannya dalam 5 menit, RAB Anda terbaca. Jika tidak, formatnya perlu diperbaiki — RAB yang hanya dimengerti pembuatnya gagal sebagai alat komunikasi."),
    quote("RAB yang baik tidak menjamin proyek murah — ia menjamin tidak ada kejutan."),
    h2("Keterbatasan yang perlu dipahami"),
    p("RAB adalah estimasi pada satu titik waktu: harga material berfluktuasi, dan kondisi lapangan (terutama tanah) dapat menyimpang dari asumsi. RAB yang profesional mencantumkan asumsi-asumsinya secara eksplisit dan menyisakan kontingensi 5–10% untuk hal tak terduga. Yang berbahaya bukan RAB yang meleset sedikit — melainkan proyek yang berjalan tanpa RAB sama sekali."),
    p("RAB yang akurat lahir dari [gambar kerja yang lengkap](/journal/perbedaan-gambar-kerja-visualisasi-3d) dan [proses desain yang tertib](/journal/proses-desain-arsitektur-brief-gambar-kerja). Untuk estimasi awal sebelum RAB formal, Anda bisa mencoba [kalkulator di halaman Layanan & Harga](/harga)."),
    p("Punya rencana proyek? [Start a Conversation](https://wa.me/6282142424750) — konsultasi pertama gratis, tanpa kewajiban."),
  ],
});
