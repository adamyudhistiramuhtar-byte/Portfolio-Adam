import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Yudhistira Muhtar — Quality Assurance Engineer",
  description:
    "Portofolio profesional Adam Yudhistira Muhtar, QA Engineer di PERURI. Pengalaman testing, defect management, dan kepemimpinan organisasi.",
  openGraph: {
    title: "Adam Yudhistira Muhtar — Quality Assurance Engineer",
    description: "Portofolio profesional QA Engineer di PERURI.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
