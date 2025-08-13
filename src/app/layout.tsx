import type { Metadata } from "next";
import "./globals.css";
import CalendlyManager from "./_components/CalendlyManager";

export const metadata: Metadata = {
  title: "KR Global Solutions",
  description: "Solutions digitales, e-commerce et technologies pour demain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CalendlyManager />
        {children}
      </body>
    </html>
  );
}

