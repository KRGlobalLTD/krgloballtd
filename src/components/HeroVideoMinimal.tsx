"use client";
import { useEffect, useRef } from "react";

const MOV_URL =
  "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mov";

export default function HeroVideoMinimal() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // iOS/Safari: s'assurer que ces propriétés sont posées AVANT play()
    el.muted = true;
    el.playsInline = true;
    (el as HTMLVideoElement & { webkitPlaysInline?: boolean }).webkitPlaysInline = true;

    let attempts = 0;
    const maxAttempts = 4;

    const tryPlay = () => {
      if (!el) return;
      el.play().catch(() => {
        // Retry à intervalles courts si bloqué au démarrage
        attempts += 1;
        if (attempts < maxAttempts) {
          setTimeout(tryPlay, 350);
        }
      });
    };

    // lancer tout de suite
    tryPlay();

    // relancer si l’onglet redevient visible
    const onVis = () => {
      if (!document.hidden) {
        el.muted = true;
        tryPlay();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className="relative w-full aspect-video min-h-[260px] sm:min-h-[360px] overflow-hidden rounded-xl bg-black">
      <video
        ref={ref}
        className="w-full h-full object-cover"
        // attributs HTML (en plus des propriétés JS posées au mount)
        autoPlay
        muted
        loop
        playsInline
        x-webkit-airplay="allow"
        preload="auto"
        // aucun controls, aucune pause
      >
        {/* .mov → type quicktime pour Safari/Chrome */}
        <source src={MOV_URL} type="video/quicktime" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
    </div>
  );
}

