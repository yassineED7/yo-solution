import { Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    quote:
      "YO Solution transformed our web platform completely. Their attention to detail and modern engineering exceeded our expectations.",
    author: "Alexandre Mercier",
    role: "CEO & Founder",
    company: "Aura Tech",
  },
  {
    quote:
      "Working with them was seamless. They delivered a high-converting digital experience faster than we anticipated.",
    author: "Sarah Jenkins",
    role: "Product Director",
    company: "Vanguard Systems",
  },
  {
    quote:
      "Exceptional design aesthetics paired with solid full-stack code. Easily one of the best agency experiences we've had.",
    author: "David Chen",
    role: "Head of Growth",
    company: "Nexus Labs",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeader number="05" label="Testimonials" title="What our clients say." />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border border-neutral-300/80 bg-white/40 p-8 transition-all hover:bg-white hover:shadow-lg"
            >
              <div>
                <Quote size={20} className="text-[#636361] opacity-60" />
                <p className="mt-6 text-sm leading-relaxed text-[#212121]">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-neutral-200/80 pt-4">
                <h4 className="font-serif text-base font-bold text-[#212121]">
                  {item.author}
                </h4>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-[#636361]">
                  {item.role} • <span className="text-[#212121]">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}