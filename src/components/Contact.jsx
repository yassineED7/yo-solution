import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import FormField from "./FormField";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="border-b border-neutral-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* الجانب الأيسر: العنوان ومعلومات الاتصال */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#636361]">05 / Initiate Dialogue</span>
            <h2 className="mt-8 max-w-2xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] md:text-8xl">
              Ready to build something <span className="italic">exceptional?</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#636361]">
              Tell us where you are going. We will help you determine the best digital route to get there.
            </p>
            <div className="mt-10 space-y-4 text-sm font-medium text-[#212121]">
              <a href="mailto:hello@yosolution.studio" className="block transition-opacity hover:opacity-60">
                hello@yosolution.studio
              </a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-opacity hover:opacity-60">
                <MessageCircle size={17} /> WhatsApp Direct
              </a>
            </div>
          </motion.div>

          {/* الجانب الأيمن: النموذج */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6">
            {submitted ? (
              <div className="flex h-full flex-col justify-center border border-neutral-300/80 bg-white/50 p-8 text-center backdrop-blur-sm">
                <CheckCircle2 size={36} className="mx-auto text-[#212121]" />
                <h3 className="mt-4 font-serif text-2xl text-[#212121]">Message Received.</h3>
                <p className="mt-2 text-xs text-[#636361]">
                  Thank you for reaching out. We will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-8 md:grid-cols-2">
                  <FormField label="Name" placeholder="Your name" required />
                  <FormField label="Email" placeholder="you@company.com" type="email" required />
                  <FormField label="Project Budget" select />
                  <div className="md:col-span-2">
                    <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361]">Message</label>
                    <textarea
                      required
                      rows="5"
                      placeholder="Tell us about your project..."
                      className="mt-3 w-full resize-none border-0 border-b border-neutral-300 bg-transparent py-3 text-sm text-[#212121] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#212121]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-10 inline-flex items-center gap-3 bg-[#212121] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-1 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Inquiry"} <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}