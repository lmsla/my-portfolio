"use client";

import { useState } from "react";
import { personalData } from "@/data/personalData";
import { Github, Link as LinkIcon, Lock, Maximize2 } from "lucide-react";
import Modal from "./Modal";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Image from "next/image";
import { withPrefix } from "@/utils/prefix"; // Import withPrefix

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    content: React.ReactNode | string | ((scale: number) => React.ReactNode);
    description: string;
    technologies: string[];
    links?: { github?: string; link?: string };
    gallery?: string[];
  } | null>(null);

  const handleProjectClick = (project: typeof personalData.projects[0]) => {
    let content: React.ReactNode | string | ((scale: number) => React.ReactNode) = "";

    if (project.title === "華新麗華-資安數據中台") {
      content = (scale: number) => <ArchitectureDiagram scale={scale} />;
    } else if (project.architectureImage) {
      // Use withPrefix for static architecture image
      content = withPrefix(project.architectureImage);
    } else {
        content = withPrefix("/images/architecture-demo.svg"); 
    }

    // Process gallery images with prefix
    const galleryWithPrefix = project.gallery ? project.gallery.map(img => withPrefix(img)) : [];

    setSelectedProject({
      title: project.title,
      content: content,
      description: project.description,
      technologies: project.technologies || [],
      links: { github: project.github, link: project.link },
      gallery: galleryWithPrefix,
    });
  };

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
          Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {personalData.projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-56 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 flex items-center justify-center">
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-20 transition-colors flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100" />
                </div>

                {/* Content Render */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {project.title === "華新麗華-資安數據中台" ? (
                    <div className="flex items-center justify-center">
                         <ArchitectureDiagram scale={0.25} />
                    </div>
                  ) : project.architectureImage ? (
                    <Image
                      src={withPrefix(project.architectureImage)} // Use withPrefix
                      alt={project.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                     <div className="flex flex-col items-center justify-center text-slate-600">
                        <Lock size={48} />
                        <span className="text-sm mt-2">Confidential</span>
                     </div>
                  )}
                </div>
              </div>

              {/* Text Info */}
              <div className="px-1">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                 <div className="flex flex-wrap gap-2 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 3 && (
                      <span className="text-xs text-slate-500 py-1">+ {project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        content={selectedProject?.content || ""}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
        technologies={selectedProject?.technologies}
        links={selectedProject?.links}
        gallery={selectedProject?.gallery}
      />
    </section>
  );
}
