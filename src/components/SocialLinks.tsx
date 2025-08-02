import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  t: any;
  className?: string;
  showLabels?: boolean;
}

const socialLinks = [
  { 
    name: 'tiktok', 
    url: 'https://tiktok.com/@krglobal', 
    icon: '📱',
    color: 'hover:text-pink-600'
  },
  { 
    name: 'instagram', 
    url: 'https://instagram.com/krglobal', 
    icon: '📷',
    color: 'hover:text-purple-600'
  },
  { 
    name: 'fiverr', 
    url: 'https://fiverr.com/karimhammouche', 
    icon: '💼',
    color: 'hover:text-green-600'
  },
  { 
    name: 'linkedin', 
    url: 'https://linkedin.com/company/krglobal', 
    icon: '💼',
    color: 'hover:text-blue-600'
  },
  { 
    name: 'github', 
    url: 'https://github.com/krglobal', 
    icon: '⚡',
    color: 'hover:text-gray-600'
  },
];

export function SocialLinks({ t, className = '', showLabels = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${link.color}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <span className="text-lg">{link.icon}</span>
          {showLabels && (
            <span className="hidden sm:inline">
              {t.footer.social[link.name as keyof typeof t.footer.social]}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}