"use client";
import { useEffect, useState } from "react";

type Lang = "en" | "fr";
const URLS = {
  en: "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone",
  fr: "https://calendly.com/krglobalsolutionsltd/30min",
};

export default function BookingPage() {
  const [lang, setLang] = useState<Lang>("fr");
  useEffect(() => {
    const get = () => {
      try {
        const ls = localStorage.getItem("lang");
        if (ls && /^(en|fr)$/i.test(ls)) return ls.toLowerCase() as Lang;
      } catch { /* empty */ }
      const html = document.documentElement.getAttribute("lang");
      if (html && /^(en|fr)$/i.test(html)) return html.toLowerCase() as Lang;
      return "fr";
    };
    const apply = () => setLang(get());
    apply();
    const mo = new MutationObserver(apply);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => mo.disconnect();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-3">
        {lang === "fr" ? "Réserver un créneau" : "Book a slot"}
      </h1>
      <p className="text-sm text-neutral-500 mb-6">
        {lang === "fr"
          ? "Choisissez l’horaire qui vous convient. La prise de rendez-vous se fait directement depuis cette page."
          : "Pick a time that works for you. You can schedule directly below."}
      </p>

      <div className="rounded-2xl overflow-hidden border border-neutral-200">
        <iframe
          key={lang}
          src={URLS[lang]}
          title="Calendly"
          className="w-full"
          style={{ height: 820, border: 0 }}
        />
      </div>
    </main>
  );
}

