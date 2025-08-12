import { CATEGORIES } from '@/data/packs.config';
import PackCard from './PackCard';

export default function CategoriesGrid() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Offres & Prestations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="rounded-2xl border border-white/10 p-4 bg-black/30 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </div>
            <div className="space-y-3">
              <PackCard cat={cat} tier="essential" />
              <PackCard cat={cat} tier="advanced" />
              <PackCard cat={cat} tier="premium" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
