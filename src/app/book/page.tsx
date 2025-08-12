import { useEffect } from "react";

export default function BookPage() {
  const isEN =
    typeof window !== "undefined" && window.location.pathname.startsWith("/en");
  const url = `${isEN ? process.env.NEXT_PUBLIC_CALENDLY_URL_EN : process.env.NEXT_PUBLIC_CALENDLY_URL_FR}?primary_color=ffffff`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        {isEN ? "Book a slot" : "Réserver un créneau"}
      </h1>

      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "800px" }}
      />
    </main>
  );
}
