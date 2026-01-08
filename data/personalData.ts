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
      title: "華新麗華-SIEM 資訊安全事件管理平台",
      description: "為華新麗華集團設計並實施集中式資安資訊與事件管理 (SIEM) 數據平台。該平台透過 Winlogbeat 從 Windows AD 伺服器以及從 F5 WAF、Fortigate、Cisco ASA、Citrix 等關鍵網路安全設備，即時採集日誌數據，並匯入強大的 Logstash 處理管線進行解析與豐富化。架構設計採用高可用性的 Elasticsearch 叢集，分層儲存為 Hot-Warm 節點，以優化近期數據的查詢效能並確保成本效益的長期資料保存。透過客製化的 Kibana 儀表板，提供了全面的資安可視性，有效協助 SOC 團隊偵測與應對資安威脅。",
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
      description: "為京城銀行構建一套全面性的資安數據監控與分析平台。整合多種資產設備日誌（如 ASA, F5 WAF, AD Event 等），透過自動化採集與解析腳本，將異質日誌數據標準化後匯入 Elasticsearch 叢集進行儲存與檢索。平台提供 Kibana Dashboards 進行實時視覺化，並支援告警引擎與戰情室功能，以提升資安事件響應效率。",
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Draw.io", "Shell Script", "Go", "ASA", "F5 WAF"], // 根據SVG內容調整
      architectureImage: "/flowcharts/ktb.svg", 
      gallery: [
        {
          src: "/images/projects/ktb/dashboard-1.png",
          caption: "IPS攻擊來源每月統計",
        },

      ], // 暫無截圖
    },
    {
      title: "台泥集團日誌系統汰換專案",
      description: "為台泥集團建置基於 ELK Stack 的大數據資安分析平台，汰換舊有系統以提升資安偵測效能。專案橫跨總處與關企，採用高可用性 Elasticsearch 叢集與 Redis 緩衝架構，整合超過 20 種異質日誌源（如 Firewall, AD, Linux, DB）。透過 Logstash 進行數據正規化，並客製化 Kibana 儀表板實現流量分析、威脅偵測等資安可視化，結合自動化告警機制，強化集團整體資安維運監控。",
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
      description: "專案描述待補充...",
      technologies: ["Elasticsearch", "Logstash", "Kibana"],
      architectureImage: "/flowcharts/nsb.svg",
      gallery: [],
    },
    {
      title: "Personal Portfolio Website",
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
