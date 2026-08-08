const whyItems = [
  {
    number: "01",
    key: "FAST",
    title: "Fast Without Compromise",
    description:
      "Kami bergerak cepat merespons kebutuhan klien, menyelesaikan proyek tepat waktu, tanpa mengorbankan kualitas produk akhir.",
    icon: "⚡",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    number: "02",
    key: "AGILE",
    title: "Agile by Nature",
    description:
      "Kami mampu beradaptasi dengan perubahan kebutuhan, feedback, dan kondisi bisnis yang berkembang selama proses pengerjaan.",
    icon: "🔄",
    color: "#4ade80",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
  {
    number: "03",
    key: "PRECISE",
    title: "Precision in Every Detail",
    description:
      "Dari typography, spacing, hingga database schema dan API design — kami memperhatikan detail di setiap lapisan produk.",
    icon: "🎯",
    color: "#a78bfa",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    number: "04",
    key: "CUSTOM",
    title: "Built Around Your Business",
    description:
      "Setiap solusi KADASA dirancang dari kebutuhan nyata — bukan template yang disesuaikan. Kami membangun, bukan mengcopy-paste.",
    icon: "🏗️",
    color: "#fb923c",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
  },
];

export default function WhyKadasa() {
  return (
    <section
      id="why-kadasa"
      className="section-padding"
      style={{ background: "var(--brand-primary)" }}
      aria-labelledby="why-heading"
    >
      <div className="container-kadasa">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-4">Why Choose Us</span>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            Why Build With
            <br />
            <span className="text-gradient">KADASA?</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "var(--brand-muted)" }}>
            Empat alasan yang membentuk cara kami bekerja — dan mengapa klien kami memilih untuk
            membangun bersama kami.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyItems.map((item) => (
            <div
              key={item.number}
              className="group p-6 rounded-xl transition-all duration-300 hover:-translate-y-2"
              style={{ background: item.bg, border: `1px solid ${item.border}` }}
            >
              {/* Number + icon */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: item.color, fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.number}
                </span>
                <span className="text-2xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
              </div>

              {/* Key */}
              <div
                className="text-2xl font-bold mb-2 text-white"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
              >
                {item.key}
              </div>

              {/* Title */}
              <h3
                className="text-sm font-semibold mb-3"
                style={{ color: item.color, fontFamily: "var(--font-space-grotesk)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "rgba(248,250,255,0.6)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-12 p-8 rounded-2xl text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.08) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p
              className="text-lg sm:text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              Not Another Template Agency.
            </p>
            <p className="text-sm" style={{ color: "rgba(248,250,255,0.5)" }}>
              Kami tidak percaya bahwa semua bisnis membutuhkan website yang sama. Setiap klien
              mendapatkan solusi yang dibangun khusus untuk mereka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
