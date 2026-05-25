/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

type Variant = "header" | "footer";

export const socialLinks = [
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@krglobalsolutions?_t=ZS-8yl0PL5V6CQ&_r=1", icon: (size: number) => <FaTiktok size={size} /> },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/krgloballtd?igsh=c29uN3VyNGFyb2xv&utm_source=qr", icon: (size: number) => <FaInstagram size={size} /> },
  { id: "fiverr", label: "Fiverr", href: "https://www.fiverr.com/krgloballtd/buying?source=avatar_menu_profile", icon: (size: number) => <SiFiverr size={size} /> },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/kr-global-solutions-417a71379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: (size: number) => <FaLinkedin size={size} /> },
  { id: "github", label: "GitHub", href: "https://github.com/krglobal", icon: (size: number) => <FaGithub size={size} /> },
];

export default function SocialLinks({
  className,
  size = 16,
  variant = "header",
}: {
  className?: string;
  size?: number;
  variant?: Variant;
}) {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <nav aria-label="Réseaux sociaux" className={`flex flex-wrap gap-5 ${className || ""}`}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-black transition-colors group"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">
              {link.icon(13)}
            </span>
            {link.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Réseaux sociaux" className={`flex items-center gap-4 ${className || ""}`}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-neutral-400 hover:text-black transition-colors"
        >
          {link.icon(size)}
        </a>
      ))}
    </nav>
  );
}
