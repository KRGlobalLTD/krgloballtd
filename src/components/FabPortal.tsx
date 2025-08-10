import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

function useFixedFabOnDesktop(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      // forcer la position à chaque frame de scroll (corrige le bug en scroll-up)
      el.style.position = "fixed";
      el.style.transform = "translate3d(0,0,0)";
      if (window.innerWidth >= 1024) {
        el.style.left = "20px";
        el.style.bottom = "24px";
      } else {
        // ne pas casser le mobile, valeurs soft (peu utilisées car hook desktop)
        el.style.left = "16px";
        el.style.bottom = "16px";
      }
      el.style.zIndex = "2147483647";
      el.style.pointerEvents = "auto";
    };

    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(apply); };
    const onResize = onScroll;

    apply(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [ref]);
}

export default function FabPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  useFixedFabOnDesktop(ref);

  if (!mounted) return null;
  const root = typeof document !== "undefined" ? document.body : null;
  if (!root) return <>{children}</>;

  // Wrapper externe UNIQUEMENT (on ne touche pas au bouton interne)
  return createPortal(
    <div
      ref={ref}
      className="kr-wa-fab"
      style={{
        // éviter les transitions foireuses sur la position
        transitionProperty: "none",
        // safe area iOS (n'influe pas desktop mais inoffensif)
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        left: "1rem",
      }}
    >
      {children}
    </div>,
    root
  );
}
