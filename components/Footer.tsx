import { personalData } from "@/data/personalData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-600">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
