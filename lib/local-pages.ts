/* ------------------------------------------------------------------ */
/*  YF ARCH — Local service pages                                      */
/*                                                                     */
/*  One entry per service area. Content is written per area — not a    */
/*  template with the city name swapped. Facts come from lib/data.ts   */
/*  and the studio's real services; anything operational that is not    */
/*  confirmed is phrased neutrally (see `areaNote`).                   */
/* ------------------------------------------------------------------ */

export type LocalFaq = { q: string; a: string };

export type LocalPage = {
  slug: string;
  city: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  heroImage: string;
  heroAlt: string;
  heroCaption: string;
  services: { title: string; body: string }[];
  projectTypes: string[];
  challengesTitle: string;
  challenges: { title: string; body: string }[];
  deliverables: string[];
  portfolioSlugs: string[];
  portfolioNote: string;
  faqs: LocalFaq[];
  waMessage: string;
  areaNote: string;
};

const DELIVERABLES: string[] = [
  "Denah dan konsep desain yang dikembangkan bersama Anda, bukan template jadi",
  "Visualisasi 3D eksterior dan interior untuk membaca ruang sebelum dibangun",
  "Gambar kerja arsitektur sebagai acuan pelaksanaan di lapangan",
  "Gambar struktur dan MEP sesuai paket yang dipilih",
  "Rencana Anggaran Biaya (RAB) sesuai paket yang dipilih",
  "Seluruh dokumen dalam format digital yang rapi dan mudah dibagikan ke pelaksana",
];

export const localPages: LocalPage[] = [
  /* ============================ PROBOLINGGO ============================ */
  {
    slug: "jasa-arsitek-probolinggo",
    city: "Probolinggo",
    seoTitle: "Jasa Arsitek Probolinggo — Desain Rumah, Villa & Bangunan Usaha | YF ARCH",
    seoDescription:
      "YF ARCH adalah studio arsitek berbasis di Probolinggo, Jawa Timur. Desain rumah, homestay, cafe, dan bangunan usaha — konsultasi pertama gratis, harga per m².",
    eyebrow: "Jasa Arsitek — Probolinggo",
    h1: "Jasa Arsitek di Probolinggo untuk Rumah, Villa & Bangunan Usaha",
    intro: [
      "YF ARCH berbasis di Probolinggo — kota dan kabupaten di pesisir utara Jawa Timur yang menjadi salah satu pintu gerbang menuju Bromo. Karena studio kami berada di sini, proyek di Probolinggo mendapat keuntungan paling praktis: konsultasi tatap muka mudah diatur, survei lahan cepat dijadwalkan, dan pendampingan selama proses desain berjalan tanpa jarak.",
      "Kami merancang rumah tinggal, rumah tumbuh, homestay dan kos, cafe, ruko, hingga bangunan usaha — dengan pendekatan yang sama di setiap proyek: denah yang masuk akal, cahaya dan udara yang direncanakan, gambar kerja yang bisa dibangun, dan anggaran yang dibicarakan sejak awal, bukan di akhir.",
    ],
    heroImage: "alex-house-ext-1",
    heroAlt: "Rumah modern tropis dua lantai dengan atap melayang dan pencahayaan hangat — karya desain YF ARCH di Pasuruan, Jawa Timur",
    heroCaption: "Mr. Alex House — Pasuruan, Jawa Timur. Karya desain & visualisasi YF ARCH.",
    services: [
      {
        title: "Desain Rumah Tinggal",
        body: "Rumah baru satu atau dua lantai yang dirancang dari cara keluarga Anda hidup: jumlah kamar, ruang berkumpul, dapur, hingga kemungkinan tumbuh di masa depan. Bukan denah pasaran yang dipaksakan ke lahan Anda.",
      },
      {
        title: "Renovasi & Rumah Tumbuh",
        body: "Membangun bertahap sesuai anggaran adalah pola yang umum di Probolinggo. Kami merancang struktur dan denah agar tahap berikutnya tidak membongkar tahap sebelumnya.",
      },
      {
        title: "Homestay, Kos & Bangunan Usaha",
        body: "Arus wisata Bromo melewati Probolinggo setiap hari. Kami merancang homestay, kos, cafe, dan ruko yang tata ruangnya mendukung operasional — bukan sekadar fasad yang fotogenik.",
      },
      {
        title: "Gambar Kerja, 3D & RAB",
        body: "Sudah punya konsep atau denah awal? Kami lanjutkan menjadi visualisasi 3D, gambar kerja lengkap, dan RAB agar Anda bisa menawar harga pelaksanaan dengan dokumen, bukan perkiraan lisan.",
      },
    ],
    projectTypes: [
      "Rumah tinggal baru",
      "Renovasi & rumah tumbuh",
      "Homestay & guest house",
      "Kos-kosan",
      "Cafe & restoran",
      "Ruko & bangunan usaha",
      "Villa keluarga",
      "Gambar kerja & RAB",
    ],
    challengesTitle: "Konteks Probolinggo yang Kami Rancang Dengan Serius",
    challenges: [
      {
        title: "Panas pesisir dan angin Gending",
        body: "Probolinggo panas dan kering, dengan angin Gending yang bertiup kencang pada musim kemarau. Desain yang baik menjawabnya dengan naungan yang dihitung, ventilasi silang yang benar-benar mengalir, dan bukaan yang tidak mengundang debu serta tampias — bukan sekadar menambah AC.",
      },
      {
        title: "Udara laut di kawasan pantai",
        body: "Untuk lahan dekat pantai — dari Mayangan sampai Paiton — pilihan material dan detail besi, kusen, serta finishing harus mempertimbangkan udara garam agar bangunan tidak cepat menua.",
      },
      {
        title: "Lahan memanjang khas kawasan kota",
        body: "Banyak lahan di kota Probolinggo berbentuk memanjang dengan lebar terbatas. Tantangannya adalah cahaya dan udara untuk ruang di tengah — dijawab dengan tata massa, void, dan halaman dalam yang direncanakan sejak denah pertama.",
      },
      {
        title: "Koridor wisata Bromo",
        body: "Jalur Tongas–Sukapura dipenuhi kebutuhan penginapan, cafe, dan titik singgah. Bangunan usaha di koridor ini harus membaca arus tamu: parkir, akses jeep dan kendaraan, serta ruang servis yang tidak mengganggu pengalaman tamu.",
      },
    ],
    deliverables: DELIVERABLES,
    portfolioSlugs: ["mr-alex-house", "ms-tasya-house"],
    portfolioNote:
      "Dua karya terdekat yang dikerjakan studio — di Pasuruan dan Malang — ditampilkan dengan lokasi aslinya. Keduanya berstatus desain & visualisasi.",
    faqs: [
      {
        q: "Apakah YF ARCH benar-benar berbasis di Probolinggo?",
        a: "Ya. Studio kami berbasis di Probolinggo, Jawa Timur. Konsultasi pertama gratis dan dapat dilakukan tatap muka untuk proyek di wilayah Probolinggo, atau melalui WhatsApp dan video call bila Anda berada di luar kota.",
      },
      {
        q: "Bisakah survei lahan di Kraksaan, Paiton, atau Sukapura?",
        a: "Bisa. Kunjungan lapangan untuk wilayah kota dan kabupaten Probolinggo dijadwalkan sesuai kesepakatan setelah konsultasi awal, agar kami membawa pertanyaan dan pengukuran yang tepat sejak kunjungan pertama.",
      },
      {
        q: "Berapa biaya jasa arsitek di YF ARCH?",
        a: "Biaya dihitung per m² luas bangunan atau area desain, mengikuti paket yang dipilih, dan dikonfirmasi dalam proposal tertulis setelah konsultasi pertama — tidak ada angka lisan yang mengambang. Rincian paket dapat dilihat di halaman Harga.",
      },
      {
        q: "Saya ingin membangun bertahap. Apakah bisa?",
        a: "Bisa, dan justru sebaiknya direncanakan sejak awal. Kami merancang rumah tumbuh: struktur, denah, dan instalasi disiapkan untuk tahap berikutnya sehingga pembangunan lanjutan tidak membongkar pekerjaan yang sudah jadi.",
      },
      {
        q: "Apa yang perlu saya siapkan untuk konsultasi pertama?",
        a: "Cukup lokasi lahan (atau alamat dan foto), kebutuhan ruang secara garis besar, dan gambaran anggaran bila sudah ada. Belum punya semuanya pun tidak masalah — konsultasi pertama memang untuk menyusun kebutuhan itu bersama.",
      },
    ],
    waMessage:
      "Halo YFArch, saya ingin berkonsultasi tentang rencana bangunan di Probolinggo. Mohon informasi mengenai proses dan kebutuhan awalnya.",
    areaNote:
      "Studio berbasis di Probolinggo. Layanan mencakup kota dan kabupaten Probolinggo serta wilayah Jawa Timur lainnya — kunjungan lapangan dijadwalkan sesuai kesepakatan, dan konsultasi awal selalu dapat dimulai dari jarak jauh.",
  },

  /* =============================== BROMO =============================== */
  {
    slug: "jasa-arsitek-bromo",
    city: "Kawasan Bromo",
    seoTitle: "Jasa Arsitek Bromo — Desain Villa, Homestay & Cafe | YF ARCH",
    seoDescription:
      "Villa, homestay, guest house, dan cafe di kawasan Bromo (Sukapura, Ngadisari, Cemoro Lawang, Tosari) oleh YF ARCH, studio arsitek berbasis Probolinggo.",
    eyebrow: "Jasa Arsitek — Kawasan Bromo",
    h1: "Jasa Arsitek Villa & Homestay di Kawasan Bromo",
    intro: [
      "Kawasan Bromo adalah salah satu lanskap wisata terkuat di Indonesia — dan salah satu yang paling menuntut untuk dibangun. Lahan berkontur, malam yang dingin, kabut, angin kaldera, serta kebutuhan operasional penginapan membuat villa dan homestay di Sukapura, Ngadisari, Cemoro Lawang, dan Tosari tidak bisa dirancang dengan logika rumah kota.",
      "YF ARCH melayani perencanaan arsitektur untuk kawasan Bromo dari studio kami di Probolinggo — jalur utara menuju Bromo memang melewati kota kami. Halaman ini adalah panduan jujur tentang apa yang perlu dipikirkan sebelum membangun di kawasan wisata pegunungan, dan bagaimana kami membantu Anda merencanakannya.",
    ],
    heroImage: "bromo-villa-concept",
    heroAlt: "Konsep desain villa pegunungan dari batu dan kayu dengan teras pandang menghadap kaldera Bromo dan lautan pasir pada senja hari",
    heroCaption: "Konsep desain — visualisasi villa pegunungan di kawasan Bromo. Bukan proyek yang telah dibangun.",
    services: [
      {
        title: "Desain Villa Wisata",
        body: "Villa privat dan villa sewa yang orientasinya ditentukan oleh view kaldera dan matahari pagi — dengan ruang dalam yang tetap hangat dan terlindung saat kabut dan angin sore turun.",
      },
      {
        title: "Desain Homestay & Guest House",
        body: "Penginapan yang dirancang sebagai bisnis: jumlah kamar yang realistis terhadap lahan, sirkulasi tamu dan servis yang terpisah, area komunal yang menjual pengalaman, dan ruang operasional yang tidak mengorbankan kamar tamu.",
      },
      {
        title: "Desain Cafe & Restoran View Pegunungan",
        body: "Cafe di jalur wisata hidup dari tiga hal: view, kapasitas, dan kecepatan layanan. Kami merancang ketiganya — teras pandang, dapur dan bar yang ringkas, serta sirkulasi tamu yang tidak bertabrakan dengan servis.",
      },
      {
        title: "Perencanaan Tapak & Bangunan Bertahap",
        body: "Untuk lahan berkontur atau rencana yang dibangun bertahap: penataan massa, akses kendaraan dan parkir, titik utilitas, dan fase pembangunan yang masuk akal secara anggaran.",
      },
    ],
    projectTypes: [
      "Villa privat & villa sewa",
      "Homestay",
      "Guest house",
      "Cafe & restoran",
      "Penginapan wisatawan",
      "Bangunan di lahan miring",
      "Rumah tinggal pegunungan",
      "Perencanaan tapak wisata",
    ],
    challengesTitle: "Hal yang Menentukan Berhasilnya Bangunan di Bromo",
    challenges: [
      {
        title: "Lahan berkontur bukan lahan datar yang miring sedikit",
        body: "Kontur menentukan segalanya: posisi bangunan, biaya pondasi dan dinding penahan, drainase, sampai arah view. Karena itu desain yang bertanggung jawab dimulai dari survei dan pembacaan topografi — dan perhitungan struktur oleh profesional. Kami tidak menjanjikan kelayakan tapak tanpa data teknis.",
      },
      {
        title: "Iklim pegunungan: dingin, kabut, lembap",
        body: "Malam di kawasan Bromo bisa sangat dingin sementara siang terik. Bangunan perlu menangkap matahari pagi, menahan angin dingin, dan memakai material yang tahan lembap serta mudah dirawat — karena perawatan di kawasan wisata selalu lebih sulit daripada di kota.",
      },
      {
        title: "View adalah aset — privasi dan angin adalah batasnya",
        body: "Bukaan besar menghadap kaldera menjual kamar, tetapi bukaan yang salah mengundang angin, silau, dan tatapan dari jalur wisata. Orientasi, teras bertingkat, dan penyekat visual dirancang agar tamu mendapat view tanpa merasa dipamerkan.",
      },
      {
        title: "Operasional: tamu, servis, parkir",
        body: "Penginapan gagal secara operasional jauh sebelum gagal secara visual. Jalur tamu, jalur staf dan laundry, parkir mobil dan jeep wisata, serta akses dapur harus selesai di gambar — bukan improvisasi setelah buka.",
      },
      {
        title: "Yang wajib diverifikasi sebelum membangun",
        body: "Status dan batas lahan, ketersediaan air, akses jalan, serta aturan setempat untuk kawasan wisata dan penyangga taman nasional perlu diverifikasi sebelum desain final. Kami membantu menyusun daftar verifikasi ini sejak konsultasi awal agar Anda tidak merancang di atas asumsi.",
      },
    ],
    deliverables: DELIVERABLES,
    portfolioSlugs: ["villa-samudra", "paviliun-teduh"],
    portfolioNote:
      "YF ARCH tidak mengklaim proyek terbangun di kawasan Bromo. Visual villa pada halaman ini adalah konsep desain. Karya hospitality dan pavilion studio ditampilkan di bawah dengan lokasi serta status aslinya.",
    faqs: [
      {
        q: "Apakah YF ARCH memiliki kantor di Bromo?",
        a: "Tidak. Studio kami berbasis di Probolinggo, dan kawasan Bromo adalah area layanan yang kami jangkau dari sana — Sukapura berada di Kabupaten Probolinggo dan merupakan jalur utama menuju Bromo. Kunjungan lapangan ke lokasi Anda dijadwalkan sesuai kesepakatan.",
      },
      {
        q: "Saya belum punya lahan. Bisakah mulai konsultasi?",
        a: "Bisa. Konsultasi awal dapat membahas jenis properti, kisaran kebutuhan lahan, dan hal-hal yang perlu diperiksa pada calon lahan. Namun desain final selalu membutuhkan data lahan yang nyata — lokasi, ukuran, kontur, dan statusnya.",
      },
      {
        q: "Apa yang paling sering diremehkan saat membangun homestay di Bromo?",
        a: "Tiga hal: kontur lahan yang ternyata menuntut pekerjaan tanah dan struktur lebih besar dari perkiraan, operasional (parkir, servis, laundry) yang tidak direncanakan, dan material yang tidak tahan iklim pegunungan. Ketiganya jauh lebih murah diselesaikan di gambar daripada di lapangan.",
      },
      {
        q: "Bisakah bangunan dirancang untuk dibangun bertahap?",
        a: "Bisa. Misalnya mulai dari beberapa kamar dan area komunal, lalu menambah unit mengikuti pertumbuhan usaha. Penataan tapak dan utilitas dirancang sejak fase pertama agar penambahan berikutnya tidak mengganggu operasi yang sedang berjalan.",
      },
      {
        q: "Berapa biaya desain untuk villa atau homestay?",
        a: "Biaya mengikuti paket dan luas area desain, dihitung per m² dan dikonfirmasi dalam proposal tertulis setelah konsultasi pertama. Lihat halaman Harga untuk struktur paketnya — angka final selalu menunggu brief dan data lahan Anda, bukan sebaliknya.",
      },
    ],
    waMessage:
      "Halo YFArch, saya ingin berkonsultasi tentang desain villa di kawasan Bromo. Mohon informasi mengenai proses dan kebutuhan awalnya.",
    areaNote:
      "Kawasan Bromo dilayani dari studio YF ARCH di Probolinggo — bukan kantor cabang. Cakupan halaman ini meliputi Sukapura, Ngadisari, Cemoro Lawang, dan Tosari sebagai area layanan; ketersediaan kunjungan lapangan dikonfirmasi saat konsultasi.",
  },

  /* ============================== LUMAJANG ============================== */
  {
    slug: "jasa-arsitek-lumajang",
    city: "Lumajang",
    seoTitle: "Jasa Arsitek Lumajang — Desain Rumah, Homestay & Bangunan Usaha | YF ARCH",
    seoDescription:
      "Desain rumah tinggal, homestay, dan bangunan usaha di Lumajang, Jawa Timur oleh YF ARCH — konsultasi pertama gratis, harga transparan per m².",
    eyebrow: "Jasa Arsitek — Lumajang",
    h1: "Jasa Arsitek di Lumajang untuk Rumah Tinggal & Usaha",
    intro: [
      "Lumajang membentang dari pesisir selatan sampai kaki Gunung Semeru — satu kabupaten dengan dua karakter: dataran kota yang panas dan kawasan lereng yang sejuk. Kebutuhan bangunannya pun beragam, dari rumah keluarga di kawasan kota, gudang dan bangunan usaha agraris, sampai homestay yang tumbuh mengikuti wisata Semeru dan Tumpak Sewu.",
      "YF ARCH melayani proyek di Lumajang dari studio kami di Probolinggo, kabupaten tetangga di sebelah timur. Konsultasi awal berjalan jarak jauh melalui WhatsApp dan video call; kunjungan lapangan dijadwalkan pada tahap survei dan pengukuran.",
    ],
    heroImage: "project-rumah-cahaya",
    heroAlt: "Rumah tinggal di lereng perbukitan Jawa Timur dengan loggia kayu dan cahaya pagi — karya desain YF ARCH",
    heroCaption: "Rumah Cahaya — Jawa Timur. Karya desain YF ARCH (studi desain).",
    services: [
      {
        title: "Desain Rumah Tinggal",
        body: "Rumah satu dan dua lantai untuk keluarga di Lumajang kota maupun kawasan kecamatan — dirancang dari kebutuhan ruang dan anggaran Anda, dengan denah yang siap tumbuh bila diperlukan.",
      },
      {
        title: "Homestay & Penginapan Wisata",
        body: "Arus wisata ke Tumpak Sewu dan Semeru membuka peluang penginapan di banyak titik Lumajang. Kami merancang homestay yang operasionalnya realistis: kamar, area komunal, parkir, dan ruang servis yang tertata.",
      },
      {
        title: "Bangunan Usaha & Agraris",
        body: "Ruko, cafe, gudang, dan bangunan pendukung usaha — termasuk kebutuhan khas keluarga agraris seperti area simpan hasil tani dan akses kendaraan besar — dirancang menyatu dengan rumah atau berdiri sendiri.",
      },
      {
        title: "Gambar Kerja, 3D & RAB",
        body: "Untuk Anda yang sudah punya konsep atau arsitek gambar awal: kami menyusun visualisasi 3D, gambar kerja, dan RAB yang menjadi dasar pelaksanaan dan perbandingan penawaran kontraktor.",
      },
    ],
    projectTypes: [
      "Rumah tinggal baru",
      "Renovasi & pengembangan",
      "Homestay wisata",
      "Guest house",
      "Cafe & ruko",
      "Gudang & bangunan usaha",
      "Rumah + tempat usaha",
      "Gambar kerja & RAB",
    ],
    challengesTitle: "Konteks Lumajang yang Perlu Dibaca Sebelum Merancang",
    challenges: [
      {
        title: "Dua mikroklimat dalam satu kabupaten",
        body: "Strategi ventilasi untuk rumah di dataran Lumajang kota berbeda dengan rumah di kaki Semeru yang berkabut dan sejuk. Desain yang menyalin solusi dari satu kawasan ke kawasan lain biasanya gagal di salah satunya — pembacaan lokasi adalah langkah pertama kami.",
      },
      {
        title: "Kesadaran risiko di kawasan lereng dan aliran sungai",
        body: "Sebagian wilayah Lumajang berada di lereng gunung dan dekat aliran yang berhulu di Semeru. Untuk lahan di kawasan seperti ini, posisi bangunan, drainase, dan struktur harus didahului verifikasi kondisi tapak dan informasi risiko setempat bersama profesional terkait. Kami tidak akan menyarankan membangun sebelum hal itu jelas.",
      },
      {
        title: "Rumah keluarga agraris punya kebutuhan khusus",
        body: "Banyak keluarga di Lumajang membutuhkan lebih dari kamar dan dapur: ruang simpan hasil panen, garasi untuk kendaraan usaha, dan halaman kerja. Kebutuhan ini sering hilang dari denah pasaran — pada proses kami, kebutuhan itu dicatat sejak brief pertama.",
      },
      {
        title: "Wisata yang tumbuh menuntut bangunan yang siap beroperasi",
        body: "Homestay di jalur wisata dinilai tamu dari hal-hal praktis: parkir yang jelas, kamar mandi yang layak, area berkumpul, dan privasi antar tamu. Aspek operasional ini kami rancang bersamaan dengan tampilan bangunan, bukan setelahnya.",
      },
    ],
    deliverables: DELIVERABLES,
    portfolioSlugs: ["rumah-cahaya", "ms-tasya-house"],
    portfolioNote:
      "Karya studio yang relevan untuk konteks Lumajang — rumah lereng di Jawa Timur dan rumah tinggal di Malang — ditampilkan dengan lokasi serta status aslinya.",
    faqs: [
      {
        q: "YF ARCH tidak berkantor di Lumajang. Bagaimana prosesnya berjalan?",
        a: "Studio kami berbasis di Probolinggo, kabupaten tetangga Lumajang. Konsultasi dan proses desain berjalan melalui WhatsApp, video call, dan dokumen digital; kunjungan lapangan untuk survei dan pengukuran dijadwalkan sesuai kesepakatan. Pola ini membuat Anda tetap didampingi tanpa biaya struktur kantor cabang.",
      },
      {
        q: "Apakah bisa survei lahan saya di Lumajang?",
        a: "Bisa, dijadwalkan setelah konsultasi awal. Survei membaca ukuran dan batas lahan, kontur, akses jalan, arah matahari dan angin, serta lingkungan sekitar — data yang menjadi dasar denah dan estimasi berikutnya.",
      },
      {
        q: "Berapa biaya jasa arsitek untuk rumah di Lumajang?",
        a: "Mengikuti struktur paket studio: dihitung per m² area desain dan dikonfirmasi dalam proposal tertulis setelah konsultasi pertama. Silakan lihat halaman Harga untuk paket-paketnya, lalu konsultasikan kebutuhan Anda — konsultasi pertama gratis.",
      },
      {
        q: "Saya ingin membangun homestay dekat kawasan wisata. Apa langkah pertamanya?",
        a: "Mulai dari lahan dan operasional: lokasi persis, akses dan parkir, jumlah kamar yang realistis, dan target tamu Anda. Setelah itu konsep desain menyusul. Urutan ini mencegah bangunan yang indah tetapi sulit dioperasikan.",
      },
      {
        q: "Apa yang perlu disiapkan untuk konsultasi pertama?",
        a: "Lokasi lahan (cukup titik peta atau alamat), foto lahan bila ada, kebutuhan ruang secara garis besar, dan gambaran anggaran bila sudah ada. Sisanya kami susun bersama dalam konsultasi.",
      },
    ],
    waMessage:
      "Halo YFArch, saya ingin berkonsultasi tentang rencana bangunan di Lumajang. Mohon informasi mengenai proses dan kebutuhan awalnya.",
    areaNote:
      "Lumajang adalah area layanan yang dijangkau dari studio YF ARCH di Probolinggo — bukan lokasi kantor. Konsultasi awal selalu dapat dimulai dari jarak jauh; kunjungan lapangan dijadwalkan sesuai kesepakatan.",
  },

  /* ============================== PASURUAN ============================== */
  {
    slug: "jasa-arsitek-pasuruan",
    city: "Pasuruan",
    seoTitle: "Jasa Arsitek Pasuruan — Desain Rumah, Villa & Bangunan Usaha | YF ARCH",
    seoDescription:
      "Desain rumah, villa, kos, dan bangunan usaha di Kota & Kabupaten Pasuruan oleh YF ARCH — sudah mengerjakan proyek di Pasuruan. Konsultasi pertama gratis.",
    eyebrow: "Jasa Arsitek — Pasuruan",
    h1: "Jasa Arsitek di Pasuruan untuk Rumah, Villa & Bangunan Usaha",
    intro: [
      "Pasuruan adalah dua wilayah sekaligus: Kota Pasuruan yang pesisir dan pelabuhan, serta Kabupaten Pasuruan yang membentang dari kawasan industri di Gempol dan Rembang sampai kawasan sejuk Prigen–Tretes dan gerbang Bromo di Tosari. Kebutuhan bangunannya beragam — dan YF ARCH sudah mengerjakan karya di sini: Mr. Alex House, rumah keluarga 280 m² di Kabupaten Pasuruan (desain & visualisasi, 2026).",
      "YF ARCH melayani proyek di Pasuruan dari studio kami di Probolinggo, wilayah tetangga yang berbatasan langsung. Konsultasi awal berjalan melalui WhatsApp dan video call; kunjungan lapangan untuk survei dan pengukuran dijadwalkan sesuai kesepakatan.",
    ],
    heroImage: "alex-house-ext-2",
    heroAlt: "Tampak masuk dan carport rumah tropis dua lantai dengan garis atap berlapis dan pencahayaan hangat — Mr. Alex House, karya desain YF ARCH di Kabupaten Pasuruan",
    heroCaption: "Mr. Alex House — Kabupaten Pasuruan, Jawa Timur. Karya desain & visualisasi YF ARCH (2026).",
    services: [
      {
        title: "Desain Rumah Tinggal",
        body: "Rumah keluarga satu dan dua lantai — dari kawasan perumahan di Pandaan dan Bangil sampai lahan keluarga di lingkungan yang lebih tenang. Dirancang dari cara hidup keluarga Anda, dengan denah yang jujur terhadap lahan dan siap tumbuh bila anggaran datang bertahap.",
      },
      {
        title: "Villa & Rumah Peristirahatan",
        body: "Prigen–Tretes adalah kawasan peristirahatan klasik Jawa Timur, dan Tosari adalah gerbang utara menuju Bromo. Kami merancang villa privat dan villa sewa yang membaca kontur, view, dan iklim sejuk pegunungan — bukan rumah kota yang dipindahkan ke lereng.",
      },
      {
        title: "Kos, Mess & Hunian Kawasan Industri",
        body: "Kawasan industri seperti PIER di Rembang dan koridor Gempol menciptakan kebutuhan hunian yang layak bagi pekerja dan manajemen. Kami merancang kos dan mess yang efisien dioperasikan, aman, dan tetap manusiawi untuk ditinggali — bukan barak yang diberi cat baru.",
      },
      {
        title: "Gambar Kerja, 3D & RAB",
        body: "Sudah punya konsep atau denah awal? Kami lanjutkan menjadi visualisasi 3D, gambar kerja lengkap, dan RAB agar Anda bisa menawar harga pelaksanaan dengan dokumen, bukan perkiraan lisan.",
      },
    ],
    projectTypes: [
      "Rumah tinggal baru",
      "Villa & rumah peristirahatan",
      "Kos & mess karyawan",
      "Ruko & bangunan usaha",
      "Gudang & bangunan pendukung industri",
      "Homestay gerbang Bromo (Tosari)",
      "Renovasi & rumah tumbuh",
      "Gambar kerja & RAB",
    ],
    challengesTitle: "Konteks Pasuruan yang Kami Rancang Dengan Serius",
    challenges: [
      {
        title: "Pesisir yang panas dan udara garam",
        body: "Kota Pasuruan dan kawasan pelabuhannya panas, terik, dan membawa udara garam. Jawabannya bukan AC yang lebih besar, melainkan naungan yang dihitung, ventilasi silang yang benar-benar mengalir, serta pilihan material dan finishing yang tidak cepat menua oleh udara laut.",
      },
      {
        title: "Hunian industri menuntut efisiensi yang manusiawi",
        body: "Kos dan mess di sekitar kawasan industri gagal dengan cara yang sama: unit dipadatkan tanpa memikirkan cahaya, sirkulasi penghuni, keamanan, dan ruang bersama. Efisiensi yang benar justru dihitung dari operasionalnya — bukan dari jumlah kamar maksimum di atas kertas.",
      },
      {
        title: "Lereng Prigen–Tretes dan Tosari bukan lahan datar",
        body: "Di kawasan pegunungan, kontur menentukan posisi bangunan, biaya pekerjaan tanah dan dinding penahan, serta drainase. Kelembapan yang tinggi juga menuntut detail material yang berbeda. Karena itu desain yang bertanggung jawab dimulai dari survei tapak — bukan dari gambar fasad.",
      },
      {
        title: "Bangunan usaha di koridor utama harus terbaca",
        body: "Di sepanjang jalur Surabaya–Probolinggo dan jalan-jalan utama kabupaten, ruko dan bangunan usaha hidup dari keterbacaan: fasad yang jelas dari kendaraan bergerak, parkir yang tidak memakan jalan, dan akses servis yang tidak mengganggu pelanggan. Ketiganya diselesaikan di gambar, bukan setelah buka.",
      },
    ],
    deliverables: DELIVERABLES,
    portfolioSlugs: ["mr-alex-house", "paviliun-teduh"],
    portfolioNote:
      "Karya pertama adalah proyek studio di Kabupaten Pasuruan itu sendiri, ditampilkan dengan status aslinya sebagai desain & visualisasi. Karya kedua adalah studi paviliun peristirahatan — relevan untuk konteks villa dan rumah peristirahatan pegunungan Pasuruan.",
    faqs: [
      {
        q: "Apakah YF ARCH sudah pernah mengerjakan proyek di Pasuruan?",
        a: "Sudah. Mr. Alex House — rumah keluarga 280 m² di Kabupaten Pasuruan — adalah karya desain & visualisasi kami (2026) dan dapat dilihat lengkap di halaman proyek. Status setiap karya selalu kami tulis apa adanya, termasuk yang masih berupa desain.",
      },
      {
        q: "Di mana kantor YF ARCH, dan apakah bisa survei ke Pasuruan?",
        a: "Studio kami berbasis di Probolinggo, wilayah yang berbatasan langsung dengan Pasuruan. Survei dan pengukuran dijadwalkan setelah konsultasi awal — mencakup Kota Pasuruan, Bangil, Pandaan, Prigen, Gempol, dan wilayah kabupaten lainnya sesuai kesepakatan.",
      },
      {
        q: "Saya ingin membangun villa di Tretes. Apa yang perlu diperhatikan lebih dulu?",
        a: "Tiga hal: kontur dan akses lahan, status serta batas lahan, dan bagaimana bangunan akan dipakai — ditinggali sendiri atau disewakan. Ketiganya menentukan desain jauh sebelum bentuk bangunan dibicarakan. Mulailah dari konsultasi dan survei tapak.",
      },
      {
        q: "Bisakah merancang kos atau mess untuk karyawan perusahaan?",
        a: "Bisa. Brief-nya dimulai dari jumlah dan profil penghuni, pola aktivitas harian, fasilitas bersama yang dibutuhkan, serta standar keamanan dan parkir. Dari situ kami susun unit dan sirkulasi yang efisien untuk dioperasikan, bukan sekadar padat.",
      },
      {
        q: "Berapa biaya jasa arsitek di YF ARCH?",
        a: "Biaya dihitung per m² luas bangunan atau area desain, mengikuti paket yang dipilih, dan dikonfirmasi dalam proposal tertulis setelah konsultasi pertama — tidak ada angka lisan yang mengambang. Rincian paket dapat dilihat di halaman Harga.",
      },
    ],
    waMessage:
      "Halo YFArch, saya ingin berkonsultasi tentang rencana bangunan di Pasuruan. Mohon informasi mengenai proses dan kebutuhan awalnya.",
    areaNote:
      "Pasuruan adalah area layanan yang dijangkau dari studio YF ARCH di Probolinggo — bukan lokasi kantor. Cakupan meliputi Kota Pasuruan dan Kabupaten Pasuruan (Bangil, Pandaan, Prigen–Tretes, Gempol, Tosari, dan sekitarnya); kunjungan lapangan dijadwalkan sesuai kesepakatan.",
  },

  /* =============================== MALANG =============================== */
  {
    slug: "jasa-arsitek-malang",
    city: "Malang",
    seoTitle: "Jasa Arsitek Malang — Desain Rumah, Kos & Villa | YF ARCH",
    seoDescription:
      "Desain rumah lahan sempit, rumah kos, villa, dan cafe di Malang oleh YF ARCH — sudah mengerjakan proyek di Malang. Konsultasi pertama gratis, harga per m².",
    eyebrow: "Jasa Arsitek — Malang",
    h1: "Jasa Arsitek di Malang untuk Rumah, Kos & Villa",
    intro: [
      "Malang adalah kota dataran tinggi yang sejuk — kota pendidikan dengan kebutuhan bangunan yang khas: rumah keluarga di lahan kota yang makin sempit, rumah kos yang mengikuti denyut kampus, serta villa dan cafe yang tumbuh bersama wisata Malang Raya. YF ARCH sudah mengerjakan karya di sini: Ms. Tasya House, rumah 145 m² di lahan terbatas yang menara bata eksposnya kini menjadi ciri khas lingkungannya (desain & visualisasi, 2026).",
      "YF ARCH melayani Malang dari studio kami di Probolinggo. Konsultasi dan proses desain berjalan jarak jauh melalui WhatsApp, video call, dan dokumen digital; kunjungan lapangan dijadwalkan pada tahap survei dan pengukuran.",
    ],
    heroImage: "tasya-house-ext-1",
    heroAlt: "Rumah dua lantai di Malang dengan menara sudut melengkung dari bata ekspos, jendela bundar, dan bukaan melengkung — Ms. Tasya House, karya desain YF ARCH",
    heroCaption: "Ms. Tasya House — Malang, Jawa Timur. Karya desain & visualisasi YF ARCH (2026).",
    services: [
      {
        title: "Desain Rumah Tinggal, Termasuk Lahan Sempit",
        body: "Banyak lahan kota Malang berukuran terbatas dan rapat dengan tetangga. Kami merancang rumah yang tetap terang dan terasa lega di lahan seperti itu — cahaya dari atas dan samping, void, dan tata ruang tanpa sudut mati — seperti yang kami kerjakan pada Ms. Tasya House.",
      },
      {
        title: "Rumah Kos & Hunian Sewa",
        body: "Di kota pendidikan, kos yang dirancang baik adalah bisnis yang stabil. Kami merancangnya sebagai bangunan sekaligus instrumen usaha: jumlah unit yang realistis, kamar mandi yang tertata, sirkulasi dan keamanan penghuni, parkir motor, serta ruang pengelola.",
      },
      {
        title: "Villa, Cafe & Bangunan Usaha",
        body: "Untuk kawasan sejuk Malang Raya dan koridor wisatanya: villa keluarga, rumah peristirahatan, dan cafe yang dirancang dari pengalaman tamu dan kecepatan operasional — bukan hanya dari fasad yang fotogenik.",
      },
      {
        title: "Renovasi & Gambar Kerja",
        body: "Merombak rumah lama — termasuk rumah berkarakter kolonial di kawasan lama Malang — tanpa menghapus karakternya. Atau melanjutkan konsep yang sudah Anda punya menjadi visualisasi 3D, gambar kerja, dan RAB yang siap dieksekusi pelaksana.",
      },
    ],
    projectTypes: [
      "Rumah tinggal baru",
      "Rumah di lahan sempit",
      "Rumah kos & kontrakan",
      "Villa & rumah peristirahatan",
      "Cafe & restoran",
      "Renovasi rumah lama",
      "Homestay",
      "Gambar kerja & RAB",
    ],
    challengesTitle: "Konteks Malang yang Menentukan Desainnya",
    challenges: [
      {
        title: "Lahan sempit dan tetangga rapat",
        body: "Masalah utama rumah kota Malang bukan luas, melainkan cahaya dan privasi: dinding menempel tetangga, bukaan samping terbatas. Solusinya dirancang sejak denah — void dan cahaya atas, orientasi bukaan yang menjaga privasi, dan fasad yang memberi karakter tanpa membuka isi rumah ke jalan. Menara bata pada Ms. Tasya House lahir dari pembacaan seperti ini.",
      },
      {
        title: "Iklim sejuk dataran tinggi — berkah yang perlu dikelola",
        body: "Di ketinggian sekitar 440 meter, udara Malang memungkinkan bukaan besar dan ventilasi alami yang sungguh bekerja. Tetapi musim hujan membawa lembap dan tampias: detail atap, talang, dan pilihan material harus menjawabnya agar bangunan tidak cepat berjamur dan kusam.",
      },
      {
        title: "Kos mahasiswa dinilai dari hal-hal praktis",
        body: "Penghuni kos memilih dengan kaki: kamar yang tidak pengap, kamar mandi yang layak, parkir motor yang aman, ruang cuci dan jemur, serta akustik antar kamar yang masuk akal. Hal-hal yang terdengar sepele ini menentukan okupansi — dan semuanya diputuskan di gambar, bukan setelah bangunan jadi.",
      },
      {
        title: "Karakter lama Malang jangan dihapus",
        body: "Kawasan lama seperti Ijen menyimpan rumah-rumah berkarakter kolonial yang menjadi identitas kota. Renovasi yang baik mempertahankan proporsi dan material aslinya sambil memperbaiki fungsi di dalamnya. Untuk bangunan yang berada di kawasan cagar budaya, ketentuan setempat perlu diverifikasi sebelum fasad diubah.",
      },
    ],
    deliverables: DELIVERABLES,
    portfolioSlugs: ["ms-tasya-house", "rumah-cahaya"],
    portfolioNote:
      "Karya pertama adalah proyek studio di Malang itu sendiri — rumah lahan terbatas yang menjadi bukti pendekatan kami untuk lahan kota. Karya kedua adalah studi rumah lereng di Jawa Timur, relevan untuk konteks dataran tinggi Malang.",
    faqs: [
      {
        q: "Apakah YF ARCH sudah pernah mengerjakan proyek di Malang?",
        a: "Sudah. Ms. Tasya House — rumah tinggal 145 m² di Malang — adalah karya desain & visualisasi kami (2026) dan dapat dilihat lengkap di halaman proyek. Status setiap karya selalu kami tulis apa adanya, termasuk yang masih berupa desain.",
      },
      {
        q: "Lahan saya sempit. Masih bisakah mendapat rumah yang terasa lega?",
        a: "Bisa — kelegaan lebih ditentukan oleh cahaya, ketinggian ruang, dan tata sirkulasi daripada oleh luas semata. Pada Ms. Tasya House, lahan yang terbatas dijawab dengan penataan massa dan bukaan yang terencana. Ceritakan ukuran lahan Anda pada konsultasi pertama, dan kami tunjukkan kemungkinan-kemungkinannya.",
      },
      {
        q: "Saya ingin membangun kos dekat kampus. Mulai dari mana?",
        a: "Dari brief usahanya: target penghuni, jumlah unit yang realistis terhadap luas lahan, dan peruntukan lahan yang perlu diverifikasi ke ketentuan setempat. Setelah fondasi itu jelas, desain menyusun unit, sirkulasi, dan fasilitas bersama agar kos mudah dioperasikan dan menarik bagi penghuni.",
      },
      {
        q: "Bagaimana prosesnya berjalan bila studio YF ARCH berada di Probolinggo?",
        a: "Konsultasi dan proses desain berjalan melalui WhatsApp, video call, dan dokumen digital yang terstruktur — Anda menerima progres dan gambar secara berkala. Kunjungan lapangan untuk survei dan pengukuran dijadwalkan sesuai kesepakatan pada tahap awal proyek.",
      },
      {
        q: "Berapa biaya jasa arsitek untuk rumah atau kos di Malang?",
        a: "Mengikuti struktur paket studio: dihitung per m² area desain dan dikonfirmasi dalam proposal tertulis setelah konsultasi pertama. Silakan lihat halaman Harga untuk paket-paketnya, lalu konsultasikan kebutuhan Anda — konsultasi pertama gratis.",
      },
    ],
    waMessage:
      "Halo YFArch, saya ingin berkonsultasi tentang rencana bangunan di Malang. Mohon informasi mengenai proses dan kebutuhan awalnya.",
    areaNote:
      "Malang adalah area layanan yang dijangkau dari studio YF ARCH di Probolinggo — bukan lokasi kantor. Cakupan meliputi Kota Malang, Kota Batu, dan wilayah Kabupaten Malang seperti Singosari, Lawang, Dau, dan Kepanjen; kunjungan lapangan dijadwalkan sesuai kesepakatan.",
  },
];

export function getLocalPage(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}
