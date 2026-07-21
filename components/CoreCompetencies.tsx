"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function CoreCompetencies() {
  const { competencies } = siteContent;

  return (
    <section className="max-w-7xl w-full mx-auto px-6 lg:px-16 pb-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-[20px] lg:text-[22px] font-bold tracking-tight mb-5"
        style={{ color: "var(--color-navy-900)" }}
      >
        Core competencies
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.05 }}
        className="flex flex-wrap gap-[10px]"
      >
        {competencies.map((skill) => (
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
            key={skill}
            className="font-sans text-[11px] font-medium px-4 py-[7px] border transition-colors duration-200 hover:bg-[var(--color-navy-900)] hover:text-white cursor-default"
            style={{
              color: "var(--color-navy-900)",
              borderColor: "var(--color-navy-900)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
