'use client';
import { useState } from 'react';
import { FAQ } from '@/data/faq.config';

export default function FAQAccordion(){
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQ</h2>
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
        {FAQ.map((item, idx) => (
          <button key={idx} className="w-full text-left p-4 hover:bg-white/5 focus:outline-none" onClick={() => setOpen(open===idx?null:idx)}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.q}</span>
              <span>{open===idx ? '−' : '+'}</span>
            </div>
            {open===idx && (<p className="mt-2 text-white/70">{item.a}</p>)}
          </button>
        ))}
      </div>
    </section>
  );
}
