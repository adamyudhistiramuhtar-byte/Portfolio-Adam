import type { MetadataRoute } from "next";

// Tambahkan baris ini untuk memberitahu Next.js agar melakukan render statis
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://adamyudhistira.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
