import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Pricing() {
  const plans = [
    { name: "Essential", price: "$4,500", description: "For focused digital launches.", timeline: "3–5 weeks", features: ["Strategy workshop", "UX / UI design", "Responsive website", "CMS integration", "Launch support"] },
    { name: "Professional", price: "$9,800", description: "For ambitious digital products.", timeline: "6–10 weeks", featured: true, features: ["Everything in Essential", "Advanced product strategy", "Custom frontend", "Backend / API development", "Advanced animations", "Analytics & optimization", "30 days post-launch support"] },
    { name: "Enterprise", price: "Custom", description: "For complex digital ecosystems.", timeline: "Variable", features: ["Dedicated product team", "Complex system architecture", "Custom software", "Third-party integrations", "Infrastructure strategy", "Long-term partnership"] },
  ];

  return (
    <section id="investment" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="04" label="Investment" title="Engagement, structured." />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: index * .1 }} className={`relative flex flex-col border p-7 md:p-9 ${plan.featured ? "border-[#212121] bg-[#212121] text-white" : "border-neutral-300/70"}`}>
              {plan.featured && <div className="absolute right-5 top-5 bg-[#D5D3CC] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#212121]">Recommended</div>}
              <span className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${plan.featured ? "text-white/50" : "text-[#636361]"}`}>{plan.name}</span>
              <div className="mt-8">
                <div className="font-serif text-5xl">{plan.price}</div>
                <p className={`mt-3 text-sm ${plan.featured ? "text-white/60" : "text-[#636361]"}`}>{plan.description}</p>
              </div>
              <div className={`my-8 h-px ${plan.featured ? "bg-white/20" : "bg-neutral-300/70"}`} />
              <div className="mb-8">
                <span className={`text-[9px] uppercase tracking-[0.15em] ${plan.featured ? "text-white/50" : "text-[#636361]"}`}>Typical timeline</span>
                <div className="mt-2 font-serif text-xl">{plan.timeline}</div>
              </div>
              <ul className="flex-1 space-y-4">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={15} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-10 flex items-center justify-center gap-2 border px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all ${plan.featured ? "border-white bg-white text-[#212121] hover:bg-[#D5D3CC]" : "border-[#212121] hover:bg-[#212121] hover:text-white"}`}>
                Select Plan <ArrowUpRight size={13} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}