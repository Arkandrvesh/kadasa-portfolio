const trustItems = [
  {
    value: "10+",
    label: "Digital Projects",
    sub: "Across industries",
    icon: "📦",
  },
  {
    value: "6+",
    label: "Industry Sectors",
    sub: "Travel, F&B, Gov, Edu & more",
    icon: "🌐",
  },
  {
    value: "100%",
    label: "Custom Built",
    sub: "No generic templates",
    icon: "⚡",
  },
  {
    value: "4",
    label: "Young Digital Builders",
    sub: "Small team, serious work",
    icon: "🚀",
  },
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      aria-label="KADASA experience highlights"
      className="section-padding"
      style={{ background: "var(--brand-secondary)" }}
    >
      <div className="container-kadasa">
        {/* Top divider with label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="section-label">Experience at a Glance</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className="group flex flex-col items-start p-6 rounded-xl border transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
              <div
                className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
              >
                {item.value}
              </div>
              <div
                className="text-sm font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {item.label}
              </div>
              <div className="text-xs" style={{ color: "var(--brand-muted)" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Micro copy */}
        <p
          className="text-center text-xs mt-10 font-medium"
          style={{ color: "rgba(136,153,170,0.5)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Young enough to move fast. Skilled enough to build seriously.
        </p>
      </div>
    </section>
  );
}
