import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const servicesData = [
    {
      id: "01",
      title: "Digital Product Design",
      description: "Conception d'interfaces UI/UX modernes, wireframing et systèmes de design (Design Systems) axés sur l'expérience utilisateur.",
      tags: ["UI/UX Design", "Wireframing", "Design System", "Prototyping"],
    },
    {
      id: "02",
      title: "Web Development",
      description: "Développement d'applications web performantes, réactives et sécurisées avec les technologies modernes comme React et Tailwind.",
      tags: ["React / Next.js", "Tailwind CSS", "REST APIs", "Performance Optimization"],
    },
    {
      id: "03",
      title: "Custom Software",
      description: "Solutions logicielles et tableaux de bord (Dashboards) sur mesure adaptés aux besoins spécifiques de votre entreprise.",
      tags: ["Full-Stack", "Dashboards", "Cloud Architecture"],
    },
    {
      id: "04",
      title: "E-commerce",
      description: "Création de boutiques en ligne fluides, optimisées pour la conversion et intégrées aux moyens de paiement.",
      tags: ["Online Stores", "Payment Gateways", "Inventory Sync"],
    },
    {
      id: "05",
      title: "Brand Strategy",
      description: "Élaboration d'identités visuelles fortes et cohérentes pour démarquer votre marque sur le marché.",
      tags: ["Brand Identity", "Visual Guidelines", "Digital Strategy"],
    },
    {
      id: "06",
      title: "Digital Transformation",
      description: "Accompagnement dans la digitalisation de vos processus métiers et l'optimisation de votre stack technique.",
      tags: ["Process Automation", "Tech Stack Audit", "Consulting"],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="03" label="Services" title="From idea to interface." />
        
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Colonne gauche */}
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-[#636361]">
              We combine strategy, design, and engineering under one roof. Every engagement is structured around creating measurable digital value.
            </p>
          </div>

          {/* Colonne droite : Liste avec animation Hover + Accordion */}
          <div className="lg:col-span-8 border-b border-neutral-300/70">
            {servicesData.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="border-t border-neutral-300/70 py-6"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="group flex w-full items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[9px] text-[#636361]">{service.id}</span>
                      <h3 className="font-serif text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl text-[#212121]">
                        {service.title}
                      </h3>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transition-transform duration-300 group-hover:translate-x-2 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-7 md:pl-8 pt-4"
                      >
                        <p className="max-w-xl text-xs leading-relaxed text-[#636361] md:text-sm">
                          {service.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 pb-2">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="border border-neutral-300 bg-white px-3 py-1 font-mono text-[10px] uppercase text-[#212121]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}