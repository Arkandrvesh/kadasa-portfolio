import { ArrowRight } from "lucide-react";

const levels = [
  {
    level: "01",
    title: "Brand Website",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    items: [
      { name: "Indosarana Travel", cat: "Travel & Tourism" },
      { name: "Wasta Kopi", cat: "F&B" },
      { name: "Warung Puri Bambu", cat: "Restaurant" },
      { name: "Sari Merta Kakao", cat: "Agriculture" },
      { name: "SMPN 2 Tlogomulyo", cat: "Education" },
    ],
  },
  {
    level: "02",
    title: "Digital Commerce",
    color: "#4ade80",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
    items: [
      { name: "BonfruiTeas", cat: "E-Commerce" },
    ],
  },
  {
    level: "03",
    title: "Business Software",
    color: "#fb923c",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.25)",
    items: [
      { name: "AkazaPOS", cat: "POS / SaaS" },
      { name: "MagangPulse", cat: "Web Application" },
      { name: "SMAN 11 Library", cat: "Digital Library" },
    ],
  },
];

export default function DigitalSystems() {
  return (
    <section
      id="digital-systems"
      className="section-padding"
      style={{ background: "var(--brand-dark)" }}
      aria-labelledby="systems-heading"
    >
      <div className="container-kadasa">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="section-label block mb-4">Capability Depth</span>
            <h2
              id="systems-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              From Websites to
              <br />
              <span className="text-gradient">Digital Systems.</span>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Pengalaman kami tidak berhenti pada company profile. Kami juga membangun aplikasi,
              platform bisnis, dan sistem digital yang menangani kebutuhan operasional yang lebih
              kompleks — dari warung kopi hingga sistem pemerintahan.
            </p>
          </div>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {levels.map((level, i) => (
            <div key={level.level} className="relative">
              {/* Arrow connector (desktop) */}
              {i < levels.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                  aria-hidden="true"
                >
                  <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.2)" }} />
                </div>
              )}

              <div
                className="p-5 rounded-xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: level.bg, border: `1px solid ${level.border}` }}
              >
                {/* Level badge removed per user request */}

                <h3
                  className="text-base font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {level.title}
                </h3>

                {/* Projects in this level */}
                <div className="flex flex-col gap-2">
                  {level.items.map((item) => (
                    <div
                      key={item.name}
                      className="px-3 py-2 rounded-lg"
                      style={{
                        background: "rgba(0,0,0,0.2)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {item.name}
                      </div>
                      <div className="text-[10px]" style={{ color: level.color, opacity: 0.8 }}>
                        {item.cat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom copy */}
        <div
          className="mt-12 p-6 rounded-xl text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Setiap level membutuhkan pemahaman yang berbeda terhadap bisnis, pengguna, dan
            teknologi.{" "}
            <span className="text-white">KADASA pernah ada di setiap levelnya.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
