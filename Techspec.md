# Techspec.md — Technical Specification

## 1. Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG penuh untuk portofolio statis, dukungan native di Vercel, image optimization built-in |
| Bahasa | TypeScript | Type-safety untuk content model, mengurangi error saat Adam edit data sendiri |
| Styling | Tailwind CSS 4 | Utility-first, cepat dipetakan dari Design.md tokens ke config |
| Font | `next/font/google` — Inter (sans) + Source Serif 4 (serif) | Self-hosted otomatis oleh Next.js, tidak ada layout shift |
| Icon | Tabler Icons (`@tabler/icons-react`) | Outline style, konsisten dengan referensi desain |
| Deployment | Vercel | Zero-config untuk Next.js, preview deployment otomatis per PR |
| Image hosting | `next/image` + folder `/public/images` | Optimisasi otomatis (WebP/AVIF), lazy-load native |
| Analytics (opsional) | Vercel Analytics | Satu baris tambahan, tidak butuh setup terpisah |

Tidak ada database, tidak ada CMS, tidak ada backend API di v1. Semua konten adalah file TypeScript statis yang di-build menjadi HTML saat deploy.

## 2. Folder structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout — font, metadata global
│   ├── page.tsx                 # Halaman utama (single-page portfolio)
│   ├── globals.css              # Import Tailwind + CSS variables dari Design.md
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatBar.tsx
│   ├── DocumentationGallery.tsx
│   ├── ExperienceTimeline.tsx
│   ├── CoreCompetencies.tsx
│   ├── EducationCard.tsx
│   └── Footer.tsx
├── content/
│   └── data.ts                  # SUMBER TUNGGAL konten — lihat §3 Content model
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Foto profil (atau profile-placeholder.svg sementara)
│   │   └── internship/
│   │       ├── beta-testing-room.jpg
│   │       ├── daily-standup.jpg
│   │       ├── jira-review.jpg
│   │       ├── badge-handover.jpg
│   │       └── team-photo.jpg
│   └── CV_Adam_Yudhistira_Muhtar.pdf
├── lib/
│   └── utils.ts                 # Helper kecil (cn/classnames merge, dsb.)
├── tailwind.config.ts            # Mapping token dari Design.md
├── next.config.ts
├── tsconfig.json
├── package.json
├── PRD.md
├── Design.md
├── Techspec.md
├── Agent.md
└── README.md
```

## 3. Content model — `content/data.ts`

Ini adalah **satu-satunya file** yang perlu Adam edit untuk update data (tanpa menyentuh komponen). Struktur:

```typescript
// content/data.ts

export interface StatItem {
  value: string;       // "50+", "14", "120%", "3.8"
  label: string;        // "Test cases / cycle"
}

export interface GalleryPhoto {
  src: string;           // path relatif ke /public/images/internship/
  alt: string;            // WAJIB deskriptif
  caption: string;        // teks kecil di bawah/overlay foto
  size: "large" | "medium" | "small"; // menentukan posisi grid, lihat DocumentationGallery.tsx
  radiusVariant?: "default" | "asymmetric"; // default "default"; HANYA SATU foto boleh "asymmetric" (lihat Design.md §4)
}

export interface ExperienceItem {
  dateRange: string;      // "Mar — Jun 2026"
  title: string;           // "Quality Engineer"
  organization: string;    // "PERURI — National state-owned enterprise, Jakarta"
  description: string;     // paragraf ringkas, maks ~280 karakter
  category: "professional" | "leadership";
}

export interface EducationItem {
  institution: string;
  program: string;
  gpa: string;
  dateRange: string;
  courses: string[];       // ditampilkan sebagai tag kecil
}

export interface SiteContent {
  person: {
    name: string;
    role: string;           // eyebrow label, mis. "Quality Assurance Engineer"
    location: string;
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
  };
  hero: {
    headline: string;
    summary: string;
    profilePhoto: {
      src: string;
      alt: string;
    };
  };
  stats: StatItem[];
  internshipGallery: {
    institutionLabel: string;  // "PERURI · MAR–JUN 2026"
    photos: GalleryPhoto[];
    isPlaceholder: boolean;     // true jika foto masih placeholder — kontrol tampil/hilangnya catatan di UI
  };
  experience: ExperienceItem[];
  competencies: string[];
  education: EducationItem[];
}

export const siteContent: SiteContent = {
  person: {
    name: "Adam Yudhistira Muhtar",
    role: "Quality Assurance Engineer",
    location: "Cikarang, West Java, Indonesia",
    email: "adamyudhistiramuhtar@gmail.com",
    phone: "+62 821-1236-6831",
  },
  hero: {
    headline: "Precision in every release, clarity in every report.",
    summary:
      "Junior QA Engineer at PERURI, Indonesia's national currency authority — 50+ test cases and 15+ documented defects per release cycle, with zero-ambiguity Jira reporting that shortens development triage time.",
    profilePhoto: {
      src: "/images/profile.jpg",
      alt: "Foto profil Adam Yudhistira Muhtar, Quality Assurance Engineer",
    },
  },
  stats: [
    { value: "50+", label: "Test cases / cycle" },
    { value: "14", label: "Team members led" },
    { value: "120%", label: "MoM impression growth" },
    { value: "3.8", label: "GPA / 4.0" },
  ],
  internshipGallery: {
    institutionLabel: "PERURI · MAR–JUN 2026",
    isPlaceholder: true, // ganti ke false setelah semua foto asli di-upload
    photos: [
      {
        src: "/images/internship/beta-testing-room.jpg",
        alt: "Ruang kerja testing beta environment di PERURI",
        caption: "Ruang testing beta environment",
        size: "large",
      },
      {
        src: "/images/internship/daily-standup.jpg",
        alt: "Sesi daily standup tim QA PERURI",
        caption: "Sesi daily standup QA",
        size: "medium",
        radiusVariant: "asymmetric",
      },
      {
        src: "/images/internship/jira-review.jpg",
        alt: "Dokumentasi review tiket Jira",
        caption: "Dokumentasi Jira review",
        size: "small",
      },
      {
        src: "/images/internship/badge-handover.jpg",
        alt: "Serah terima badge magang PERURI",
        caption: "Serah terima badge PERURI",
        size: "small",
      },
      {
        src: "/images/internship/team-photo.jpg",
        alt: "Foto bersama tim QA PERURI",
        caption: "Foto bersama tim QA PERURI",
        size: "medium",
      },
    ],
  },
  experience: [
    {
      dateRange: "Mar — Jun 2026",
      title: "Quality Engineer",
      organization: "PERURI — National state-owned enterprise, Jakarta",
      description:
        "Maintained pre-release stability by executing 50+ structured test cases and 20+ scenarios per biweekly deployment cycle. Documented 15+ Jira issues with full reproduction steps and severity classification. Established the API automation testing environment foundation.",
      category: "professional",
    },
    {
      dateRange: "Dec 2025 — Present",
      title: "Commission IV Coordinator",
      organization: "Dewan Perwakilan Mahasiswa, Telkom University Jakarta",
      description:
        "Directed a 14-member team across three subdivisions with defined workflow standards, reducing documentation inconsistencies across institutional reports and advocacy programs.",
      category: "leadership",
    },
    // Tambahkan entry lain dari CV (Creative Media Coordinator, Head of Creative Division, dst.)
    // sesuai kebutuhan tanpa mengubah interface.
  ],
  competencies: [
    "Functional testing",
    "Regression testing",
    "Jira defect tracking",
    "Test case design",
    "Selenium WebDriver",
    "Git",
  ],
  education: [
    {
      institution: "Telkom University Jakarta",
      program: "Bachelor of Information Systems",
      gpa: "3.8 / 4.0",
      dateRange: "Sep 2023 — Present",
      courses: [
        "Software Testing Fundamentals",
        "Systems Analysis & Design",
        "Database Management",
        "Computer Networking",
        "Object-Oriented Programming",
        "UI/UX Design Principles",
      ],
    },
  ],
};
```

**Aturan editing untuk Adam (non-developer):**
- Jangan hapus tanda kurung `{ }` atau koma di akhir baris.
- Untuk tambah pengalaman baru, copy satu blok `{ ... }` di dalam array `experience`, ubah isinya, tambahkan koma sebelum `]` penutup.
- Untuk ganti foto: taruh file baru di `public/images/internship/`, update `src` di `data.ts` agar path-nya cocok persis (nama file case-sensitive).
- Setelah semua foto asli di-upload, ubah `isPlaceholder: true` menjadi `isPlaceholder: false`.

## 4. Tailwind config mapping (dari Design.md tokens)

```typescript
// tailwind.config.ts (potongan relevan)
export default {
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        navy: {
          900: "#0A1F3D",
          700: "#123059",
          400: "#85B7EB",
          100: "#E6F1FB",
        },
        paper: "#FAFAF8",
        line: "#E4E2DA",
        muted: {
          DEFAULT: "#6B6960",
          2: "#8A8778",
        },
        placeholder: {
          bg: "#EFEDE5",
          fg: "#A8A594",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        sharp: "2px",     // tombol, foto standar, overlay caption
        pill: "999px",    // tag skill
        asym: "50% / 8%", // SATU foto dokumentasi saja
      },
      spacing: {
        // ikuti skala --space-1 s.d. --space-9 di Design.md jika perlu override default Tailwind
      },
    },
  },
} satisfies import("tailwindcss").Config;
```

## 5. Komponen — kontrak singkat

| Komponen | Props utama | Catatan implementasi |
|---|---|---|
| `Navbar` | `personName: string` | Sticky top, hamburger di mobile (state lokal `useState`, tanpa library tambahan) |
| `Hero` | `hero: SiteContent["hero"], person: SiteContent["person"]` | Grid `lg:grid-cols-[1.1fr_0.9fr]`, stack di mobile |
| `StatBar` | `stats: StatItem[]` | Grid 4 kolom desktop, 2x2 mobile (`grid-cols-2 md:grid-cols-4`) |
| `DocumentationGallery` | `gallery: SiteContent["internshipGallery"]` | Render placeholder note jika `isPlaceholder === true`; gunakan `size` untuk `col-span`/`row-span` sesuai layout Design.md §6; terapkan `radiusVariant` hanya pada foto yang ditandai |
| `ExperienceTimeline` | `items: ExperienceItem[]` | Filter/urutkan berdasarkan `category` jika ingin section terpisah "Professional" vs "Leadership" |
| `CoreCompetencies` | `items: string[]` | Render sebagai list tag pill |
| `EducationCard` | `items: EducationItem[]` | Courses sebagai tag kecil, bukan bullet list panjang |
| `Footer` | `person: SiteContent["person"]` | Layout row desktop, stack mobile |

Semua komponen adalah **Server Component** (default Next.js App Router) kecuali yang butuh interaktivitas (`Navbar` hamburger state) — tandai eksplisit dengan `"use client"` hanya di file yang perlu.

## 6. Image handling

- Semua foto wajib lewat `next/image` (bukan `<img>` biasa) untuk lazy-load dan optimisasi otomatis.
- Foto profil dan galeri dokumentasi: set `sizes` prop sesuai breakpoint agar tidak over-fetch di mobile.
- Selama foto asli belum ada, buat file placeholder SVG sederhana (background `#EFEDE5`, ikon outline) di `public/images/` dengan nama yang sama persis seperti di `data.ts`, supaya build tidak error karena file hilang.

```tsx
import Image from "next/image";

<Image
  src={photo.src}
  alt={photo.alt}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className={cn(
    "object-cover",
    photo.radiusVariant === "asymmetric" ? "rounded-asym" : "rounded-sharp"
  )}
/>
```

## 7. Metadata & SEO

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Adam Yudhistira Muhtar — Quality Assurance Engineer",
  description:
    "Portofolio profesional Adam Yudhistira Muhtar, QA Engineer di PERURI. Pengalaman testing, defect management, dan kepemimpinan organisasi.",
  openGraph: {
    title: "Adam Yudhistira Muhtar — Quality Assurance Engineer",
    description: "Portofolio profesional QA Engineer di PERURI.",
    images: ["/images/og-image.jpg"], // buat 1200x630 khusus, bukan crop foto profil
    locale: "id_ID",
    type: "website",
  },
};
```

- Tambahkan `app/sitemap.ts` dan `app/robots.ts` bawaan Next.js (generator built-in, tidak perlu library tambahan).

## 8. Performance checklist sebelum deploy

- [ ] `next build` tanpa warning ukuran bundle berlebih.
- [ ] Semua foto di bawah 300KB setelah kompresi (gunakan `next/image` otomatis, tapi source file juga sebaiknya sudah dikompres/di-resize sebelum upload).
- [ ] Font di-load via `next/font` (bukan `<link>` manual ke Google Fonts — itu bikin render-blocking).
- [ ] Cek Lighthouse lokal (`npx lighthouse http://localhost:3000 --view`) sebelum push.

## 9. Deployment ke Vercel

### 9.1 Persiapan repo
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir
cd portfolio
npm install @tabler/icons-react
```
Lalu susun ulang struktur folder sesuai §2, pindahkan konten dari dokumen ini ke file yang sesuai.

### 9.2 Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit: portfolio skeleton"
git branch -M main
git remote add origin https://github.com/<username>/portfolio.git
git push -u origin main
```

### 9.3 Deploy via Vercel
1. Buka [vercel.com](https://vercel.com), login dengan akun GitHub.
2. Klik **Add New → Project**, pilih repo `portfolio`.
3. Framework preset otomatis terdeteksi sebagai **Next.js** — biarkan default (build command `next build`, output otomatis).
4. Tidak ada environment variable yang wajib untuk v1 (tidak ada API key/database).
5. Klik **Deploy**. Vercel akan memberi URL `https://<nama-project>.vercel.app`.

### 9.4 Custom domain (opsional)
1. Di dashboard project Vercel → **Settings → Domains**.
2. Masukkan domain yang sudah dibeli (mis. `adamym.dev`).
3. Ikuti instruksi Vercel untuk update DNS record (biasanya `CNAME` atau `A` record) di registrar domain.
4. Tunggu propagasi DNS (bisa sampai 24 jam), Vercel otomatis provision SSL certificate.

### 9.5 Continuous deployment
Setiap `git push` ke branch `main` otomatis trigger deployment baru. Push ke branch lain otomatis membuat **Preview Deployment** dengan URL unik — berguna untuk cek perubahan sebelum merge ke `main`.

## 10. Testing checklist sebelum go-live

- [ ] Semua breakpoint (mobile 375px, tablet 768px, desktop 1440px) diperiksa manual di Chrome DevTools.
- [ ] Tombol "Download CV" benar-benar mengunduh file, bukan 404.
- [ ] Semua link eksternal (LinkedIn, GitHub) buka tab baru dan mengarah ke URL yang benar.
- [ ] `alt` text tidak ada yang kosong (cek dengan axe DevTools extension atau Lighthouse Accessibility audit).
- [ ] Cek di perangkat mobile fisik (bukan cuma emulator) minimal sekali sebelum share link ke rekruter.
