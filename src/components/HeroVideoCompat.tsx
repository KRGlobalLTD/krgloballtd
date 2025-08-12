"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const URL_WEBM = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.webm";
const URL_MP4  = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mp4";
const URL_MOV  = "https://rseczxloemshthscxuoa.supabase.co/storage/v1/object/public/videologo/Cinematic_blackandwhite_space_202508092340_.mov";
// Optionnel : mets un poster N&B si tu en as un (sinon laisse vide)
const URL_POSTER: string | undefined = undefined;

export default function HeroVideoCompat() {
  const vref = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  // Evaluate real browser support to order sources
  const sources = useMemo(() => {
    const order: { src: string; type: string }[] = [];
    if (typeof document !== "undefined") {
      const test = document.createElement("video");
      if (test.canPlayType('video/webm; codecs="vp9"')) {
        order.push({ src: URL_WEBM, type: 'video/webm; codecs="vp9"' });
      }
      if (test.canPlayType('video/mp4; codecs="avc1.42E01E"')) {
        order.push({ src: URL_MP4, type: 'video/mp4; codecs="avc1.42E01E"' });
      }
    }
    // Toujours finir par le MOV (Safari surtout)
    order.push({ src: URL_MOV, type: "video/quicktime" });
    return order;
  }, []);

  useEffect(() => {
    const el = vref.current;
    if (!el) return;

    // iOS/Safari: must set before play()
    el.muted = true;
    el.playsInline = true;
    // SAFE-GUARD: vendor-specific inline play for iOS Safari
    // @ts-expect-error webkit inline prop for older iOS
    el.webkitPlaysInline = true;

    let tries = 0;
    const kick = () => {
      el.play()
        .then(() => setStarted(true))
        .catch(() => {
          if (tries++ < 5) setTimeout(kick, 250);
        });
    };

    // Start immediately and restart when the tab becomes visible
    kick();
    const onVis = () => { if (!document.hidden) kick(); };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const mark = () => setStarted(true);

  return (
    <div className="relative w-full overflow-hidden px-4 aspect-video rounded-xl bg-black max-h-[420px] md:max-h-[520px]">
      {/* Black skeleton until playback starts */}
      {!started && <div aria-hidden className="absolute inset-0 bg-black z-0" />}
      <video
        ref={vref}
        className="w-full h-full object-cover md:object-contain z-[1]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={URL_POSTER}
        onLoadedData={mark}
        onCanPlay={mark}
        onPlaying={mark}
      >
        {sources.map((s, i) => (
          <source key={i} src={s.src} type={s.type} />
        ))}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

