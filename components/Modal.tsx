import { useEffect, useState, useRef } from "react";
import { X, Github, Link as LinkIcon, ExternalLink, ChevronLeft, ChevronRight, LayoutGrid, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // content can be:
  // 1. Image URL (string) for static architecture images
  // 2. Render Prop function for responsive scaling ((scale: number) => React.ReactNode) for dynamic diagrams
  content: React.ReactNode | string | ((scale: number) => React.ReactNode);
  title: string;
  description?: string;
  technologies?: string[];
  links?: {
    github?: string;
    link?: string;
  };
  gallery?: string[]; // Added gallery field for additional images/screenshots
}

export default function Modal({ isOpen, onClose, content, title, description, technologies, links, gallery }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0); // 0 for main content, 1+ for gallery

  // Total number of slides (main content + gallery images)
  const totalSlides = (gallery?.length || 0) + 1;

  // Reset slide when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0); // Always start with the main content (architecture diagram)
    }
  }, [isOpen]);

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

  // Responsive Scaling Logic for ArchitectureDiagram
  useEffect(() => {
    if (!isOpen || typeof content !== 'function') return;

    const updateScale = () => {
      if (containerRef.current) {
        // Adjust width to account for padding
        const { width } = containerRef.current.getBoundingClientRect();
        const effectiveWidth = width - (window.innerWidth >= 1024 ? 64 : 32); // Subtract padding from p-8 or p-4
        
        // 1500 is the base width of our ArchitectureDiagram
        const newScale = Math.min(1, effectiveWidth / 1500);
        setScale(newScale);
      }
    };

    const timer = setTimeout(updateScale, 100); 
    window.addEventListener('resize', updateScale);
    
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timer);
    };
  }, [isOpen, content, currentSlide]); // Recalculate if slide changes

  const isRenderProp = typeof content === "function";

  // Function to render the current slide content
  const renderSlideContent = () => {
    if (currentSlide === 0) {
      // Main Content (Architecture Diagram or static image)
      if (isRenderProp) {
        return (content as (scale: number) => React.ReactNode)(scale);
      } else if (typeof content === "string") {
        return (
          <Image
            src={content}
            alt={`${title} Architecture`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        );
      }
      return content as React.ReactNode; // Fallback for static React Node
    } else {
      // Gallery images
      const imageUrl = gallery?.[currentSlide - 1];
      if (imageUrl) {
        return (
          <Image
            src={imageUrl}
            alt={`${title} Screenshot ${currentSlide}`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        );
      }
    }
    return null; // Should not happen
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

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
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col lg:flex-row">
                
                {/* 1. Architecture Diagram / Gallery Area */}
                <div 
                    ref={containerRef}
                    className="relative w-full lg:w-3/4 bg-slate-950 p-4 lg:p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-r border-slate-800 overflow-hidden flex-shrink-0"
                >
                    {/* Carousel Content */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    {renderSlideContent()}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white z-20"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white z-20"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* Slide Indicators */}
                        {totalSlides > 1 && (
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/50 px-3 py-1 rounded-full z-20">
                                <span className="text-sm text-slate-200 flex items-center gap-1">
                                    {currentSlide === 0 ? <LayoutGrid size={16} /> : <ImageIcon size={16} />}
                                    {currentSlide + 1} / {totalSlides}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* 2. Project Details Area (right sidebar on large screens) */}
                <div className="w-full lg:w-1/4 p-8 bg-slate-900 flex-shrink-0">
                    <div className="flex flex-col gap-8">
                        {/* Description */}
                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                                Project Overview
                            </h4>
                            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        {/* Sidebar: Tech & Links */}
                        <div className="flex flex-col gap-8">
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
