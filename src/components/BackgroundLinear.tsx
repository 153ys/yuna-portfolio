import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundWrapper() {
  // 1. 監聽全頁面的捲動進度 (0 到 1)
  const { scrollYProgress } = useScroll();

  // 2. 映射顏色：當進度是 0, 0.5, 1 時，分別對應不同的顏色
  // 你可以自由增加更多的斷點
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1], 
    ["#FAF9F6", "#FADADD", "#E53E3E", "#2D3748"] 
  );

  return (
    // 3. 使用 motion.div 作為固定背景容器
    <motion.div 
      style={{ backgroundColor }} 
      className="min-h-screen transition-colors duration-300"
    >
      {/* 你的網頁內容放這裡 */}
    </motion.div>
  );
}