import { useEffect, useState, useRef } from "react";
import { X, Github, Link as LinkIcon, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // content can be:
  // 1. Image URL (string)
  // 2. Static React Node (React.ReactNode)
  // 3. Render Prop function for responsive scaling ((scale: number) => React.ReactNode)
  content: React.ReactNode | string | ((scale: number) => React.ReactNode);
  title: string;
  description?: string;
  technologies?: string[];
  links?: {
    github?: string;
    link?: string;
  };
}

export default function Modal({ isOpen, onClose, content, title, description, technologies, links }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Responsive Scaling Logic
  useEffect(() => {
    if (!isOpen || typeof content !== 'function') return;

    const updateScale = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // 1500 is the base width of our ArchitectureDiagram
        // We calculate scale to fit the diagram into the container width
        // We use Math.min(1, ...) to avoid scaling up if screen is huge
        const newScale = Math.min(1, width / 1500);
        setScale(newScale);
      }
    };

    // Initial calculation
    // Small delay to ensure modal is rendered and has width
    const timer = setTimeout(updateScale, 100); 
    
    window.addEventListener('resize', updateScale);
    
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timer);
    };
  }, [isOpen, content]);


  const isImage = typeof content === "string";
  const isRenderProp = typeof content === "function";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-slate-900 rounded-2xl shadow-2xl w-[98vw] max-w-none max-h-[98vh] flex flex-col border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800/50 backdrop-blur-md z-10 shrink-0">
              <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                
                {/* 1. Architecture Diagram Area */}
                <div 
                    ref={containerRef}
                    className="w-full bg-slate-950 p-4 lg:p-8 flex items-center justify-center min-h-[400px] border-b border-slate-800 overflow-hidden relative"
                >
                    {isImage ? (
                        <div className="relative w-full h-full min-h-[500px]">
                        <Image
                            src={content as string}
                            alt={`${title} Architecture`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                        </div>
                    ) : isRenderProp ? (
                        // Render Prop Case: Pass the dynamic scale
                        // We set height dynamically to match the scaled content to avoid extra whitespace
                        <div style={{ 
                            width: 1500 * scale, 
                            height: 700 * scale,
                            transition: 'width 0.3s, height 0.3s' 
                        }}>
                             {(content as (scale: number) => React.ReactNode)(scale)}
                        </div>
                    ) : (
                         // Static React Node Case
                        <div className="min-w-[1200px] w-full h-full flex items-center justify-center scale-100">
                            {content as React.ReactNode}
                        </div>
                    )}
                </div>

                {/* 2. Project Details Area */}
                <div className="p-8 bg-slate-900">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Description */}
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                                Project Overview
                            </h4>
                            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        {/* Sidebar: Tech & Links */}
                        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-8">
                            {/* Technologies */}
                            {technologies && technologies.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-800 text-blue-300 text-sm rounded-md border border-slate-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Links */}
                            {links && (links.github || links.link) && (
                                <div>
                                     <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                        Links
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-600 transition-colors font-medium">
                                                <Github size={20} /> View Source Code
                                            </a>
                                        )}
                                        {links.link && (
                                            <a href={links.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all font-medium">
                                                <ExternalLink size={20} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}