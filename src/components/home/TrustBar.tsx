export function TrustBar() {
  const items = ['Eco-Friendly', 'No Contracts', 'Same-Week Service', '100% Satisfaction']
  return (
    <div className="bg-[#1B2A45] py-4">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2 text-sm font-medium text-white/80 tracking-wide">
              {i > 0 && <span className="text-white/30 hidden sm:inline">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
