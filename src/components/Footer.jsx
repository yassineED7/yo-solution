import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3"><span className="font-serif text-2xl">YO</span><span className="h-6 w-px bg-[#212121]" /><span className="text-[10px] font-semibold uppercase tracking-[0.2em]">YO Solution</span></div>
            <p className="mt-5 max-w-sm text-xs leading-6 text-[#636361]">Digital strategy, design, and engineering for ambitious businesses.</p>
          </div>
          <div className="flex gap-8 md:col-span-4">
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">Instagram</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">LinkedIn</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.16em] hover:underline">Behance</a>
          </div>
          <div className="flex items-center justify-between md:col-span-3 md:justify-end">
            <div className="flex gap-5"><a href="#" className="text-[9px] uppercase tracking-[0.16em] text-[#636361]">Terms</a><span className="text-[9px] text-[#636361]">© 2026</span></div>
            <a href="#top" className="ml-6 flex h-10 w-10 items-center justify-center border border-neutral-300 transition-colors hover:bg-[#212121] hover:text-white" aria-label="Back to top"><ArrowUp size={15} /></a>
          </div>
        </div>
        <div className="overflow-hidden border-t border-neutral-300/70 pt-6"><div className="select-none whitespace-nowrap font-serif text-[17vw] leading-[0.75] tracking-[-0.08em] text-[#212121]/10">YO SOLUTION</div></div>
      </div>
    </footer>
  );
}