import { CALENDLY } from "./config/booking";
import { getCurrentLang } from "./utils/lang";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { CalendlyEmbed } from "./components/booking/CalendlyEmbed";

type BoundHTMLElement = HTMLElement & { __calendlyBound?: boolean };

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function ensurePortal() {
  let host = document.getElementById("calendly-portal-root");
  if (!host) {
    host = document.createElement("div");
    host.id = "calendly-portal-root";
    document.body.appendChild(host);
  }
  return host;
}

function mountModal(url: string, title: string, description?: string) {
  const host = ensurePortal();
  const root = createRoot(host);
  const ModalApp: React.FC = () => {
    const [open, setOpen] = useState(true);
    return React.createElement(CalendlyEmbed, {
      isOpen: open,
      onClose: () => setOpen(false),
      url,
      title,
      description,
    });
  };
  root.render(React.createElement(ModalApp));
}

function bindNode(el: BoundHTMLElement, mode: "tab" | "modal", url: string, lang: "fr" | "en") {
  // Evite doublons
  if (el.__calendlyBound) return;
  el.__calendlyBound = true;

  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
  el.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && el.dispatchEvent(new Event("click")));

  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (mode === "modal") {
      const title = lang === "en" ? "Book a 30‑minute call" : "Réserver 30 minutes";
      const desc =
        lang === "en"
          ? "Pick a time to discuss your project with KR Global Solutions LTD."
          : "Choisissez un créneau pour discuter de votre projet avec KR Global Solutions LTD.";
      mountModal(url, title, desc);
    } else {
      openInNewTab(url);
    }
  });
}

export function attachCalendlyEnhancer() {
  const lang = getCurrentLang();
  const url = lang === "en" ? CALENDLY.en : CALENDLY.fr;

  const all = Array.from(document.querySelectorAll<BoundHTMLElement>('[data-calendly="30min"]'));

  // Cible préférée pour le MODAL (dernière card / Pack Sur‑mesure) si dispo :
  let modalTarget: HTMLElement | null = null;
  if (CALENDLY.modalTargetSelector) {
    modalTarget = document.querySelector(CALENDLY.modalTargetSelector) as HTMLElement | null;
  }
  // Fallback : dernier bouton data-calendly de la page
  if (!modalTarget && all.length > 0) {
    modalTarget = all[all.length - 1]!;
  }

  // Bind : modal pour la cible, onglet pour les autres
  all.forEach((el) => {
    const mode: "tab" | "modal" = el === modalTarget ? "modal" : "tab";
    bindNode(el, mode, url, lang);
  });
}
