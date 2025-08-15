import React, { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, titleId = "modal-title", children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const last = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) {
      last.current = document.activeElement as HTMLElement | null;
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      setTimeout(() => ref.current?.focus(), 0);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      last.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" onClick={onClose} />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative mx-3 w-full max-w-5xl rounded-2xl bg-white text-black shadow-2xl outline-none dark:bg-neutral-900 dark:text-white"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-xl border px-2 py-1 text-sm opacity-80 hover:opacity-100 dark:border-neutral-700"
        >
          ✕
        </button>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
};
