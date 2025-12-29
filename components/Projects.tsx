import { personalData } from "@/data/personalData";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link"; // For Next.js internal links

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex justify-end gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={24} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Live Demo / Project Link"
                  >
                    <LinkIcon size={24} />
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
