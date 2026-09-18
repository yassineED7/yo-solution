export default function SectionHeader({ number, label, title }) {
  return (
    <div className="mb-16 grid gap-6 border-t border-neutral-300/70 pt-5 md:grid-cols-12">
      <div className="md:col-span-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#636361]">{number} / {label}</span>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-serif text-5xl leading-none tracking-[-0.04em] md:text-7xl">{title}</h2>
      </div>
    </div>
  );
}