import { personalData } from "@/data/personalData";
import { Github, Link as LinkIcon, Lock, Server } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Key Projects & Architectures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Header with Title and Type Icon */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="p-2 bg-slate-700 rounded-lg text-blue-400">
                  {project.github ? <Github size={20} /> : <Server size={20} />}
                </div>
              </div>

              {/* Technologies Tags */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-blue-300 text-xs px-2 py-1 rounded-md border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow border-t border-slate-700/50 pt-4">
                {project.description}
              </p>

              {/* Footer Actions */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed">
                    <Lock size={16} />
                    <span>Proprietary / Client Project</span>
                  </div>
                )}
                
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                  >
                    <LinkIcon size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}