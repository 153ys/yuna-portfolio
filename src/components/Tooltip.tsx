import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TooltipProps = {
  info: string;
  children: React.ReactNode;
  className?: string;
};

export const Tooltip = ({ info, children, className = "" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
          >
            <div className="bg-black text-white text-sm px-4 py-1.5 rounded-full whitespace-nowrap">
              {info}
            </div>
            <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-black mx-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default Tooltip;
