"use client";
import { useEffect, useRef, useState } from "react";

const MOV_URL = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mov";
// Optionnel : si tu ajoutes plus tard des versions optimisées :
const WEBM_URL: string | null = null; // ex: "/videos/hero.webm"
const MP4_URL:  string | null = null; // ex: "/videos/hero.mp4"
const POSTER_URL: string | undefined = undefined; // ex: "/videos/hero-poster.jpg"

export default function HeroVideoURL() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true); // visible par défaut

  // IO: joue quand visible, pause sinon (simple et robuste)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? true),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => {
      // SAFE-GUARD: prevent leaks by disconnecting observer on unmount
      io.disconnect();
    };
  }, []);

  // Autoplay iOS/desktop
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true; // SAFE-GUARD: requis pour autoplay iOS
    if (visible) {
      el.play().catch(() => {
        // SAFE-GUARD: si l’autoplay est bloqué, on laisse l’utilisateur cliquer
      });
    } else {
      el.pause();
    }
  }, [visible]);

  return (
    <div className="relative w-full aspect-video min-h-[260px] sm:min-h-[360px] overflow-hidden rounded-xl bg-black">
      {!loaded && (
        <div
          aria-hidden
          className="absolute inset-0 bg-black"
          style={POSTER_URL ? { backgroundImage: `url(${POSTER_URL})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        />
      )}
      <video
        ref={ref}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_URL}
        onLoadedData={() => setLoaded(true)}
      >
        {/* Ordre conseillé si un jour tu ajoutes les formats optimisés */}
        {WEBM_URL && <source src={WEBM_URL} type="video/webm" />}
        {MP4_URL  && <source src={MP4_URL}  type="video/mp4" />}
        {/* Fallback actuel : MOV public (type mp4 pour compat HLS/avc) */}
        <source src={MOV_URL} type='video/mp4; codecs="h264"' />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
    </div>
  );
}

