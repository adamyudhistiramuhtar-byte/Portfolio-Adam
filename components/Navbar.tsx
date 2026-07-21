"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { siteContent } from "@/content/data";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Documentation", href: "#documentation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: "var(--color-line)" }}
    >
      {/* Ensure justify-between is applied on all breakpoints */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-16 flex items-center justify-between py-5">
        {/* Wordmark */}
        <a
          href="#profile"
          className="font-sans text-[13px] font-bold tracking-[0.05em] uppercase text-black"
        >
          Professional Portfolio
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[var(--color-navy-900)]"
              style={{ color: "var(--color-muted-2)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <IconX size={20} color="var(--color-navy-900)" stroke={1.5} />
          ) : (
            <IconMenu2 size={20} color="var(--color-navy-900)" stroke={1.5} />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t px-[var(--space-7)] py-6 bg-white overflow-hidden"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[var(--color-navy-900)]"
                style={{ color: "var(--color-muted-2)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
