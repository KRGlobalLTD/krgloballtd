import { useState } from 'react';
import { getLang, setLang } from '@/i18n/adapter';

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const current = getLang().startsWith('en') ? 'en' : 'fr';

  const onPick = (lng: 'fr' | 'en') => {
    setLang(lng);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={current === 'fr' ? 'Changer la langue' : 'Change language'}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm ring-1 ring-white/20 hover:ring-white/40 focus:outline-none focus-visible:ring-2"
      >
        <span aria-hidden>{current === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
        <span className="font-medium uppercase">{current}</span>
      </button>

      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-end sm:place-items-center">
          <button className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-label="Close" />
          <div className="w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl bg-neutral-900 p-4 shadow-xl">
            <p className="text-sm opacity-80 mb-2">{current === 'fr' ? 'Choisir la langue' : 'Choose language'}</p>
            <ul className="grid gap-2">
              {(['fr', 'en'] as const).map((l) => (
                <li key={l}>
                  <button
                    onClick={() => onPick(l)}
                    className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 ring-1 ring-white/10 hover:ring-white/30 focus-visible:ring-2 ${current === l ? 'bg-white/5' : ''}`}
                    aria-current={current === l}
                  >
                    <span aria-hidden>{l === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
                    <span className="uppercase tracking-wide">{l}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
