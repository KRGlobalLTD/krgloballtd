"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { Translation } from "@/data/translations";

interface KRLogoProps {
  t: Translation;
}

export default function KRLogo({ t }: KRLogoProps) {
  const [showTooltip, setShowTooltip] = useState<null | "K" | "R">(null);
  const [mobileTap, setMobileTap] = useState<null | "K" | "R">(null);
  const [animState, setAnimState] = useState<"mount" | "breathing">("mount");

  useEffect(() => {
    const timer = setTimeout(() => setAnimState("breathing"), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (letter: "K" | "R", url: string) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      if (mobileTap === letter) {
        window.open(url, "_blank"); // SAFE-GUARD: open in new tab to preserve SPA state
      } else {
        setShowTooltip(letter);
        setMobileTap(letter);
        setTimeout(() => setShowTooltip(null), 2000);
      }
    } else {
      window.open(url, "_blank"); // SAFE-GUARD: open in new tab to preserve SPA state
    }
  };

  const handleEnter = (letter: "K" | "R") => {
    if (window.innerWidth >= 768) {
      setShowTooltip(letter);
    }
  };

  const handleLeave = () => {
    if (window.innerWidth >= 768) {
      setShowTooltip(null);
    }
  };

  const letterVariants = {
    mount: {
      scale: [1, 1.15, 1],
      textShadow: [
        "0 0 0px rgba(255,255,255,0)",
        "0 0 12px rgba(255,255,255,0.8)",
        "0 0 0px rgba(255,255,255,0)"
      ],
      transition: { duration: 0.6 }
    },
    breathing: {
      scale: [1, 1.02, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgba(255,255,255,0.7)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  } as const;

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: -20, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  } as const;

  return (
    <div className="inline-flex items-center gap-1 font-extrabold text-xl md:text-2xl tracking-tight select-none">
      {["K", "R"].map((letter) => {
        const link =
          letter === "K"
            ? "https://www.karimhammouche.com"
            : "https://rthportofolio.com";
        return (
          <motion.span
            key={letter}
            className="relative cursor-pointer select-none"
            variants={letterVariants}
            initial="mount"
            animate={showTooltip === letter ? "hover" : animState}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(letter as "K" | "R", link)}
            onMouseEnter={() => handleEnter(letter as "K" | "R")}
            onMouseLeave={handleLeave}
          >
            {letter}
            <AnimatePresence>
              {showTooltip === letter && (
                <motion.div
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-1/2 -translate-x-1/2 -top-6 bg-background/90 text-foreground text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                >
                  {letter === "K" ? t.portfolio.karim : t.portfolio.raphael}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.span>
        );
      })}
    </div>
  );
}

