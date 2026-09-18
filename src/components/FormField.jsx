export default function FormField({ label, placeholder, type = "text", select = false }) {
  return (
    <div>
      <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361]">{label}</label>
      {select ? (
        <select className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none focus:border-[#212121]">
          <option value="">Budget Range (Optional)</option>
          <option>&lt; $1,000 (Small Project)</option>
          <option>$1,000 – $3,000 (Standard Project)</option>
          <option>$3,000+ (Complex / Custom)</option>
          <option>To be discussed</option>
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#212121]" />
      )}
    </div>
  );
}