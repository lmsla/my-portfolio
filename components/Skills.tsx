import { personalData } from "@/data/personalData";
import { Gauge, HardHat, Cloud, Code } from "lucide-react"; // Icons for categories

const skillIcons: { [key: string]: React.ElementType } = {
  devops: Gauge,
  dataEngineering: HardHat, // Using HardHat as a placeholder for data engineering for now
  backend: Code,
  cloud: Cloud,
  // Add more as needed
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(personalData.skills).map(([category, skills]) => {
            const Icon = skillIcons[category.replace(/([A-Z])/g, "-$1").toLowerCase()] || Code; // Fallback to Code icon
            return (
              <div
                key={category}
                className="bg-slate-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold capitalize text-slate-100">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
