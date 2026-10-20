import { defineArticle, p, h2, quote, list, table } from "../helpers";

/* HARI 21 — 9 November 2026 · Process · keyword: perbedaan gambar kerja dan render 3D */

export default defineArticle({
  slug: "perbedaan-gambar-kerja-visualisasi-3d",
  title: "Perbedaan Gambar Konsep, Gambar Kerja, dan Visualisasi 3D",
  seoTitle: "Gambar Konsep vs Gambar Kerja vs Visualisasi 3D — YF ARCH",
  seoDescription:
    "Memahami perbedaan gambar konsep, gambar kerja, dan visualisasi 3D: fungsi masing-masing, kapan dibutuhkan, dan mengapa ketiganya tidak saling menggantikan.",
  excerpt:
    "Tiga dokumen, tiga fungsi berbeda. Memahami apa itu gambar konsep, gambar kerja, dan visualisasi 3D — agar tidak membayar yang salah.",
  category: "Process",
  primaryKeyword: "perbedaan gambar kerja dan render 3D",
  publishedAt: "2026-11-09",
  featuredImage: "journal-perbedaan-gambar-kerja-visualisasi-3d",
  featuredImageAlt:
    "Ilustrasi editorial: transisi dari sketsa konsep ke gambar kerja teknis hingga visualisasi 3D fotorealistik",
  status: "draft",
  blocks: [
    p("'Saya sudah punya gambar' — kalimat yang maknanya bisa sangat berbeda tergantung gambar apa yang dimaksud. Dalam praktik arsitektur ada tiga jenis dokumen visual yang sering tertukar: gambar konsep, gambar kerja, dan visualisasi 3D. Memahami perbedaannya menghemat uang dan mencegah salah paham."),
    h2("Gambar konsep: bahasa ide"),
    p("Gambar konsep adalah sketsa dan diagram tahap awal: gubahan massa, zonasi, alur sirkulasi. Ia tidak berukuran presisi dan tidak dimaksudkan untuk dibangun — fungsinya adalah menyepakati arah. Ciri khasnya: cepat dibuat, mudah diubah, dan sengaja tidak detail agar diskusi tetap pada level ide, bukan teknis."),
    h2("Gambar kerja: bahasa konstruksi"),
    p("Gambar kerja (construction documents) adalah dokumen teknis presisi: setiap garis punya ukuran, setiap material punya kode, setiap pertemuan punya detail. Inilah satu-satunya dokumen yang boleh dibawa ke lapangan. Perbedaannya dengan gambar konsep bersifat fundamental:"),
    table(
      ["Aspek", "Gambar konsep", "Gambar kerja"],
      [
        ["Tujuan", "Menyepakati ide", "Membangun dengan tepat"],
        ["Presisi", "Skematis", "Milimeter"],
        ["Isi", "Massa, zonasi", "Dimensi, detail, spesifikasi"],
        ["Pengguna", "Klien + arsitek", "Tukang, mandor, pengawas"],
        ["Perubahan", "Murah dan cepat", "Mahal — hindari"],
      ],
      "Sebagai ilustrasi: perbandingan fungsi gambar konsep dan gambar kerja.",
    ),
    h2("Visualisasi 3D: bahasa imajinasi"),
    p("Render 3D menunjukkan seperti apa bangunan akan terlihat: material, cahaya, suasana. Fungsinya adalah verifikasi visual dan komunikasi — terutama untuk klien yang sulit membaca gambar 2D. Tetapi render bukan dokumen konstruksi: tukang tidak bisa membangun dari gambar render, betapa pun fotorealistiknya."),
    h2("Kesalahan umum: memakai dokumen yang salah"),
    list([
      "Membangun dari gambar konsep: 'kan sudah ada gambarnya' — padahal belum ada ukuran dan detail. Hasilnya improvisasi di lapangan.",
      "Mengira render = desain selesai: render yang indah tanpa gambar kerja di belakangnya adalah janji kosong.",
      "Meminta revisi besar di tahap gambar kerja: perubahan yang murah di tahap konsep menjadi mahal di sini.",
      "Tidak meminta gambar kerja sama sekali: paket desain termurah biasanya menghilangkan justru dokumen terpenting ini.",
    ]),
    h2("Studi kasus mini: dari sketsa ke serah terima (ilustrasi)"),
    p("Sebagai ilustrasi alur dokumen untuk rumah 150 m²: minggu 1–2 sketsa konsep (3 alternatif massa) → minggu 3–5 denah berkembang + 2 putaran revisi → minggu 6–9 gambar kerja (±30 lembar) → minggu 10 render 3D dari model yang sama → minggu 11 RAB dari take-off gambar → serah terima: PDF + file CAD + model 3D + RAB spreadsheet. Total ±11 minggu dengan 2 putaran revisi di tahap yang benar (konsep), nol revisi besar di tahap gambar kerja."),
    h2("Format serah terima yang profesional"),
    list([
      "PDF tercetak (A3/A1) — untuk arsip dan lapangan.",
      "File CAD (DWG) — untuk kontraktor dan revisi masa depan.",
      "Model 3D (SKP/RVT) — aset jangka panjang, berguna untuk renovasi 10 tahun lagi.",
      "Render resolusi tinggi — untuk dokumentasi dan presentasi.",
      "RAB dalam spreadsheet yang bisa diedit — bukan PDF mati.",
      "Berita acara serah terima — ditandatangani kedua belah pihak.",
    ]),
    p("Paket yang diserahkan dalam format terkunci (hanya PDF tanpa file kerja) membatasi Anda di masa depan. Pastikan hak atas file kerja tercantum dalam kontrak."),
    h2("Pertanyaan yang sering ditanyakan"),
    list([
      "'Apakah gambar kerja bisa dibuat dari sketsa saya sendiri?' — Bisa, tetapi arsitek akan memverifikasi ulang semuanya; sketsa Anda menjadi brief, bukan dasar gambar.",
      "'Berapa lama gambar kerja untuk rumah 2 lantai?' — Ilustrasi umum: 4–6 minggu setelah desain disepakati.",
      "'Apakah saya boleh membangun bertahap dari gambar yang sama?' — Ya, jika direncanakan: tandai fase di gambar agar struktur siap.",
      "'Siapa yang menyimpan file asli?' — Pastikan kontrak menyatakan Anda menerima file kerja setelah pelunasan.",
    ]),
    quote("Gambar konsep menjawab 'mau seperti apa'. Gambar kerja menjawab 'bagaimana tepatnya'. Render menjawab 'terlihat seperti apa'."),
    h2("Urutan yang benar dan apa yang Anda terima"),
    p("Alur profesional: konsep (disepakati) → pengembangan desain → gambar kerja → visualisasi 3D sebagai verifikasi. Dalam [paket jasa desain](/journal/paket-jasa-desain-arsitektur) yang lengkap, ketiganya ada dengan porsi yang jelas — dan Anda tahu persis dokumen apa yang diserahkan di setiap tahap."),
    p("Punya rencana proyek? [Start a Conversation](https://wa.me/6282142424750) — konsultasi pertama gratis, tanpa kewajiban."),
  ],
});
