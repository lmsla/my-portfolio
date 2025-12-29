import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/data/personalData";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-gray-900 text-slate-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-400">{personalData.name}</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            {personalData.title}
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            {personalData.tagline}
          </p>
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

        {/* Right Side: Image/Avatar (Placeholder for now) */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-400 z-10 flex items-center justify-center bg-slate-800">
          {/* Placeholder for your actual photo */}
          <span className="text-slate-400 text-sm">Your Photo Here</span>
          {/* Example if you have an image:
          <Image
            src="/images/your-avatar.jpg" // 將此替換為您的頭像路徑
            alt={personalData.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          */}
        </div>
      </div>
      {/* Optional: Subtle background pattern or animation */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
    </section>
  );
}
