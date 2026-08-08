import { team } from "@/data/team";

export default function AboutKadasa() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--brand-primary)" }}
      aria-labelledby="about-heading"
    >
      <div className="container-kadasa">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <span className="section-label block mb-4">About KADASA</span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              Four Minds.
              <br />
              One Direction.
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>
              KADASA dibangun oleh empat pemuda dengan latar belakang dan kemampuan yang saling
              melengkapi. Kami percaya bahwa produk digital yang baik bukan hanya tentang kode,
              tetapi tentang memahami masalah, merancang pengalaman, dan membangun solusi yang
              benar-benar berguna.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--brand-muted)" }}>
              KADASA merepresentasikan semangat kecepatan, ketangkasan, dan presisi dalam setiap
              proyek yang kami kerjakan. Setiap klien kami perlakukan sebagai mitra — bukan sekadar
              pemesan jasa.
            </p>

            {/* Core philosophy */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { key: "FAST", desc: "Merespons cepat tanpa mengorbankan kualitas" },
                { key: "AGILE", desc: "Beradaptasi dengan kebutuhan yang berubah" },
                { key: "PRECISE", desc: "Presisi dari desain hingga implementasi" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(59,130,246,0.07)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <div
                    className="text-sm font-bold mb-2 text-gradient"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {item.key}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: "var(--brand-muted)" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <blockquote
              className="mt-8 pl-4 border-l-2 text-sm italic"
              style={{
                borderColor: "var(--brand-accent)",
                color: "rgba(248,250,255,0.6)",
              }}
            >
              &ldquo;Young enough to move fast. Skilled enough to build seriously.&rdquo;
            </blockquote>
          </div>

          {/* Right: Team */}
          <div>
            <div
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              The Builders
            </div>

            <div className="grid grid-cols-2 gap-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Number */}
                  <div
                    className="text-xs font-bold tracking-widest text-blue-400 mb-3"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {member.number}
                  </div>

                  {/* Avatar placeholder */}
                  <div
                    className="w-12 h-12 rounded-full mb-3 flex items-center justify-center text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(6,182,212,0.2) 100%)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: "rgba(96,165,250,0.8)",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                    aria-hidden="true"
                  >
                    {member.number}
                  </div>

                  <h3
                    className="text-sm font-bold text-white mb-0.5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--brand-muted)" }}>
                    {member.role}
                  </p>

                  {/* Focus tags */}
                  <div className="flex flex-wrap gap-1">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[9px] px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--brand-muted)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
