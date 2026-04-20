export type Project = {
  title: string;
  time: string;
  tags: string[];
  info: string;
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
  description?: string;
  link?: string;
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
    info: "PetPetNi 是以寵物為核心的社群平台，整合了社群貼文、即時聊天、活動揪團、配對功能及 AI 助手，串聯線上社群互動與線下生活情境，打造高黏著度的寵物社交生態圈。",
    pic: "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776672166/PetPetNi_ni7orj.webp",
    github: "https://github.com/153ys/PetPetNi",
    projectLink: "https://pet-pet-ni.vercel.app/",
    projectInfo: [
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
        content: "以 Miro 繪製 Wireframe，Figma 繪製 Mockup",
        image: [
          "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593214/social_view_yzskql.webp",
          "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593165/comment_view_ir15lj.webp",
          "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776620862/petpetni_figma_jxgayc.webp",
        ],
      },
    ],
  },

  {
    title: "寵物社交配對體驗優化",
    time: "2026/04",
    tags: ["Case Study", "UX", "UserFlow", "Claude Design"],
    info: "以 PetPetNi 的抽卡配對機制為出發點，重新設計配對結果的呈現方式，提升使用者的理解與信任，並引導自然開啟互動。",
    pic: "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776674726/match_result_ijh3ig.webp",
    projectInfo: [
      {
        title: "問題定義",
        content:
          "為降低使用者搜尋成本，採用每日一次的抽卡機制，並根據地區與寵物標籤進行自動媒合，呈現配對對象與配對指數。然而，此機制在提升趣味性的同時，也產生以下體驗問題：",
        subTitle: "",
        list: [
          "使用者缺乏主動選擇權，配對過程較為被動",
          "配對結果的判斷依據（如雷達圖）不易理解，影響信任感",
          "即使成功配對，仍缺乏有效引導，導致互動啟動率偏低",
        ],
      },
      {
        title: "洞察",
        content:
          "抽卡機制能帶來期待感與新鮮感，但在社交配對情境中，使用者更在意的是「配對品質」與「互動可能性」。當配對結果無法被理解或感覺不可控時，遊戲化機制反而會轉化為挫折感，進而降低持續使用意願。因此，設計需在「趣味性」與「可理解性／可控性」之間取得平衡，並進一步降低配對後的互動門檻。",
      },
      {
        title: "目標",
        list: [
          "提升使用者對配對結果的理解與信任",
          "在維持抽卡機制下，增加使用者參與感與控制感",
          "提高配對後的互動啟動率（破冰）",
        ],
      },
      {
        title: "解方",
        subTitle: "1. 雷達圖優化",
        list: [
          "當滑鼠懸浮/點擊維度指標時，顯示解釋，(例如：特質代表寵物的個性)",
          "加一句總結：「你們適合一起戶外遛狗」，讓使用者一眼就知道為什麼配對成功",
        ],
      },
      {
        subTitle: "2. 給「輕量控制權」",
        list: [
          "抽卡前：偏好設定(例如：想找同地區的人/想找貓奴)",
          "每次抽卡提供一次重抽機會",
        ],
      },
      {
        subTitle: "3. 降低互動門檻（破冰）",
        list: [
          "系統根據配對資料生成開場白，例如：『你們都養柴犬，要不要分享最近發生了哪些小趣事呢？』",
          "在聊天室中提供互動按鈕，例如：『分享寵物照片』、『發送表情符號』等，引導使用者開啟對話",
        ],
      },
      {
        title: "User Flow",
        subTitle: "Before User Flow（現況） ",
        image: [
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776666078/before_flowchart_mcwrme.webp",
        ],
        description: "以 Miro 繪製 flowchart",
      },
      {
        subTitle: "After User Flow（優化後）",
        image: [
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776666310/after_flow-chart_bx6qhn.webp",
        ],
      },
      {
        title: "優化後 Mockup",
        content: "使用 Claude Design，產出 Mockup",
        image: [
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776674726/match_result_ijh3ig.webp",
        ],
      },
    ],
  },
];
