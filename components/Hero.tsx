import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/data/personalData";
import { withPrefix } from "@/utils/prefix";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-gray-900 text-slate-100 p-8 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hello, I'm <span className="text-blue-400">{personalData.name}</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-slate-200">
            {personalData.title}
          </p>
          
          {/* About Text integrated into Hero */}
          <div className="space-y-4 mb-8 text-slate-300 text-lg leading-relaxed">
            {personalData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex space-x-6">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right Side: Image/Avatar */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400 z-10 flex items-center justify-center bg-slate-800 shrink-0">
          {personalData.profileImage ? (
            <img
              src={withPrefix(personalData.profileImage)}
              alt={personalData.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-slate-400 text-sm">Your Photo Here</span>
          )}
        </div>
      </div>
      {/* Optional: Subtle background pattern or animation */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
    </section>
  );
}
