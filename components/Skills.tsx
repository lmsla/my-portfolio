import { personalData } from "@/data/personalData";
import { IconType } from "react-icons";
import {
  SiPython,
  SiGo,
  SiMysql, // Using MySQL as generic SQL icon or strictly SiPostgresql if preferred
  SiGnubash,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiArgo,
  SiElasticsearch,
  SiGrafana,
  SiElasticstack,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // Generic database icon for SQL if prefered

// Mapping string names to React Icons
const iconMapping: { [key: string]: IconType } = {
  // Languages
  "Python": SiPython,
  "Golang": SiGo,
  "SQL": FaDatabase, // Or SiMysql / SiPostgresql
  "Bash": SiGnubash,
  
  // DevOps
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "GitLab CI": SiGitlab,
  "ArgoCD": SiArgo,

  // Data
  "Elasticsearch": SiElasticsearch,

  // Observability
  "Grafana": SiGrafana,
  "ELK Stack": SiElasticstack,
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
                  const IconComponent = iconMapping[skillName];
                  return (
                    <div 
                      key={skillName}
                      className="flex items-center gap-3 bg-slate-900 px-4 py-3 rounded-lg border border-slate-700 shadow-sm hover:bg-slate-800 hover:scale-105 transition-all duration-300"
                    >
                      {IconComponent ? (
                        <IconComponent className="text-2xl text-blue-400" />
                      ) : (
                        <div className="w-6 h-6 bg-slate-700 rounded-full" /> // Fallback placeholder
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