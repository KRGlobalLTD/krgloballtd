"use client";
import { useEffect, useRef, useState } from "react";

const URL_WEBM = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.webm";
const URL_MP4  = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mp4";
const URL_MOV  = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mov";

export default function HeroVideoDesktopFix() {
  const v = useRef<HTMLVideoElement|null>(null);
  // SAFE-GUARD: started may be used for future loading indicators
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = v.current; if (!el) return;

    // 1) déterminer l’ordre supporté (desktop Chrome ne lit souvent pas MOV)
    const order:string[] = [];
    const test = document.createElement("video");
    if (test.canPlayType('video/webm; codecs="vp9"')) order.push(URL_WEBM);
    if (test.canPlayType('video/mp4; codecs="avc1.42E01E"')) order.push(URL_MP4);
    order.push(URL_MOV); // fallback Safari/iOS

    // 2) poser les propriétés obligatoires AVANT play()
    el.muted = true;
    el.playsInline = true;
    // SAFE-GUARD: vendor-specific inline play for older iOS
    // @ts-expect-error legacy property
    el.webkitPlaysInline = true;

    let i = 0, tries = 0;
    const setSourceAndPlay = () => {
      el.src = order[i];        // <-- UNE seule source
      el.load();

      const kick = () => el.play()
        .then(() => setStarted(true))
        .catch(() => {
          // retry léger avant de changer de format
          if (tries++ < 2) return setTimeout(kick, 250);
          // passer à la source suivante
          if (i < order.length - 1) { i += 1; tries = 0; setSourceAndPlay(); }
        });

      kick();
    };

    // relancer quand l’onglet redevient visible (cas autoplay desktop)
    const onVis = () => { if (!document.hidden) setTimeout(() => el.play().catch(()=>{}), 100); };
    document.addEventListener("visibilitychange", onVis);

    setSourceAndPlay();

    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const mark = () => setStarted(true);

  return (
    <div className="relative w-full aspect-video min-h-[260px] sm:min-h-[360px] overflow-hidden rounded-xl bg-black">
      {/* pas d’overlay au-dessus de la vidéo; on garde un fond noir derrière */}
      <video
        ref={v}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={mark}
        onCanPlay={mark}
        onPlaying={mark}
      />
    </div>
  );
}

