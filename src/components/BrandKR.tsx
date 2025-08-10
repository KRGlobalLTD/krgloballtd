"use client";

export default function BrandKR({
  karim = "https://www.karimhammouche.com/",
  raphael = "https://rthportofolio.com",
}: { karim?: string; raphael?: string }) {
  const base = "inline-flex items-center gap-1 font-extrabold text-xl md:text-2xl tracking-tight";
  const letter =
    "cursor-pointer select-none transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded";

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={base} aria-label="KR" onClick={scrollTop}>
      <span
        className={letter}
        onClick={(e) => { e.stopPropagation(); window.location.href = karim; }}
        title="Portfolio Karim"
      >
        K
      </span>
      <span
        className={letter}
        onClick={(e) => { e.stopPropagation(); window.location.href = raphael; }}
        title="Portfolio Raphaël"
      >
        R
      </span>
    </div>
  );
}

