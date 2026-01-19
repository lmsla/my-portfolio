// data/personalData.ts

export const personalData = {
  name: "Russell Chen",
  title: "DevOps & Data Engineer",
  tagline: "鏈接基礎設施、數據與安全，將日誌轉化為深度洞見。",
  about: [
    "專精於 Elastic Stack (ELK) 大數據平台建置與效能調優，擁有豐富的 SIEM 與日誌分析架構經驗。在管理異質環境與大規模數據的過程中，主動導入 DevOps 思維，利用 Golang 開發自動化維運工具 (如索引生命週期管理)，並推動 Docker 容器化與 GitLab CI 流程，致力於透過『程式碼化』與『自動化』手段，解決複雜的數據維運挑戰，提升系統可靠性。",
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/lmsla",
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  },
  skills: {
    languages: ["Python", "Golang", "SQL", "Bash"],
    devops: ["Docker", "Kubernetes", "GitLab CI", "ArgoCD", "Ansible"],
    dataEngineering: ["Elasticsearch", "Logstash", "Kibana", "Beats", "Kafka"],
    database: ["MySQL", "Redis"],
    networkSecurity: ["Fortinet", "F5", "Cisco", "Palo Alto", "Linux", "Windows"],
  },
  experience: [
    {
      title: "數據工程師",
      company: "BiMAP 集先鋒科技",
      years: "2021/04 - Present",
      description: "• 核心系統研發：企業級 SIEM 平台建置，運用 Elastic Stack 整合異質數據源，解決資安監控需求.\n• 自動化工具開發：以 Golang 自研高效能維運工具（如 ES ILM 管理、自動化報表），解決索引管理與數據可視化痛點.\n• DevOps 實踐：導入 Docker 容器化與 GitLab CI/CD 流程，建立標準化部署規範，提升交付效率.\n• 專案交付：負責多個大型客戶（金融、電信、製造）的架構規劃與效能調優，並執行技術轉移與教育訓練.",
      technologies: ["Elasticsearch", "Kibana", "Python", "Golang", "Docker", "Kubernetes", "Ansible"],
    },
    {
      title: "理財專員",
      company: "花旗(台灣) 商業銀行股份有限公司",
      years: "2015/12 - 2020/02",
      description: "",
      technologies: [],
    },
    {
      title: "經濟學系",
      company: "國立中正大學",
      years: "2010/09 - 2014/07",
      description: "",
      technologies: [],
    },
  ],
  projects: [
    {
      title: "ES Housekeeping 索引管理＆Cluster監控",
      category: "產品開發",
      description: "• 設計並開發企業級 ES 索引自動化維運服務,解決索引累積造成的儲存成本與人工負擔\n• 以 Go 語言開發,支援 Systemd 服務化部署、內建 Cron 排程\n核心功能\n• 索引生命週期管理:自動清理(Delete)過期索引、Force Merge 優化、Close/Open 歸檔控制\n• 智慧分層儲存:自動遷移索引 (Allocation),優化儲存成本\n• 多維度過濾策略:支援時間 (Age)、名稱匹配 (Pattern)、容量上限 (Space)、磁碟水位線 (Water Level) 等條件組合\n• Rollover 滾動管理:基於Alias 的索引自動輪轉,適用於時間序列資料場景\n• 叢集健康即時監控:追蹤 Cluster 狀態、Unassigned Shards、節點數量\n• 系統索引保護:自動排除 kibana.security.monitoring-*等關鍵索引\n• Test Mode (Dry-Run):預覽模式驗證配置正確性,確保上線零風險",
      technologies: ["Elasticsearch", "Kibana", "Grafana", "Go", "Docker", "Systemd"],
      architectureImage: "/flowcharts/housekeeping.svg",
      gallery: [
        { src: "/images/projects/housekeeping/disks.png", caption: "Elasticsearch 叢集磁碟使用率監控" },
        { src: "/images/projects/housekeeping/shards.png", caption: "Elasticsearch 叢集 Shard 分佈與狀態監控" },
      ],
    },
    {
      title: "Report Automation Platform 自動化報表平台",
      category: "產品開發",
      description: "• 設計並實作企業級報表自動化系統，支援 Kibana 儀表板截圖與 Elasticsearch 數據查詢自訂表格並產出 PDF 報表\n• 導入策略模式 (Strategy Pattern) 實現 Keycloak SSO 與 RADIUS 雙重認證機制切換\n• 使用 ChromeDP 無頭瀏覽器技術，實現高品質網頁截圖與自動化擷取\n• 建立 Cron-based 排程系統，支援客製化報表定時產出與郵件自動寄送\n• 實作完整的健康檢查 API，監控 MySQL、前端服務及 Keycloak 認證服務狀態\n• 設計 RESTful API (64 端點)，並整合 Swagger 自動生成 API 文檔\n• 建立 Docker 容器化部署流程，配合 GitLab CI/CD 實現自動化部署",
      technologies: ["Go", "Gin", "GitLab CI", "MySQL", "Keycloak", "RADIUS", "Grafana", "Kibana", "Swagger", "RESTful API", "ChromeDP"],
      architectureImage: "/flowcharts/report.svg",
    },
    {
      title: "是方電訊-中繼系統平台建置案",
      category: "企業專案",
      timeline: [
        { title: "建置期", date: "2023/08 - 2023/12" },
        { title: "維護期", date: "2023/12 - Present" },
      ],
      description: "主導開發中繼平台核心服務，成功汰換因效能瓶頸而瀕臨失敗的舊系統。透過 Golang (Gin) 重構核心 API，將原本散落在多個監控工具（MRTG, genie ATM, Sevone）的異質數據進行標準化整合。重新設計資料庫架構並建立統一的 CRUD 操作流程，有效管理逾 1,000 台網路設備，解決了報表生成耗時與系統頻繁逾時的關鍵痛點，確保服務穩定運行。",
      technologies: ["Golang", "Gin", "RESTful API", "MySQL", "Redis", "Elasticsearch"],
      architectureImage: "/flowcharts/chief.svg",
      gallery: [],
    },
    {
      title: "宏遠證券SIEM平台建置專案",
      category: "企業專案",
      timeline: [
        { title: "建置期", date: "2024/09 - 2024/11" },
        { title: "維護期", date: "2024/11 - Present" },
      ],
      description: "為宏遠證券建置全方位的資安事件管理平台。整合多種異質日誌源（包括 Windows AD、防火牆、Linux 系統等），透過視覺化儀表板即時監控資安威脅與系統健康狀態，提升資安維運效率。\n系統上線後負責為企業提供6小時的教育訓練&技術交流。",
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Windows AD", "Fortigate", "Linux"],
      architectureImage: "/flowcharts/honsec.svg",
      gallery: [
        {
          src: "/images/projects/honsec/syslog-日誌監控.png",
          caption: "Syslog 日誌監控總覽",
        },
        {
          src: "/images/projects/honsec/forti-traffic.png",
          caption: "Fortigate 流量分析",
        },
        {
          src: "/images/projects/honsec/win-security.png",
          caption: "Windows 安全事件監控",
        },
      ],
    },
    {
      title: "華新麗華-SIEM 資訊安全事件管理平台",
      category: "企業專案",
      description: "為華新麗華集團設計並實施集中式資安資訊與事件管理 (SIEM) 數據平台。該平台透過 Winlogbeat 從 Windows AD 伺服器以及從 F5 WAF、Fortigate、Cisco ASA、Citrix 等關鍵網路安全設備，即時採集日誌數據，並匯入強大的 Logstash 處理管線進行解析與豐富化。架構設計採用高可用性的 Elasticsearch 叢集，分層儲存為 Hot-Warm 節點，以優化近期數據的查詢效能並確保成本效益的長期資料保存。透過客製化的 Kibana 儀表板，提供了全面的資安可視性，有效協助 SOC 團隊偵測與應對資安威脅。\n系統上線後負責為企業提供6小時的教育訓練&技術交流。",
      timeline: [
        { title: "建置期", date: "2022/01 - 2022/06" },
        { title: "維護期", date: "2022/06 - Present" },
      ],
      technologies: ["Elasticsearch", "Logstash", "Winlogbeat", "Kibana", "F5 WAF", "Fortigate", "Cisco ASA"],
      architectureImage: "/flowcharts/walsin.svg",
      // Add gallery images here
      gallery: [
        {
          src: "/images/projects/walsin/dashboard-1.jpeg",
          caption: "Cisco ASA Traffic 流量即時監控",
        },
        {
          src: "/images/projects/walsin/virus-dashboard.jpeg",
          caption: "Virus 病毒威脅統計",
        },
        // If you have more screenshots, add their paths here, e.g., "/images/projects/walsin/dashboard-2.jpeg"
      ],
      // Custom architecture component is rendered for this project title in Projects.tsx
    },
    {
      title: "京城銀行-日誌集中分析管理平台",
      category: "企業專案",
      description: "為京城銀行構建一套全面性的資安數據監控與分析平台。整合多種資產設備日誌（如 ASA, F5 WAF, AD Event 等），透過自動化採集與解析腳本，將異質日誌數據標準化後匯入 Elasticsearch 叢集進行儲存與檢索。平台提供 Kibana Dashboards 進行實時視覺化，並支援告警引擎與戰情室功能，以提升資安事件響應效率。",
      timeline: [
        { title: "建置期", date: "2022/03 - 2022/10" },
        { title: "維護期", date: "2022/10 - Present" },
      ],
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Draw.io", "Shell Script", "Go", "ASA", "F5 WAF"], // 根據SVG內容調整
      architectureImage: "/flowcharts/ktb.svg?v=1", 
      gallery: [
        {
          src: "/images/projects/ktb/dashboard-1.png",
          caption: "客製化報表 - IPS攻擊來源每月統計",
        },
        {
          src: "/images/projects/ktb/cisco-traffic.jpeg",
          caption: "Cisco ASA 流量統計儀表板",
        },

      ], // 暫無截圖
    },
    {
      title: "台泥集團日誌系統汰換專案",
      category: "企業專案",
      description: "為台泥集團建置基於 ELK Stack 的大數據資安分析平台，汰換舊有系統以提升資安偵測效能。專案橫跨總處與關企，採用高可用性 Elasticsearch 叢集與 Redis 緩衝架構，整合超過 20 種異質日誌源（如 Firewall, AD, Linux, DB）。透過 Logstash 進行數據正規化，並客製化 Kibana 儀表板實現流量分析、威脅偵測等資安可視化，結合自動化告警機制，強化集團整體資安維運監控。\n專案建置完成後主導6小時企業內部教育訓練，進行知識移轉，縮短企業自主運維學習曲線，提升系統穩定性",
      timeline: [
        { title: "建置期", date: "2024/04 - 2024/08" },
        { title: "維護期", date: "2024/08 - Present" },
      ],
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Redis", "Filebeat", "Winlogbeat"],
      architectureImage: "/flowcharts/tcci.svg",
      gallery: [
        {
          src: "/images/projects/tcci/dashboard-1.png",
          caption: "DDoS 攻擊分析儀表板",
        },
        {
          src: "/images/projects/tcci/dashboard-2.png",
          caption: "FortiGate 流量分析儀表板",
        },
      ],
      // No github link
    },
    {
      title: "政府情治單位-日誌集中分析管理平台",
      category: "企業專案",
      description: "為政府情治單位建置高度安全的日誌集中分析平台。整合多維度的網路設備與系統日誌，透過自定義的解析規則與關聯分析，強化威脅偵測能力。架構設計強調高可用性與數據加密，確保敏感資訊的儲存與傳輸安全。",
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Beats", "Linux Security"],
      architectureImage: "/flowcharts/nsb.svg",
      gallery: [],
    },
    {
      title: "文化大學推廣教育部轉職班ELK課程",
      category: "教育訓練",
      timeline: [
        { title: "養成班 ELK 講師", date: "2022 - 2025" },
      ],
      description: "2022~2025年間擔任文化大學推廣教育部養成班ELK相關課程講師，內容涵蓋大數據分析、Elastic Stack 應用以及資安監控實務。透過理論講解與現場實作，協助學員掌握現代化日誌分析平台的建置與運維技巧。授課對象包含高中生、大學生、社會人士等不同年齡層與背景的學員。結訓後輔導學員進行企業專案實習，協助優秀實習生正式轉任正職進入公司，建立 ELK 內部人才培育流程樣板。",
      technologies: ["Technical Sharing", "Elastic Stack", "Big Data Analysis", "Education"],
      gallery: [
        { src: "/images/projects/ccu-education/01.png", caption: "新手組黑客松競賽留影" },
        { src: "/images/projects/ccu-education/02.jpg", caption: "課程照片 (1)" },
        { src: "/images/projects/ccu-education/03.jpg", caption: "課程照片 (2)" },
        { src: "/images/projects/ccu-education/04.jpg", caption: "課程照片 (3)" },
        { src: "/images/projects/ccu-education/05.jpg", caption: "學員互動與實作指導 (1)" },
        { src: "/images/projects/ccu-education/06.jpg", caption: "學員互動與實作指導 (2)" },
        { src: "/images/projects/ccu-education/07.jpg", caption: "學員互動與實作指導 (3)" },
      ],
    },
    {
      title: "台泥集團ELK Enterprise 授權 POC",
      category: "企業專案",
      description: "主導 TCCI 企業級 Elastic ELK 平台授權 POC，建置完整資安威脅偵測體系，整合 Security SIEM、Machine Learning 異常偵測與 LLM AI 分析三大模組。成功部署 28 個 ML 異常偵測任務，處理 6.5 億筆記錄，建立使用者行為基線，實時識別高風險事件。\n核心成果：\n1.Security 規則引擎：導入 1411 條官方規則 + 7 條自定義規則，監控 AD/VPN/SSH/LDAP/WMI 攻擊，生成 817 則告警，Attack Discovery 自動關聯暴力破解 → Fortigate 特權存取攻擊鏈 。\n2.開發ML異常偵測精準模型如：Windows AD罕見IP登入、Forti VPN 非典型區域、機敏資料操作\n3.AI 輔助決策：整合 Gemini 2.5，自動生成 5 項應對建議（MFA、重設密碼、IP 封鎖）。\n4.技術貢獻：配置 62.8GB ML 叢集，實現小時級告警（含 KQL 驗證連結），提升資安響應速度 80%，模型精度隨 6.5 億筆數據持續優化。驗證 POC 降低資安事件 MTTR 從天級至小時級，證明企業級部署可行性。",
      technologies: ["Elasticsearch Enterprise", "AI Assistant", "Machine Learning", "SIEM"],
      gallery: [
        {
          src: "/images/projects/tcci-elk-license-poc/security-dashboard.png",
          caption: "Elastic Security 概覽儀表板"
        },
        {
          src: "/images/projects/tcci-elk-license-poc/security-attack-discovery.png",
          caption: "資安威脅偵測分析"
        },
        {
          src: "/images/projects/tcci-elk-license-poc/ml-job.png",
          caption: "Machine Learning 異常偵測任務"
        },
        {
          src: "/images/projects/tcci-elk-license-poc/ad_rare_ip_login.png",
          caption: "異常 IP 登入行為偵測"
        },
        {
          src: "/images/projects/tcci-elk-license-poc/AI-assistant1.png",
          caption: "Elastic AI Assistant 互動分析 (1)"
        },
        {
          src: "/images/projects/tcci-elk-license-poc/AI-assistant2.png",
          caption: "Elastic AI Assistant 互動分析 (2)"
        }
      ]
    },
    {
      title: "Personal Portfolio Website",
      category: "Personal",
      description: "Designed and developed a modern, responsive portfolio website using Next.js and Tailwind CSS. Implemented a fully automated CI/CD pipeline using GitHub Actions to build and deploy to GitHub Pages.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
      github: "https://github.com/lmsla/my-portfolio", // This is your actual repo!
      link: "https://lmsla.github.io/my-portfolio/",
    },
  ],
  certificates: [
    {
      name: "Elastic Certified Engineer",
      issuer: "Elastic",
      date: "202X",
      link: "#",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      date: "202X",
      link: "#",
    },
  ],
};


