import React, { createContext, useCallback, useContext } from "react";

const CALENDLY_URL = "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone";

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

export const BookingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const openBooking = useCallback(() => {
    const cal = (window as any).Calendly;
    if (cal?.showPopupWidget) {
      cal.showPopupWidget(CALENDLY_URL);
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  const closeBooking = useCallback(() => {
    const cal = (window as any).Calendly;
    if (cal?.closePopupWidget) cal.closePopupWidget();
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen: false, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
