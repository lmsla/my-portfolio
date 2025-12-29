// data/personalData.ts

export const personalData = {
  name: "Russell Chen",
  title: "DevOps & Data Engineer",
  tagline: "Building scalable infrastructure and unlocking data insights.",
  about: [
    "A passionate engineer with expertise in Backend Development, Data Engineering, and DevOps practices. I thrive on building robust systems and optimizing workflows.",
    "My journey has involved working on diverse projects, from designing efficient data pipelines to implementing resilient CI/CD systems and managing cloud infrastructure.",
    "I am constantly learning new technologies and looking for opportunities to leverage automation and data-driven approaches to solve complex problems.",
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-github-username", // 替換為您的 GitHub 連結
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile", // 替換為您的 LinkedIn 連結
  },
  skills: {
    devops: [
      "Kubernetes",
      "Docker",
      "GitLab CI/CD",
      "ArgoCD",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    dataEngineering: [
      "Python",
      "SQL",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "ETL Design",
      "Data Warehousing",
    ],
    backend: ["Golang", "Python", "Node.js", "REST APIs", "Microservices"],
    cloud: ["AWS", "GCP", "Azure"],
  },
  experience: [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      years: "2022 - Present",
      description: "Led the design and implementation of scalable CI/CD pipelines, managed Kubernetes clusters, and optimized cloud infrastructure costs by 20%.",
      technologies: ["Kubernetes", "GitLab CI/CD", "Terraform", "AWS", "Python"],
    },
    {
      title: "Data Engineer",
      company: "Data Insights Co.",
      years: "2019 - 2022",
      description: "Developed and maintained robust ETL processes, built data warehouses, and improved data quality for analytical reporting.",
      technologies: ["Python", "Spark", "SQL", "Airflow", "PostgreSQL"],
    },
  ],
  projects: [
    {
      title: "Automated Data Pipeline for E-commerce",
      description: "Designed and implemented an end-to-end data pipeline using Kafka, Spark, and Airflow to process real-time e-commerce transaction data, improving analytical reporting latency by 50%.",
      technologies: ["Kafka", "Apache Spark", "Airflow", "Python", "AWS S3"],
      github: "https://github.com/your-github/project1",
      link: "https://your-demo-link.com/project1",
      image: "/images/project1.jpg", // Placeholder
    },
    {
      title: "Kubernetes Cluster Management Tool",
      description: "Developed a custom CLI tool in Golang for simplified management and monitoring of Kubernetes clusters across multiple environments.",
      technologies: ["Golang", "Kubernetes API", "Prometheus", "Grafana"],
      github: "https://github.com/your-github/project2",
      link: "https://your-demo-link.com/project2",
      image: "/images/project2.jpg", // Placeholder
    },
  ],
  certificates: [
    {
      name: "Google Cloud Professional DevOps Engineer",
      issuer: "Google Cloud",
      date: "2023-05",
      link: "https://www.credly.com/badges/...",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      date: "2022-11",
      link: "https://www.credly.com/badges/...",
    },
  ],
};
