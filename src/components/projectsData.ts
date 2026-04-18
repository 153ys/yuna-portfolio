export type Project = {
  title: string;
  time: string;
  tags: string[];
  description: string;
  pic: string;
  github?: string;
  projectLink?: string;
  projectInfo?: InfoSection[];
};

export type InfoSection = {
  title?: string;
  subTitle?: string;
  content?: string;
  list?: string[];
  image?: string[];
  link?: string;
  UXProblme?: string[];
};

export type UXProblem = {
  title: string;
  content: string;
};

export const projectsData: Project[] = [
  {
    title: "PetPetNi 寵物社交平台",
    time: "2025/11~2026/1",
    tags: [
      "Vue.js",
      "Pinia",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "GIT",
    ],
    description:
      "PetPetNi 是以寵物為核心的社群平台，整合了社群貼文、即時聊天、活動揪團、配對功能及 AI 助手，串聯線上社群互動與線下生活情境，打造高黏著度的寵物社交生態圈。",
    pic: "/petpetni_image_image.jpg",
    github: "https://github.com/153ys/PetPetNi",
    projectLink: "https://pet-pet-ni.vercel.app/",
    projectInfo: [
      {
        title: "專案概述",
        content:
          "PetPetNi 在為飼主解決帶寵物出門時的交友與活動安排痛點。透過直覺的操作介面，飼主能快速建立寵物資料並開始在平台上與其他飼主交流。",
      },
      {
        title: "我的角色",
        content:
          "主責整體視覺規劃、訂定樣式規範與社群頁面核心功能模組（如：貼文牆、配對流程）的開發。",
        list: [
          "制定前端共用元件與設計規範",
          "負責與後端 API 串接與資料狀態管理 (Pinia)",
          "設計並實作 RWD 響應式佈局",
        ],
      },
      {
        title: "專案流程",
        subTitle: "線框稿與設計",
        content: "以 Miro 繪製流程圖，Figma 繪製 Wireframe",
        image: ["/social_view.webp", "/comment_view.webp"],
      },
      {
        title: "UX 決策與挑戰",
      },
      {
        title: "收穫與反思",
        content: "",
      },
    ],
  },

  {
    title: "UIUX Case Study",
    time: "2025",
    tags: ["Figma", "Wireframe", "Prototype", "UIUX", "Case Study"],
    description: "專案描述",
    pic: "",
    projectInfo: [
      {
        title: "1. 專案概述",
        content:
          "此專題旨在重新設計一個購物網站的結帳流程，減少購物車放棄率並優化使用者體驗。",
      },
      {
        title: "2. UI/UX 決策與挑戰",
        content:
          "最大的挑戰是在兼顧商業推廣（加購商品）與無痛結帳（減低填寫欄位疲勞）之間取得平衡。我們最終決定使用步進式（Stepper）表單設計。",
        list: [
          "精簡表單輸入欄位，移除不必要的選項",
          "新增進度條指示器 (Progress Bar) 讓使用者掌握結帳階段",
          "自動填寫同上的收件人資訊以節省操作時間",
        ],
      },
    ],
  },
];
