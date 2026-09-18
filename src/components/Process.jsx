import { motion } from "framer-motion";
import { MessageSquare, Compass, Cpu, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We define goals, analyze project requirements, and outline a clear roadmap for success.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "UX/UI Design",
      description: "Crafting bespoke interfaces tailored to your brand identity with an emphasis on user experience.",
      icon: Compass,
    },
    {
      number: "03",
      title: "Development",
      description: "Building fast, high-performance web applications using modern tech stacks like React and Tailwind CSS.",
      icon: Cpu,
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Deploying your application to production alongside testing and post-launch support.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="04" label="Process" title="How we bring ideas to life." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col justify-between border border-neutral-300/70 p-7 md:p-9"
              >
                <div>
                  <div className="flex items-center justify-between text-[#636361]">
                    <span className="font-mono text-xs">{step.number}</span>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#636361]">{step.description}</p>
                </div>
                <div className="mt-8 h-px w-full bg-neutral-300/50" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}