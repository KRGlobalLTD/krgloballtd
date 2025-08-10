import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

type Props = { className?: string };
export default function SocialIcons({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href="https://tiktok.com/@krglobal" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="w-6 h-6" />
      </a>
      <a href="https://instagram.com/krglobal" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6" />
      </a>
      <a href="https://fiverr.com/karimhammouche" aria-label="Fiverr" target="_blank" rel="noopener noreferrer">
        <SiFiverr className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/company/krglobal" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a href="https://github.com/krglobal" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
}
