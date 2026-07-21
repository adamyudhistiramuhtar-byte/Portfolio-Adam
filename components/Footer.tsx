"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

export default function Footer() {
  const { person } = siteContent;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      {/* Ensure justify-between is applied on all viewports for consistent alignment */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-3">
        {/* Left: License / Location */}
        <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
          <span
            className="font-sans text-[11px] font-medium"
            style={{ color: "var(--color-muted-2)" }}
          >
            {person.location}
          </span>
          <span
            className="font-sans text-[10px] mt-1"
            style={{ color: "var(--color-muted-2)" }}
          >
            © {new Date().getFullYear()} - Personal use only.
          </span>
        </div>

        {/* Right: Contact info + social links */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a
            href={`mailto:${person.email}`}
            className="font-sans text-[11px] font-medium transition-colors duration-200 hover:text-[var(--color-navy-900)]"
            style={{ color: "var(--color-muted-2)" }}
          >
            {person.email}
          </a>
          <span className="font-sans text-[11px]" style={{ color: "var(--color-muted-2)" }}>
            ·
          </span>
          <span
            className="font-sans text-[11px] font-medium"
            style={{ color: "var(--color-muted-2)" }}
          >
            {person.phone}
          </span>
          {person.linkedin && (
            <>
              <span className="font-sans text-[11px]" style={{ color: "var(--color-muted-2)" }}>
                ·
              </span>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] font-medium transition-colors duration-200 hover:text-[var(--color-navy-900)]"
                style={{ color: "var(--color-muted-2)" }}
              >
                LinkedIn
              </a>
            </>
          )}
          {person.github && (
            <>
              <span className="font-sans text-[11px]" style={{ color: "var(--color-muted-2)" }}>
                ·
              </span>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] font-medium transition-colors duration-200 hover:text-[var(--color-navy-900)]"
                style={{ color: "var(--color-muted-2)" }}
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </motion.footer>
  );
}
