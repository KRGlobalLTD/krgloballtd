"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Intensity = "strong" | "max";

function variantsFor(intensity: Intensity) {
  const cfg = intensity === "max"
    ? { y: 8, rot: 5, scale: 1.12, dur: 2.4 }
    : { y: 6, rot: 4, scale: 1.08, dur: 2.8 };
  return {
    animate: {
      y: [0, -cfg.y, 0, cfg.y, 0],
      rotate: [0, cfg.rot, 0, -cfg.rot, 0],
      scale: [1, cfg.scale, 1, cfg.scale, 1],
      transition: { duration: cfg.dur, repeat: Infinity, ease: "easeInOut" }
    },
    whileHover: { scale: cfg.scale + 0.04, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };
}

export default function KRLogoKR({
  hrefK,
  hrefR,
  className = "",
  intensity = "max" as Intensity,
}: {
  hrefK?: string;
  hrefR?: string;
  className?: string;
  intensity?: Intensity;
}) {
  const vK = variantsFor(intensity);
  const vR = variantsFor(intensity);

  return (
    <span className={`relative flex items-center gap-1 font-bold text-sm md:text-base ${className}`}>
      <motion.a
        href={hrefK}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer select-none"
        variants={vK}
        animate="animate"
        whileHover="whileHover"
        whileTap="whileTap"
      >
        K
      </motion.a>

      <span aria-hidden>/</span>

      <motion.a
        href={hrefR}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer select-none"
        variants={vR}
        animate="animate"
        whileHover="whileHover"
        whileTap="whileTap"
        transition={{ delay: 0.6 }}
      >
        R
      </motion.a>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *[data-framer-motion] { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </span>
  );
}
