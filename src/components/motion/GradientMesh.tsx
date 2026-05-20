"use client";

import { motion } from "motion/react";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Slow, drifting blob mesh — used as ambient background motion on dark or
 * light banners. Tasteful; the blobs are heavily blurred and low-opacity.
 */
export function GradientMesh({ variant = "dark", className }: Props) {
  const blobs =
    variant === "dark"
      ? [
          { c: "rgba(168,132,58,0.32)", w: 620, h: 620, x: ["-10%", "10%", "-10%"], y: ["10%", "-5%", "10%"], d: 22 },
          { c: "rgba(31,77,43,0.45)",   w: 540, h: 540, x: ["70%", "55%", "70%"],   y: ["55%", "70%", "55%"], d: 28 },
          { c: "rgba(193,154,76,0.18)", w: 420, h: 420, x: ["40%", "55%", "40%"],   y: ["-15%", "5%", "-15%"], d: 24 },
        ]
      : [
          { c: "rgba(168,132,58,0.16)", w: 560, h: 560, x: ["-5%", "10%", "-5%"], y: ["0%", "-10%", "0%"], d: 20 },
          { c: "rgba(31,77,43,0.10)",   w: 520, h: 520, x: ["65%", "50%", "65%"], y: ["55%", "65%", "55%"], d: 26 },
        ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ x: b.x, y: b.y }}
          transition={{ duration: b.d, ease: "easeInOut", repeat: Infinity }}
          style={{
            width: b.w,
            height: b.h,
            background: b.c,
            filter: "blur(110px)",
          }}
          className="absolute -top-32 -left-32 rounded-full"
        />
      ))}
    </div>
  );
}
