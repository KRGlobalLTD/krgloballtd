"use client";
import React from "react";
import { packs } from "@/data/packs";
import PricingCard from "@/components/pricing/PricingCard";

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="max-w-6xl mx-auto px-4 md:px-6">
      <header className="mb-6 md:mb-8">
        <h2 id="pricing-title" className="text-3xl md:text-4xl font-extrabold">Offres & Prestations</h2>
        <p className="text-sm md:text-base opacity-80">Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte.</p>
        {/* SUPPRIMÉ : l’élément contenant “Quel pack est fait pour vous ?” */}
      </header>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {packs.map(p => (
          <PricingCard key={p.id} pack={p} />
        ))}
      </div>
    </section>
  );
}
