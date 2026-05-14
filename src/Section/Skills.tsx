import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faRobot,
  faWandMagicSparkles,
  faCircleCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  AnimatePresence,
  type Variants,
  useInView,
} from "framer-motion";

import Eye from "../components/Eye";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const folderCoverVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const paperVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotate: 0, x: 0 },
  show: (custom) => ({
    opacity: 1,
    rotate: custom.rotate,
    x: custom.x,
    y: custom.y,
    transformOrigin: "bottom center",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  }),
};

const activePaperVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
};

// 解析 **文字** 並轉換為粗體元件
const boldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const skillsData = [
  {
    title: "前後端開發",
    icon: faCode,
    bgColor: "bg-skills-blue",
    textColor: "text-skills-blue",
    tags: [
      "Vue.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "API",
      "RWD",
    ],
    items: [
      "框架應用：熟悉 **Vue / React**，具備 **SPA 元件化** 開發經驗",
      "樣式切版：精通 **Tailwind CSS**，能獨立完成 **RWD 響應式** 介面",
      "核心基礎：扎實的 **JavaScript** 邏輯，熟悉 DOM 操作與事件處理",
      "後端串接：具備 **Node.js / Supabase** 基礎，能進行 API 串接與資料存取",
      "版本控制：熟悉 **Git / GitHub** 多人協作與基礎部署流程",
    ],
  },
  {
    title: "UI / UX 設計",
    icon: faPalette,
    bgColor: "bg-skills-yellow",
    textColor: "text-skills-yellow",
    tags: ["Figma", "Wireframe", "Prototype", "UIUX", "Case Study"],
    items: [
      "原型設計：熟悉 **Wireframe / Prototype**，將抽象需求轉為具體互動",
      "體驗優化：規劃 **User Flow** 與資訊架構，從使用者角度優化操作路徑",
      "專案落地：具備參與 Landing Page 與 LINE LIFF 開發經驗，**能從需求到實作完整落地**",
    ],
  },
  {
    title: "AI 應用",
    icon: faRobot,
    bgColor: "bg-skills-green",
    textColor: "text-skills-green",
    tags: ["ChatGPT", "Gemini", "Claude", "Midjourney", "Nano Banana"],
    items: [
      "開發輔助：善用 AI 工具進行程式**邏輯驗證**與**除錯協助**",
      "視覺發想：使用 **Midjourney** 進行高品質圖像生成與素材創作",
      "工作流整合：將 AI **無縫整合**至設計與開發流程，大幅提升產出效率",
    ],
  },
  {
    title: "平面設計",
    icon: faWandMagicSparkles,
    bgColor: "bg-skills-pink",
    textColor: "text-skills-pink",
    tags: ["Adobe", "Visual", "Marketing"],
    items: [
      "數位行銷：擁有 4 年動靜態社群媒體與**廣告素材製作**經驗",
      "視覺設計：精通 **Photoshop / Illustrator** 等 Adobe 核心軟體",
      "品牌思維：具備版面規劃能力，能精準掌握並強化產品**視覺一致性**",
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const [activeTab, setActiveTab] = useState<number | null>(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return 0;
    }
    return null;
  });

  // 文件展開的角度與位移
  const fanOutProps = [
    { rotate: -18, x: -35, y: -15 },
    { rotate: -6, x: -15, y: -30 },
    { rotate: 6, x: 15, y: -80 },
    { rotate: 18, x: 35, y: -10 },
  ];

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="relative px-4 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center min-h-25 md:min-h-[90vh]">
        {/* --- 左: 資料夾區塊 --- */}
        <div className="scale-90 md:scale-100 relative w-full md:w-1/2 lg:w-5/12 h-65 sm:h-75 md:h-100 shrink-0 flex items-end justify-center z-10">
          {/* 固定尺寸定位與縮放容器 */}
          <div className="relative w-72.5 h-77.5 scale-[0.75] sm:scale-90 md:scale-100 origin-bottom">
            {/* 資料夾 */}
            <motion.div
              variants={folderCoverVariants}
              className="absolute bottom-0 left-0 w-full h-47.5 bg-skills-folder border-3 border-black rounded-tr-xl rounded-b-xl z-51 shadow-brutal flex flex-col items-center justify-center"
            >
              <div className="flex flex-row gap-5">
                <Eye />
                <Eye />
              </div>
              {/* 資料夾上方凸起標籤 */}
              <div className="absolute top-0 -left-0.5 w-[35%] h-6 bg-skills-folder border-3 border-b-0 border-black rounded-t-xl -mt-6"></div>
            </motion.div>
            <AnimatePresence>
              {skillsData.map((skill, index) => {
                if (activeTab === index) return null;

                const isLeft = index < 2;
                const { rotate, x, y } = fanOutProps[index];

                return (
                  // Paper
                  <motion.div
                    key={`inactive-${index}`}
                    onClick={() => setActiveTab(index)}
                    data-clickable="true"
                    className="absolute bottom-6 left-10 w-55 h-70 bg-white border-2 border-black rounded-xl hover:z-40"
                    style={{ zIndex: 10 + index }}
                    custom={{ rotate, x, y }}
                    variants={paperVariants}
                    exit={{ opacity: 0, y: y + 30, scale: 0.9 }}
                    whileHover={{
                      y: y - 20,
                      rotate: rotate * 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                  >
                    {/* 彩色標籤 */}
                    <div
                      className={`absolute top-[15%] ${
                        isLeft
                          ? "-left-0.5 -translate-x-full rounded-l-lg border-r-0"
                          : "-right-0.5 translate-x-full rounded-r-lg border-l-0"
                      } ${skill.bgColor} border-2 border-black px-3 py-1.5 font-bold text-sm whitespace-nowrap`}
                    >
                      {skill.title}
                    </div>

                    {/* 文件內容裝飾 */}
                    <div className="p-6 flex flex-col gap-4 opacity-20">
                      <div className="w-1/2 h-4 bg-black rounded-full"></div>
                      <div className="w-full h-3 bg-gray-500 rounded-full mt-4"></div>
                      <div className="w-5/6 h-3 bg-gray-500 rounded-full"></div>
                      <div className="w-full h-3 bg-gray-500 rounded-full"></div>
                      <div className="w-3/4 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* --- 右：閱讀區 --- */}
        <AnimatePresence>
          {activeTab !== null && (
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTab(null)}
              className="md:hidden fixed inset-0 bg-black/60 z-51 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {activeTab !== null ? (
            <motion.div
              key={`active-paper-${activeTab}`}
              variants={activePaperVariants}
              exit={{ opacity: 0, y: -50 }}
              className="fixed inset-x-4 md:-top-16 top-[10%] bottom-[10%] z-51 md:relative md:inset-auto md:z-20 h-[80vh] md:flex-1 bg-white border-2 border-black rounded-xl shadow-brutal p-6 sm:p-6 flex flex-col md:ml-8 overflow-hidden"
            >
              {/* 右上角關閉按鈕 */}
              <button
                onClick={() => setActiveTab(null)}
                data-clickable="true"
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center p-2 bg-white border-2 border-black rounded-full shadow-brutal-sm hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all z-10 hover:bg-black hover:text-white"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-10 h-10 sm:w-8 sm:h-8"
                />
              </button>

              {/* 文件內容 (淡入顯示) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex flex-col gap-6 overflow-y-auto h-full pr-2"
              >
                {/* 標題與 Icon */}
                <div className="flex items-center gap-4 border-b-2 border-black pb-4 pr-12">
                  {(() => {
                    return (
                      <FontAwesomeIcon
                        icon={skillsData[activeTab].icon}
                        className={`text-2xl ${skillsData[activeTab].textColor}`}
                      />
                    );
                  })()}
                  <h3 className="text-xl sm:text-2xl font-black">
                    {skillsData[activeTab].title}
                  </h3>
                </div>

                {/* 標籤區塊 */}
                <div className="flex flex-wrap gap-2">
                  {skillsData[activeTab].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm font-heading shadow-brutal-sm bg-white border-brutal px-3 py-1.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 內容列表 */}
                <ul className="flex flex-col gap-4 mt-2">
                  {skillsData[activeTab].items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[0.95rem] sm:text-[1.05rem] text-gray-800 leading-relaxed group"
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${skillsData[activeTab].textColor} shrink-0 mt-0.5 transition-colors`}
                      />
                      <span>{boldText(item)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              variants={activePaperVariants}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="hidden md:flex flex-1 items-center justify-center flex-col opacity-40 md:ml-8"
            >
              {/* TODO: 之後要放指引文字 */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}