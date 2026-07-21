"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function DocumentationGallery() {
  const { internshipGallery } = siteContent;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      id="documentation"
      className="max-w-7xl w-full mx-auto px-6 lg:px-16 pt-12 pb-4 scroll-mt-20"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2 border-b pb-4" style={{ borderColor: "var(--color-line)" }}>
        <h2
          className="font-sans text-[20px] lg:text-[22px] font-bold tracking-tight"
          style={{ color: "var(--color-navy-900)" }}
        >
          Internship documentation
        </h2>
        <div
          className="font-sans text-[10px] font-semibold tracking-[0.05em] uppercase"
          style={{ color: "var(--color-muted-2)" }}
        >
          {internshipGallery.institutionLabel}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
        <div
          className="font-sans text-[14px] font-medium mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Dokumentasi Magang
        </div>
        <div
          className="font-sans text-[12px] tracking-wide uppercase"
          style={{ color: "var(--color-muted-2)" }}
        >
          - Coming Soon -
        </div>
      </div>
    </motion.section>
  );
}
