"use client";
import React from "react";
import { packsFR, packsEN, Pack } from "@/data/packs";

type Props = { locale?: "fr" | "en"; className?: string };

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-none">
    {children}
  </span>
);

const Card = ({ pack }: { pack: Pack }) => (
  <article className="rounded-2xl border shadow-sm p-5 md:p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
    <header className="mb-4">
      <div className="flex flex-wrap gap-2 mb-3" aria-label="badges">
        {pack.badges.map((b, i) => <Badge key={i}>{b}</Badge>)}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold">{pack.title}</h3>
      {pack.subtitle && <p className="text-sm opacity-80 mt-1">{pack.subtitle}</p>}
      <p className="text-2xl md:text-3xl font-bold mt-3">{pack.priceFrom}</p>
      {pack.installment && <p className="text-sm opacity-75">{pack.installment}</p>}
    </header>

    <ul className="space-y-2 text-sm md:text-base">
      {pack.features.map((f, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden>•</span>
          <span>{f}</span>
        </li>
      ))}
    </ul>

    {pack.footerLinks && (
      <div className="mt-3 space-x-3">
        {pack.footerLinks.map((l, i) => (
          <a key={i} href={l.href} className="underline text-sm">{l.label}</a>
        ))}
      </div>
    )}

    <div className="mt-5 flex flex-col sm:flex-row gap-3">
      {pack.ctas.map((c, i) => (
        <a
          key={i}
          href={c.href}
          className={[
            "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring",
            c.variant === "primary"
              ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
              : "border hover:bg-black/5 dark:hover:bg-white/10"
          ].join(" ")}
        >
          {c.label}
        </a>
      ))}
    </div>
  </article>
);

export default function PricingCards({ locale = "fr", className }: Props) {
  const data = locale === "en" ? packsEN : packsFR;
  return (
    <section aria-labelledby="pricing-title" className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <header className="mb-6 md:mb-8">
          <h2 id="pricing-title" className="text-3xl md:text-4xl font-extrabold">
            {locale === "en" ? "Offers & Services" : "Offres & Prestations"}
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">
            {locale === "en"
              ? "Choose a pack for your objective. Prices are 'from' and adjusted to your context."
              : "Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte."}
          </p>
          <div className="mt-4">
            <a
              href="#quiz-budget"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
            >
              {locale === "en" ? "Which pack fits you?" : "Quel pack est fait pour vous ?"}
            </a>
          </div>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => <Card key={p.id} pack={p} />)}
        </div>
      </div>
    </section>
  );
}
