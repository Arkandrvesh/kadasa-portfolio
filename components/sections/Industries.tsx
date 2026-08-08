"use client";

import { industries } from "@/data/technologies";

export default function Industries() {
  // Duplicate for infinite scroll
  const doubled = [...industries, ...industries, ...industries];

  return (
    <section
      id="industries"
      className="py-14 overflow-hidden"
      style={{ background: "var(--brand-secondary)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      aria-label="Industries KADASA has worked with"
    >
      <div className="mb-6">
        <p
          className="text-center text-xs font-bold tracking-widest uppercase"
          style={{ color: "rgba(136,153,170,0.5)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Industries We&apos;ve Built For
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative" aria-hidden="true">
        {/* Gradient mask edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--brand-secondary), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--brand-secondary), transparent)" }}
        />

        {/* Scrolling row */}
        <div
          className="flex items-center gap-4 animate-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "var(--brand-accent)" }}
              />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
              >
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
