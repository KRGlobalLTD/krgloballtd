import React, { useEffect, Suspense } from "react";

const CalendlyInline = React.lazy(() => import("@/components/CalendlyInline"));

export default function BookPage() {
  useEffect(() => {
    document.title = "Prendre rendez-vous | KR Global Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Réservez un créneau pour discuter de votre projet.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">Réserver un créneau</h1>
        <p className="text-sm opacity-80 mb-6">
          Choisissez l’horaire qui vous convient. Les heures s’affichent dans votre fuseau horaire.
        </p>
        <Suspense fallback={null}>
          <CalendlyInline className="rounded-2xl overflow-hidden" />
        </Suspense>
        <p className="text-xs opacity-70 mt-4">
          En réservant, vous acceptez nos conditions et notre politique de confidentialité.
        </p>
      </main>
    </div>
  );
}
