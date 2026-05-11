import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isClickedRef = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // 偵測是否為觸控設備 (包含手機、平板等)
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouch();
  }, []);

  const cursorX = useSpring(0, { stiffness: 1000, damping: 40, mass: 0.1 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 40, mass: 0.1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (isClickedRef.current) return;
      const target = e.target as HTMLElement;
      const isClickable = !!target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, [data-clickable='true']",
      );
      const isDragTarget = !!target.closest("[data-draggable='true']");

      setIsHovered(isClickable && !isDragTarget);
      setIsDraggable(isDragTarget);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      isClickedRef.current = true;
    };
    
    const handleMouseUp = (e: MouseEvent) => {
      setIsClicked(false);
      isClickedRef.current = false;
      
      const target = e.target as HTMLElement;
      if (target) {
        const isClickable = !!target.closest(
          "a, button, input, select, textarea, [role='button'], .cursor-pointer, [data-clickable='true']",
        );
        const isDragTarget = !!target.closest("[data-draggable='true']");
        setIsHovered(isClickable && !isDragTarget);
        setIsDraggable(isDragTarget);
      }
    };

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

  // 如果是觸控設備 (手機版)，則完全不顯示自定義游標
  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed -top-2 -left-2 z-105 pointer-events-none"
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
          scale: isDraggable ? (isClicked ? 0.9 : 1.3) : isHovered ? 1 : isClicked ? 0.8 : 1,
          rotate: isDraggable ? 0 : isHovered ? 15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDraggable ? (
          <>
            <path
              d="M16 4L16 28M4 16L28 16M16 4L12 8M16 4L20 8M16 28L12 24M16 28L20 24M4 16L8 12M4 16L8 20M28 16L24 12M28 16L24 20"
              fill="none"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4L16 28M4 16L28 16M16 4L12 8M16 4L20 8M16 28L12 24M16 28L20 24M4 16L8 12M4 16L8 20M28 16L24 12M28 16L24 20"
              fill="none"
              stroke={isClicked ? "#FFD82D" : "white"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <path
            d="M10.45,28.39a1.61,1.61,0,0,1-.44-.06,1.51,1.51,0,0,1-1-1.27L6.35,4.3A1.49,1.49,0,0,1,7.1,2.83a1.42,1.42,0,0,1,.74-.2,1.48,1.48,0,0,1,.9.3L26.9,16.62a1.52,1.52,0,0,1,.56,1.54,1.5,1.5,0,0,1-1.18,1.13L17.49,21l-5.9,6.89A1.49,1.49,0,0,1,10.45,28.39Z"
            fill={isHovered ? "#FFD82D" : "white"}
            stroke="black"
            strokeWidth="2"
          />
        )}
      </motion.svg>
    </motion.div>
  );
}
