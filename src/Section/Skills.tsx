import { Code, Palette, Bot, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* 父容器：staggerChildren 讓子卡片依序進入 */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* 子卡片：從上方淡入 */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const skillsData = [
  {
    title: "前後端開發",
    icon: Code,
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
      "實務使用 Vue、React 等框架，具備元件化開發與 SPA 架構經驗",
      "使用 Tailwind CSS 進行 UI 開發，具備 RWD 響應式設計能力",
      "具備以純 JavaScript 實作功能邏輯能力，熟悉 DOM 操作與事件處理",
      "具備 Node.js、Express 或 Supabase 基礎，能進行 API 串接與資料存取",
      "熟悉 Git / GitHub 版本控制，具備多人協作開發與基本部署流程",
    ],
  },
  {
    title: "UI / UX 設計",
    icon: Palette,
    tags: ["Figma", "Wireframe", "Prototype", "UIUX", "Case Study"],
    items: [
      "具備 Landing Page 與 LINE LIFF 設計與開發經驗，能從需求到實作完整落地",
      "熟悉 Wireframe 與 Prototype 設計流程，將需求轉化為具體介面與互動",
      "能規劃使用者操作流程（User Flow）與資訊架構，提升操作直覺性",
      "從使用者角度檢視介面設計，調整操作路徑與互動細節以優化體驗",
      "根據使用情境調整介面配置與操作流程，提升使用流暢度",
    ],
  },
  {
    title: "AI 應用",
    icon: Bot,
    tags: ["ChatGPT", "Gemini", "Claude", "Midjourney", "Nano Banana"],
    items: [
      "運用 AI 工具輔助理解技術問題，協助除錯與解法探索",
      "於開發過程中使用 AI 進行程式邏輯驗證與實作參考",
      "使用生成式 AI（如 Midjourney）進行圖像生成與視覺發想",
      "能將 AI 作為輔助工具整合於開發與設計流程中",
    ],
  },
  {
    title: "設計背景",
    icon: Sparkles,
    tags: ["Adobe", "Visual", "Marketing"],
    items: [
      "擁有四年動靜態社群與廣告素材製作經驗",
      "熟悉 Adobe 設計工具(Photoshop, Illustrator 等)",
      "具備視覺設計與版面規劃能力",
      "強化產品視覺一致性",
    ],
  },
];

export default function Skills() {
  return (
    <section className="px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6"
      >
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-brutal shadow-brutal p-6 hover:scale-102"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-heading shadow-brutal-sm bg-primary border-brutal px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
