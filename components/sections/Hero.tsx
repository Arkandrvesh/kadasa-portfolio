"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

// Floating card data
const floatingCards = [
  {
    id: "card-travel",
    label: "Indosarana Travel",
    sub: "Travel & Tourism",
    image: "/projects/indosarana.png",
    style: { top: "8%", right: "0%", width: "56%", animClass: "animate-float" },
  },
  {
    id: "card-pos",
    label: "AkazaPOS",
    sub: "Business Software",
    image: "/projects/akazapos.png",
    style: { top: "42%", right: "10%", width: "48%", animClass: "animate-float-delayed" },
  },
  {
    id: "card-gov",
    label: "SI-DINAMIS",
    sub: "Enterprise System",
    image: "/projects/si-dinamis.png",
    style: { top: "70%", right: "4%", width: "44%", animClass: "animate-float-slow" },
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY, currentTarget } = e;
      const target = currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 10;

      const cards = heroRef.current.querySelectorAll(".parallax-card");
      cards.forEach((card, i) => {
        const factor = (i + 1) * 0.3;
        (card as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (hero) hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section grid-lines relative"
      aria-labelledby="hero-heading"
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(6,182,212,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-kadasa w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-32">
          {/* Left: Text content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="badge badge-accent"
                id="hero-eyebrow"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse"
                  aria-hidden="true"
                />
                KADASA — DIGITAL AGENCY
              </span>
            </div>

            {/* Main headline */}
            <h1
              id="hero-heading"
              className="text-[2.75rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold leading-[1.1] text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
            >
              Digital Experiences,
              <br />
              <span className="text-gradient">Built With Speed,</span>
              <br />
              Agility & Precision.
            </h1>

            {/* Supporting text */}
            <p
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--brand-muted)" }}
            >
              Dari website profesional hingga sistem digital kompleks, KADASA membantu bisnis
              dan organisasi membangun solusi teknologi yang cepat, modern, scalable, dan
              dirancang sesuai kebutuhan nyata mereka.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-primary text-sm lg:text-base"
                id="hero-cta-primary"
                aria-label="Start a project with KADASA"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => handleScroll("#portfolio")}
                className="btn-secondary text-sm lg:text-base"
                id="hero-cta-secondary"
                aria-label="View KADASA portfolio"
              >
                Explore Our Work
              </button>
            </div>

            {/* Micro-stats */}
            <div className="flex items-center gap-8 mt-12">
              {[
                { value: "10+", label: "Projects" },
                { value: "4", label: "Builders" },
                { value: "100%", label: "Custom" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--brand-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
              <div
                className="h-8 w-px"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-hidden="true"
              />
              <div>
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "var(--brand-accent)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  FAST. AGILE. PRECISE.
                </div>
                <div className="text-xs" style={{ color: "var(--brand-muted)" }}>
                  Our philosophy
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating project previews */}
          <div
            className="relative h-[480px] lg:h-[580px] hidden sm:block"
            aria-hidden="true"
          >
            {/* Decorative blob */}
            <div
              className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
            />

            {floatingCards.map((card, i) => (
              <div
                key={card.id}
                className={`parallax-card absolute rounded-xl overflow-hidden border shadow-2xl ${card.style.animClass}`}
                style={{
                  top: card.style.top,
                  right: card.style.right,
                  width: card.style.width,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(17,34,64,0.9)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                  transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: 10 - i,
                }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-3 py-2.5"
                  style={{ background: "rgba(10,22,40,0.8)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  <span
                    className="ml-2 text-[9px] truncate opacity-40"
                    style={{ fontFamily: "monospace" }}
                  >
                    {card.label}
                  </span>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-video">
                  <Image
                    src={card.image}
                    alt={`${card.label} project preview`}
                    fill
                    sizes="(max-width: 1280px) 40vw, 520px"
                    className="object-cover object-top"
                    priority={i === 0}
                  />
                </div>
                {/* Label */}
                <div className="px-3 py-2" style={{ background: "rgba(10,22,40,0.9)" }}>
                  <p className="text-[10px] font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {card.label}
                  </p>
                  <p className="text-[9px]" style={{ color: "var(--brand-muted)" }}>
                    {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#trust")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-space-grotesk)", color: "white" }}>
          Scroll
        </span>
        <ChevronDown size={14} className="text-white animate-bounce" />
      </button>
    </section>
  );
}
