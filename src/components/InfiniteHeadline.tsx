import { useEffect, useMemo, useState, type CSSProperties } from "react";

const MESSAGES = [
  { lang: "fr", dir: "ltr", text: "KR Global Solutions — Connecter l'innovation au monde" },
  { lang: "en", dir: "ltr", text: "KR Global Solutions — Connecting innovation to the world" },
  { lang: "ar", dir: "rtl", text: "KR Global Solutions — نربط الابتكار بالعالم" },
  { lang: "ja", dir: "ltr", text: "KR Global Solutions — 世界へイノベーションをつなぐ" },
];

export default function InfiniteHeadline({
  speed = 35,
  switchEvery = 5000,
}: {
  speed?: number;
  switchEvery?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), switchEvery);
    return () => clearInterval(id);
  }, [switchEvery]);

  const current = MESSAGES[idx];
  const duration = `${Math.max(10, Math.floor(1200 / speed))}s`;

  return (
    <div
      className="w-full overflow-hidden border-y border-neutral-200 select-none bg-white"
      aria-hidden
    >
      <div
        key={current.lang}
        lang={current.lang}
        dir={current.dir as "ltr" | "rtl"}
        className="relative whitespace-nowrap py-4"
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        <div className="marquee-track inline-flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xl md:text-2xl font-bold tracking-tight text-black"
            >
              {current.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
