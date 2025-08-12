'use client';
import { motion } from 'framer-motion';

export default function PackModal({ onClose, title, bullets }: { onClose: () => void; title: string; bullets: string[] }) {
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}}
        className="relative mx-auto mt-24 max-w-lg rounded-2xl bg-black p-6 border border-white/10">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold">{title}</h4>
          <button onClick={onClose} aria-label="Fermer" className="w-8 h-8 rounded-full border border-white/20">×</button>
        </div>
        <ul className="mt-4 space-y-2 list-disc list-inside text-white/80">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </motion.div>
    </div>
  );
}
