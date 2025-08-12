"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function usePortalTooltip() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<{x:number;y:number;width:number;height:number} | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  const update = () => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: r.left + r.width/2, y: r.bottom, width: r.width, height: r.height });
  };

  return { mounted, pos, anchorRef, update };
}

function TooltipPortal({ text, pos }: { text: string; pos: {x:number;y:number} | null }) {
  if (typeof document === "undefined" || !pos) return null;
  return createPortal(
    <div
      role="tooltip"
      className="fixed z-50 pointer-events-none px-2 py-1 rounded-md bg-black text-white text-xs shadow-lg"
      style={{ left: pos.x, top: pos.y + 8, transform: "translateX(-50%)" }}
    >
      {text}
    </div>,
    document.body
  );
}

export default function KRLogoIdlePortal({
  onClickK,
  onClickR,
  className = "",
  showTooltips = true,
}: {
  onClickK?: () => void;
  onClickR?: () => void;
  className?: string;
  showTooltips?: boolean;
}) {
  const idle = {
    animate: {
      scale: [1, 1.02, 1],
      rotate: [0, 0.8, 0, -0.8, 0],
      transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
    },
    whileHover: { scale: 1.08, transition: { duration: 0.2 } },
    whileTap: { scale: 0.96 }
  };

  const halo = {
    animate: {
      opacity: [0.08, 0.16, 0.08],
      transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const k = usePortalTooltip();
  const r = usePortalTooltip();

  // recalcul au resize/scroll pour garder la tooltip visible sous le header
  /* eslint-disable react-hooks/exhaustive-deps */
  // SAFE-GUARD: listeners rely on stable refs; deps intentionally omitted
  useEffect(() => {
    const on = () => { k.update(); r.update(); };
    window.addEventListener("resize", on);
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("resize", on); window.removeEventListener("scroll", on); };
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      {/* halo discret autour du bloc pour signaler l'interactivité */}
      <motion.div className="absolute -inset-3 rounded-full"
        style={{ boxShadow: "0 0 30px rgba(255,255,255,0.12)" }}
        variants={halo} animate="animate" aria-hidden />
      <div className="relative flex items-center justify-center rounded-full bg-black text-white w-12 h-12 md:w-14 md:h-14">
        <motion.button
          ref={k.anchorRef}
          type="button"
          aria-label="Portfolio Karim"
          className="font-bold text-base md:text-lg leading-none"
          variants={idle} animate="animate" whileHover="whileHover" whileTap="whileTap"
          onMouseEnter={k.update}
          onFocus={k.update}
          onClick={onClickK}
        >
          K
        </motion.button>
        <span className="mx-1 opacity-30" aria-hidden>/</span>
        <motion.button
          ref={r.anchorRef}
          type="button"
          aria-label="Portfolio Raphaël"
          className="font-bold text-base md:text-lg leading-none"
          variants={idle} animate="animate" whileHover="whileHover" whileTap="whileTap"
          onMouseEnter={r.update}
          onFocus={r.update}
          onClick={onClickR}
        >
          R
        </motion.button>
      </div>

      {/* Tooltips portalisées (pas coupées par le header) */}
      {showTooltips && <TooltipPortal text="Portfolio Karim" pos={k.pos} />}
      {showTooltips && <TooltipPortal text="Portfolio Raphaël" pos={r.pos} />}

      {/* Respect prefers-reduced-motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .framer-motion-enabled * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}

