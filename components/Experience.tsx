import { personalData } from "@/data/personalData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Experience
        </h2>
        <div className="relative border-l border-blue-500 pl-8">
          {personalData.experience.map((item, index) => (
            <div key={index} className="mb-12">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-slate-900"></div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-1">
                {item.company}
              </h3>
              <p className="text-lg text-slate-400 mb-3">{item.title} | {item.years}</p>
              <p className="text-slate-300 mb-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
