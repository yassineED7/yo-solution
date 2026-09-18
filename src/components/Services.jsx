import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const services = ["Digital Product Design", "Web Development", "Custom Software", "E-commerce", "Brand Strategy", "Digital Transformation"];

  return (
    <section id="services" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="03" label="Services" title="From idea to interface." />
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-[#636361]">We combine strategy, design, and engineering under one roof. Every engagement is structured around creating measurable digital value.</p>
          </div>
          <div className="lg:col-span-8">
            {services.map((service, index) => (
              <motion.div key={service} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .06 }} className="group flex items-center justify-between border-t border-neutral-300/70 py-6">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[9px] text-[#636361]">0{index + 1}</span>
                  <h3 className="font-serif text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{service}</h3>
                </div>
                <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}