import { personalData } from "@/data/personalData";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          {personalData.about.map((paragraph, index) => (
            <p key={index} className="text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Optional: Add a section for "Specialty" or "Core Values" here if desired, similar to detectviz.com */}
        {/* For now, we'll keep it simple and focus on the text from personalData.about */}
      </div>
    </section>
  );
}
