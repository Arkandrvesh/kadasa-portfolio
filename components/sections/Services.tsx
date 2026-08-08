"use client";

import { Monitor, LayoutDashboard, ShoppingBag, Building2, Code2, Pen } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  "layout-dashboard": LayoutDashboard,
  "shopping-bag": ShoppingBag,
  "building-2": Building2,
  "code-2": Code2,
  figma: Pen,
};

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  blue: {
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    icon: "#60a5fa",
  },
  purple: {
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    icon: "#a78bfa",
  },
  green: {
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    icon: "#4ade80",
  },
  orange: {
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    icon: "#fb923c",
  },
  cyan: {
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    icon: "#22d3ee",
  },
  pink: {
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    icon: "#f472b6",
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "var(--brand-secondary)" }}
      aria-labelledby="services-heading"
    >
      <div className="container-kadasa">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-4">What We Build</span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            Services
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--brand-muted)" }}>
            Kami tidak percaya bahwa semua bisnis membutuhkan solusi yang sama. Setiap service
            kami dirancang untuk memenuhi kebutuhan nyata.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Monitor;
            const color = colorMap[service.color];
            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className="group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: color.bg, border: `1px solid ${color.border}` }}
                >
                  <Icon size={22} style={{ color: color.icon }} aria-hidden="true" />
                </div>

                {/* Sub-label */}
                <div
                  className="text-[10px] font-bold tracking-widest uppercase mb-1"
                  style={{ color: color.icon, fontFamily: "var(--font-space-grotesk)" }}
                >
                  {service.subtitle}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--brand-muted)" }}>
                  {service.description}
                </p>

                {/* Examples */}
                <div className="flex flex-col gap-1.5">
                  {service.examples.map((example) => (
                    <div
                      key={example}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "rgba(248,250,255,0.55)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: color.icon }}
                        aria-hidden="true"
                      />
                      {example}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "var(--brand-muted)" }}>
            Tidak yakin service mana yang tepat untuk Anda?
          </p>
          <a
            href="#contact"
            className="btn-secondary text-sm"
          >
            Diskusikan Kebutuhan Anda
          </a>
        </div>
      </div>
    </section>
  );
}
