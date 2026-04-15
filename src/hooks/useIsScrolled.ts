import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

/**
 * 偵測頁面是否已滾動超過指定閾值
 * @param threshold 滾動距離閾值（px），預設 50
 */
export function useIsScrolled(threshold = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= threshold && isScrolled) {
      setIsScrolled(false);
    }
  });

  return isScrolled;
}
