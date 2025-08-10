import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

type Props = { className?: string };
export default function SocialIcons({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href="https://www.tiktok.com/@krglobalsolutions?_t=ZS-8yl0PL5V6CQ&_r=1" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com/krgloballtd?igsh=c29uN3VyNGFyb2xv&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6" />
      </a>
      <a href="https://www.fiverr.com/krgloballtd/buying?source=avatar_menu_profile" aria-label="Fiverr" target="_blank" rel="noopener noreferrer">
        <SiFiverr className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/kr-global-solutions-417a71379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a href="https://github.com/krglobal" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
}
