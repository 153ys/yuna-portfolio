import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Eye() {
  const eyeRef = useRef<HTMLDivElement>(null);
  
  // 使用 useMotionValue 取代 useState，避免在每次滑鼠移動時觸發重新渲染
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 加入物理彈簧效果，使移動更平滑
  const springX = useSpring(x, { damping: 30, stiffness: 200 });
  const springY = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (eyeRef.current) {
        // 獲取眼球在網頁上的絕對位置
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // 計算滑鼠與眼球中心的距離
        const dX = event.clientX - eyeX;
        const dY = event.clientY - eyeY;

        const distance = Math.sqrt(dX * dX + dY * dY);
        
        // 限制眼珠移動的半徑
        // 外框 50x50 (扣除 border 3px 後內徑約 44x44，半徑 22)
        // 黑色瞳孔 20x20 (半徑 10)
        // 最大移動距離 = 22 - 10 = 12，設定 11 避免貼齊邊界
        const maxDistance = 11;
        
        // 讓眼球稍微有一點平滑跟隨的比例感（距離越遠，越靠近邊緣）
        // 這裡設定當距離達到 100px 時，眼珠碰到邊界
        const moveRatio = Math.min(distance / 100, 1);
        const limitedDistance = maxDistance * moveRatio;

        // 計算角度並設定新的位置
        const angle = Math.atan2(dY, dX);
        x.set(Math.cos(angle) * limitedDistance);
        y.set(Math.sin(angle) * limitedDistance);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div
      ref={eyeRef}
      style={{
        width: 40,
        height: 80,
        borderRadius: "50%",
        backgroundColor: "white",
        border: "3px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          width: 20,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}
