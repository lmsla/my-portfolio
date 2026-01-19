"use client";

import { personalData } from "@/data/personalData";
import { Award, BookOpen, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!personalData.certificates || personalData.certificates.length === 0) {
    return null;
  }

  // Helper function to determine icon based on certificate type
  const getIcon = (type?: string) => {
    if (type === "certification") {
      return <Award className="text-yellow-500 shrink-0" size={24} />;
    } else {
      return <BookOpen className="text-blue-400 shrink-0" size={24} />;
    }
  };

  return (
    <section id="certificates" className="py-20 px-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Certifications & Training
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {personalData.certificates.map((cert, index) => (
            <div
              key={index}
              className="group flex bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-2">
                    {getIcon((cert as any).type)}
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors ml-2 shrink-0"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-slate-500 text-xs">Issued: {cert.date}</p>
              </div>
              
              {(cert as any).image && (
                <div 
                  className="relative w-32 sm:w-40 shrink-0 border-l border-slate-700 overflow-hidden cursor-pointer bg-slate-900"
                  onClick={() => setSelectedImage((cert as any).image)}
                >
                  <Image
                    src={(cert as any).image}
                    alt={cert.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="text-white text-[10px] bg-blue-600/80 px-2 py-0.5 rounded shadow-sm">VIEW</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
