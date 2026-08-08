import { technologies } from "@/data/technologies";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: "rgba(59,130,246,0.08)", text: "#60a5fa", border: "rgba(59,130,246,0.2)" },
  Backend: { bg: "rgba(139,92,246,0.08)", text: "#a78bfa", border: "rgba(139,92,246,0.2)" },
  Database: { bg: "rgba(249,115,22,0.08)", text: "#fb923c", border: "rgba(249,115,22,0.2)" },
  Infrastructure: { bg: "rgba(6,182,212,0.08)", text: "#22d3ee", border: "rgba(6,182,212,0.2)" },
  Design: { bg: "rgba(236,72,153,0.08)", text: "#f472b6", border: "rgba(236,72,153,0.2)" },
  CMS: { bg: "rgba(34,197,94,0.08)", text: "#4ade80", border: "rgba(34,197,94,0.2)" },
};

export default function Technology() {
  return (
    <section
      id="technology"
      className="section-padding"
      style={{ background: "var(--brand-dark)" }}
      aria-labelledby="tech-heading"
    >
      <div className="container-kadasa">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-4">Tech Stack</span>
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            Built With Modern
            <br />
            Technology
          </h2>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "var(--brand-muted)" }}
          >
            <strong className="text-white font-semibold">Technology We Work With</strong> — kami memilih teknologi yang tepat
            sesuai kebutuhan setiap proyek.
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(technologies).map(([category, techs]) => {
            const color = categoryColors[category] || categoryColors.Frontend;
            return (
              <div
                key={category}
                className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/12"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Category label */}
                <div
                  className="text-[10px] font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded"
                  style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}`, fontFamily: "var(--font-space-grotesk)" }}
                >
                  {category}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(248,250,255,0.75)",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "rgba(136,153,170,0.4)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Tidak semua teknologi digunakan di semua proyek — kami memilih yang paling sesuai.
        </p>
      </div>
    </section>
  );
}
