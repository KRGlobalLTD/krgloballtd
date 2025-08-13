"use client";
import { useEffect, useState } from "react";

const LABEL = { fr: "Réserver 30 min", en: "Book 30 min" } as const;

function detect() {
  try { const ls = localStorage.getItem("lang"); if (ls) return ls; } catch { /* empty */ }
  return document.documentElement.getAttribute("lang") || "fr";
}

export function HeaderBookingLink({ className = "" }: { className?: string }) {
  const [lang, setLang] = useState<"fr" | "en">(detect() === "en" ? "en" : "fr");
  useEffect(() => {
    const mo = new MutationObserver(() => setLang(detect() === "en" ? "en" : "fr"));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => mo.disconnect();
  }, []);
  return (
    <a
      href={typeof window !== "undefined" && window.getCalendlyUrl ? window.getCalendlyUrl() : "#"}
      onClick={(e) => {
        e.preventDefault();
        window.openCalendly?.("tab");
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-full bg-neutral-900 text-white hover:opacity-90 transition ${className}`}
    >
      {LABEL[lang]}
    </a>
  );
}

