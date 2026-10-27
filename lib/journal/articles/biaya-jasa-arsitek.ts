import { defineArticle, p, h2, quote, list, table } from "../helpers";

/* HARI 6 — 25 Oktober 2026 · Process · keyword: biaya jasa arsitek */

export default defineArticle({
  slug: "biaya-jasa-arsitek",
  title: "Berapa Biaya Jasa Arsitek? Memahami Lingkup Desain dan Perhitungannya",
  seoTitle: "Biaya Jasa Arsitek: Cara Menghitung & Memahami Lingkup — YF ARCH",
  seoDescription:
    "Panduan biaya jasa arsitek: model perhitungan per m², persentase, dan lump sum; apa saja yang termasuk dalam lingkup desain; dan cara membandingkan penawaran.",
  excerpt:
    "Harga jasa arsitek terasa misterius — padahal polanya sederhana. Pahami model perhitungannya, isi lingkupnya, dan cara membandingkan penawaran dengan adil.",
  category: "Process",
  primaryKeyword: "biaya jasa arsitek",
  publishedAt: "2026-10-25",
  featuredImage: "journal-biaya-jasa-arsitek",
  featuredImageAlt:
    "Ilustrasi editorial: meja kerja arsitek dengan gambar denah, kalkulator, dan dokumen anggaran",
  status: "published",
  blocks: [
    p("Pertanyaan paling sering kami terima bukanlah tentang gaya arsitektur — melainkan: berapa biayanya? Kewajaran pertanyaan itu berbanding lurus dengan kaburnya jawaban yang beredar di pasaran. Artikel ini menjernihkan tiga hal: bagaimana biaya jasa arsitek dihitung, apa saja yang Anda dapatkan, dan bagaimana membandingkan penawaran secara adil."),
    h2("Tiga model perhitungan yang umum dipakai"),
    table(
      ["Model", "Cara hitung", "Cocok untuk"],
      [
        ["Per meter persegi", "Tarif × luas desain (m²)", "Rumah tinggal, ruko, kafe — lingkup jelas"],
        ["Persentase konstruksi", "3–7% dari estimasi nilai bangun", "Proyek menengah–besar"],
        ["Lump sum", "Harga paket untuk lingkup tertentu", "Interior, renovasi parsial"],
      ],
      "Sebagai ilustrasi: tiga model perhitungan jasa desain yang umum di Indonesia.",
    ),
    p("Model per meter persegi paling transparan untuk proyek residensial: Anda tahu persis pengalinya dan luas yang dihitung. Model persentase lazim untuk proyek komersial karena lingkupnya kompleks. Lump sum cocok untuk pekerjaan terbatas seperti desain interior satu lantai."),
    h2("Apa yang sebenarnya Anda bayar?"),
    p("Biaya desain bukan membayar 'gambar' — melainkan membayar keputusan yang terkandung di dalamnya:"),
    list([
      "Analisis tapak dan kebutuhan — survei, regulasi setempat, dan penerjemahan brief menjadi program ruang.",
      "Iterasi desain — puluhan alternatif denah dan massa yang Anda tidak lihat, demi satu solusi yang tepat.",
      "Gambar kerja lengkap — dokumen teknis presisi yang menjadi acuan tukang di lapangan.",
      "Visualisasi 3D — agar Anda melihat hasilnya sebelum satu bata pun dipasang.",
      "Pendampingan — arsitek yang baik menjawab pertanyaan lapangan selama konstruksi berjalan.",
    ]),
    h2("Menempatkan biaya desain dalam perspektif"),
    p("Jasa desain umumnya berkisar 3–7% dari nilai konstruksi. Artinya, untuk rumah senilai Rp1 miliar, desain yang baik berharga puluhan juta rupiah. Bandingkan dengan biaya satu kesalahan fatal — struktur yang harus dibongkar, tata ruang yang tidak berfungsi, atau atap yang bocor karena detail yang salah — yang dengan mudah mencapai ratusan juta. Desain bukan biaya; ia adalah asuransi terhadap kesalahan yang jauh lebih mahal."),
    quote("Arsitek termurah adalah arsitek yang gambarnya membuat tukang tidak perlu bertanya."),
    h2("Contoh simulasi: rumah 150 m² (ilustrasi)"),
    p("Sebagai ilustrasi — bukan penawaran — berikut cara membaca angka untuk rumah 150 m²:"),
    list([
      "Model per m²: 150 × Rp50.000 = Rp7,5 juta untuk paket gambar dasar + visualisasi. Paket yang mencakup struktur dan pendampingan tentu lebih tinggi — dan mencakup lebih banyak.",
      "Bandingkan dengan nilai konstruksi: jika bangun menghabiskan Rp900 juta, biaya desain Rp25–40 juta setara 3–4,5% — untuk dokumen yang mengendalikan 100% anggaran.",
      "Yang dibandingkan: apakah Rp7,5 juta itu termasuk gambar struktur? Berapa revisi? Ada RAB? Tanpa rincian ini, angka tidak bisa dibandingkan.",
    ]),
    h2("Biaya tersembunyi yang perlu ditanyakan"),
    list([
      "Biaya survei dan pengukuran ulang tapak — termasuk atau terpisah?",
      "Biaya perizinan (PBG) — diurus biro atau owner? Berapa estimasinya?",
      "Biaya revisi di luar kuota — berapa per putaran?",
      "Biaya cetak dan penggandaan dokumen — sepele tetapi bisa menumpuk.",
      "Biaya pendampingan lapangan di luar paket — per kunjungan atau per bulan?",
      "Pajak (PPN) — apakah harga yang dikutip sudah termasuk?",
    ]),
    p("Daftar ini bukan untuk menawar — melainkan untuk memastikan tidak ada kejutan. Biro profesional menjawab semuanya di proposal, tanpa diminta."),
    h2("Struktur biaya yang sehat (ilustrasi)"),
    list([
      "Termin 1 (20%): setelah brief disepakati — komitmen awal.",
      "Termin 2 (30%): setelah konsep disetujui — porsi desain terbesar.",
      "Termin 3 (30%): setelah gambar kerja diserahkan.",
      "Termin 4 (20%): setelah RAB + pendampingan awal — pelunasan.",
      "Hindari: 50%+ di muka — risiko Anda; 100% di akhir — risiko arsitek. Bertahap itu adil.",
    ]),
    quote("Jangan tanya 'berapa harganya' sebelum bertanya 'apa isinya'."),
    h2("Cara membandingkan penawaran dengan adil"),
    p("Jangan bandingkan angka akhirnya saja — bandingkan isi paketnya. Penawaran Rp35 ribu/m² tanpa gambar struktur tidak setara dengan Rp50 ribu/m² yang mencakup struktur, MEP dasar, dan visualisasi. Tanyakan selalu:"),
    list([
      "Apa saja dokumen yang diserahkan? (denah, tampak, potongan, detail, RAB?)",
      "Berapa kali revisi desain termasuk dalam harga?",
      "Apakah termasuk gambar struktur dan visualisasi 3D?",
      "Bagaimana skema pembayaran — bertahap sesuai progres atau di muka penuh?",
      "Apakah ada pendampingan selama konstruksi?",
    ]),
    p("Penawaran yang transparan merinci semua ini secara tertulis. Lihat [halaman Layanan & Harga](/harga) kami untuk contoh bagaimana paket jasa desain yang terbuka seharusnya disusun — termasuk kalkulator estimasi yang bisa Anda coba sendiri."),
    p("Punya rencana proyek? [Start a Conversation](https://wa.me/6282142424750) — konsultasi pertama gratis, tanpa kewajiban."),
  ],
});
