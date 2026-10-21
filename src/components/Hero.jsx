import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

// Importation des images du projet Élégance
import eleganceDesk from "../assets/elegance-desk.png";
import eleganceMobile from "../assets/elegance-mobile.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Liste des projets à faire défiler dans le Hero Showcase
  const showcaseProjects = [
    {
      title: "Élégance Clinique",
      badge: "RESPONSIVE / LUXURY CLINIC",
      desk: eleganceDesk,
      mobile: eleganceMobile,
      isRealImage: true,
    },
    {
      title: "Aura FinTech",
      badge: "RESPONSIVE / ENGINEERED",
      isRealImage: false, // Wireframe par défaut
    }
  ];

  // Rotation automatique toutes les 4.5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [showcaseProjects.length]);

  const activeProject = showcaseProjects[currentIndex];

  return (
    <section className="relative border-b border-neutral-300/70 pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Côté Gauche */}
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#636361]">
              INDEPENDENT DIGITAL AGENCY • EST. 2026
            </span>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight text-[#212121] md:text-7xl lg:text-8xl">
              DIGITAL <br />
              SOLUTIONS <br />
              FOR <br />
              TOMORROW.
            </h1>

            <p className="mt-8 max-w-md text-xs leading-relaxed text-[#636361] md:text-sm">
              We design and engineer high-conversion digital experiences,
              custom software systems, and distinctive brands built for ambitious
              businesses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-3 bg-[#212121] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                View Projects <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-[#212121] bg-transparent px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#212121] transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* Côté Droit : Dynamic Showcase (Desktop + Mobile slider) */}
          <div className="relative lg:col-span-7">
            <div className="group relative mx-auto w-full max-w-[720px] py-6 min-h-[420px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full"
                >
                  {/* Mockup Desktop */}
                  <div className="relative w-full rounded-xl border border-neutral-300/80 bg-neutral-900 overflow-hidden shadow-xl transition-all duration-700 group-hover:shadow-2xl">
                    
                    {/* Frame Top Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#141414] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                        {activeProject.title}
                      </span>
                      <div className="w-12" />
                    </div>

                    {/* Image ou Wireframe Desktop */}
                    <div className="relative aspect-[16/10] w-full bg-[#0B0B0B] overflow-hidden">
                      {activeProject.isRealImage ? (
                        <img 
                          src={activeProject.desk} 
                          alt={activeProject.title}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        /* Wireframe par défaut pour Aura */
                        <div className="p-6 md:p-8 bg-white h-full">
                          <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-4 space-y-4 border-r border-neutral-100 pr-4">
                              <span className="font-serif text-base font-bold tracking-wider text-[#212121]">AURA</span>
                              <div className="h-4 w-24 rounded bg-neutral-900" />
                              <div className="h-3 w-28 rounded bg-neutral-200" />
                              <div className="h-3 w-20 rounded bg-neutral-100" />
                            </div>
                            <div className="col-span-8 space-y-5">
                              <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                  <div className="h-3 w-16 rounded bg-neutral-200" />
                                  <div className="h-5 w-44 rounded bg-neutral-900" />
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map((i) => (
                                  <div key={i} className="rounded-lg border border-neutral-200/80 p-3">
                                    <div className="h-2 w-8 rounded bg-neutral-200" />
                                    <div className="mt-3 h-4 w-12 rounded bg-neutral-800" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mockup Mobile SGHRNAH (w-36 / md:w-48) */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute -bottom-3 right-3 w-36 md:w-48 rounded-xl border-[2.5px] border-[#212121] bg-[#0B0B0B] overflow-hidden shadow-2xl z-20"
                  >
                    {activeProject.isRealImage ? (
                      <img 
                        src={activeProject.mobile} 
                        alt="Mobile View"
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      /* Mobile Wireframe Aura */
                      <div className="p-3 bg-white">
                        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-neutral-800" />
                        <span className="font-serif text-xs font-bold tracking-wider text-[#212121]">AURA</span>
                        <div className="mt-3 rounded-lg bg-[#212121] p-3 text-white">
                          <div className="h-1.5 w-8 rounded bg-neutral-400" />
                          <div className="mt-2 h-4 w-20 rounded bg-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Badge Responsive */}
                  <div className="absolute -bottom-6 left-3 rounded border border-neutral-300/80 bg-[#FFEFEF] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361] shadow-sm z-30">
                    {activeProject.badge}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Indicateurs de Slide en bas */}
              <div className="absolute -bottom-8 right-3 flex items-center gap-2 z-30">
                {showcaseProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      i === currentIndex ? "w-6 bg-[#212121]" : "w-1.5 bg-neutral-300"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Footer Hero */}
        <div className="mt-20 flex items-center justify-between border-t border-neutral-300/50 pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#636361]">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="animate-bounce" />
          <span>DIGITAL / STRATEGY / ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}