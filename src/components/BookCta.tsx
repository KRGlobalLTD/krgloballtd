"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookCta() {
  const pathname = usePathname();
  const prefix = pathname?.startsWith("/en") ? "/en" : "";
  const isEN = prefix === "/en";
  
  return (
    <Link href={`${prefix}/book`} className="btn btn-primary">
      {isEN ? "Book a call" : "Réserver un RDV"}
    </Link>
  );
}
