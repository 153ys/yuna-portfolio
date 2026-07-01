import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ImagePreviewModalProps = {
  image: {
    src: string;
    alt: string;
    description?: string;
  } | null;
  onClose: () => void;
};

export default function ImagePreviewModal({
  image,
  onClose,
}: ImagePreviewModalProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="圖片預覽"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black/50"
            aria-label="關閉圖片預覽"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} className="h-5 w-5 text-white" />
          </button>
          <motion.div
            className="relative max-h-full w-fit max-w-full"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex max-h-[88vh] max-w-full flex-col items-center gap-3">
              <img
                src={image.src}
                alt={image.alt}
                crossOrigin="anonymous"
                className="max-h-[82vh] w-auto max-w-full rounded-xl border-2 border-black bg-white object-contain"
              />
              {image.description && (
                <figcaption className="max-w-3xl text-white text-center text-sm font-medium">
                  {image.description}
                </figcaption>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
