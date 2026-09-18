import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Portfolio() {
  const projects = [
    ["Aura FinTech", "Web Platform", "01", "bg-[#212121]", "text-white"],
    ["Maison App", "E-commerce / Mobile", "02", "bg-[#D5D3CC]", "text-[#212121]"],
    ["Vanguard Systems", "Dashboard UI", "03", "bg-[#636361]", "text-white"],
    ["Atelier Form", "Brand Identity", "04", "bg-[#D5D3CC]", "text-[#212121]"],
  ];

  return (
    <section id="works" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="02" label="Selected Works" title="Selected digital worlds." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map(([title, type, number, bg, accent], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, delay: index * .08 }} className="group cursor-pointer">
              <div className={`relative aspect-[4/3] overflow-hidden ${bg}`}>
                <div className={`absolute inset-[10%] border ${accent === "text-white" ? "border-white/20" : "border-black/20"}`}>
                  <div className={`flex items-center justify-between border-b p-4 ${accent === "text-white" ? "border-white/20" : "border-black/20"}`}>
                    <span className={`font-serif text-lg ${accent}`}>{title.split(" ")[0]}</span>
                    <ArrowUpRight size={18} className={accent} />
                  </div>
                  <div className="grid h-[calc(100%-57px)] place-items-center p-8">
                    <div className="w-full">
                      <div className={`mx-auto h-3 w-1/2 ${accent === "text-white" ? "bg-white" : "bg-[#212121]"}`} />
                      <div className={`mx-auto mt-4 h-2 w-1/3 ${accent === "text-white" ? "bg-white/30" : "bg-black/20"}`} />
                      <div className="mt-10 grid grid-cols-3 gap-3">{[1, 2, 3].map(i => <div key={i} className={`h-16 border ${accent === "text-white" ? "border-white/20" : "border-black/20"}`} />)}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
                <div className="absolute bottom-6 left-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em]">Explore Project <ArrowUpRight size={12} /></div>
                </div>
              </div>
              <div className="flex items-start justify-between border-b border-neutral-300/70 py-5">
                <div>
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#636361]">{type}</p>
                </div>
                <span className="text-[10px] text-[#636361]">{number}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}