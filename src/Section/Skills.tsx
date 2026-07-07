import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faRobot,
  faWandMagicSparkles,
  faCircleCheck,
  faXmark,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  AnimatePresence,
  type Variants,
  useInView,
} from "framer-motion";
import Eye from "../components/Eye";
import Icon from "../components/Icon";

const fanOutProps = [
  { rotate: -18, x: -35, y: -15 },
  { rotate: -6, x: -15, y: -50 },
  { rotate: 6, x: 15, y: -80 },
  { rotate: 18, x: 35, y: -10 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
    title: "UI / UX 設計",
    icon: faPalette,
    bgColor: "bg-skills-yellow",
    textColor: "text-skills-yellow",
    tags: ["Figma", "Wireframe", "Prototype", "User Flow", "Design Systems"],
    items: [
      "**需求轉譯**：能將專案目標、使用情境與功能需求整理成清楚的 **User Flow** 與頁面架構，協助團隊對齊產品方向",
      "**原型設計**：熟練操作 **Figma** 進行 **Wireframe / Prototype** 繪製，將抽象需求具現化為可討論、可驗證的互動流程",
      "**體驗優化**：從使用者操作路徑、資訊層級與回饋狀態檢視介面，調整流程中的斷點與不確定感",
      "**設計交付**：能整理元件狀態、間距規則與互動細節，讓設計稿更容易被前端理解與實作",
    ],
  },
  {
    title: "AI 輔助設計",
    icon: faRobot,
    bgColor: "bg-skills-green",
    textColor: "text-skills-green",
    tags: ["ChatGPT", "Claude", "Gemini", "Canva AI", "Prompt Design"],
    items: [
      "**概念發想**：運用 **ChatGPT / Gemini** 等 AI 工具快速整理競品觀察、情境腳本與功能假設，作為設計初期的發散素材",
      "**提示設計**：能根據角色、情境、限制與輸出格式撰寫 **Prompt**，讓 AI 產出更貼近設計需求的文案與內容結構",
      "**內容規劃**：協助整理介面文字、流程提示與資訊層級，讓使用者在操作過程中更容易理解下一步",
      "**視覺探索**：運用 **Canva AI / Claude** 輔助 moodboard、風格方向與版面概念發想，提高前期探索效率",
    ],
  },
  {
    title: "視覺與介面設計",
    icon: faWandMagicSparkles,
    bgColor: "bg-skills-pink",
    textColor: "text-skills-pink",
    tags: [
      "Illustrator",
      "Photoshop",
      "AfterEffect",
      "Premiere",
      "Visual Design",
      "Branding",
      "Social Media",
    ],
    items: [
      "**視覺經驗**：擁有 **4 年動靜態社群媒體與廣告素材** 製作經驗，熟悉從提案、版面規劃到交付的完整流程",
      "**介面表現**：能運用色彩、字級、留白與視覺層級建立清楚的閱讀節奏，讓介面資訊更容易被掃描與理解",
      "**品牌一致性**：理解品牌視覺規範，能將既有風格延伸到網站、活動頁與產品介面，維持整體體驗一致",
      "**設計工具**：熟練操作 **Photoshop / Illustrator** 等 Adobe 系列製圖工具，能快速處理圖片素材、圖像元素與行銷視覺延伸",
    ],
  },
  {
    title: "前端協作",
    icon: faCode,
    bgColor: "bg-skills-blue",
    textColor: "text-skills-blue",
    tags: [
      "React.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "API",
      "RWD",
    ],
    items: [
      "**設計可行性**：具備 **React / Vue** 與元件化概念，能在設計階段評估互動狀態、版面限制與實作成本",
      "**響應式設計**：熟悉 **Tailwind CSS** 與 **RWD** 切版邏輯，能規劃桌機、平板與手機版在資訊密度上的差異",
      "**前端溝通**：了解 **JavaScript / TypeScript**、API 串接與資料狀態，能與工程師討論資料來源、載入狀態與錯誤回饋",
      "**設計落地**：能從設計稿延伸到實作細節，檢查間距、字級、互動回饋與視覺還原度，降低設計與開發之間的落差",
      "**協作流程**：熟悉 **Git / GitHub** 基本協作流程，能理解版本管理、分支與交付節奏，提升跨職能合作效率",
    ],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const [activeTab, setActiveTab] = useState<number | null>(() =>
    window.matchMedia("(min-width: 768px)").matches ? 0 : null,
  );
  const [modalKey, setModalKey] = useState("active-paper");

  const handlePaperClick = (index: number) => {
    setModalKey(`active-paper-${index}`);
    setActiveTab(index);
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) =>
      setActiveTab(e.matches ? 0 : null);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="skills"
      className="overflow-x-hidden pt-15 md:pt-20 pb-10 px-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:text-left text-center">
          {/* 標題 */}
          <h2 className="md:ml-15 relative inline-block mb-5 md:mb-0 text-4xl md:text-5xl font-heading font-black uppercase">
            <motion.div
              className="-z-1 absolute -top-6 -left-6 md:-left-12 w-12 md:w-20"
              animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon name="deco_flower_3" className="w-full h-full" />
            </motion.div>
            Skills
          </h2>
          {/* guide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.7, y: 10 }
            }
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.1,
            }}
            className="relative left-[10vw] -rotate-3 dialogue top-2 bg-black rounded-full w-fit px-3 py-1 md:hidden mb-10"
          >
            <div className="triangle absolute -bottom-2 left-10"></div>
            <p className="font-medium text-xs text-center font-heading text-white">
              快點擊檔案看看 Yuna 有哪些技能！
            </p>
          </motion.div>
          {/* 內容 */}
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="relative px-4 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center min-h-25 md:min-h-[60vh] xl:min-h-[90vh]">
              {/* --- 左: 資料夾區塊 --- */}
              <div className="scale-90 md:-left-10 md:scale-100 relative w-full md:w-1/2 lg:w-5/12 h-65 sm:h-75 md:h-100 shrink-0 flex items-end justify-center z-10">
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
                          onClick={() => handlePaperClick(index)}
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
                          <div className="relative">
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
                    key={modalKey}
                    variants={activePaperVariants}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed inset-x-4 md:-top-16 top-[5%] bottom-[5%] z-51 md:relative md:inset-auto md:z-20 md:h-fit h-[70vh] md:flex-1 bg-white border-2 border-black rounded-xl shadow-brutal p-6 sm:p-6 flex flex-col md:ml-8 overflow-hidden"
                  >
                    {/* 右上角關閉按鈕 */}
                    <button
                      aria-label="關閉清單"
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
                      className="flex flex-col gap-6 overflow-y-auto flex-1 pr-2 pb-2 md:pb-4"
                    >
                      {/* 標題與 Icon */}
                      <div className="flex items-center gap-4 border-b-2 border-black pb-4 pr-12">
                        <FontAwesomeIcon
                          icon={skillsData[activeTab].icon}
                          className={`text-2xl ${skillsData[activeTab].textColor}`}
                        />
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
                            className="flex items-start gap-3 text-[0.95rem] sm:text-[1.05rem] text-gray-800 text-left leading-relaxed group"
                          >
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${skillsData[activeTab].textColor} shrink-0 mt-1 transition-colors`}
                            />
                            <span>{boldText(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    {/* 底部箭頭 + Dot 導覽 - 手機專用 */}
                    <div className="md:hidden flex items-center justify-between pt-3 shrink-0">
                      <button
                        onClick={() =>
                          setActiveTab(
                            ((activeTab ?? 0) - 1 + skillsData.length) %
                              skillsData.length,
                          )
                        }
                        data-clickable="true"
                        className="w-9 h-9 flex items-center justify-center border-2 border-black rounded-full bg-white shadow-brutal-sm hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
                      >
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </button>

                      <div className="flex gap-2.5">
                        {skillsData.map((skill, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            data-clickable="true"
                            className={`w-2.5 h-2.5 rounded-full border-2 border-black transition-all ${
                              activeTab === index ? skill.bgColor : "bg-white"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setActiveTab(
                            ((activeTab ?? 0) + 1) % skillsData.length,
                          )
                        }
                        data-clickable="true"
                        className="w-9 h-9 flex items-center justify-center border-2 border-black rounded-full bg-white shadow-brutal-sm hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
                      >
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    variants={activePaperVariants}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="text-xl font-medium gap-5 hidden md:flex flex-1 flex-row items-center justify-center opacity-40 md:ml-8"
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-4xl text-tertiary animate-bounce rotate-90"
                    />{" "}
                    <span className="text-tertiary">
                      點擊左邊的檔案看看 Yuna 有哪些技能！
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
