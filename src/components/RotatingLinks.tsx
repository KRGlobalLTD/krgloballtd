"use client";
import OrbitMenuDynamic from "@/components/OrbitMenuDynamic";
import { socialLinks } from "@/components/SocialLinks";

export default function RotatingLinks() {
  const items = socialLinks.map((s) => ({ label: s.label, href: s.href, external: true, ariaLabel: s.label }));
  return (
    <section className="w-full bg-[#0B0B0C] py-12">
      <div className="relative mx-auto flex h-64 w-full max-w-xl items-center justify-center">
        <OrbitMenuDynamic items={items} />
      </div>
    </section>
  );
}
