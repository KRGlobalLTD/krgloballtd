import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { buildCalendlyEmbedUrl } from "../lib/booking";

type BookingContextType = {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
};

function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = active ? "hidden" : prev;
    return () => { document.body.style.overflow = prev; };
  }, [active]);
}

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!active || !containerRef.current) return;
    const container = containerRef.current;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); (last || first).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); (first || last).focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    (first || container).focus();
    return () => document.removeEventListener("keydown", handleKey);
  }, [active, containerRef]);
}

export const BookingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
};

const BookingModal: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, closeBooking } = useBooking();
  const containerRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(isOpen, containerRef);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  return (
    <div
      className="booking-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeBooking();
      }}
    >
      <div className="booking-modal" ref={containerRef} tabIndex={-1}>
        <div className="booking-header">
          <div id="booking-title" className="booking-title">
            {t("booking.title")}
          </div>
          <button
            type="button"
            aria-label={t("booking.close")}
            className="booking-close"
            onClick={closeBooking}
          >
            ×
          </button>
        </div>
        <div className="booking-content">
          <iframe
            className="booking-iframe"
            title={t("booking.iframeTitle")}
            src={buildCalendlyEmbedUrl()}
            allow="payment *; microphone *; camera *; clipboard-read *; clipboard-write *;"
          />
        </div>
      </div>
    </div>
  );
};

