import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Competencies", "#competencies"],
    ["Selected Works", "#works"],
    ["Services", "#services"],
    ["Investment", "#investment"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-8 lg:px-12">
        <nav className="border border-neutral-300/70 bg-[#FAF8F5]/90 px-5 py-4 backdrop-blur-xl md:px-6">
          <div className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-tight">YO</span>
              <span className="h-6 w-px bg-[#212121]" />
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] sm:block">YO Solution</span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {links.map(([label, href]) => (
                <a key={label} href={href} className="group relative text-[10px] font-semibold uppercase tracking-[0.14em] text-[#636361]">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#212121] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a href="#contact" className="hidden items-center gap-2 bg-[#212121] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FAF8F5] transition-transform hover:-translate-y-0.5 md:flex">
              Initiate Dialogue <ArrowUpRight size={13} />
            </a>

            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle navigation">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden md:hidden">
              <div className="mt-5 flex flex-col gap-5 border-t border-neutral-300/70 pt-6">
                {links.map(([label, href]) => (
                  <a key={label} href={href} onClick={() => setOpen(false)} className="text-xs font-semibold uppercase tracking-[0.15em]">{label}</a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="bg-[#212121] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white">Initiate Dialogue</a>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
}