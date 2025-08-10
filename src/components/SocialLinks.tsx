import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@krglobalsolutions?_t=ZS-8yl0PL5V6CQ&_r=1',
    icon: FaTiktok
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/krgloballtd?igsh=c29uN3VyNGFyb2xv&utm_source=qr',
    icon: FaInstagram
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/krgloballtd/buying?source=avatar_menu_profile',
    icon: SiFiverr
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kr-global-solutions-417a71379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    icon: FaLinkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/krglobal',
    icon: FaGithub
  }
];

export function SocialLinks({ className = '', showLabels = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:opacity-75 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Icon className="w-6 h-6" />
            {showLabels && <span className="hidden sm:inline">{link.name}</span>}
          </motion.a>
        );
      })}
    </div>
  );
}