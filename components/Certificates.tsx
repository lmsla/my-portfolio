import { personalData } from "@/data/personalData";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
  if (!personalData.certificates || personalData.certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-20 px-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Certificates
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {personalData.certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-yellow-500" size={24} />
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                </div>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-slate-500 text-xs">Issued: {cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
