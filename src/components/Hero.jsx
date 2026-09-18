import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative border-b border-neutral-300/70 pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* الجانب الأيسر: النصوص والأزرار */}
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
                className="inline-flex items-center gap-3 bg-[#212121] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-0.5"
              >
                View Projects <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-[#212121] bg-transparent px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#212121] transition-transform hover:-translate-y-0.5"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* الجانب الأيمن: تكبير الموكاب (Mockup) بشكل واصل للحدود كما موضح في الصورة */}
          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[720px] py-6"
            >
              {/* شاشة الكمبيوتر الكبيرة (Main Dashboard) */}
              <div className="relative w-full rounded-xl border border-neutral-300/80 bg-white p-6 md:p-8 shadow-sm">
                {/* Navbar Wireframe */}
                <div className="mb-6 flex items-center justify-between border-b border-neutral-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-neutral-300" />
                    <span className="h-3 w-3 rounded-full bg-neutral-300" />
                    <span className="h-3 w-3 rounded-full bg-neutral-300" />
                  </div>
                  <div className="h-2.5 w-48 rounded bg-neutral-100" />
                  <div className="h-6 w-6 rounded-full bg-neutral-200" />
                </div>

                <div className="grid grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="col-span-4 space-y-4 border-r border-neutral-100 pr-4">
                    <span className="font-serif text-base font-bold tracking-wider text-[#212121]">AURA</span>
                    <div className="h-4 w-24 rounded bg-neutral-900" />
                    <div className="h-3 w-28 rounded bg-neutral-200" />
                    <div className="h-3 w-20 rounded bg-neutral-100" />
                    <div className="h-3 w-24 rounded bg-neutral-100" />
                  </div>

                  {/* Body Content */}
                  <div className="col-span-8 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-3 w-16 rounded bg-neutral-200" />
                        <div className="h-5 w-44 rounded bg-neutral-900" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-neutral-200" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-lg border border-neutral-200/80 p-3">
                          <div className="h-2 w-8 rounded bg-neutral-200" />
                          <div className="mt-3 h-4 w-12 rounded bg-neutral-800" />
                        </div>
                      ))}
                    </div>

                    <div className="h-24 w-full rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-3">
                      <div className="h-3 w-20 rounded bg-neutral-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* التابليت في الوسط (تم تكبيرها ووضعها في المنتصف كما بالدائرة) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 rounded-2xl border-[4px] border-[#212121] bg-white p-4 shadow-2xl z-10"
              >
                <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-neutral-800" />
                <span className="font-serif text-sm font-bold tracking-wider text-[#212121]">AURA</span>
                
                <div className="mt-4 rounded-xl bg-[#212121] p-4 text-white">
                  <div className="h-2 w-10 rounded bg-neutral-400" />
                  <div className="mt-3 h-5 w-32 rounded bg-white" />
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="h-2 w-full rounded bg-neutral-200/80" />
                  <div className="h-2 w-3/4 rounded bg-neutral-200/80" />
                  <div className="h-2 w-1/2 rounded bg-neutral-200/80" />
                </div>
              </motion.div>

              {/* Tag Responsive */}
              <div className="absolute -bottom-2 right-2 rounded border border-neutral-300/80 bg-[#FFEFEF] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#636361] shadow-sm z-20">
                RESPONSIVE / ENGINEERED
              </div>
            </motion.div>
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