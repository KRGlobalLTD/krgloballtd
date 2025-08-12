"use client";
export default function FAQSection() {
  const items = [
    { q: "Comment choisir le bon pack ?", a: "Utilisez le quiz (3 questions) ou contactez-nous pour un devis express." },
    { q: "Les tarifs sont-ils fixes ?", a: "Ils sont 'à partir de'. Nous ajustons selon votre contexte et vos besoins." },
    { q: "Proposez-vous la livraison express ?", a: "Oui, possible en option sur certains livrables." },
    { q: "Puis-je payer en plusieurs fois ?", a: "Oui, paiement fractionné disponible sur les packs Croissance/Sur-mesure." },
  ];
  return (
    <section className="w-full bg-[#0B0B0C] py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-white">FAQ</h2>
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">{it.q}</p>
              <p className="mt-1 text-sm text-gray-300">{it.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
