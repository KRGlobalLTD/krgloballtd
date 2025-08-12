"use client";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

type Intensity = "strong" | "max"; // "max" = more visible by default

function usePortalTooltip(label: string) {
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const update = () => {
    const el = anchorRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.bottom });
  };

  const Tooltip = () =>
    typeof document !== "undefined" && open && pos
      ? createPortal(
          <div
            role="tooltip"
            className="fixed z-50 px-2 py-1 rounded bg-black text-white text-xs pointer-events-none shadow"
            style={{ left: pos.x, top: pos.y + 10, transform: "translateX(-50%)" }}
          >
            {label}
          </div>,
          document.body
        )
      : null;

  return { anchorRef, open, setOpen, update, Tooltip };
}

function variantsFor(intensity: Intensity) {
  const cfg = intensity === "max"
    ? { y: 8, rot: 5, scale: 1.12, dur: 2.4 }
    : { y: 6, rot: 4, scale: 1.08, dur: 2.8 };
  return {
    animate: {
      y: [0, -cfg.y, 0, cfg.y, 0],             // bob
      rotate: [0, cfg.rot, 0, -cfg.rot, 0],    // tilt
      scale: [1, cfg.scale, 1, cfg.scale, 1],  // pulse
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
  intensity = "max" as Intensity, // very visible movement by default
}: {
  hrefK?: string;
  hrefR?: string;
  className?: string;
  intensity?: Intensity;
}) {
  // exclusive tooltips: only one at a time
  const k = usePortalTooltip("Portfolio de Karim");
  const r = usePortalTooltip("Portfolio de Raphaël");
  const [exclusive, setExclusive] = useState<"K" | "R" | null>(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const on = () => { k.update(); r.update(); };
    window.addEventListener("resize", on);
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("resize", on); window.removeEventListener("scroll", on); };
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  const vK = variantsFor(intensity);
  const vR = variantsFor(intensity);

  return (
    <span className={`relative flex items-center gap-1 font-bold text-sm md:text-base ${className}`}>
      {/* K (phase 0) */}
      <motion.a
        ref={k.anchorRef}
        href={hrefK}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer select-none"
        variants={vK}
        animate="animate"
        whileHover="whileHover"
        whileTap="whileTap"
        onMouseEnter={() => { setExclusive("K"); k.setOpen(true); k.update(); }}
        onFocus={() => { setExclusive("K"); k.setOpen(true); k.update(); }}
        onMouseLeave={() => { if (exclusive === "K") { k.setOpen(false); setExclusive(null); } }}
        onBlur={() => { if (exclusive === "K") { k.setOpen(false); setExclusive(null); } }}
      >
        K
      </motion.a>

      <span aria-hidden>/</span>

      {/* R (offset phase) */}
      <motion.a
        ref={r.anchorRef}
        href={hrefR}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer select-none"
        variants={vR}
        animate="animate"
        whileHover="whileHover"
        whileTap="whileTap"
        transition={{ delay: 0.6 }}  // delay to catch the eye
        onMouseEnter={() => { setExclusive("R"); r.setOpen(true); r.update(); }}
        onFocus={() => { setExclusive("R"); r.setOpen(true); r.update(); }}
        onMouseLeave={() => { if (exclusive === "R") { r.setOpen(false); setExclusive(null); } }}
        onBlur={() => { if (exclusive === "R") { r.setOpen(false); setExclusive(null); } }}
      >
        R
      </motion.a>

      {/* Exclusive tooltips via Portal (never clipped by the header) */}
      {exclusive === "K" && <k.Tooltip />}
      {exclusive === "R" && <r.Tooltip />}

      {/* Respect users sensitive to motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          *[data-framer-motion] { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </span>
  );
}
