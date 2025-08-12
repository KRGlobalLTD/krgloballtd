"use client";
import { useState } from "react";

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: "Comment choisir le pack qui correspond le mieux à mes besoins ?",
    a: "Nous analysons vos objectifs, votre budget et votre activité afin de recommander la formule la plus pertinente pour atteindre vos résultats rapidement.",
  },
  {
    q: "Les tarifs indiqués sont-ils fixes ou peuvent-ils varier ?",
    a: "Les tarifs sont fixes par pack. En cas de besoin spécifique (fonctionnalités sur mesure, intégrations complexes), un devis personnalisé peut être proposé.",
  },
  {
    q: "Proposez-vous une mise en ligne ou une livraison express ?",
    a: "Oui. L’option Express accélère la production et la mise en ligne — idéale pour un lancement urgent, sous réserve de disponibilité planning.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui, le paiement échelonné est disponible pour les packs Croissance et Sur‑mesure, sans frais cachés.",
  },
  {
    q: "Pouvez-vous personnaliser entièrement mon projet ?",
    a: "Absolument. Nous concevons des solutions 100 % adaptées à vos objectifs, à votre identité de marque et à vos contraintes métier.",
  },
  {
    q: "Y a‑t‑il un accompagnement après la livraison ?",
    a: "Oui. Nous proposons un support post‑livraison (assistance technique, correctifs, petites évolutions) et des options de maintenance.",
  },
  {
    q: "Puis-je demander des modifications après validation ?",
    a: "Oui. Des ajustements sont possibles selon les conditions de votre pack et la fenêtre de retours prévue au contrat.",
  },
  {
    q: "Travaillez-vous avec des particuliers ou uniquement des entreprises ?",
    a: "Nous accompagnons les entreprises (TPE/PME/ETI), associations et indépendants/particuliers pour leurs projets digitaux et e‑commerce.",
  },
  {
    q: "Créez-vous aussi le contenu (textes, visuels, vidéos) ?",
    a: "Oui. Sur demande, nous produisons des textes optimisés, des visuels et des vidéos cohérents avec votre identité et vos objectifs.",
  },
  {
    q: "Vos solutions sont‑elles compatibles mobile et tablette ?",
    a: "Oui. Tous nos livrables sont conçus en responsive design pour une expérience optimale sur mobile, tablette et desktop.",
  },
  {
    q: "Intervenez-vous à l’international ?",
    a: "Oui. Nous gérons les projets à distance et collaborons avec des clients basés partout dans le monde.",
  },
  {
    q: "Proposez-vous des formations pour utiliser les outils livrés ?",
    a: "Oui. Nous offrons des sessions de prise en main personnalisées (en visio ou en présentiel) pour vous rendre autonome.",
  },
  {
    q: "Avec quels outils/technologies travaillez-vous ?",
    a: "Nous sélectionnons des technologies modernes et fiables (stack web actuelle, CMS/Headless, intégrations API) adaptées à votre contexte.",
  },
  {
    q: "Quelles sont les étapes typiques d’un projet ?",
    a: "Cadrage & objectifs, conception, design, développement/intégrations, tests & QA, mise en ligne, puis support/optimisation.",
  },
  {
    q: "Quels délais prévoir pour un projet standard ?",
    a: "Selon le pack et la complexité : de quelques jours (Express) à plusieurs semaines. Un planning précis est fourni au démarrage.",
  },
  {
    q: "Puis-je migrer ou faire évoluer un projet existant ?",
    a: "Oui. Nous auditons l’existant, proposons un plan de migration/amélioration et assurons la continuité de service.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-black">FAQ</h2>
        <ul className="space-y-3">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="rounded-2xl border border-black/10 bg-black/[0.03]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                  <span className="text-sm font-semibold text-black">{it.q}</span>
                  <span
                    aria-hidden
                    className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white text-black"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 pt-0 transition-all duration-200 ease-out ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-neutral-700">{it.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
