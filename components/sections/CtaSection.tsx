import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function CtaSection() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Halo KADASA, saya ingin memulai proyek digital."
  );

  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--brand-primary)" }}
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        aria-hidden="true"
      />

      <div className="container-kadasa relative z-10 text-center">
        {/* Eyebrow */}
        <span className="section-label block mb-5">Let&apos;s Build Together</span>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
        >
          Have an Idea?
          <br />
          <span className="text-gradient">Let&apos;s Build It.</span>
        </h2>

        {/* Supporting text */}
        <p
          className="text-base lg:text-lg max-w-xl mx-auto mb-10"
          style={{ color: "var(--brand-muted)" }}
        >
          Ceritakan kebutuhan bisnis atau ide digital Anda. Kami akan membantu mengubahnya
          menjadi solusi yang nyata, modern, dan benar-benar berfungsi.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-primary text-base px-8 py-4"
            id="cta-primary"
            aria-label="Start a project with KADASA"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4 flex items-center gap-2"
            id="cta-whatsapp"
            aria-label="Chat with KADASA on WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Microcopy */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            "No commitment required",
            "Free consultation",
            "Fast response",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "var(--brand-accent)" }}
                aria-hidden="true"
              />
              <span className="text-xs" style={{ color: "rgba(136,153,170,0.7)", fontFamily: "var(--font-space-grotesk)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
