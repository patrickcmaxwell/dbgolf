"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowUpRight, Mail, MapPin, X } from "lucide-react";
import { Instagram } from "@/components/icons";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { nav, site } from "@/lib/site";

const overlay: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1], when: "afterChildren", staggerChildren: 0.03, staggerDirection: -1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="menu"
          variants={overlay}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[70] flex flex-col bg-background-dark text-white"
        >
          {/* Ambient blobs */}
          <GradientMesh variant="dark" />
          <div className="grain absolute inset-0" />

          {/* Header row */}
          <motion.div variants={item} className="relative z-10 flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={onClose} aria-label={site.name} className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="DB Golf Coaching"
                width={64}
                height={64}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-accent hover:text-accent"
            >
              <X size={22} />
            </button>
          </motion.div>

          {/* Nav links */}
          <nav className="relative z-10 flex flex-1 flex-col justify-center px-6">
            <ul className="space-y-2">
              {nav.map((n) => (
                <motion.li key={n.href} variants={item}>
                  <Link
                    href={n.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-5 font-display text-5xl tracking-tight transition-colors sm:text-6xl"
                  >
                    <span className="transition-colors group-hover:text-accent">{n.label}</span>
                    <ArrowUpRight
                      size={28}
                      className="text-white/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={item} className="mt-10">
              <a
                href={site.bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-7 py-5 text-base font-semibold text-white shadow-[0_20px_60px_-20px_rgba(168,132,58,0.6)] transition hover:bg-accent-hover sm:w-auto"
              >
                Book a Session
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </nav>

          {/* Contact strip */}
          <motion.div
            variants={item}
            className="relative z-10 border-t border-white/10 px-6 py-6"
          >
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
              <a
                href={`mailto:${site.email}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <Mail size={15} /> {site.email}
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <Instagram size={15} /> @{site.instagram.handle}
              </a>
              <span className="inline-flex items-center gap-2 text-white/60">
                <MapPin size={15} className="text-accent" /> {site.location}
              </span>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/40">
              Developing Players · Driving Performance
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
