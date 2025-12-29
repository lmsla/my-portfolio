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
      title: "Enterprise Security Data Platform",
      description: "Architected a centralized SIEM-like logging platform for a large-scale enterprise client. Designed a high-availability Elasticsearch cluster to ingest TB-scale daily logs from diverse sources (Firewalls, Servers, Applications) using Logstash and Beats. Created complex Kibana dashboards for SOC teams to monitor security threats in real-time.",
      technologies: ["Elasticsearch Cluster", "Logstash", "Filebeat", "Kibana", "Linux", "Security"],
      architectureImage: "/images/architecture-siem.svg", // Path to your architecture diagram
    },
    {
      title: "K8s Observability & Monitoring Stack",
      description: "Implemented a comprehensive observability solution for a microservices environment. Deployed Prometheus and Grafana for metrics collection, integrated with the ELK stack for log correlation. Established alerting rules to proactively detect system anomalies and reduce downtime.",
      technologies: ["Kubernetes", "Prometheus", "Grafana", "Alertmanager", "Fluentd"],
      // No github link
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
