import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  t: any;
  isRTL: boolean;
}

export function ContactSection({ t, isRTL }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {/* Additional contact information could go here */}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm t={t} isRTL={isRTL} />
          </motion.div>
        </div>
      </div>
      
      {/* Bouton WhatsApp flottant */}
      <motion.a
        href="https://wa.me/33781579222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50 flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:inline text-sm">{t.contact.whatsapp}</span>
      </motion.a>
    </section>
  );
}