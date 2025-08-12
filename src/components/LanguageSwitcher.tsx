import { useState, useRef, useEffect } from "react";
import i18n from "../i18n/i18n";

const LANGS = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(i18n.language?.startsWith("en") ? "en" : "fr");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);
  const change = (code: "fr" | "en") => {
    i18n.changeLanguage(code);
    setCur(code);
    setOpen(false);
  };
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow"
      >
        {cur === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
      </button>
      {open && (
        <div className="absolute right-0 z-[100] mt-2 w-40 overflow-hidden rounded-xl border bg-white/90 backdrop-blur-md shadow-xl dark:bg-black/75">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => change(l.code as "fr" | "en")}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
