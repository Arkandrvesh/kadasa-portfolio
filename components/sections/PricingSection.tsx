"use client";

import { pricingPackages } from "@/data/pricing";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-heading"
    >
      <div className="container-kadasa">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="section-label">Investment</span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            Pilih Paket Solusi Bisnis Anda
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "var(--brand-muted)" }}>
            Kami menyediakan paket transparan dengan fitur terbaik. Pilih paket yang sesuai
            dengan kebutuhan dan skala bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "border-2"
                  : "border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]"
              }`}
              style={{
                borderColor: pkg.popular ? "var(--brand-primary)" : undefined,
                background: pkg.popular ? "rgba(59, 130, 246, 0.05)" : undefined,
              }}
            >
              {pkg.popular && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold text-white tracking-wide"
                  style={{
                    background: "var(--brand-primary)",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-sm min-h-[40px]" style={{ color: "var(--brand-muted)" }}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-sm mb-1" style={{ color: "var(--brand-muted)" }}>
                  Mulai dari
                </div>
                <div
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Rp {pkg.price}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-lg text-sm font-medium text-center mb-8 transition-colors ${
                  pkg.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Pilih Paket
              </a>

              <div className="space-y-4 flex-1">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check
                        size={18}
                        className="shrink-0 mt-0.5"
                        style={{ color: "var(--brand-primary)" }}
                      />
                    ) : (
                      <X
                        size={18}
                        className="shrink-0 mt-0.5"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      />
                    )}
                    <span
                      className="text-sm leading-tight"
                      style={{
                        color: feature.included ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
