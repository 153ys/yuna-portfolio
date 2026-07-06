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
  figmaLink?: string;
};

export type InfoSection = {
  type?: "default" | "decisionCards";
  title?: string;
  subTitle?: string;
  content?: string;
  list?: string[][];
  video?: Video[];
  image?: Image[];
  tech?: string[];
  decisionCards?: DecisionCard[];
};

export type Video = {
  video: string;
  description?: string;
  poster?: string;
};

export type Image = {
  image: string;
  description?: string;
};

export const projectsData: Project[] = [
  {
    id: "petpetni",
    title: "PetPetNi",
    time: "2025/12~2026/1",
    tags: ["UI/UX", "RWD", "Frontend", "Backend"],
    info: "PetPetNi 是以寵物為核心的社群平台，整合了社群貼文、即時聊天、活動揪團、配對功能及 AI 助手，串聯線上社群互動與線下生活情境，打造高黏著度的寵物社交生態圈。[br]我在專案中主要負責社群頁的介面設計與前端實作。",
    image: [
      {
        image:
          "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,/v1776672166/PetPetNi_ni7orj.webp",
      },
    ],
    github: "https://github.com/153ys/PetPetNi",
    figmaLink:
      "https://www.figma.com/design/LJspNn5lSVP7Ua0P59CyP0/PetPetNi?node-id=0-1&t=uFPx8Xfdoisu6JFK-1",
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
          "許多飼主會在 Instagram 或 Facebook 分享寵物生活，但很容易被其他動態淹沒，傳統的社群也沒有專為寵物交流設計的互動功能，因此 PetPetNi 希望打造一個以寵物為核心的社群平台，讓分享、交流與配對都能在同一個產品中完成。",
      },
      {
        title: "我的角色",
        content:
          "負責社群首頁的資訊架構規劃、介面設計與前端實作，包含貼文列表、留言、按讚、收藏等核心功能，並建立全域樣式規範，確保跨頁面體驗一致。",
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
        subTitle: "Wireframe",
        content:
          "以 Miro 繪製簡易 Wireframe，確認貼文列表、發文入口、留言區與互動按鈕的位置，再進入 UI 設計。",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593214/social_view_yzskql.webp",
            description: "社群頁面初步規劃",
          },
        ],
      },
      {
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1776593165/comment_view_ir15lj.webp",
            description: "留言畫面初步規劃",
          },
        ],
      },
      {
        subTitle: "UI Design",
        content:
          "使用 Figma 建立社群首頁介面與可重複使用的 UI Components，統一資訊層級與互動樣式，作為後續頁面設計與前端實作的基礎。",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783020441/%E7%A4%BE%E7%BE%A4%E9%A0%81_syb7ei.webp",
            description: "社群頁 (桌機版)",
          },
        ],
      },
      {
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783020362/ui_components_pidytx.webp",
            description: "社群頁 UI Components",
          },
        ],
      },
      {
        subTitle: "Final UI",
        content:
          "將設計稿實作為可操作的社群首頁，並依不同裝置設計版面與互動體驗。",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783022169/final_wizges.webp",
            description: "社群頁實際畫面",
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
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1782971014/design-1_ydilm6.webp",
            imageAspectRatio: "1350 / 900",
            problem:
              "貼文可能包含純文字、單張圖片、多張圖片或圖文混合內容，若採固定卡片高度，容易產生大量留白，也會降低資訊密度。",
            solution:
              "平板以上裝置使用雙欄式瀑布流布局，讓不同高度的貼文能自然排列；手機版則維持單欄瀏覽，降低閱讀與操作負擔。",
            impact:
              "提升資訊密度，減少滑動距離，讓使用者更容易瀏覽不同類型的貼文內容。",
          },
          {
            label: "骨架屏",
            title: "骨架屏 (Skeleton Screen)",
            image: "/projects/design-2.gif",
            imageAspectRatio: "1200 / 500",
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
            image: "/projects/design-3.gif",
            imageAspectRatio: "1200 / 700",
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
            image: "/projects/design-4.gif",
            imageAspectRatio: "1200 / 700",
            problem:
              "按讚、留言與收藏數若沒有即時同步，使用者會不確定操作是否成功，降低互動信心。",
            solution:
              "透過 Pinia 集中管理社群頁狀態，讓貼文互動後能立即更新畫面，並同步按讚、留言及收藏的狀態。",
            impact:
              "讓互動結果即時呈現在畫面上，提高操作回饋的可信度，也讓使用者更願意持續互動。",
          },
        ],
      },
      {
        title: "收穫與反思",
        content:
          "第一次完整參與前端開發，讓我開始理解元件拆分、資料流與技術限制，也讓我在設計時能同步思考方案是否容易實作，而不是只追求視覺呈現。這次專案最大的收穫，不只是完成一個社群產品，而是開始建立從需求、體驗到實作的完整思考方式。[br]因為專案只有約一個月時間開發，未來如果有更多時間，希望能加入使用者測試與數據驗證，確認設計是否真正改善使用者體驗，而不只是依據團隊討論或設計直覺做決策。",
      },
    ],
  },
  {
    id: "line-liff",
    title: "LINE LIFF 求籤體驗設計",
    time: "2024/05~2024/11",
    tags: ["UI/UX", "LINE LIFF", "AI", "Prototype"],
    info: "結合 LINE LIFF 與 AI 文字生成技術，打造融合日本神社文化的互動求籤遊戲。[br]我在專案中主要負責 AI 技術運用發想、畫面設計。",
    image: [
      {
        image:
          "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783323344/line_liff_uykqs9.webp",
        description: "LINE LIFF × AI 神社求籤體驗",
      },
    ],
    figmaLink:
      "https://www.figma.com/design/zEGtgFqfRgrZAzWBS4Ujtq/wireframe?node-id=0-1&t=F4EDtjbrmUrITaZh-1",
    projectInfo: [
      {
        title: "技術與工具",
        tech: ["LINE LIFF", "Figma", "AI", "UI Design"],
      },
      {
        title: "專案背景",
        content:
          "隨著生成式 AI 技術逐漸受到市場關注，團隊希望探索 AI 應用於行銷互動與品牌活動的可能性，並拓展既有服務範圍，因此與技術部門共同開發 LINE LIFF 線上求籤遊戲，以日本求籤體驗作為包裝，結合 AI 文字生成技術，讓使用者根據不同主題獲得個人化的籤詩內容，提升活動參與感與話題性。",
      },
      {
        title: "我的角色",
        content:
          "與創意及技術成員共同發想 AI 技術運用、負責介面視覺設計與使用者流程規劃、製作 Figma Prototype 驗證互動流程，參與 AI 籤詩呈現方式與內容結構調整",
      },
      {
        title: "設計流程",
        subTitle: "需求分析",
        content:
          "初版流程以「輸入問題 → AI 回答」為核心，雖然能快速完成求籤，但體驗更接近一般 AI 聊天工具，缺少神社求籤應有的期待感與參與感。因此重新思考：除了獲得 AI 籤詩，還能如何讓使用者真正投入整個求籤體驗？",
      },
      {
        subTitle: "Wireframe",
        content:
          "專案初期以『快速完成求籤』為主要目標，因此使用者完成授權後，很快就會進入提問與結果頁。我先繪製簡易的 Wireframe 呈現互動流程與畫面配置，希望快速驗證功能是否完整，再逐步細化介面設計",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783330986/wireframe_qniurt.webp",
            description: "初期 Wireframe",
          },
        ],
      },
      {
        subTitle: "流程迭代",
        content:
          "根據初版 Wireframe 我們重新檢視整體體驗，發現流程雖然順暢，但更像一般 AI 問答，而非神社求籤。因此重新調整使用者流程，加入洗手、投幣、搖鈴等參拜儀式，以及主題選擇與角色引導，讓 AI 籤詩成為整段體驗的最後回饋。",
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783331931/workflow_dewzvj.webp",
            description: "重新規劃體驗流程",
          },
        ],
      },
      {
        subTitle: "Final UI",
        content:
          "最終畫面以神社情境、角色對話框與直式籤詩結果頁作為主要視覺語言，讓使用者從進入體驗、完成參拜到閱讀結果，都能維持一致的情境感與操作節奏。",
        video: [
          { video: "/projects/liff_record.mp4", description: "完整求籤過程" },
        ],
        image: [
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783324771/temple_flow_q7bddr.webp",
            description: "參拜過程畫面",
          },
          {
            image:
              "https://res.cloudinary.com/dsxurz7zb/image/upload/v1783324839/%E7%B1%A4%E8%A9%A9_mp7shm.webp",
            description: "四種籤詩設計",
          },
        ],
      },
      {
        title: "關鍵體驗設計",
        type: "decisionCards",
        decisionCards: [
          {
            label: "儀式感",
            title: "建立神社參拜流程",
            problem:
              "若使用者一進入頁面就直接輸入問題，體驗會接近一般 AI 聊天室，缺少求籤應有的期待感與情境投入。",
            solution:
              "將流程重新設計為洗手、投幣、搖鈴、選擇主題與輸入問題等步驟，讓使用者在取得籤詩前先完成一段完整的參拜儀式。",
            impact:
              "讓 AI 回覆不只是結果，而是整段互動體驗的最後回饋，提升使用者的參與感與沉浸感。",
          },
          {
            label: "引導",
            title: "以角色對話降低操作不確定性",
            problem:
              "多步驟互動若只依靠按鈕與文字提示，使用者可能不清楚目前進度，也較難理解每個步驟的意義。",
            solution:
              "加入原創角色與 RPG 式對話框，透過角色語氣引導使用者完成每個步驟，讓系統提示變得更自然，也更符合神社體驗的情境。",
            impact:
              "降低使用者在流程中的不確定感，讓操作提示不只是功能說明，也成為體驗的一部分。",
          },
          {
            label: "結果頁",
            title: "AI 籤詩閱讀體驗",
            problem:
              "AI 生成內容長度與語氣可能不一致，若直接顯示在畫面上，容易造成結果頁資訊層級混亂，影響閱讀體驗。",
            solution:
              "針對籤詩結果建立固定資訊架構，包含吉凶標示、籤詩內容、解釋文字與延伸建議，並以直式排版呼應傳統籤詩形式。",
            impact:
              "讓不同主題與不同長度的 AI 回覆都能維持一致的閱讀節奏，提升結果頁的可讀性與完整感。",
          },
          {
            label: "AI 輸出",
            title: "Prompt 與內容規範",
            problem:
              "若 AI 回覆沒有明確格式限制，容易出現語氣不一致、內容過長或與求籤情境不符的結果。",
            solution:
              "與技術夥伴共同測試 Prompt，調整回覆語氣、字數、吉凶標示與內容結構，讓 AI 生成結果更符合神社求籤的世界觀。",
            impact:
              "提升 AI 回覆的一致性與可預期性，也讓生成內容能更穩定地被放入既有 UI 版型中。",
          },
        ],
      },
      {
        title: "成果",
        content:
          "此專案將原本單純的 AI 問答，重新設計為具有儀式感與情境引導的求籤體驗，透過完整的互動流程與資訊規劃，讓 AI 回覆更符合使用者對神社求籤的期待。",
        list: [
          [
            "建立完整的求籤體驗流程，涵蓋參拜、提問與取得籤詩。",
            "設計角色互動與神社情境，提升沉浸感與參與意願。",
            "規劃 AI 籤詩結果頁的資訊層級與版面，提高生成內容的可讀性。",
          ],
        ],
      },
      {
        title: "收穫與反思",
        content:
          "這次專案讓我重新思考 AI 在產品中的角色。真正的體驗設計並不是把生成內容放進介面，而是從使用者進入流程開始，就透過情境、互動與資訊設計建立合理的期待，讓 AI 回覆成為整體體驗的一部分，而不是單獨存在的功能。也因為參與了 AI 籤詩內容規劃與結果頁設計，我更理解生成內容需要與 UI 一起規劃，才能兼顧閱讀體驗與資訊一致性。[br]由於此專案主要作為提案展示使用，尚未進入正式上線階段，因此未取得實際使用數據。未來如果有機會進一步發展，我希望能透過使用者測試與正式上線，驗證各流程節點的完成率、停留時間及中途離開率，並根據數據持續優化整體體驗。",
      },
    ],
  },

  // {
  //   id: "pet-matching-ux",
  //   title: "PetPetNi 配對體驗優化",
  //   time: "2026/04",
  //   tags: ["Case Study", "UX", "UserFlow", "Claude Design"],
  //   info: "以 PetPetNi 的抽卡配對機制為出發點，重新設計配對結果的呈現方式，提升使用者的理解與信任，並引導自然開啟互動。",
  //   image: [
  //     {
  //       image:
  //         "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,c_scale,w_1200/v1776674726/match_result_ijh3ig.webp",
  //     },
  //   ],
  //   projectInfo: [
  //     {
  //       title: "問題定義",
  //       content:
  //         "為降低使用者搜尋成本，採用每日一次的抽卡機制，並根據註冊時輸入的所在地區與寵物個性標籤進行自動媒合，最終呈現配對對象與配對指數。然而透過抽卡提升趣味性的同時，也產生以下體驗問題：",
  //       list: [
  //         [
  //           "使用者缺乏主動選擇權，配對過程較為被動",
  //           "配對結果的判斷依據（雷達圖）不易理解，影響信任感",
  //           "即使成功配對，仍缺乏有效引導，導致互動啟動率偏低",
  //         ],
  //       ],
  //     },
  //     {
  //       title: "洞察",
  //       content:
  //         "抽卡機制能帶來期待感與新鮮感，但在社交配對情境中，使用者更在意的是「配對品質」與「互動可能性」。當配對結果無法被理解或感覺不可控時，遊戲化機制反而會轉化為挫折感，進而降低持續使用意願。因此，設計需在「趣味性」與「可理解性／可控性」之間取得平衡，並進一步降低配對後的互動門檻。",
  //     },
  //     {
  //       title: "目標",
  //       list: [
  //         [
  //           "提升使用者對配對結果的理解與信任",
  //           "在維持抽卡機制下，增加使用者參與感與控制感",
  //           "提高配對後的互動啟動率（破冰）",
  //         ],
  //       ],
  //     },
  //     {
  //       title: "解方",
  //       subTitle: "1. 雷達圖優化",
  //       list: [
  //         [
  //           "當滑鼠懸浮/點擊維度指標時，顯示解釋，(例如：特質代表寵物的個性)",
  //           "加一句總結：「你們適合一起戶外遛狗」，讓使用者一眼就知道為什麼配對成功",
  //         ],
  //       ],
  //     },
  //     {
  //       subTitle: "2. 給「輕量控制權」",
  //       list: [
  //         [
  //           "抽卡前：偏好設定(例如：想找同地區的人/想找貓奴)",
  //           "每次抽卡提供一次重抽機會",
  //         ],
  //       ],
  //     },
  //     {
  //       subTitle: "3. 降低互動門檻（破冰）",
  //       list: [
  //         [
  //           "系統根據配對資料生成開場白，例如：『你們都養柴犬，要不要分享最近發生了哪些小趣事呢？』",
  //           "在聊天室中提供互動按鈕，例如：『分享寵物照片』、『發送表情符號』等，引導使用者開啟對話",
  //         ],
  //       ],
  //     },
  //     {
  //       title: "User Flow",
  //       subTitle: "Before User Flow（現況）",
  //       image: [
  //         {
  //           image:
  //             "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,c_scale,w_1000/v1776666078/before_flowchart_mcwrme.webp",
  //           description: "以 Miro 繪製 flowchart",
  //         },
  //       ],
  //     },
  //     {
  //       subTitle: "After User Flow（優化後）",
  //       image: [
  //         {
  //           image:
  //             "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,c_scale,w_1000/v1776666310/after_flow-chart_bx6qhn.webp",
  //         },
  //       ],
  //     },
  //     {
  //       title: "優化後 Mockup",
  //       content: "使用 Claude Design，產出 Mockup",
  //       image: [
  //         {
  //           image:
  //             "https://res.cloudinary.com/dsxurz7zb/image/upload/q_auto,f_auto,c_scale,w_1200/v1776674726/match_result_ijh3ig.webp",
  //         },
  //       ],
  //     },
  //   ],
  // },
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
