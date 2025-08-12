import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [canAutoplay, setCanAutoplay] = useState(false);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCanAutoplay(!mq.matches);
    const handler = () => setCanAutoplay(!mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // IntersectionObserver: play only when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const tryPlay = async () => {
      try {
        if (canAutoplay && visible) {
          await el.play();
        }
      } catch {
        /* SAFE-GUARD: autoplay may be blocked; user gesture will start playback */
      }
    };

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        if (visible) tryPlay();
        else el.pause();
      });
    };

    const io = new IntersectionObserver(onIntersect, {
      threshold: [0, 0.25, 0.5, 1],
    });
    io.observe(el);

    // Pause when tab hidden / resume when visible
    const onVis = () => {
      if (document.hidden) el.pause();
      else if (visible && canAutoplay) el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [canAutoplay]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg">
      <video
        ref={ref}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
      >
        {/* Ajouter WEBM si dispo pour Chrome/Android */}
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
}

