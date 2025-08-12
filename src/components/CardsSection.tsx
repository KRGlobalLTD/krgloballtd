import { useTranslation } from 'react-i18next';

const ids = ['service1', 'service2'] as const;

type CardId = typeof ids[number];

export default function CardsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-8">
      <div className="container mx-auto grid gap-4 px-4 md:grid-cols-2">
        {ids.map((id) => (
          <div key={id} className="rounded-xl border p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">{t(`cards.${id}.title`)}</h3>
            <p className="mb-4 text-sm text-neutral-600">{t(`cards.${id}.desc`)}</p>
            <button className="rounded-lg border px-3 py-1 text-sm">
              {t(`cards.${id}.cta`)}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
