import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useIsScrolled } from "../hooks/useIsScrolled";
import { useEffect, useState } from "react";

export const Top = () => {
  const isScrolled = useIsScrolled();
  const [isProjectNavVisible, setIsProjectNavVisible] = useState(false);

  useEffect(() => {
    let observedTarget: Element | null = null;
    let intersectionObserver: IntersectionObserver | null = null;

    const observeProjectNav = () => {
      const target = document.querySelector("[data-hide-top]");

      if (target === observedTarget) {
        return;
      }

      intersectionObserver?.disconnect();
      observedTarget = target;
      setIsProjectNavVisible(false);

      if (!target) {
        return;
      }

      intersectionObserver = new IntersectionObserver(
        ([entry]) => setIsProjectNavVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      intersectionObserver.observe(target);
    };

    observeProjectNav();

    const mutationObserver = new MutationObserver(observeProjectNav);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && !isProjectNavVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileTap={{ scale: 0.8 }}
          className="fixed bottom-12 right-10 z-50 rounded-full bg-black md:w-15 md:h-15 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-xl text-white"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
