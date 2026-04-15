import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useIsScrolled } from "../hooks/useIsScrolled";

export const Top = () => {
  const isScrolled = useIsScrolled();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileTap={{ scale: 0.8 }}
          className="fixed bottom-10 right-10 rounded-full bg-black md:w-15 md:h-15 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-8 h-8 md:w-9 md:h-9" color="white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
