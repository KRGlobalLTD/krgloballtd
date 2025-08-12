import { PackCard } from "./pricing/PackCard";

export default function PricingSection() {
  return (
    <section className="mt-8 md:mt-12 bg-neutral-950 text-white">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 py-8 md:py-12">
        <h2 className="text-3xl font-extrabold">Offres &amp; Prestations</h2>
        <p className="mt-2 text-white/70">
          Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5">
          <PackCard
            title="Pack Découverte"
            subtitle="Lancez-vous dès aujourd’hui"
            price="à partir de 49€"
            badges={[{label:"Rapide"},{label:"Basique"},{label:"Prise en main"}]}
            items={[
              {label:"Visuel unique (logo simple / bannière / 3 posts)"},
              {label:"Landing 1 section (Héros + CTA + formulaire)"},
              {label:"Mini-workflow (Form → Email)"},
              {label:"Montage vidéo ≤45s ou 10 retouches photo"},
              {label:"Visio 30 min + notes d’actions"},
              {label:"FAQ IA basique (widget 20 Q/R)"},
            ]}
            ctas={[
              {label:"Je commence aujourd’hui", href:"#", variant:"primary"},
              {label:"WhatsApp", href:"https://wa.me/", variant:"outline"},
            ]}
          />

          <PackCard
            title="Pack Croissance"
            subtitle="Passez à la vitesse supérieure"
            price="à partir de 249€"
            badges={[{label:"Site"},{label:"Social"},{label:"IA"}]}
            items={[
              {label:"Mini-site 3 sections (SEO base + analytics)"},
              {label:"15 posts + 1 micro‑vidéo (calendrier Notion)"},
              {label:"Workflow utile (Form → Sheets + email + notif)"},
              {label:"Vidéo ≤90s ou 20 retouches (cut + transitions)"},
              {label:"Audit express + plan 30/60/90 (visio 45 min)"},
              {label:"Chatbot FAQ IA (50 Q/R + capture email)"},
            ]}
            ctas={[
              {label:"Réserver ce pack", href:"#", variant:"outline"},
              {label:"WhatsApp", href:"https://wa.me/", variant:"outline"},
            ]}
          />

          <PackCard
            title="Pack Sur‑mesure"
            subtitle="Votre projet clé en main"
            price="à partir de 799€"
            badges={[{label:"Intégrations"},{label:"IA avancée"},{label:"Automations"}]}
            items={[
              {label:"Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)"},
              {label:"Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)"},
              {label:"Ops simple (x3 workflows) + dashboard Notion/Sheets"},
              {label:"Agent IA avancé (RAG + multi‑langues)"},
              {label:"Accompagnement 1 mois (4 visios, roadmap Notion)"},
              {label:"Setup express (checklists + modèles + banques)"},
            ]}
            ctas={[
              {label:"Obtenir mon devis gratuit", href:"#", variant:"outline"},
              {label:"WhatsApp", href:"https://wa.me/", variant:"outline"},
            ]}
          />
        </div>
      </div>
    </section>
  );
}

