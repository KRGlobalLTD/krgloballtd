import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

// Si ton projet a déjà une constante/lien WhatsApp, tu peux l'importer ici à la place.
// Par défaut, on lit la variable existante sans la modifier.
const raw = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '';
const cleaned = raw.replace(/[^+\d]/g, '');
const enabled = cleaned.length > 6;
const href = enabled ? `https://wa.me/${cleaned}` : undefined;

export const WhatsAppButton: React.FC<{ className?: string }> = ({ className }) => {
  if (!enabled) {
    return (
      <span className={`opacity-50 cursor-not-allowed ${className || ''}`} aria-disabled="true" title="WhatsApp non configuré">
        <WhatsAppIcon className="w-5 h-5" />
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className={`inline-flex items-center justify-center p-2 rounded-full border border-black/20 dark:border-white/20 transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white ${className || ''}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
    </a>
  );
};
export default WhatsAppButton;
