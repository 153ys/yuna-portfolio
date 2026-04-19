import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // 偵測是否在可點擊元素上
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-105 pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        animate={{
          scale: isHovered ? 1.2 : isClicked ? 0.8 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <path
          d="M10.45,28.39a1.61,1.61,0,0,1-.44-.06,1.51,1.51,0,0,1-1-1.27L6.35,4.3A1.49,1.49,0,0,1,7.1,2.83a1.42,1.42,0,0,1,.74-.2,1.48,1.48,0,0,1,.9.3L26.9,16.62a1.52,1.52,0,0,1,.56,1.54,1.5,1.5,0,0,1-1.18,1.13L17.49,21l-5.9,6.89A1.49,1.49,0,0,1,10.45,28.39Z"
          fill={isHovered ? "#FFD82D" : "white"}
          stroke="black"
          strokeWidth="2"
          viewBox="0 0 32 32"
        />
      </motion.svg>
    </motion.div>
  );
}
