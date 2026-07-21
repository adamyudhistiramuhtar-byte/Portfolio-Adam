"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function StatBar() {
  const { stats } = siteContent;

  return (
    <section aria-label="Key statistics">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 border-b"
          style={{ borderColor: "var(--color-line)" }}
        >
          {stats.map((stat) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              key={stat.label}
              className="px-5 md:px-8 py-6"
            >
              <div
                className="font-sans text-[22px] md:text-[26px] font-bold tracking-tight"
                style={{ color: "var(--color-navy-900)" }}
              >
                {stat.value}
              </div>
              <div
                className="font-sans text-[10px] font-semibold tracking-[0.05em] uppercase mt-1"
                style={{ color: "var(--color-muted-2)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
