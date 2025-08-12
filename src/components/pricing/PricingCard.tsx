"use client";
import React, { useState } from "react";
import type { Pack } from "@/data/packs";

type Props = { pack: Pack; className?: string };

export default function PricingCard({ pack, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className={["rounded-2xl border p-5 md:p-6 bg-white/80 dark:bg-zinc-900/70 shadow-sm", className].filter(Boolean).join(" ")}> 
      <header className="mb-3">
        <p className="text-xs md:text-sm uppercase tracking-wide opacity-70">{pack.tagline}</p>
        <h3 className="text-xl md:text-2xl font-bold">{pack.title}</h3>
        <p className="text-2xl md:text-3xl font-extrabold mt-2">{pack.priceLine}</p>
      </header>

      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        {pack.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <div className="mt-2">
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          className="underline text-sm opacity-80 hover:opacity-100 transition"
        >
          {open ? "Réduire le contenu" : "Voir tout le contenu"}
        </button>

        <div hidden={!open} className="mt-3">
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base opacity-90">
            {pack.extras.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      </div>

      {/* Emplacements boutons existants non modifiés (CTA / WhatsApp) */}
      {/* Laisse le code des boutons déjà en place dans la page qui consomme <PricingCard /> */}
    </article>
  );
}
