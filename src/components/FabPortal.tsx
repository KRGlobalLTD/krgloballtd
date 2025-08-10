import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export default function FabPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const root = typeof document !== "undefined" ? document.body : null;
  if (!root) return <>{children}</>;

  // Conteneur EXTERNE uniquement pour le positionnement (on NE touche PAS au bouton interne)
  const container = (
    <div className="fixed left-4 bottom-4 md:left-5 md:bottom-6 z-[9999] pointer-events-auto">
      {children}
    </div>
  );
  return createPortal(container, root);
}
