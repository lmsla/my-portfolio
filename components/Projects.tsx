"use client";

import { useState } from "react";
import { personalData } from "@/data/personalData";
import { Github, Link as LinkIcon, Lock, Maximize2 } from "lucide-react";
import Modal from "./Modal";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Image from "next/image";
import { withPrefix } from "@/utils/prefix"; // Import withPrefix
import { motion } from "framer-motion";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "企業專案", "產品開發", "教育訓練", "個人專案"];

  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    content: React.ReactNode | string | ((scale: number) => React.ReactNode) | null;
    description: string;
    timeline?: { title: string; date: string }[];
    technologies: string[];
    links?: { github?: string; link?: string };
    gallery?: (string | { src: string; caption?: string })[];
  } | null>(null);

  const filteredProjects = personalData.projects.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const handleProjectClick = (project: typeof personalData.projects[0]) => {
    let modalContent: React.ReactNode | string | ((scale: number) => React.ReactNode) | null = null;

    // Process gallery images with prefix first
    const galleryWithPrefix = project.gallery ? project.gallery.map(item => {
        if (typeof item === 'string') {
            return withPrefix(item);
        } else {
            return {
                ...item,
                src: withPrefix(item.src)
            };
        }
    }) : [];

    // Determine the main content for the modal
    if (project.architectureImage) {
      modalContent = withPrefix(project.architectureImage);
    } else if (galleryWithPrefix.length > 0) {
      // If no architecture image, but there's a gallery, use the first gallery item as main content
      const firstGalleryItem = galleryWithPrefix[0];
      modalContent = typeof firstGalleryItem === 'string' ? firstGalleryItem : firstGalleryItem.src;
    } else {
      // Fallback if neither architectureImage nor gallery exists
      modalContent = withPrefix("/images/architecture-demo.svg");
    }

    setSelectedProject({
      title: project.title,
      content: modalContent, // Use the determined modalContent
      description: project.description,
      timeline: project.timeline,
      technologies: project.technologies || [],
      links: { github: project.github, link: project.link },
      gallery: galleryWithPrefix,
    });
  };

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-slate-200">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Selected Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => {
            // Determine thumbnail image
            let thumbnailSrc: string | null = null;
            if (project.architectureImage) {
                thumbnailSrc = withPrefix(project.architectureImage);
            } else if (project.gallery && project.gallery.length > 0) {
                const firstItem = project.gallery[0];
                thumbnailSrc = typeof firstItem === 'string' ? withPrefix(firstItem) : withPrefix(firstItem.src);
            }

            return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={project.title} // Use unique key for animation
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
                  {thumbnailSrc ? (
                    <Image
                      src={thumbnailSrc} // Use determined thumbnail
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
            </motion.div>
          );
          })}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
                <p>No projects found in this category.</p>
            </div>
        )}
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        content={selectedProject?.content || ""}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
        timeline={selectedProject?.timeline}
        technologies={selectedProject?.technologies}
        links={selectedProject?.links}
        gallery={selectedProject?.gallery}
      />
    </section>
  );
}
