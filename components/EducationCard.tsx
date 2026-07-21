"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function EducationCard() {
  const { education } = siteContent;

  return (
    <section className="max-w-7xl w-full mx-auto px-6 lg:px-16 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-[20px] lg:text-[22px] font-bold tracking-tight mb-5"
        style={{ color: "var(--color-navy-900)" }}
      >
        Education
      </motion.h2>

      {education.map((edu, i) => (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={edu.institution}
          className="border p-5 lg:p-7"
          style={{ borderColor: "var(--color-line)" }}
        >
          {/* Institution and program */}
          <div
            className="font-sans text-[15px] font-bold mb-[2px]"
            style={{ color: "var(--color-navy-900)" }}
          >
            {edu.institution}
          </div>
          <div
            className="font-sans text-[13px] font-medium mb-1"
            style={{ color: "var(--color-muted)" }}
          >
            {edu.program}
          </div>

          {/* GPA and date */}
          <div className="flex flex-wrap gap-4 mt-2 mb-5">
            <span
              className="font-sans text-[11px] font-semibold tracking-[0.03em]"
              style={{ color: "var(--color-muted-2)" }}
            >
              GPA: {edu.gpa}
            </span>
            <span
              className="font-sans text-[11px] font-semibold tracking-[0.03em]"
              style={{ color: "var(--color-muted-2)" }}
            >
              {edu.dateRange}
            </span>
          </div>

          {/* Relevant courses as tags */}
          <div
            className="font-sans text-[10px] font-semibold tracking-[0.05em] uppercase mb-3"
            style={{ color: "var(--color-muted-2)" }}
          >
            Relevant courses
          </div>
          <div className="flex flex-wrap gap-2">
            {edu.courses.map((course) => (
              <span
                key={course}
                className="font-sans text-[10px] px-3 py-[5px] border"
                style={{
                  color: "var(--color-muted)",
                  borderColor: "var(--color-line)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
