import { personalData } from "@/data/personalData";
import { IconType } from "react-icons";
import {
  SiPython,
  SiGo,
  SiMysql, 
  SiGnubash,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiArgo,
  SiElasticsearch,
  SiGrafana,
  SiElasticstack,
  SiAnsible,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import { withPrefix } from "@/utils/prefix";

// Define a type that can be an IconType or a string (for image paths)
type SkillIcon = IconType | string;

// Mapping string names to React Icons or Image Paths
const iconMapping: { [key: string]: SkillIcon } = {
  // Languages
  "Python": "/images/logos/python.svg",
  "Golang": "/images/logos/go.svg",
  "SQL": FaDatabase,
  "Bash": SiGnubash,
  
  // DevOps
  "Docker": "/images/logos/docker.svg",
  "Kubernetes": SiKubernetes,
  "GitLab CI": "/images/logos/gitlab.svg",
  "ArgoCD": "/images/logos/argocd.svg",
  "Ansible": SiAnsible,

  // Data Engineering & Observability (Prioritize local SVGs for branding)
  "Elasticsearch": "/images/logos/elasticsearch.svg",
  "Logstash": "/images/logos/logstash.svg",
  "Kibana": "/images/logos/kibana.svg",
  "Beats": "/images/logos/beats.svg",
  "OpenSearch": "/images/logos/opensearch.svg",
  "Grafana": SiGrafana, // Or use local if available, but SiGrafana is fine
  "ELK Stack": SiElasticstack,

  // Database
  "MySQL": SiMysql,
  "Redis": "/images/logos/redis.svg",

  // Network & Security & Infrastructure
  "Fortinet": "/images/logos/fortinet.svg",
  "F5": "/images/logos/f5.svg",
  "Cisco": "/images/logos/cisco.svg",
  "Palo Alto": "/images/logos/PaloAltoNetworks_2020_Logo.svg.png",
  "Check Point": "/images/logos/checkpoint.png",
  "Linux": "/images/logos/linux-tux-svgrepo-com.svg",
  "Windows": "/images/logos/windows.svg",
  "VMware": "/images/logos/vmware-svgrepo-com.svg",
  "AWS": "/images/logos/aws.svg",
  "Windows Security": "/images/logos/windows.svg", // Re-use windows logo
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(personalData.skills).map(([category, skills]) => (
            <div key={category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold capitalize text-slate-100 mb-6 flex items-center gap-2 border-b border-slate-700 pb-3">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {skills.map((skillName) => {
                  const IconOrPath = iconMapping[skillName];
                  
                  return (
                    <div 
                      key={skillName}
                      className="flex items-center gap-3 bg-slate-900 px-4 py-3 rounded-lg border border-slate-700 shadow-sm hover:bg-slate-800 hover:scale-105 transition-all duration-300"
                    >
                      {/* Icon Rendering Logic */}
                      {typeof IconOrPath === 'string' ? (
                        <div className="relative w-6 h-6">
                           <Image 
                             src={withPrefix(IconOrPath)} 
                             alt={skillName} 
                             fill 
                             className="object-contain"
                           />
                        </div>
                      ) : IconOrPath ? (
                        <IconOrPath className="text-2xl text-blue-400" />
                      ) : (
                        <div className="w-6 h-6 bg-slate-700 rounded-full" /> // Fallback
                      )}
                      
                      <span className="font-medium text-slate-300">{skillName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}