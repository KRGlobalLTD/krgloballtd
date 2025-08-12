import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  "Comment choisir le pack qui correspond le mieux à mes besoins ?",
  "Les tarifs indiqués sont-ils fixes ou peuvent-ils varier ?",
  "Proposez-vous une mise en ligne ou une livraison express ?",
  "Puis-je payer en plusieurs fois ?",
  "Pouvez-vous personnaliser entièrement mon projet ?",
  "Y a-t-il un accompagnement après la livraison ?",
  "Puis-je demander des modifications après validation ?",
  "Travaillez-vous avec des particuliers ou uniquement des entreprises ?",
  "Créez-vous aussi le contenu (textes, visuels, vidéos) ?",
  "Vos solutions sont-elles compatibles mobile et tablette ?",
  "Intervenez-vous à l’international ?",
  "Proposez-vous des formations pour utiliser les outils livrés ?",
  "Avec quels outils/technologies travaillez-vous ?",
  "Quelles sont les étapes typiques d’un projet ?",
  "Quels délais prévoir pour un projet standard ?",
  "Puis-je migrer ou faire évoluer un projet existant ?",
];

function Item({ q }: { q: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/90 text-neutral-900 p-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <Plus className={`h-5 w-5 transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      {open && <div className="mt-3 text-sm text-neutral-700">Réponse fournie lors du devis selon votre contexte.</div>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-screen-lg px-4 sm:px-6 pb-8">
      <h3 className="text-2xl font-extrabold">FAQ</h3>
      <div className="mt-4 grid gap-3">
        {faqs.map((q) => <Item key={q} q={q} />)}
      </div>
    </section>
  );
}

