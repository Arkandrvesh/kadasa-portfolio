const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Memahami bisnis, masalah, target audience, dan kebutuhan nyata dari proyek.",
    detail: "Kickoff meeting, requirements gathering, competitive analysis, user research",
    color: "#60a5fa",
  },
  {
    number: "02",
    title: "Define",
    description: "Menentukan scope, architecture, features, dan roadmap proyek.",
    detail: "Technical planning, information architecture, project roadmap, technology selection",
    color: "#22d3ee",
  },
  {
    number: "03",
    title: "Design",
    description: "Membangun UI/UX, visual direction, dan design system.",
    detail: "Wireframing, UI design, design system, prototyping, client review",
    color: "#a78bfa",
  },
  {
    number: "04",
    title: "Develop",
    description: "Implementasi frontend, backend, database, API, dan integrasi.",
    detail: "Full-stack development, authentication, integrations, code review, version control",
    color: "#4ade80",
  },
  {
    number: "05",
    title: "Test",
    description: "Quality assurance, responsive testing, performance, dan bug fixing.",
    detail: "QA testing, cross-browser, responsive, performance optimization, security review",
    color: "#fb923c",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deployment, domain, hosting, monitoring, dan handover ke klien.",
    detail: "Production deployment, domain setup, SSL, monitoring, client training, handover",
    color: "#f472b6",
  },
  {
    number: "07",
    title: "Grow",
    description: "Maintenance, improvement, analytics, dan pengembangan fitur lanjutan.",
    detail: "Ongoing maintenance, feature development, performance monitoring, analytics",
    color: "#fbbf24",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{ background: "var(--brand-secondary)" }}
      aria-labelledby="process-heading"
    >
      <div className="container-kadasa">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="section-label block mb-4">How We Work</span>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              From Idea to
              <br />
              <span className="text-gradient">Digital Product.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
            Proses kami terstruktur tetapi fleksibel — dirancang untuk memberikan visibilitas penuh
            kepada klien di setiap tahap pengerjaan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-4 h-px z-10"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-hidden="true"
                />
              )}

              <div
                className="p-4 rounded-xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Number */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4"
                  style={{
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {step.description}
                </p>

                <p
                  className="text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: step.color }}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
