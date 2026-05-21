"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { site, testimonials } from "@/lib/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 9000);
    return () => clearInterval(id);
  }, [total]);

  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative rounded-3xl border border-line bg-background-2 p-10 lg:p-14">
        <Quote className="absolute -top-5 left-10 h-10 w-10 text-accent-deep" strokeWidth={1.5} />

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.22em] text-accent-deep">
                — {t.name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-accent-deep" : "w-3 bg-foreground/15 hover:bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="rounded-full border border-line p-2 text-foreground/60 transition hover:border-accent-deep hover:text-accent-deep"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % total)}
              className="rounded-full border border-line p-2 text-foreground/60 transition hover:border-accent-deep hover:text-accent-deep"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href={site.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground-muted transition hover:text-accent-deep"
        >
          Read all reviews on Google <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
