import type { Metadata } from "next";
import "./globals.css";
import CalendlyLoader from "./_components/CalendlyLoader";

export const metadata: Metadata = {
  title: "KR Global Solutions",
  description: "Solutions digitales, e-commerce et technologies pour demain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Loader invisible: charge Calendly + sync langue + badge */}
        <CalendlyLoader />
        {children}
      </body>
    </html>
  );
}

