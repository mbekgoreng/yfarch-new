# YF ARCH — Website

Website studio arsitektur **YF ARCH** (Ahmad Yusuf Fahrezzi, S.Ars).

Stack: **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4** — tanpa library animasi eksternal
(scroll-film engine ditulis manual dengan requestAnimationFrame + lerp).

---

## Cara menjalankan

Butuh **Node.js 18+** (https://nodejs.org).

```bash
npm install        # install dependencies (sekali saja)
npm run dev        # mode pengembangan → http://localhost:3000
```

Untuk produksi:

```bash
npm run build
npm start          # → http://localhost:3000
```

## Deploy gratis ke Vercel

1. Push folder ini ke GitHub
2. Buka https://vercel.com → Import repository → Deploy (tanpa konfigurasi tambahan)

---

## Mengubah konten

Hampir semua konten ada di **dua file data** — tidak perlu menyentuh komponen:

| File | Isi |
|---|---|
| `lib/data.ts` | Kontak (WA/email/IG), profil & CV, proyek + galeri, proses, studio, navigasi, scene film |
| `lib/pricing.ts` | 6 paket harga, RAB, tabel perbandingan, durasi promo, format pesan WhatsApp |

### Catatan penting

- **Promo countdown** — deadline disimpan di `localStorage` browser pengunjung
  (key `yfarch_promo_deadline_v1`), berjalan 5 jam sejak kunjungan pertama dan
  tidak reset saat refresh. Ubah durasinya di `PROMO_DURATION_MS` (lib/pricing.ts).
  Untuk menguji ulang: hapus key tersebut di DevTools → Application → Local Storage.
- **Nomor WhatsApp** hardcoded juga di `waUrl()` (lib/pricing.ts) dan `FinalCta`
  (components/harga/HargaContent.tsx) — ganti bila nomor berubah.
- **Gambar** ada di `public/images/` (format WebP 960w + 1920w). Logo: `public/images/logo.png`.
- **Assistant** (Bahasa Indonesia) menjawab hanya dari kedua file data di atas —
  otomatis ikut berubah saat data diubah.

## Struktur

```
app/              halaman (/, /harga), layout, global CSS, favicon
components/       Film (scroll-cinema), Nav, Projects, Services, Process,
                  Studio, Profile, Contact, Assistant, Reveal, SectionDrawing
components/harga/ halaman harga (hero, promo, cards, RAB, kalkulator, perbandingan)
lib/              data.ts · pricing.ts · usePromo.ts
public/images/    seluruh aset gambar (WebP + logo)
```

© 2026 YF ARCH — Probolinggo, East Java
