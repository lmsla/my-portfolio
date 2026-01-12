// data/personalData.ts

export const personalData = {
  name: "Russell Chen",
  title: "DevOps & Data Engineer",
  tagline: "Bridging the gap between Infrastructure, Data, and Security.",
  about: [
    "I specialize in building resilient data infrastructures and observability platforms. With a strong background in backend development and DevOps, I help organizations transform raw logs into actionable security insights.",
    "My core expertise lies in the Elastic Stack (ELK), Kubernetes, and cloud-native observability. I have successfully architected and deployed large-scale log analysis systems for enterprise clients, handling massive data ingestion and real-time visualization.",
    "I am passionate about automating complex workflows, optimizing cluster performance, and designing secure, scalable systems that drive business value.",
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-github-username",
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  },
  skills: {
    languages: ["Python", "Golang", "SQL", "Bash"],
    devops: ["Docker", "Kubernetes", "GitLab CI", "ArgoCD"],
    dataEngineering: ["Elasticsearch"],
    observability: ["Grafana", "ELK Stack"],
  },
  experience: [
    {
      title: "Senior Data & DevOps Engineer",
      company: "Your Current Company",
      years: "20XX - Present",
      description: "Spearheading the delivery of security data platforms for enterprise clients. Managing the full lifecycle of data pipelines from ingestion to visualization.",
      technologies: ["Elasticsearch", "Kubernetes", "Python", "Ansible", "Linux"],
    },
    // Add more experience here
  ],
  projects: [
    {
      title: "宏遠證券SIEM平台建置專案",
      category: "Enterprise",
      description: "為宏遠證券建置全方位的資安事件管理平台。整合多種異質日誌源（包括 Windows AD、防火牆、Linux 系統等），透過視覺化儀表板即時監控資安威脅與系統健康狀態，提升資安維運效率。",
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
      category: "Enterprise",
      description: "為華新麗華集團設計並實施集中式資安資訊與事件管理 (SIEM) 數據平台。該平台透過 Winlogbeat 從 Windows AD 伺服器以及從 F5 WAF、Fortigate、Cisco ASA、Citrix 等關鍵網路安全設備，即時採集日誌數據，並匯入強大的 Logstash 處理管線進行解析與豐富化。架構設計採用高可用性的 Elasticsearch 叢集，分層儲存為 Hot-Warm 節點，以優化近期數據的查詢效能並確保成本效益的長期資料保存。透過客製化的 Kibana 儀表板，提供了全面的資安可視性，有效協助 SOC 團隊偵測與應對資安威脅。",
      timeline: [
        { title: "建置期", date: "2022/01 - 2022/06" },
        { title: "維護期", date: "2022/06 - Present" },
      ],
      technologies: ["Elasticsearch Cluster", "Logstash", "Winlogbeat", "Kibana", "F5 WAF", "Fortigate", "Cisco ASA"],
      architectureImage: "/flowcharts/walsin.svg",
      // Add gallery images here
      gallery: [
        {
          src: "/images/projects/walsin/dashboard-1.jpeg",
          caption: "Cisco ASA Traffic 流量即時監控",
        },
        // If you have more screenshots, add their paths here, e.g., "/images/projects/walsin/dashboard-2.jpeg"
      ],
      // Custom architecture component is rendered for this project title in Projects.tsx
    },
    {
      title: "京城銀行-日誌集中分析管理平台",
      category: "Enterprise",
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
          caption: "IPS攻擊來源每月統計",
        },

      ], // 暫無截圖
    },
    {
      title: "台泥集團日誌系統汰換專案",
      category: "Enterprise",
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
      title: "NSB 專案 (名稱待定)",
      category: "Enterprise",
      description: "專案描述待補充...",
      technologies: ["Elasticsearch", "Logstash", "Kibana"],
      architectureImage: "/flowcharts/nsb.svg",
      gallery: [],
    },
    {
      title: "文化大學推廣教育部轉職班ELK課程",
      category: "Education",
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
      category: "POC",
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
