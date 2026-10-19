import { defineArticle, p, h2, quote, list } from "../helpers";

/* HARI 16 — 4 November 2026 · Industrial · keyword: desain gudang modern
   Catatan editorial: artikel edukatif; tidak mengklaim proyek gudang YFArch. */

export default defineArticle({
  slug: "desain-gudang-modern",
  title: "Desain Gudang Modern: Sirkulasi, Akses Kendaraan, dan Efisiensi Ruang",
  seoTitle: "Desain Gudang Modern: Sirkulasi & Efisiensi — YF ARCH",
  seoDescription:
    "Prinsip desain gudang modern: perencanaan sirkulasi forklift, akses kendaraan, ketinggian rak, dan efisiensi ruang penyimpanan.",
  excerpt:
    "Gudang modern adalah mesin logistik. Tiga variabel yang menentukan efisiensinya: sirkulasi, akses kendaraan, dan pemanfaatan volume vertikal.",
  category: "Industrial",
  primaryKeyword: "desain gudang modern",
  publishedAt: "2026-11-04",
  featuredImage: "journal-desain-gudang-modern",
  featuredImageAlt:
    "Ilustrasi editorial: interior gudang modern dengan rak tinggi, lorong forklift yang lebar dan teratur",
  status: "draft",
  blocks: [
    p("Artikel ini bersifat edukatif tentang prinsip perancangan gudang. Gudang yang dirancang asal-asalan membuang uang setiap hari: forklift menunggu karena lorong sempit, barang rusak karena penumpukan salah, dan sepertiga volume bangunan tidak terpakai karena ketinggian tidak direncanakan. Berikut prinsip-prinsipnya."),
    h2("Mulai dari sistem penyimpanan, bukan dari bangunan"),
    p("Keputusan pertama bukan ukuran gudang, melainkan: apa yang disimpan, bagaimana diambil, dan seberapa sering. Pallet racking butuh lorong forklift 3–3,5 m; drive-in racking lebih padat tetapi akses lebih lambat; mezzanine menggandakan luas untuk barang ringan. Sistem penyimpanan menentukan dimensi bangunan — bukan sebaliknya."),
    h2("Sirkulasi: satu arah lebih baik dari dua arah"),
    p("Alur ideal gudang adalah satu arah: receiving → staging → storage → picking → packing → shipping. Hindari arus bolak-balik yang membuat forklift saling menunggu. Pisahkan jalur pejalan kaki dengan marking dan railing — keselamatan bukan aksesori."),
    list([
      "Lebar lorong utama: 3,5–4 m untuk dua arah forklift.",
      "Lorong antar-rak: sesuaikan dengan radius putar forklift yang dipakai.",
      "Area staging di depan dock: minimal 1,5× lebar pintu dock.",
      "Jalur evakuasi: tidak boleh terhalang barang kapan pun.",
    ]),
    h2("Akses kendaraan: rancang untuk truk terbesar"),
    p("Kesalahan klasik: apron (halaman depan dock) terlalu sempit untuk truk trailer bermanuver. Rancang untuk kendaraan terbesar yang akan datang — bukan yang rata-rata. Pertimbangkan: jumlah dock door vs frekuensi bongkar muat, level dock (setinggi bak truk ±1,2 m) vs ground-level untuk pick-up, dan area parkir tunggu agar antrean tidak meluber ke jalan umum."),
    h2("Manfaatkan volume, bukan hanya luas lantai"),
    p("Sewa atau bangun gudang dihitung per meter persegi — tetapi barang disimpan per meter kubik. Clear height 9–12 m dengan rak 5–6 level menyimpan 2–3× lipat dibanding gudang 6 m dengan rak 3 level, dengan footprint yang sama. Investasi pada ketinggian dan sistem rak yang tepat hampir selalu lebih murah daripada menambah luas bangunan."),
    h2("Lantai: fondasi yang menanggung semuanya"),
    p("Lantai gudang bukan lantai biasa: ia menanggung beban rak berton-ton, hantaman roda forklift ribuan kali sehari, dan tuntutan kerataan untuk rak tinggi. Spesifikasi yang perlu diperhatikan: daya dukung (beban titik rak), kerataan permukaan (toleransi FM/DM untuk very narrow aisle), dan ketahanan abrasi. Lantai yang gagal berarti rak tidak bisa dipakai penuh — bencana operasional."),
    h2("Contoh: gudang distribusi 3.000 m² (ilustrasi)"),
    list([
      "Footprint 50×60 m, clear height 10 m, 5 level rak.",
      "12 dock door di sisi panjang + 2 drive-in ramp.",
      "Lorong utama 4 m, lorong rak 3,2 m (reach truck).",
      "Kantor mezzanine 150 m² di atas area shipping — pengawasan visual langsung.",
      "Apron 35 m untuk manuver trailer 40 ft.",
      "Kapasitas: ±4.500 pallet position — 3× lipat dibanding gudang 6 m di footprint sama.",
    ]),
    h2("Otomasi gudang: kapan layak dipertimbangkan"),
    list([
      "Volume tinggi + SKU sedikit: conveyor dan sortasi otomatis mengalahkan forklift manual.",
      "Tenaga kerja sulit/expensive: AMRs (autonomous mobile robots) untuk put-away dan picking.",
      "Akurasi kritis: WMS (warehouse management system) + barcode/RFID sebelum robot — digitalisasi dulu, otomasi kemudian.",
      "Aturan praktis: otomasi layak jika payback < 3 tahun; jika tidak, perbaiki layout manual dulu — seringkali cukup.",
    ]),
    p("Gudang 'pintar' yang layout-nya buruk hanyalah inefisiensi yang terkomputerisasi. Desain fisik yang benar adalah prasyarat — bukan alternatif — dari otomasi."),
    h2("Slotting: menempatkan barang pada tempatnya"),
    p("Efisiensi picking ditentukan oleh slotting — barang yang sering diambil harus paling mudah dijangkau:"),
    list([
      "Analisis ABC: 20% SKU dengan 80% pergerakan di zona emas (dekat shipping, ketinggian pinggang–bahu).",
      "Barang berat di bawah, ringan di atas — ergonomi sekaligus keamanan.",
      "Barang sejenis berdekatan — mengurangi jarak tempuh picker hingga 30–50%.",
      "Review slotting tiap 6 bulan — pola permintaan berubah mengikuti musim dan tren.",
    ]),
    quote("Gudang yang baik tidak terlihat sibuk — ia terlihat tenang, karena semuanya mengalir."),
    h2("Utilitas dan keamanan"),
    list([
      "Pencahayaan: minimal 200 lux di area kerja; skylight mengurangi biaya listrik siang hari.",
      "Ventilasi: gudang tertutup cepat panas — rencanakan ventilasi alami atau mekanis.",
      "Proteksi kebakaran: sprinkler, hidran, dan deteksi asap sesuai klasifikasi barang yang disimpan.",
      "Keamanan: CCTV di dock dan entrance, akses terkendali untuk area bernilai tinggi.",
    ]),
    p("Merencanakan fasilitas industrial, gudang, atau komersial? [Start a Conversation](https://wa.me/6282142424750) — konsultasi pertama gratis, tanpa kewajiban."),
  ],
});
