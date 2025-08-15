import React, { useMemo } from "react";
import { Modal } from "../ui/Modal";
import { setPageSEO } from "../../utils/seo";

type CalendlyEmbedProps = {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description?: string;
};

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ isOpen, onClose, url, title, description }) => {
  const src = useMemo(() => (isOpen ? url : ""), [isOpen, url]);
  if (isOpen) {
    setPageSEO(`${title} | KR Global Solutions LTD`, description || "Book a 30‑minute call with KR Global Solutions LTD");
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="calendly-title">
      <h2 id="calendly-title" className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        {src ? (
          <iframe
            title={title}
            src={src}
            loading="lazy"
            className="h-[70vh] w-full sm:h-[75vh]"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
          />
        ) : (
          <div className="flex h-[70vh] w-full items-center justify-center text-sm opacity-70 sm:h-[75vh]">Loading…</div>
        )}
      </div>
    </Modal>
  );
};
