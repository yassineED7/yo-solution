import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-neutral-300 bg-[#FFEFEF] p-6 shadow-2xl md:p-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#212121] hover:opacity-70 transition-opacity"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636361]">
            {project.category}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#212121] md:text-4xl">
            {project.title}
          </h2>

          {/* CONTENEUR IMAGE AVEC APERÇU RÉEL */}
          <div className="mt-6 aspect-video w-full overflow-hidden border border-neutral-300 bg-neutral-900 shadow-inner">
            {project.images?.desk ? (
              <img
                src={project.images.desk}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-neutral-100 text-xs font-mono text-neutral-500">
                [ Preview / Screenshot ]
              </div>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#212121]">Overview</h3>
            <p className="text-xs leading-relaxed text-[#636361] md:text-sm">
              {project.description}
            </p>

            <div className="pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#636361]">
                Technologies
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techstack?.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-neutral-300 bg-white px-3 py-1 text-[10px] font-mono uppercase text-[#212121]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-neutral-300/80 pt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#212121] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-0.5"
            >
              Visit Live Site <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}