export function getCurrentLang(): "fr" | "en" {
  try {
    const ls = (typeof window !== "undefined" && localStorage.getItem("lang")) as "fr" | "en" | null;
    const html = (typeof document !== "undefined" && document.documentElement.getAttribute("lang")) as
      | "fr"
      | "en"
      | null;
    return (ls || html || "fr") === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}
