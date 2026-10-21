import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";

// Importation des images du projet Élégance
import eleganceDesk from "../assets/elegance-desk.png";
import eleganceMobile from "../assets/elegance-mobile.png";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Élégance Clinique",
      category: "Landing Page / Luxe",
      bg: "bg-[#0B0B0B]",
      accent: "text-white",
      description: "Page d'atterrissage haut de gamme, entièrement responsive et interactive, conçue pour la clinique esthétique Élégance (Casablanca et Marrakech).",
      techstack: ["React", "Tailwind CSS", "Vite", "Lucide React"],
      link: "https://elegance-murex.vercel.app/",
      images: {
        desk: eleganceDesk,
        mobile: eleganceMobile
      }
    },
    {
      id: "02",
      title: "Maison App",
      category: "E-commerce / Mobile",
      bg: "bg-[#D5D3CC]",
      accent: "text-[#212121]",
      description: "Application e-commerce au design épuré, pensée pour offrir une expérience d'achat haut de gamme.",
      techstack: ["React Native", "Tailwind CSS", "GraphQL"],
      link: "https://example.com"
    },
    {
      id: "03",
      title: "Vanguard Systems",
      category: "Dashboard UI",
      bg: "bg-[#636361]",
      accent: "text-white",
      description: "Interface de tableau de bord analytique en temps réel pour le suivi des métriques critiques d'entreprise.",
      techstack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      link: "https://example.com"
    },
    {
      id: "04",
      title: "Atelier Form",
      category: "Brand Identity",
      bg: "bg-[#D5D3CC]",
      accent: "text-[#212121]",
      description: "Identité de marque numérique interactive et système de design sur mesure pour studio créatif.",
      techstack: ["React", "Three.js", "Tailwind CSS"],
      link: "https://example.com"
    }
  ];

  return (
    <section id="works" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="02" label="Selected Works" title="Selected digital worlds." />
        
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article 
              key={project.title} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-80px" }} 
              transition={{ duration: 0.7, delay: index * 0.08 }} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${project.bg}`}>
                
                {/* Visualisation pour Élégance (Desktop Guddaa + Mobile) */}
                {project.id === "01" ? (
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 transition-transform duration-700 group-hover:scale-105">
                    {/* Mockup Desktop (Guddateera: w-[92%] fi top-3 left-3) */}
                    <img 
                      src={project.images.desk} 
                      alt="Élégance Desktop Preview" 
                      className="absolute w-[92%] rounded-md shadow-2xl border border-white/10 top-3 left-3 object-cover object-top"
                    />
                    {/* Mockup Mobile */}
                    <img 
                      src={project.images.mobile} 
                      alt="Élégance Mobile Preview" 
                      className="absolute w-[26%] sm:w-[24%] rounded-xl shadow-2xl border-2 border-white/20 bottom-3 right-3 object-cover z-10"
                    />
                  </div>
                ) : (
                  /* Standard preview for other projects */
                  <div className={`absolute inset-[10%] border ${project.accent === "text-white" ? "border-white/20" : "border-black/20"}`}>
                    <div className={`flex items-center justify-between border-b p-4 ${project.accent === "text-white" ? "border-white/20" : "border-black/20"}`}>
                      <span className={`font-serif text-lg ${project.accent}`}>{project.title.split(" ")[0]}</span>
                      <ArrowUpRight size={18} className={project.accent} />
                    </div>
                    <div className="grid h-[calc(100%-57px)] place-items-center p-8">
                      <div className="w-full">
                        <div className={`mx-auto h-3 w-1/2 ${project.accent === "text-white" ? "bg-white" : "bg-[#212121]"}`} />
                        <div className={`mx-auto mt-4 h-2 w-1/3 ${project.accent === "text-white" ? "bg-white/30" : "bg-black/20"}`} />
                        <div className="mt-10 grid grid-cols-3 gap-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className={`h-16 border ${project.accent === "text-white" ? "border-white/20" : "border-black/20"}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-6 left-6 opacity-0 transition-all duration-500 group-hover:opacity-100 z-20">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#212121]">
                    Explore Project <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start justify-between border-b border-neutral-300/70 py-5">
                <div>
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#636361]">{project.category}</p>
                </div>
                <span className="text-[10px] text-[#636361]">{project.id}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}