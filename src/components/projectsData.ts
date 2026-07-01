import type { DecisionCard } from "./DecisionCards";

export type Project = {
  id: string;
  title: string;
  time: string;
  tags: string[];
  info: string;
  image?: Image[];
  github?: string;
  projectLink?: string;
  projectInfo?: InfoSection[];
};

export type InfoSection = {
  type?: "default" | "decisionCards";
  title?: string;
  subTitle?: string;
  content?: string;
  list?: string[][];
  image?: Image[];
  description?: string;
  figmaLink?: string;
  tech?: string[];
  decisionCards?: DecisionCard[];
};

export type Image = {
  image: string;
  description?: string;
};

export const projectsData: Project[] = [
  {
    id: "petpetni",
    title: "PetPetNi",
    time: "2025/11~2026/1",
    tags: ["UI/UX", "Frontend", "Backend", "RWD"],
    info: "PetPetNi 是以寵物為核心的社群平台，整合了社群貼文、即時聊天、活動揪團、配對功能及 AI 助手，串聯線上社群互動與線下生活情境，打造高黏著度的寵物社交生態圈。[br]我主要負責社群頁體驗規劃與前端開發，將使用者需求轉化為可落地的 Web 產品介面。",
    image: [
      {
        image:
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776672166/PetPetNi_ni7orj.webp",
      },
    ],
    github: "https://github.com/153ys/PetPetNi",
    projectLink: "https://pet-pet-ni.vercel.app/",
    projectInfo: [
      {
        title: "技術棧",
        tech: [
          "Vue.js",
          "Pinia",
          "Tailwind css",
          "Vite",
          "Node.js",
          "Express",
          "Supabase",
          "Zeabur",
          "Cloudinary",
        ],
      },
      {
        title: "專案背景",
        content:
          "許多飼主會在 Instagram 或 Facebook 分享寵物生活，但很容易被其他動態淹沒，傳統的社群也沒有專為寵物交流設計的互動功能。因此 PetPetNi 希望打造一個以寵物為核心的社群平台，讓分享、交流與配對都能在同一個產品中完成。",
      },
      {
        title: "我的角色",
        list: [
          [
            "規劃社群頁資訊架構與互動順序",
            "使用 Tailwind CSS 建立全域樣式規範，維持視覺一致性",
            "拆分貼文卡片、留言區、互動按鈕等可重用元件",
            "串接貼文、圖片上傳、留言、按讚、收藏、等後端 API",
            "實作響應式設計，確保手機與桌機一致性，並符合手機版面操作習慣",
          ],
        ],
      },
      {
        title: "設計流程",
        subTitle: "需求分析",
        content: "社群頁需要同時解決：",
        list: [
          [
            "快速瀏覽大量貼文",
            "降低互動成本",
            "兼顧手機與桌機體驗",
            "維持 UI 一致性",
            "讓後續功能容易擴充",
          ],
        ],
      },
      {
        subTitle: "Wireframe：確認資訊架構",
        content:
          "先確認貼文列表、發文入口、留言區與互動按鈕的位置，再進入 UI 設計。",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593214/social_view_yzskql.webp",
          },
        ],
      },
      {
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593165/comment_view_ir15lj.webp",
          },
        ],
      },
      {
        title: "設計決策",
        type: "decisionCards",
        decisionCards: [
          {
            label: "瀑布流",
            title: "瀑布流布局 (Masonry Layout)",
            image: "",
            problem:
              "社群貼文可能包含純文字、單張圖片、多張圖片或圖文混合內容，若採固定卡片高度，容易產生大量留白，也會降低資訊密度。",
            solution:
              "平板以上裝置使用雙欄式瀑布流布局，讓不同高度的貼文能自然排列；手機版則維持單欄瀏覽，降低閱讀與操作負擔。",
            impact:
              "提升資訊密度，減少滑動距離，讓使用者更容易瀏覽不同類型的貼文內容。",
          },
          {
            label: "骨架屏",
            title: "骨架屏 (Skeleton Screen)",
            image: "",
            problem:
              "貼文資料載入時，若只顯示空白或旋轉圖示，使用者較難判斷頁面是否正常載入，也容易產生等待焦慮。",
            solution:
              "使用骨架屏呈現貼文卡片的大致結構，讓使用者在等待資料時能預期接下來會出現的內容。",
            impact:
              "降低等待焦慮，減少資料載入後的畫面跳動，提升整體瀏覽體驗的穩定感。",
          },
          {
            label: "RWD",
            title: "RWD 行動裝置體驗",
            image: "",
            problem:
              "社群頁在手機情境下更常被使用，但手機螢幕空間有限，若直接縮小桌機版面，容易造成閱讀與操作負擔。",
            solution:
              "手機版改為單欄貼文瀏覽，並針對留言區、Overlay、按鈕間距與可點擊範圍進行調整，讓使用者能用單手完成主要操作。",
            impact:
              "降低手機操作負擔，讓瀏覽、留言與互動流程更符合行動裝置使用情境。",
          },
          {
            label: "前端狀態",
            title: "即時互動回饋",
            image: "",
            problem:
              "按讚、收藏與留言數若沒有即時同步，使用者會不確定操作是否成功，降低互動信心。",
            solution:
              "透過 Pinia 集中管理社群頁狀態，讓貼文互動後能立即更新畫面，並同步留言數與 Action Bar 狀態。",
            impact:
              "讓互動結果即時呈現在畫面上，提高操作回饋的可信度，也讓使用者更願意持續互動。",
          },
        ],
      },
      {
        title: "收穫與反思",
        content:
          "這次專案讓我最大的收穫，不只是完成一個社群產品，而是開始建立從需求、體驗到實作的完整思考方式：",
        list: [
          [
            "從 Wireframe 開始驗證資訊架構與互動流程，讓我理解比起直接設計 UI，更重要的是先確認使用者操作是否合理。",
            "第一次完整參與前端開發，讓我開始理解元件拆分、資料流與技術限制，也讓我在設計時能同步思考方案是否容易實作，而不是只追求視覺呈現。",
            "未來如果有更多時間，希望能加入使用者測試與數據驗證，確認設計是否真正改善使用者體驗，而不只是依據團隊討論或設計直覺做決策。",
          ],
        ],
      },
    ],
  },

  {
    id: "pet-matching-ux",
    title: "PetPetNi 配對體驗優化",
    time: "2026/04",
    tags: ["Case Study", "UX", "UserFlow", "Claude Design"],
    info: "以 PetPetNi 的抽卡配對機制為出發點，重新設計配對結果的呈現方式，提升使用者的理解與信任，並引導自然開啟互動。",
    image: [
      {
        image:
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,fl_no_cookies/v1776674726/match_result_ijh3ig.webp",
      },
    ],
    projectInfo: [
      {
        title: "問題定義",
        content:
          "為降低使用者搜尋成本，採用每日一次的抽卡機制，並根據註冊時輸入的所在地區與寵物個性標籤進行自動媒合，最終呈現配對對象與配對指數。然而透過抽卡提升趣味性的同時，也產生以下體驗問題：",
        list: [
          [
            "使用者缺乏主動選擇權，配對過程較為被動",
            "配對結果的判斷依據（雷達圖）不易理解，影響信任感",
            "即使成功配對，仍缺乏有效引導，導致互動啟動率偏低",
          ],
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
          [
            "提升使用者對配對結果的理解與信任",
            "在維持抽卡機制下，增加使用者參與感與控制感",
            "提高配對後的互動啟動率（破冰）",
          ],
        ],
      },
      {
        title: "解方",
        subTitle: "1. 雷達圖優化",
        list: [
          [
            "當滑鼠懸浮/點擊維度指標時，顯示解釋，(例如：特質代表寵物的個性)",
            "加一句總結：「你們適合一起戶外遛狗」，讓使用者一眼就知道為什麼配對成功",
          ],
        ],
      },
      {
        subTitle: "2. 給「輕量控制權」",
        list: [
          [
            "抽卡前：偏好設定(例如：想找同地區的人/想找貓奴)",
            "每次抽卡提供一次重抽機會",
          ],
        ],
      },
      {
        subTitle: "3. 降低互動門檻（破冰）",
        list: [
          [
            "系統根據配對資料生成開場白，例如：『你們都養柴犬，要不要分享最近發生了哪些小趣事呢？』",
            "在聊天室中提供互動按鈕，例如：『分享寵物照片』、『發送表情符號』等，引導使用者開啟對話",
          ],
        ],
      },
      {
        title: "User Flow",
        subTitle: "Before User Flow（現況）",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776666078/before_flowchart_mcwrme.webp",
          },
        ],
        description: "以 Miro 繪製 flowchart",
      },
      {
        subTitle: "After User Flow（優化後）",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776666310/after_flow-chart_bx6qhn.webp",
          },
        ],
      },
      {
        title: "優化後 Mockup",
        content: "使用 Claude Design，產出 Mockup",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto/f_auto/v1776674726/match_result_ijh3ig.webp",
          },
        ],
      },
    ],
  },
  // {
  //   id: "portfolio",
  //   title: "個人網站",
  //   time: "2026/03~",
  //   tags: ["UI/UX", "Frontend", "RWD"],
  //   image: [
  //     {
  //       image:
  //         "https://res.cloudinary.com/dsxurz7zb/image/upload/fl_no_cookies/v1779349429/portfolio_cover_xgqzxu.webp",
  //     },
  //   ],
  //   info: "自主規劃與開發的個人作品集網站，從資訊架構、視覺風格到前端實作皆獨立完成。以 Neobrutalism 為核心視覺，結合 Framer Motion 動態效果，打造兼具個人特色與流暢體驗的互動式作品展示平台。",
  //   github: "https://github.com/153ys/yuna-portfolio",
  //   projectInfo: [
  //     {
  //       title: "技術棧",
  //       tech: [
  //         "React",
  //         "React Router",
  //         "TypeScript",
  //         "Tailwind CSS",
  //         "Vite",
  //         "Framer Motion",
  //         "Font Awesome",
  //       ],
  //     },
  //     {
  //       title: "設計風格",
  //       content:
  //         "採用 Neobrutalism 風格，以粗邊框、高對比色彩與錯位陰影打造鮮明視覺層次，搭配細膩的動態效果，在個性化與可讀性之間取得平衡。",
  //     },
  //     {
  //       title: "設計思考",
  //       list: [
  //         [
  //           "以主流框架 React 搭配 TypeScript 作為技術選型，並使用 Framer motion 動畫，藉由建立個人作品集網站的同時建立熟悉工具的應用方式。",
  //           "在規劃作品集時，優先考量瀏覽動線與資訊層級，希望面試官能快速理解專案重點，因此將首頁聚焦於角色定位與代表作品，並以動態效果輔助視覺節奏，而非過度裝飾。",
  //         ],
  //       ],
  //     },
  //     {
  //       title: "技術亮點",
  //       subTitle: "路由切換動畫（AnimatePresence）",
  //       content:
  //         "最初打算將專案詳情以展開區塊呈現在首頁，但實作後發現閱讀空間過小、資訊密度太高，體驗不佳。因此改為獨立分頁，並引入 React Router DOM 管理路由。有了路由後，進一步以 AnimatePresence 搭配 pathname 作為 key，為頁面切換加入進出場動畫，確保轉場流暢不閃爍。",
  //     },
  //     {
  //       subTitle: "效能優化（FCP／LCP）",
  //       content:
  //         "加入 preconnect 預連線字型與圖片 CDN，並以動態 import 搭配 React.lazy 進行路由層級的程式碼分割，降低首屏載入成本。經 Lighthouse 測試後，Performance 分數提升至 90+，並針對手機裝置調整動畫與排版密度，提升行動端瀏覽體驗。",
  //     },
  //     {
  //       subTitle: "自訂游標",
  //       content: "",
  //     },
  //     {
  //       subTitle: "SVG Icon 元件化",
  //       content:
  //         "裝飾圖示最初以 PNG 直接引入，跑 Lighthouse 後才發現每個圖示都產生一次額外的 HTTP 請求，加上縮放動畫讓 PNG 的畫質問題更明顯。改以 SVG 元件封裝後，圖示 inline 渲染不再產生額外請求、縮放不失真，顏色也可直接繼承 CSS 主題色彩。",
  //     },
  //     {
  //       title: "心得與反思",
  //       list: [
  //         [
  //           "在學習 React 時一直不是很了解 State 跟 Hook 的運作，。", //todo
  //           "過去較偏向視覺設計思維，但在實作過程中逐漸理解，過度複雜的動畫與設計可能增加維護成本，因此開始學習在品牌風格、效能與開發成本之間取得平衡。",
  //           "透過 FCP／LCP 優化過程，更系統地了解瀏覽器資源載入機制，也養成在開發初期就考量效能的習慣。",
  //         ],
  //       ],
  //     },
  //   ],
  // },
];
