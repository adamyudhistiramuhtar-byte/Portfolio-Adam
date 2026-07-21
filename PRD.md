# PRD — Adam Yudhistira Muhtar Corporate Portfolio

| | |
|---|---|
| Status | Draft v1.0 |
| Owner | Adam Yudhistira Muhtar |
| Target platform | Web (desktop-first, fully responsive) |
| Deploy target | Vercel |
| Last updated | 2026-07-21 |

## 1. Background

Adam adalah Quality Assurance Engineer (magang di PERURI, BUMN percetakan uang RI) sekaligus pemimpin organisasi mahasiswa aktif di Telkom University Jakarta. CV berbasis PDF saat ini cukup untuk lamaran formal, tapi tidak punya kanal untuk menunjukkan bukti visual pekerjaan (dokumentasi magang, konteks kepemimpinan tim) atau kesan profesionalitas jangka panjang yang bisa dibagikan sebagai satu tautan (LinkedIn, email lamaran, kartu nama digital).

## 2. Problem statement

Rekruter dan kolega meninjau kandidat dalam hitungan detik. Dokumen PDF statis tidak mengomunikasikan seniority visual atau kredibilitas selevel institusi (PERURI adalah BUMN nasional) secepat sebuah situs web yang dirancang dengan baik. Adam butuh satu portofolio digital yang terasa "premium" — setara situs korporat institusi finansial/BUMN — bukan template portofolio developer generik.

## 3. Goals

1. Menyediakan satu URL kanonis (`adamyudhistira.vercel.app` atau domain custom) yang merangkum profil, pengalaman, dan bukti kerja Adam.
2. Menegaskan positioning sebagai QA Engineer yang presisi dan terstruktur — tone visual navy/putih, bukan playful atau penuh warna.
3. Menyertakan bukti visual (foto profil, galeri dokumentasi magang PERURI) yang memperkuat klaim di CV.
4. Mudah di-maintain oleh Adam sendiri (non-developer setelah build awal) untuk update data, foto, dan pengalaman baru.
5. Performa dan aksesibilitas kelas produksi — bukan sekadar mockup statis.

## 4. Non-goals

- Bukan CMS multi-user atau blog dengan sistem komentar.
- Tidak ada sistem autentikasi/login untuk publik.
- Tidak ada e-commerce, pembayaran, atau formulir yang menyimpan data sensitif pihak ketiga.
- Bukan portofolio multi-bahasa penuh di v1 (Bahasa Indonesia sebagai bahasa utama; Inggris opsional di roadmap).
- Tidak menargetkan native mobile app.

## 5. Target audience

| Audience | Kebutuhan |
|---|---|
| Rekruter / HR BUMN & korporat | Scan cepat: peran, institusi, pencapaian terukur (angka) |
| Dosen / pembimbing akademik | Validasi kredibilitas organisasi dan akademik |
| Kolega/tim organisasi kampus (DPM, e-sports) | Referensi kepemimpinan dan hasil kerja tim |
| Adam sendiri | Update konten tanpa perlu developer setiap saat |

## 6. Scope — sections (v1)

| # | Section | Sumber data | Prioritas |
|---|---|---|---|
| 1 | Navigation bar | Statis | Must |
| 2 | Hero (foto profil, headline, ringkasan, CTA) | CV summary | Must |
| 3 | Stat bar (4 angka kunci) | CV metrics | Must |
| 4 | Internship documentation gallery (PERURI) | Foto upload manual | Must |
| 5 | Professional experience (timeline) | CV — PERURI + organisasi | Must |
| 6 | Organizational leadership | CV — DPM, e-sports, dll | Should |
| 7 | Core competencies (skill tags) | CV — technical competencies | Must |
| 8 | Education | CV — Bachelor of Information Systems | Should |
| 9 | Contact / footer | CV contact info | Must |
| 10 | Testimonial (opsional, kosong dulu) | Manual input nanti | Could (v2) |

## 7. Functional requirements

- FR1: Semua konten (pengalaman, statistik, skill) didefinisikan dalam satu file data terstruktur (lihat `Techspec.md` §Content model) agar Adam bisa edit tanpa menyentuh komponen UI.
- FR2: Galeri dokumentasi magang menampilkan minimal 5 foto dalam grid asimetris (bukan grid seragam 1:1 semua kotak).
- FR3: Foto profil di hero wajib punya alt text deskriptif untuk aksesibilitas.
- FR4: Tombol "Download CV" mengunduh file PDF asli (CV_Adam_Yudhistira_Muhtar.pdf) dari `/public`.
- FR5: Semua tautan eksternal (LinkedIn, GitHub, email) membuka di tab baru dengan `rel="noopener noreferrer"`.
- FR6: Situs harus tetap fungsional dan terbaca meski JavaScript gagal dimuat (progressive enhancement pada teks dan gambar inti).
- FR7: Section galeri dokumentasi dan foto lain di-lazy-load agar tidak membebani initial load.
- FR8: Form kontak (jika ada di v2) tidak menyimpan data ke database pihak ketiga tanpa consent eksplisit; v1 cukup `mailto:` link.

## 8. Non-functional requirements

| Kategori | Target |
|---|---|
| Performance | Lighthouse Performance ≥ 90 (mobile), LCP < 2.5s |
| Accessibility | Lighthouse Accessibility ≥ 95, kontras WCAG AA minimum |
| SEO | Meta title/description per halaman, Open Graph image, `sitemap.xml` |
| Responsiveness | Breakpoint mobile (< 640px), tablet (640–1024px), desktop (> 1024px) tanpa horizontal scroll |
| Browser support | 2 versi terbaru Chrome, Safari, Firefox, Edge |
| Uptime | Bergantung pada Vercel SLA (tidak perlu custom monitoring di v1) |

## 9. Design direction (ringkas — detail di Design.md)

- Palet: **primary putih (`#FFFFFF`), secondary deep navy blue (`#0A1F3D`)**. Tidak ada warna aksen ketiga (cokelat/tanah dihapus dari eksplorasi sebelumnya) — ini keputusan final.
- Gaya: editorial/global-corporate, bukan template developer-portfolio generik. Referensi: situs korporat institusi finansial dan arsitektur premium (whitespace besar, tipografi serif untuk headline, radius bervariasi bukan seragam).
- Tidak ada gradient, tidak ada bayangan tebal/neon, tidak ada dark mode gaudy.

## 10. Success metrics

- Portofolio dapat diakses publik via Vercel dalam waktu < 1 minggu development.
- Skor Lighthouse memenuhi target di §8 saat pertama deploy.
- Adam dapat mengganti foto/teks tanpa bantuan developer (validasi: Adam berhasil edit `content.ts` dan foto sendiri).
- Digunakan minimal dalam 1 proses lamaran kerja/magang berikutnya sebagai link utama.

## 11. Risks and mitigations

| Risiko | Mitigasi |
|---|---|
| Foto dokumentasi magang belum tersedia saat build | Gunakan placeholder bergaya editorial (bukan stok foto acak) sampai foto asli di-upload; struktur data sudah siap menerima path foto |
| Desain jatuh ke "template AI generic" (rounded seragam, dsb.) | Lihat aturan eksplisit di Design.md §Anti-pattern checklist |
| Data CV berubah (pengalaman baru) | Struktur `content.ts` terpisah dari komponen — lihat Techspec.md |
| Overbuild untuk kebutuhan sederhana | Tetap Next.js App Router statis (SSG), tanpa backend/database di v1 |

## 12. Rollout plan

1. **Fase 1** — Setup repo, struktur folder, data model, deploy skeleton kosong ke Vercel (validasi pipeline).
2. **Fase 2** — Bangun semua section sesuai Design.md, isi dengan data CV asli.
3. **Fase 3** — Ganti placeholder foto dengan foto asli Adam, uji Lighthouse dan aksesibilitas.
4. **Fase 4** — Custom domain (opsional), submit sitemap, final QA lintas perangkat.

## 13. Open questions

- Apakah Adam ingin domain custom (misal `adamym.dev`) atau cukup subdomain `.vercel.app`?
- Apakah versi Bahasa Inggris dibutuhkan untuk lamaran ke perusahaan multinasional?
- Apakah testimoni dari atasan PERURI/dosen akan diminta untuk v2?
