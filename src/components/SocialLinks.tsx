import { FaTiktok, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

type Variant = "header" | "footer";

export default function SocialLinks({
  className,
  size = 24,
  variant = "header",
}: {
  className?: string;
  size?: number;
  variant?: Variant;
}) {
  const spacing = variant === "header" ? "gap-3 sm:gap-4" : "gap-4 sm:gap-5";
  const item = "inline-flex items-center justify-center min-w-[44px] min-h-[44px]";
  return (
    <nav
      aria-label="Réseaux sociaux"
      className={`flex flex-wrap ${spacing} ${className || ""}`}
    >
      <a
        href="https://www.tiktok.com/@krglobalsolutions?_t=ZS-8yl0PL5V6CQ&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className={item}
      >
        <FaTiktok size={size} />
      </a>
      <a
        href="https://www.instagram.com/krgloballtd?igsh=c29uN3VyNGFyb2xv&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={item}
      >
        <FaInstagram size={size} />
      </a>
      <a
        href="https://www.fiverr.com/krgloballtd/buying?source=avatar_menu_profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fiverr"
        className={item}
      >
        <SiFiverr size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/kr-global-solutions-417a71379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={item}
      >
        <FaLinkedin size={size} />
      </a>
      <a
        href="https://github.com/krglobal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={item}
      >
        <FaGithub size={size} />
      </a>
    </nav>
  );
}

