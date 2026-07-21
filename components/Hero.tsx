"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/content/data";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { person, hero } = siteContent;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      id="profile"
      className="border-b scroll-mt-20 flex"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] border-t" style={{ borderColor: "var(--color-line)" }}>
          {/* Left — Text content */}
          <div className="px-6 lg:px-16 py-12 lg:py-24 flex flex-col justify-center">
            {/* Eyebrow label */}
            <motion.div
              variants={fadeUpVariant}
              className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase mb-[22px]"
              style={{ color: "var(--color-navy-900)" }}
            >
              {person.role}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-sans font-bold text-[32px] lg:text-[46px] leading-[1.15] mb-8 max-w-[600px] tracking-tight"
              style={{ color: "var(--color-navy-900)" }}
            >
              {hero.headline}
            </motion.h1>

            {/* Summary */}
            <motion.p
              variants={fadeUpVariant}
              className="font-sans text-[15px] leading-[1.8] max-w-[540px] mb-[40px]"
              style={{ color: "var(--color-muted)" }}
            >
              {hero.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpVariant} className="flex gap-[14px] items-center flex-wrap">
              <a
                href="/CV_Adam_Yudhistira_Muhtar.pdf"
                download
                className="inline-block font-sans text-[11px] font-semibold tracking-[0.05em] uppercase px-[26px] py-[13px] transition-all duration-300 bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-navy-700)] hover:-translate-y-[2px]"
                style={{
                  borderRadius: "var(--radius-sharp)",
                }}
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="font-sans text-[11px] font-medium pb-[2px] border-b transition-colors duration-200 hover:text-[var(--color-navy-900)]"
                style={{
                  color: "var(--color-muted)",
                  borderColor: "var(--color-navy-900)",
                }}
              >
                Contact →
              </a>
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full min-h-[480px] lg:min-h-full border-t lg:border-t-0 lg:border-l bg-[var(--color-placeholder-bg)]"
            style={{ borderColor: "var(--color-line)" }}
          >
            <Image
              src={hero.profilePhoto.src}
              alt={hero.profilePhoto.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-top"
              priority
            />

            {/* Overlay caption badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col px-6 py-3 backdrop-blur-md border items-center text-center whitespace-nowrap"
              style={{
                backgroundColor: "var(--color-overlay-navy)",
                borderColor: "rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-sharp)",
              }}
            >
              <div className="font-sans text-[12px] tracking-wide font-semibold text-white">
                {person.name}
              </div>
              <div
                className="font-sans text-[11px] mt-[2px] font-medium"
                style={{ color: "var(--color-overlay-text)" }}
              >
                {person.location}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
