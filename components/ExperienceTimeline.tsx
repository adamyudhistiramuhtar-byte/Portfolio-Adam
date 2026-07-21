"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function ExperienceTimeline() {
  const { experience } = siteContent;

  return (
    <section id="experience" className="max-w-7xl w-full mx-auto px-6 lg:px-16 py-10 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-[20px] lg:text-[22px] font-bold tracking-tight mb-7"
        style={{ color: "var(--color-navy-900)" }}
      >
        Professional experience
      </motion.h2>

      <div>
        {experience.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            key={`${item.title}-${item.dateRange}`}
            className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-2 md:gap-6 pb-5 mb-5"
            style={{
              borderBottom:
                index < experience.length - 1
                  ? "1px solid var(--color-line)"
                  : "none",
            }}
          >
            {/* Date column */}
            <div
              className="font-sans text-[11px] font-medium pt-[3px] uppercase"
              style={{ color: "var(--color-muted-2)" }}
            >
              {item.dateRange}
            </div>

            {/* Content column */}
            <div>
              <div
                className="font-sans text-[15px] font-bold mb-1"
                style={{ color: "var(--color-navy-900)" }}
              >
                {item.title}
              </div>
              <div
                className="font-sans text-[11px] font-medium mb-[10px]"
                style={{ color: "var(--color-muted)" }}
              >
                {item.organization}
              </div>
              <p
                className="font-sans text-[13px] leading-[1.75]"
                style={{ color: "var(--color-muted)" }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
