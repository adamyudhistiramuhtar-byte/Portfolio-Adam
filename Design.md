# Design.md — Visual & UX Specification

Dokumen ini adalah sumber kebenaran tunggal untuk keputusan visual. Setiap developer atau AI coding agent yang membangun UI **wajib** mengikuti token dan aturan di sini — jangan menebak warna atau spacing dari komponen lain.

## 1. Design principles

1. **Institutional, bukan playful.** Referensi: situs korporat institusi finansial dan BUMN — bukan portofolio developer dengan emoji/gradient/dark neon.
2. **Satu focal point per layar.** Jangan membebani satu section dengan lebih dari satu elemen dominan (riset: prinsip luxury web design — "nothing competes for attention").
3. **Whitespace adalah fitur, bukan ruang kosong yang harus diisi.** Margin besar itu disengaja.
4. **Radius bervariasi dengan sengaja, bukan seragam.** Ini pembeda utama dari tampilan "AI-generated template". Lihat §4.
5. **Dua suara tipografi:** sans-serif untuk UI/navigasi/label, serif untuk headline dan angka statistik besar.

## 2. Color palette — FINAL, tidak berubah

> **Keputusan produk:** palet adalah **primary putih, secondary deep navy blue**. Tidak ada warna aksen ketiga. Eksplorasi warna tanah/cokelat pada iterasi sebelumnya **dihapus** — jangan gunakan lagi.

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-white` | `#FFFFFF` | Primary background, teks di atas navy |
| `--color-navy-900` | `#0A1F3D` | Secondary — hero background, heading text, border aksen, tombol primary |
| `--color-navy-700` | `#123059` | Hover state elemen navy |
| `--color-navy-100` | `#E6F1FB` | Fill halus badge/tag (opsional, dipakai sangat jarang) |
| `--color-navy-400` | `#85B7EB` | Border/underline tipis pada elemen di atas navy gelap |
| `--color-ink` | `#0A1F3D` | Alias teks utama (sama dengan navy-900, dipakai sebagai warna teks bukan background) |
| `--color-paper` | `#FAFAF8` | Background section alternatif (bukan putih murni, sedikit warm off-white — bukan abu-abu generik) |
| `--color-line` | `#E4E2DA` | Border/divider tipis di atas paper/putih |
| `--color-muted` | `#6B6960` | Body text sekunder |
| `--color-muted-2` | `#8A8778` | Label kecil, metadata, caption |
| `--color-placeholder-bg` | `#EFEDE5` | Background placeholder foto sebelum foto asli di-upload |
| `--color-placeholder-fg` | `#A8A594` | Ikon/teks di atas placeholder foto |

**Aturan pemakaian:**
- Tidak ada gradient di mana pun. Semua fill solid.
- Navy dipakai sebagai *background* hanya di hero dan CTA button — bukan di seluruh section (akan terasa berat/gelap secara keseluruhan).
- Kontras teks wajib AA minimum: teks `muted` (`#6B6960`) di atas putih = rasio ~5.4:1 (lolos AA); jangan turunkan opacity untuk membuat teks lebih pudar dari itu.

## 3. Typography

| Role | Font | Fallback stack |
|---|---|---|
| Sans (UI, nav, body kecil, label) | Inter | `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Serif (headline, angka statistik, judul section) | Source Serif 4 (atau Newsreader sebagai alternatif) | `Georgia, "Times New Roman", serif` |

| Elemen | Font | Size (desktop) | Size (mobile) | Weight | Letter-spacing |
|---|---|---|---|---|---|
| Hero headline | Serif | 40px | 28px | 400 | normal |
| Section heading (h2) | Serif | 22px | 20px | 400 | normal |
| Nav logo/wordmark | Sans | 13px | 12px | 500 | 0.12em |
| Nav links | Sans | 11px | — (hidden, hamburger di mobile) | 400 | 0.04em |
| Eyebrow label (mis. "QUALITY ASSURANCE ENGINEER") | Sans | 11px | 10px | 500 | 0.1em, uppercase |
| Body paragraf | Sans | 13–14px | 13px | 400 | normal, line-height 1.75–1.8 |
| Statistik angka besar | Serif | 26px | 22px | 400 | normal |
| Label statistik | Sans | 10px | 10px | 500 | 0.03em, uppercase |
| Caption foto/metadata | Sans | 9–10px | 9px | 400 | 0.06em, uppercase |

**Aturan tipografi:**
- Hanya dua weight per family: 400 (regular) dan 500 (medium). Jangan pakai 600/700 — terasa berat dan generik.
- Sentence case untuk semua body text dan tombol. Uppercase hanya untuk label/eyebrow kecil (dengan letter-spacing lebar, bukan uppercase rapat).
- Jangan bold di tengah kalimat untuk penekanan; gunakan warna (`navy-900` vs `muted`) atau ukuran untuk hierarki.

## 4. Radius system — WAJIB DIBACA (anti "AI-generated" checklist)

Masalah dari iterasi sebelumnya: radius seragam (semua 0px kotak polos, atau semua 12px rounded) langsung terbaca sebagai output default AI. Solusi: **radius berbeda per jenis elemen, mengikuti fungsinya**, bukan satu angka yang di-copy-paste ke semua tempat.

| Elemen | Radius | Alasan |
|---|---|---|
| Tombol primary/secondary | `2px` | Nyaris tajam — gaya institutional/luxury (referensi: Dior, Ritz-Carlton menggunakan sudut nyaris lurus) |
| Card/panel besar (stat bar cell, experience block) | `0px` (tidak ada radius, hanya border/divider) | Card besar di layout editorial korporat biasanya kotak penuh, radius ada di elemen kecil di dalamnya, bukan di container besar |
| Foto dokumentasi (mayoritas) | `2px` | Konsisten dengan tombol |
| **Satu** foto dokumentasi di posisi kedua grid | `50% / 8%` (elliptical asymmetric) | Sengaja beda — inilah yang menghindarkan kesan "grid AI seragam". Jangan diterapkan ke semua foto, hanya 1 dari 5 foto dalam galeri. |
| Tag skill (pill) | `999px` (full pill) | Pill penuh untuk badge/tag adalah konvensi UI yang valid dan tetap terasa disengaja karena kontras dengan tombol yang nyaris tajam |
| Overlay caption di atas foto hero | `2px` | Konsisten dengan tombol |
| Avatar/foto profil kecil (jika dipakai di card testimoni v2) | `50%` (lingkaran penuh) | Standar untuk foto orang berukuran kecil |

**Aturan keras:** jangan gunakan angka radius yang sama (misal 8px atau 12px) di lebih dari 3 jenis elemen berbeda dalam satu halaman. Variasi radius terbatas namun disengaja adalah ciri desain yang dirancang manusia, bukan template.

## 5. Spacing scale

Gunakan skala berikut (kelipatan tidak linear disengaja — spacing besar untuk section, kecil untuk elemen internal):

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 40px
--space-8: 56px
--space-9: 80px
```

- Padding horizontal section (desktop): `40px` (`--space-7`)
- Padding horizontal section (mobile): `20px`
- Jarak antar section vertikal: `56–80px` (`--space-8` / `--space-9`)
- Gap dalam grid galeri foto: `12px` (`--space-3`)

## 6. Layout grid

- Container max-width: `1200px`, center-aligned.
- Hero: grid 2 kolom asimetris `1.1fr / 0.9fr` di desktop, stack 1 kolom di mobile (teks dulu, lalu foto).
- Stat bar: 4 kolom sama lebar dengan divider vertikal tipis (`1px solid --color-line`), collapse jadi 2x2 di mobile.
- Galeri dokumentasi: grid asimetris —
  - Baris 1: `1.4fr / 1fr` (foto besar + foto sedang)
  - Baris 2: `1fr / 1fr / 1.4fr` (dua foto kecil + satu sedang)
  - Mobile: stack 1 kolom, urutan tetap sama, tinggi foto proporsional diperkecil.
- Timeline pengalaman: grid `130px / 1fr` (kolom tanggal + kolom konten), mobile stack dengan tanggal di atas konten.

## 7. Section-by-section spec

### 7.1 Navigation bar
- Sticky di top, background putih dengan `border-bottom: 1px solid --color-line`.
- Kiri: wordmark nama (sans, 13px, letter-spacing 0.12em, warna navy-900).
- Kanan (desktop): 4 link teks (Profile, Experience, Documentation, Contact), 11px, warna muted-2, hover ke navy-900.
- Mobile: link disembunyikan, ganti hamburger icon (`ti-menu-2`) yang membuka drawer/overlay sederhana.

### 7.2 Hero
- Background kiri: putih. Background kanan: `--color-placeholder-bg` (nanti diganti foto asli).
- Kiri: eyebrow label → headline serif 40px → paragraf ringkasan (maks 3 baris) → 2 CTA (tombol navy solid "Download CV" + text-link underline "Contact").
- Kanan: foto profil rasio 4:5, object-fit cover, dengan overlay caption nama + lokasi di pojok kiri-bawah foto (background `rgba(10,31,61,0.88)`, teks putih).
- **Alt text wajib**: `"Foto profil Adam Yudhistira Muhtar, Quality Assurance Engineer"`.

### 7.3 Stat bar
- 4 angka dari CV: `50+` test cases/cycle, `14` team members led, `120%` MoM impression growth, `3.8` GPA/4.0.
- Setiap sel: angka serif 26px (navy-900) di atas, label sans 10px uppercase (muted-2) di bawah.
- Border-right tipis antar sel (kecuali sel terakhir).

### 7.4 Internship documentation gallery
- Heading section (serif 22px) + label kanan "PERURI · MAR–JUN 2026" (sans 10px, muted-2, letter-spacing).
- Grid sesuai §6. Setiap foto: `object-fit: cover`, radius sesuai §4, hover state subtle (scale 1.02, transition 200ms — opsional, tidak wajib).
- Jika foto asli belum ada: tampilkan `--color-placeholder-bg` dengan ikon `ti-photo` dan caption deskriptif (contoh: "Ruang testing beta environment"), plus catatan kecil di bawah grid: *"Placeholder — ganti dengan foto dokumentasi asli."* Catatan ini **wajib dihapus** begitu foto asli di-upload.
- Struktur data captions ada di `content.ts` — lihat Techspec.md §Content model, field `internshipGallery`.

### 7.5 Professional experience (timeline)
- Setiap entry: kolom tanggal (sans 11px, muted-2) + kolom konten (judul posisi sans 15px medium navy-900, institusi sans 11px, deskripsi sans 13px muted, line-height 1.75).
- Divider `border-bottom: 1px solid --color-line` antar entry, kecuali entry terakhir.
- Urutan: PERURI dulu (paling relevan untuk rekruter industri), lalu leadership organisasi.

### 7.6 Organizational leadership (Should-have, v1 boleh gabung ke timeline yang sama dengan visual differentiation minor, atau section terpisah — keputusan dev, tidak mengubah data model)

### 7.7 Core competencies
- Heading serif 22px + baris tag pill (border `1px solid navy-900`, radius 999px, teks navy-900, background transparent — bukan filled, supaya tetap ringan).

### 7.8 Education
- Card sederhana: nama institusi, program studi, GPA, rentang tahun, mata kuliah relevan (bisa dalam bentuk tag kecil, bukan paragraf panjang).

### 7.9 Footer/contact
- Background putih, `border-top: 1px solid --color-line`.
- Kiri: lokasi ("Cikarang, West Java, Indonesia"). Kanan: email + nomor telepon. Mobile: stack, center-align.

## 8. Imagery guidelines

- Foto profil: professional headshot, pencahayaan natural, latar netral (bukan studio putih polos generik, tapi juga bukan foto candid santai). Rasio 4:5 potrait.
- Foto dokumentasi magang: variasi shot — 1 wide shot (ruang kerja/testing environment), 2–3 medium shot (aktivitas standup, review Jira), 1 group/portrait shot (tim QA atau momen serah terima). Hindari foto blur, pencahayaan gelap, atau selfie kualitas rendah — ini portofolio institusional, bukan media sosial pribadi.
- Semua foto dokumentasi harus punya izin dari PERURI untuk dipublikasikan (cek kebijakan internal/NDA magang sebelum upload — lihat catatan di README.md §Sebelum deploy).

## 9. Accessibility checklist

- [ ] Semua `<img>` punya `alt` deskriptif (bukan "foto1.jpg" atau kosong).
- [ ] Kontras teks minimum AA (4.5:1 untuk body, 3:1 untuk teks besar ≥ 24px).
- [ ] Navigasi keyboard: semua link dan tombol reachable via Tab, focus state terlihat jelas (ring 2px `--color-navy-400`).
- [ ] `prefers-reduced-motion` dihormati — matikan hover-scale/transition jika user set reduce motion di OS.
- [ ] Heading hierarchy logis: satu `<h1>` (hero headline), `<h2>` per section, tidak lompat level.

## 10. Anti-pattern checklist — hal yang HARUS dihindari

Ini daftar eksplisit hasil evaluasi iterasi sebelumnya. AI coding agent atau developer wajib cek ulang sebelum menganggap build selesai:

- [ ] Tidak ada radius seragam di semua elemen (lihat §4).
- [ ] Tidak ada gradient di background mana pun.
- [ ] Tidak ada drop-shadow tebal/neon/glow.
- [ ] Tidak ada warna ketiga selain putih dan navy (kecuali warna netral fungsional: `muted`, `line`, `placeholder`).
- [ ] Tidak ada grid foto yang seluruhnya seragam ukuran (harus asimetris, lihat §6).
- [ ] Tidak ada font-weight 600/700.
- [ ] Tidak ada ALL CAPS pada body text panjang (hanya label pendek).
- [ ] Layout hero tidak stack lurus simetris — harus asimetris 1.1fr/0.9fr di desktop.
