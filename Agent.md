# Agent.md — Instructions for AI coding agents

Dokumen ini ditulis untuk AI coding agent (Claude Code, Cursor, atau sejenisnya) yang mengerjakan proyek ini secara otomatis atau semi-otomatis. Baca file ini **sebelum** menulis kode apa pun.

## 1. Reading order — wajib diikuti urutannya

1. `PRD.md` — pahami tujuan produk dan scope. Jangan menambah fitur di luar §6/§7 PRD tanpa konfirmasi eksplisit dari user.
2. `Design.md` — ini otoritas visual tunggal. Jika ada konflik antara insting desain agent dan Design.md, **Design.md menang**. Perhatikan khusus §4 (radius system) dan §10 (anti-pattern checklist) — dua bagian ini ada untuk mencegah hasil yang terlihat generik/AI-generated.
3. `Techspec.md` — struktur folder, content model, dan komponen. Ikuti nama file dan interface persis seperti yang tertulis, jangan improvisasi nama variabel yang beda dari `content/data.ts`.
4. `Agent.md` (dokumen ini) — aturan kerja dan batasan.

## 2. Hard constraints — jangan dilanggar

- **Palet warna final: putih + deep navy blue.** Jangan menambahkan warna ketiga (termasuk warna aksen "hangat" seperti cokelat/tanah/emas) kecuali user secara eksplisit meminta perubahan warna di masa depan. Ini sudah diputuskan setelah dua iterasi sebelumnya dan dikunci di Design.md §2.
- **Radius tidak boleh seragam.** Sebelum menganggap komponen selesai, jalankan checklist Design.md §10. Jika semua elemen radius-nya sama (baik semua 0px atau semua satu angka lain), itu bug desain — perbaiki sesuai tabel Design.md §4.
- **Tidak ada gradient, drop-shadow tebal, atau efek neon/glow** di mana pun dalam UI.
- **Tidak ada backend/database baru** kecuali diminta eksplisit. Proyek ini SSG murni via Next.js + Vercel.
- **Jangan hardcode data CV di dalam komponen JSX.** Semua teks/angka/tanggal harus berasal dari `content/data.ts`. Jika agent perlu menambah field baru, tambahkan ke `interface SiteContent` di Techspec.md §3 dan jaga konsistensi.
- **Jangan reproduksi file CV asli (PDF) sebagai teks di kode** — cukup referensikan sebagai file statis yang di-download (`/public/CV_Adam_Yudhistira_Muhtar.pdf`).

## 3. Workflow yang disarankan

1. Scaffold proyek Next.js sesuai Techspec.md §9.1.
2. Setup `tailwind.config.ts` dan `app/globals.css` sesuai Techspec.md §4 — verifikasi token warna/radius sudah benar sebelum lanjut ke komponen.
3. Buat `content/data.ts` lebih dulu (sebelum komponen apa pun), isi dengan data dari Techspec.md §3.
4. Bangun komponen satu per satu sesuai urutan section di Design.md §7 (Navbar → Hero → StatBar → Gallery → Timeline → Competencies → Education → Footer).
5. Setelah semua komponen jadi, jalankan checklist Design.md §9 (aksesibilitas) dan §10 (anti-pattern) sebagai self-review sebelum melapor selesai ke user.
6. Jalankan `next build` lokal untuk memastikan tidak ada error sebelum push/deploy.

## 4. Kapan harus berhenti dan bertanya ke user

- Jika foto profil atau foto dokumentasi magang belum di-supply user dalam format file — **jangan mengarang foto atau mencari foto orang lain dari internet untuk dipasang sebagai representasi Adam.** Gunakan placeholder sesuai Design.md §7.4 dan Techspec.md §6, lalu informasikan ke user bahwa foto asli perlu di-upload manual ke `public/images/`.
- Jika user meminta penambahan section yang tidak ada di PRD.md §6 (misal: blog, sistem komentar, login) — konfirmasi dulu apakah ini scope v1 atau v2, jangan langsung dibangun.
- Jika ada instruksi yang bertentangan dengan Design.md (misal user tiba-tiba minta warna ungu) — itu valid sebagai perubahan produk baru, tapi agent harus update Design.md §2 juga (bukan cuma kode) supaya dokumen tetap jadi sumber kebenaran tunggal.

## 5. Definition of done untuk setiap komponen

Sebuah komponen dianggap selesai jika:
- [ ] Tidak ada data hardcoded — semua dari `content/data.ts`.
- [ ] Responsive di 3 breakpoint (mobile/tablet/desktop) sesuai Design.md §6.
- [ ] Lolos checklist radius (Design.md §4) — dicek manual, bukan diasumsikan.
- [ ] Semua gambar punya `alt` text bermakna (bukan nama file).
- [ ] Tidak memunculkan warning di console browser maupun terminal build.

## 6. Catatan khusus soal foto dokumentasi PERURI

Foto dokumentasi magang berpotensi berisi informasi internal institusi (BUMN). Sebelum foto asli di-upload dan dipublikasikan:
- Ingatkan user (Adam) untuk memastikan tidak ada dokumen internal PERURI yang tampak jelas terbaca di background foto (layar berisi data sensitif, dokumen fisik, dsb.).
- Ingatkan user untuk mengecek kebijakan magang/NDA PERURI terkait publikasi foto tempat kerja sebelum foto tersebut online secara publik.
- Ini bukan keputusan yang bisa diambil agent — cukup flag sebagai reminder ke user, jangan memblokir development karena ini.

## 7. Style guide singkat untuk penulisan commit message (opsional tapi disarankan)

```
feat: add hero section with profile photo slot
feat: add internship documentation gallery with asymmetric grid
fix: correct radius inconsistency in stat bar cells
content: update experience timeline with new PERURI dates
docs: sync Design.md color tokens with tailwind config
```
