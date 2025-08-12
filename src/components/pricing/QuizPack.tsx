"use client";
import { useState } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_MSG_DEFAULT } from "@/lib/siteConfig";

type PlanId = "starter" | "growth" | "custom";

const questions = [
  {
    q: "Quel est votre budget ?",
    options: [
      { label: "≤100€", plan: "starter" },
      { label: "100€-400€", plan: "growth" },
      { label: ">400€", plan: "custom" },
    ],
  },
  {
    q: "Votre priorité ?",
    options: [
      { label: "Lancer rapidement", plan: "starter" },
      { label: "Accélérer ma visibilité", plan: "growth" },
      { label: "Solution complète", plan: "custom" },
    ],
  },
  {
    q: "Besoin d'accompagnement ?",
    options: [
      { label: "Minimal", plan: "starter" },
      { label: "Coaching", plan: "growth" },
      { label: "Suivi avancé", plan: "custom" },
    ],
  },
];

function waHref(planName: string) {
  const n = WHATSAPP_NUMBER.replace(/\D/g, "");
  const msg = encodeURIComponent(`Bonjour KR Global, je suis intéressé par ${planName}. ${WHATSAPP_MSG_DEFAULT}`);
  return `https://wa.me/${n}?text=${msg}`;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function QuizPack() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<{ [k in PlanId]: number }>({
    starter: 0,
    growth: 0,
    custom: 0,
  });

  const current = questions[step];
  const handle = (plan: PlanId) => {
    setScores((s) => ({ ...s, [plan]: s[plan] + 1 }));
    setStep((s) => s + 1);
  };

  if (step >= questions.length) {
    const plan = (Object.keys(scores) as PlanId[]).reduce((a, b) => (scores[b] > scores[a] ? b : a), "starter");
    const planLabel =
      plan === "starter" ? "Pack Découverte" : plan === "growth" ? "Pack Croissance" : "Pack Sur‑mesure";
    return (
      <section className="w-full bg-[#0B0B0C] py-12">
        <div className="mx-auto max-w-3xl px-4 text-center text-gray-200">
          <span id="pack-quiz" className="block relative -top-20" />
          <h2 className="text-2xl font-bold text-white mb-4">Votre pack recommandé</h2>
          <p className="mb-6">
            Nous vous conseillons le <span className="font-semibold">{planLabel}</span>.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => scrollToId(`plan-${plan}`)}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/30 px-4 text-sm font-semibold text-white hover:bg-white hover:text-black"
            >
              Voir le pack
            </button>
            <a
              href={waHref(planLabel)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#25D366]/40 px-4 text-sm font-semibold text-[#25D366] hover:bg-[#25D366] hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#0B0B0C] py-12">
      <div className="mx-auto max-w-3xl px-4 text-center text-gray-200">
        {/* anchor for smooth scroll from Offres CTA */}
        <span id="pack-quiz" className="block relative -top-20" />
        <h2 className="text-2xl font-bold text-white mb-6">Quel pack est fait pour vous ?</h2>
        <p className="mb-4 text-sm">{current.q}</p>
        <div className="flex flex-col items-center gap-3">
          {current.options.map((o, i) => (
            <button
              key={i}
              onClick={() => handle(o.plan)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white hover:text-black"
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
