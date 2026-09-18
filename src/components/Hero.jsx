import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroMockup from "./HeroMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden border-b border-neutral-300/70 pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-0 h-full w-px bg-neutral-300/60" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-neutral-300/40" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-neutral-300/60" />
        <div className="absolute left-0 right-0 top-[35%] h-px bg-neutral-300/50" />
        <div className="absolute left-0 right-0 top-[75%] h-px bg-neutral-300/50" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-[#212121]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#636361]">Independent Digital Agency · Est. 2026</span>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[1100px]">
          <motion.h1 variants={fadeUp} className="font-serif text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.055em]">
            DIGITAL<br /><span className="ml-[8%] italic">SOLUTIONS</span><br /><span className="ml-[16%]">FOR TOMORROW.</span>
          </motion.h1>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-[#636361] md:text-base">
              We design and engineer high-conversion digital experiences, custom software systems, and distinctive brands built for ambitious businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#works" className="group inline-flex items-center gap-3 bg-[#212121] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FFEFEF]">
                View Projects <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-[#212121] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-[#212121] hover:text-white">
                Book Strategy Call
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .9, delay: .15 }} className="lg:col-span-8">
            <HeroMockup />
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-neutral-300/70 py-5">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#636361]">Scroll to explore</span>
          <motion.a href="#competencies" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ArrowDown size={17} /></motion.a>
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#636361] md:block">Digital / Strategy / Engineering</span>
        </div>
      </div>
    </section>
  );
}