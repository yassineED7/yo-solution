import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Search } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

import eleganceDesk from "../assets/elegance-desk.png";
import eleganceMobile from "../assets/elegance-mobile.png";
import storeDesk from "../assets/store-desk.png";
import storeMobile from "../assets/store-mobil.png";
import facturoDesk from "../assets/facturo-desk.png";
import facturoMobile from "../assets/facturo-mobil.png";

export default function ProjectsPage({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: "01",
      title: "Élégance Clinique",
      category: "Landing Page",
      badge: "Luxe & Santé",
      bg: "bg-[#0B0B0B]",
      accent: "text-white",
      description:
        "Page d'atterrissage haut de gamme, entièrement responsive et interactive, conçue pour la clinique esthétique Élégance (Casablanca et Marrakech).",
      techstack: ["React", "Tailwind CSS", "Vite", "Lucide React"],
      link: "https://elegance-murex.vercel.app/",
      images: {
        desk: eleganceDesk,
        mobile: eleganceMobile,
      },
    },
    {
      id: "02",
      title: "ATELIER Store",
      category: "E-Commerce",
      badge: "Fashion & Luxe",
      bg: "bg-[#0B0B0B]",
      accent: "text-white",
      description:
        "Boutique e-commerce de luxe minimale et sophistiquée avec filtres interactifs, aperçu rapide, gestion du panier/favoris et commande directe via WhatsApp.",
      techstack: ["React", "Tailwind CSS", "Vite", "Context API", "Lucide React"],
      link: "https://atelier-store-rho.vercel.app/",
      images: {
        desk: storeDesk,
        mobile: storeMobile,
      },
    },
    {
      id: "03",
      title: "Facturo",
      category: "SaaS",
      badge: "Billing & Invoicing",
      bg: "bg-[#0B0B0B]",
      accent: "text-white",
      description:
        "Plateforme de facturation et de gestion financière simplifiée pour freelances et TPE, avec création de devis, suivi des paiements et export PDF.",
      techstack: ["React", "Tailwind CSS", "Vite", "Lucide React"],
      link: "https://facturo-ashy.vercel.app/",
      images: {
        desk: facturoDesk,
        mobile: facturoMobile,
      },
    },
    {
      id: "04",
      title: "Vanguard Systems",
      category: "Dashboard UI",
      badge: "Analytics",
      bg: "bg-[#0B0B0B]",
      accent: "text-white",
      description:
        "Interface de tableau de bord analytique en temps réel pour le suivi des métriques critiques d'entreprise.",
      techstack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      link: "https://example.com",
    },
  ];

  const categories = ["All", "Landing Page", "E-Commerce", "SaaS", "Dashboard UI", "Brand Identity"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#212121] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        
        {/* Return Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#636361] hover:text-[#212121] transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300/70 pb-12 gap-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#636361]">
              ARCHIVE • ALL WORKS
            </span>
            <h1 className="mt-3 font-serif text-5xl md:text-7xl">
              All Digital <br />
              <em className="italic font-normal">Creations.</em>
            </h1>
          </div>
          <p className="max-w-md text-xs md:text-sm text-[#636361] leading-relaxed">
            Une collection complète de nos projets web, applications et identités numériques conçus avec précision.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="my-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all border ${
                  activeFilter === cat
                    ? "bg-[#212121] text-white border-[#212121]"
                    : "bg-transparent text-[#636361] border-neutral-300/80 hover:border-[#212121] hover:text-[#212121]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636361]" />
            <input
              type="text"
              placeholder="Search project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border border-neutral-300/80 pl-9 pr-4 py-2 text-xs text-[#212121] placeholder-[#636361] focus:outline-none focus:border-[#212121]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${project.bg}`}>
                {project.images ? (
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 transition-transform duration-700 group-hover:scale-105">
                    <img
                      src={project.images.desk}
                      alt={`${project.title} Desktop`}
                      className="absolute w-[92%] rounded-md shadow-2xl border border-white/10 top-3 left-3 object-cover object-top"
                    />
                    <img
                      src={project.images.mobile}
                      alt={`${project.title} Mobile`}
                      className="absolute w-[26%] sm:w-[24%] rounded-xl shadow-2xl border-2 border-white/20 bottom-3 right-3 object-cover z-10"
                    />
                  </div>
                ) : (
                  <div
                    className={`absolute inset-[10%] border ${
                      project.accent === "text-white" ? "border-white/20" : "border-black/20"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between border-b p-4 ${
                        project.accent === "text-white" ? "border-white/20" : "border-black/20"
                      }`}
                    >
                      <span className={`font-serif text-lg ${project.accent}`}>
                        {project.title.split(" ")[0]}
                      </span>
                      <ArrowUpRight size={18} className={project.accent} />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-6 left-6 opacity-0 transition-all duration-500 group-hover:opacity-100 z-20">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#212121]">
                    View Details <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between border-b border-neutral-300/70 py-5">
                <div>
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#636361]">
                    {project.category} • {project.badge}
                  </p>
                </div>
                <span className="text-[10px] text-[#636361]">{project.id}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#636361]">
            <p className="text-sm">No projects found for your search.</p>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}