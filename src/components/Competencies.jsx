import { motion } from "framer-motion";
import { Code2, Grid3X3, Layers3, PenTool } from "lucide-react";
import SectionHeader from "./SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Competencies() {
  const items = [
    ["01", "System Design", "Architecture that creates a solid foundation for complex digital products and scalable platforms.", Layers3],
    ["02", "UI / UX Design", "Interfaces designed around clarity, usability, conversion, and a distinctive visual language.", PenTool],
    ["03", "Full-Stack Engineering", "Production-ready frontends, APIs, databases, integrations, and infrastructure.", Code2],
    ["04", "Brand Architecture", "Strategic identities that translate consistently across digital products and customer touchpoints.", Grid3X3],
  ];

  return (
    <section id="competencies" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="01" label="Competencies" title="Built from first principles." />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid border-l border-t border-neutral-300/70 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([number, title, description, Icon]) => (
            <motion.article key={number} variants={fadeUp} className="group min-h-[340px] border-b border-r border-neutral-300/70 p-7 transition-colors duration-500 hover:bg-[#D5D3CC]/30 md:p-9">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-[#636361]">{number}</span>
                <Icon size={21} strokeWidth={1.3} className="transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <div className="mt-28">
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-5 text-sm leading-6 text-[#636361]">{description}</p>
              </div>
              <div className="mt-8 h-px w-0 bg-[#212121] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}