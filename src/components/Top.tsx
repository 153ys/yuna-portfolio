import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useIsScrolled } from "../hooks/useIsScrolled";

export const Top = () => {
  const isScrolled = useIsScrolled();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileTap={{ scale: 0.8 }}
          className="fixed bottom-10 right-10 z-50 rounded-full bg-black md:w-15 md:h-15 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-8 h-8 md:w-9 md:h-9 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
