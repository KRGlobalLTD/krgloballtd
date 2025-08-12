'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PackModal from './PackModal';
import type { Category, PackTier } from '@/data/packs.config';
import { stripeLink } from '@/lib/payments';
import { calendlyLink } from '@/lib/scheduling';

export default function PackCard({ cat, tier }: { cat: Category; tier: PackTier }) {
  const data = cat.packs[tier];
  const [open, setOpen] = useState(false);
  const price = data.price;

  const primaryCta = price === 999
    ? { label: 'Parler du 999', href: calendlyLink() }
    : { label: `Commander ${price}€`, href: stripeLink(price) };

  return (
    <div className="rounded-xl border border-white/10 p-4 bg-white/5">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold">{data.title}</h4>
          <p className="text-white/70 text-sm">{data.short}</p>
        </div>
        <button aria-label="Informations" onClick={() => setOpen(true)}
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
          i
        </button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xl font-bold">{price}€</span>
        <a href={primaryCta.href} className="px-3 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:opacity-90">
          {primaryCta.label}
        </a>
      </div>
      <AnimatePresence>{open && (
        <PackModal onClose={() => setOpen(false)} title={`${cat.title} — ${data.title}`} bullets={data.bullets} />
      )}</AnimatePresence>
    </div>
  );
}
