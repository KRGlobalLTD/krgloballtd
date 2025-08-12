"use client";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";

export default function InfiniteHeadline({
  speed = 35,
  switchEvery = 5000,
}: { speed?: number; switchEvery?: number }) {
  const { i18n } = useTranslation();
  const messages = useMemo(() => {
    const fr = i18n.getFixedT("fr");
    const en = i18n.getFixedT("en");
    return [
      { lang: "fr", dir: "ltr", text: `${fr("hero.title")} — ${fr("hero.subtitle")}` },
      { lang: "en", dir: "ltr", text: `${en("hero.title")} — ${en("hero.subtitle")}` },
    ];
  }, [i18n]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % messages.length), switchEvery);
    return () => clearInterval(id);
  }, [switchEvery, messages.length]);

  const current = messages[idx];

  return (
    <div className="w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 select-none">
      <div
        key={current.lang}
        lang={current.lang}
        dir={current.dir as "ltr" | "rtl"}
        className="relative whitespace-nowrap py-3"
        style={{ "--marquee-duration": `${Math.max(10, Math.floor(1200 / speed))}s` } as CSSProperties}
      >
        <div className="marquee inline-flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6 text-2xl md:text-4xl font-extrabold tracking-tight">
              {current.text}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee { animation: marquee linear var(--marquee-duration) infinite; will-change: transform; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
