export default function FormField({ label, placeholder, type = "text", select = false }) {
  return (
    <div>
      <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#636361]">{label}</label>
      {select ? (
        <select className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none focus:border-[#212121]">
          <option value="">Select budget</option>
          <option>$2,000 – $5,000</option>
          <option>$5,000 – $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000+</option>
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#212121]" />
      )}
    </div>
  );
}