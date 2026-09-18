import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUp, ArrowUpRight, Check, ChevronRight, Code2,
  Grid3X3, Layers3, Menu, MessageCircle, PenTool, Send, X
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Navbar() {
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
        <nav className="border border-neutral-300/70 bg-[#FFEFEF]/90 px-5 py-4 backdrop-blur-xl md:px-6">
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

            <a href="#contact" className="hidden items-center gap-2 bg-[#212121] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFEFEF] transition-transform hover:-translate-y-0.5 md:flex">
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

function HeroMockup() {
  return (
    <div className="relative mx-auto h-[430px] max-w-[850px]">
      <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="absolute right-0 top-0 w-[88%] overflow-hidden border border-[#212121] bg-white shadow-[0_30px_70px_rgba(33,33,33,0.12)]">
        <div className="flex h-8 items-center gap-1.5 border-b border-neutral-200 px-3">
          <span className="h-2 w-2 rounded-full bg-[#D5D3CC]" />
          <span className="h-2 w-2 rounded-full bg-[#D5D3CC]" />
          <span className="h-2 w-2 rounded-full bg-[#D5D3CC]" />
          <div className="ml-4 h-3 w-40 bg-neutral-100" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 border-r border-neutral-200 p-5">
            <div className="mb-8 font-serif text-lg">AURA</div>
            <div className="space-y-3">
              <div className="h-2 w-16 bg-[#212121]" />
              <div className="h-2 w-24 bg-neutral-200" />
              <div className="h-2 w-20 bg-neutral-200" />
              <div className="h-2 w-28 bg-neutral-200" />
            </div>
          </div>
          <div className="col-span-9 p-6">
            <div className="flex justify-between">
              <div><div className="mb-2 h-3 w-20 bg-neutral-200" /><div className="h-8 w-52 bg-[#212121]" /></div>
              <div className="h-8 w-8 rounded-full bg-[#D5D3CC]" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[1,2,3].map(i => <div key={i} className="h-20 border border-neutral-200 p-3"><div className="h-2 w-10 bg-neutral-200" /><div className="mt-3 h-5 w-16 bg-[#212121]" /></div>)}
            </div>
            <div className="mt-5 h-32 border border-neutral-200 p-5">
              <div className="flex h-full items-end gap-2">
                {[45,70,40,85,60,90,75,100,80].map((height,i) => <div key={i} className="flex-1 bg-[#212121]" style={{height:`${height}%`}} />)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ y: 50, x: -20 }} whileInView={{ y: 0, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 z-10 w-[30%] min-w-[150px] overflow-hidden rounded-[20px] border-[5px] border-[#212121] bg-white shadow-2xl">
        <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-[#212121]" />
        <div className="p-4">
          <div className="mb-5 font-serif text-sm">AURA</div>
          <div className="h-24 bg-[#212121] p-3"><div className="h-2 w-10 bg-white/30" /><div className="mt-3 h-4 w-20 bg-white" /></div>
          <div className="mt-4 space-y-2"><div className="h-3 w-full bg-neutral-100" /><div className="h-3 w-4/5 bg-neutral-100" /><div className="h-3 w-3/5 bg-neutral-100" /></div>
        </div>
      </motion.div>

      <div className="absolute bottom-4 right-4 hidden border border-neutral-300 bg-[#FFEFEF] px-4 py-2 md:block">
        <span className="text-[8px] uppercase tracking-[0.2em]">Responsive / Engineered</span>
      </div>
    </div>
  );
}

function Hero() {
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8}} className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-[#212121]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#636361]">Independent Digital Agency · Est. 2026</span>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[1100px]">
          <motion.h1 variants={fadeUp} className="font-serif text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.055em]">
            DIGITAL<br /><span className="ml-[8%] italic">SOLUTIONS</span><br /><span className="ml-[16%]">FOR TOMORROW.</span>
          </motion.h1>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="lg:col-span-4">
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
          <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9,delay:.15}} className="lg:col-span-8">
            <HeroMockup />
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-neutral-300/70 py-5">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#636361]">Scroll to explore</span>
          <motion.a href="#competencies" animate={{y:[0,5,0]}} transition={{duration:1.8,repeat:Infinity}}><ArrowDown size={17}/></motion.a>
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#636361] md:block">Digital / Strategy / Engineering</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({number,label,title}) {
  return (
    <div className="mb-16 grid gap-6 border-t border-neutral-300/70 pt-5 md:grid-cols-12">
      <div className="md:col-span-2"><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#636361]">{number} / {label}</span></div>
      <div className="md:col-span-8"><h2 className="font-serif text-5xl leading-none tracking-[-0.04em] md:text-7xl">{title}</h2></div>
    </div>
  );
}

function Competencies() {
  const items = [
    ["01","System Design","Architecture that creates a solid foundation for complex digital products and scalable platforms.",Layers3],
    ["02","UI / UX Design","Interfaces designed around clarity, usability, conversion, and a distinctive visual language.",PenTool],
    ["03","Full-Stack Engineering","Production-ready frontends, APIs, databases, integrations, and infrastructure.",Code2],
    ["04","Brand Architecture","Strategic identities that translate consistently across digital products and customer touchpoints.",Grid3X3],
  ];
  return (
    <section id="competencies" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="01" label="Competencies" title="Built from first principles." />
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:"-100px"}} variants={stagger} className="grid border-l border-t border-neutral-300/70 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([number,title,description,Icon]) => (
            <motion.article key={number} variants={fadeUp} className="group min-h-[340px] border-b border-r border-neutral-300/70 p-7 transition-colors duration-500 hover:bg-[#D5D3CC]/30 md:p-9">
              <div className="flex items-start justify-between"><span className="font-mono text-[10px] text-[#636361]">{number}</span><Icon size={21} strokeWidth={1.3} className="transition-transform duration-500 group-hover:rotate-12"/></div>
              <div className="mt-28"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-5 text-sm leading-6 text-[#636361]">{description}</p></div>
              <div className="mt-8 h-px w-0 bg-[#212121] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    ["Aura FinTech","Web Platform","01","bg-[#212121]","text-white"],
    ["Maison App","E-commerce / Mobile","02","bg-[#D5D3CC]","text-[#212121]"],
    ["Vanguard Systems","Dashboard UI","03","bg-[#636361]","text-white"],
    ["Atelier Form","Brand Identity","04","bg-[#D5D3CC]","text-[#212121]"],
  ];
  return (
    <section id="works" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="02" label="Selected Works" title="Selected digital worlds." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map(([title,type,number,bg,accent],index) => (
            <motion.article key={title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7,delay:index*.08}} className="group cursor-pointer">
              <div className={`relative aspect-[4/3] overflow-hidden ${bg}`}>
                <div className={`absolute inset-[10%] border ${accent==="text-white"?"border-white/20":"border-black/20"}`}>
                  <div className={`flex items-center justify-between border-b p-4 ${accent==="text-white"?"border-white/20":"border-black/20"}`}>
                    <span className={`font-serif text-lg ${accent}`}>{title.split(" ")[0]}</span><ArrowUpRight size={18} className={accent}/>
                  </div>
                  <div className="grid h-[calc(100%-57px)] place-items-center p-8">
                    <div className="w-full">
                      <div className={`mx-auto h-3 w-1/2 ${accent==="text-white"?"bg-white":"bg-[#212121]"}`} />
                      <div className={`mx-auto mt-4 h-2 w-1/3 ${accent==="text-white"?"bg-white/30":"bg-black/20"}`} />
                      <div className="mt-10 grid grid-cols-3 gap-3">{[1,2,3].map(i=><div key={i} className={`h-16 border ${accent==="text-white"?"border-white/20":"border-black/20"}`}/>)}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
                <div className="absolute bottom-6 left-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em]">Explore Project <ArrowUpRight size={12}/></div>
                </div>
              </div>
              <div className="flex items-start justify-between border-b border-neutral-300/70 py-5">
                <div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#636361]">{type}</p></div>
                <span className="text-[10px] text-[#636361]">{number}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = ["Digital Product Design","Web Development","Custom Software","E-commerce","Brand Strategy","Digital Transformation"];
  return (
    <section id="services" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="03" label="Services" title="From idea to interface." />
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="max-w-sm text-sm leading-7 text-[#636361]">We combine strategy, design, and engineering under one roof. Every engagement is structured around creating measurable digital value.</p></div>
          <div className="lg:col-span-8">
            {services.map((service,index)=>(
              <motion.div key={service} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5,delay:index*.06}} className="group flex items-center justify-between border-t border-neutral-300/70 py-6">
                <div className="flex items-center gap-5"><span className="font-mono text-[9px] text-[#636361]">0{index+1}</span><h3 className="font-serif text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{service}</h3></div>
                <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-2"/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {name:"Essential",price:"$4,500",description:"For focused digital launches.",timeline:"3–5 weeks",features:["Strategy workshop","UX / UI design","Responsive website","CMS integration","Launch support"]},
    {name:"Professional",price:"$9,800",description:"For ambitious digital products.",timeline:"6–10 weeks",featured:true,features:["Everything in Essential","Advanced product strategy","Custom frontend","Backend / API development","Advanced animations","Analytics & optimization","30 days post-launch support"]},
    {name:"Enterprise",price:"Custom",description:"For complex digital ecosystems.",timeline:"Variable",features:["Dedicated product team","Complex system architecture","Custom software","Third-party integrations","Infrastructure strategy","Long-term partnership"]},
  ];
  return (
    <section id="investment" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="04" label="Investment" title="Engagement, structured." />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan,index)=>(
            <motion.article key={plan.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:index*.1}} className={`relative flex flex-col border p-7 md:p-9 ${plan.featured?"border-[#212121] bg-[#212121] text-white":"border-neutral-300/70"}`}>
              {plan.featured && <div className="absolute right-5 top-5 bg-[#D5D3CC] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#212121]">Recommended</div>}
              <span className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${plan.featured?"text-white/50":"text-[#636361]"}`}>{plan.name}</span>
              <div className="mt-8"><div className="font-serif text-5xl">{plan.price}</div><p className={`mt-3 text-sm ${plan.featured?"text-white/60":"text-[#636361]"}`}>{plan.description}</p></div>
              <div className={`my-8 h-px ${plan.featured?"bg-white/20":"bg-neutral-300/70"}`} />
              <div className="mb-8"><span className={`text-[9px] uppercase tracking-[0.15em] ${plan.featured?"text-white/50":"text-[#636361]"}`}>Typical timeline</span><div className="mt-2 font-serif text-xl">{plan.timeline}</div></div>
              <ul className="flex-1 space-y-4">{plan.features.map(feature=><li key={feature} className="flex items-start gap-3 text-sm"><Check size={15} className="mt-0.5 shrink-0"/><span>{feature}</span></li>)}</ul>
              <a href="#contact" className={`mt-10 flex items-center justify-center gap-2 border px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all ${plan.featured?"border-white bg-white text-[#212121] hover:bg-[#D5D3CC]":"border-[#212121] hover:bg-[#212121] hover:text-white"}`}>Select Plan <ArrowUpRight size={13}/></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormField({label,placeholder,type="text",select=false}) {
  return (
    <div>
      <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361]">{label}</label>
      {select ? (
        <select className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none focus:border-[#212121]">
          <option value="">Select budget</option><option>$2,000 – $5,000</option><option>$5,000 – $10,000</option><option>$10,000 – $25,000</option><option>$25,000+</option>
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#212121]" />
      )}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="lg:col-span-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#636361]">05 / Initiate Dialogue</span>
            <h2 className="mt-8 max-w-2xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] md:text-8xl">Ready to build something <span className="italic">exceptional?</span></h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#636361]">Tell us where you are going. We will help you determine the best digital route to get there.</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:hello@yosolution.studio" className="block transition-opacity hover:opacity-60">hello@yosolution.studio</a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"><MessageCircle size={17}/> WhatsApp Direct</a>
            </div>
          </motion.div>

          <motion.form initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} onSubmit={e=>e.preventDefault()} className="lg:col-span-6">
            <div className="grid gap-8 md:grid-cols-2">
              <FormField label="Name" placeholder="Your name"/>
              <FormField label="Email" placeholder="you@company.com" type="email"/>
              <FormField label="Project Budget" select/>
              <div className="md:col-span-2">
                <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361]">Message</label>
                <textarea rows="5" placeholder="Tell us about your project..." className="mt-3 w-full resize-none border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#212121]"/>
              </div>
            </div>
            <button type="submit" className="mt-10 inline-flex items-center gap-3 bg-[#212121] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-1">Send Inquiry <Send size={14}/></button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3"><span className="font-serif text-2xl">YO</span><span className="h-6 w-px bg-[#212121]"/><span className="text-[10px] font-semibold uppercase tracking-[0.2em]">YO Solution</span></div>
            <p className="mt-5 max-w-sm text-xs leading-6 text-[#636361]">Digital strategy, design, and engineering for ambitious businesses.</p>
          </div>
          <div className="flex gap-8 md:col-span-4">
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">Instagram</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">LinkedIn</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">Behance</a>
          </div>
          <div className="flex items-center justify-between md:col-span-3 md:justify-end">
            <div className="flex gap-5"><a href="#" className="text-[9px] uppercase tracking-[0.16em] text-[#636361]">Terms</a><span className="text-[9px] text-[#636361]">© 2026</span></div>
            <a href="#top" className="ml-6 flex h-10 w-10 items-center justify-center border border-neutral-300 transition-colors hover:bg-[#212121] hover:text-white" aria-label="Back to top"><ArrowUp size={15}/></a>
          </div>
        </div>
        <div className="overflow-hidden border-t border-neutral-300/70 pt-6"><div className="select-none whitespace-nowrap font-serif text-[17vw] leading-[0.75] tracking-[-0.08em] text-[#212121]/10">YO SOLUTION</div></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFEFEF] text-[#212121]">
      <Navbar />
      <main><Hero/><Competencies/><Portfolio/><Services/><Pricing/><Contact/></main>
      <Footer />
    </div>
  );
}