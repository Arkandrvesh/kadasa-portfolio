"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(6,14,26,0.92)", backdropFilter: "blur(12px)" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      id="case-study-modal"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl outline-none"
        style={{
          background: "var(--brand-secondary)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          aria-label="Close case study"
          id="modal-close"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-video rounded-t-2xl sm:rounded-t-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(17,34,64,1) 0%, transparent 40%)" }}
            aria-hidden="true"
          />
          {project.badge && (
            <div className="absolute top-4 left-4">
              <span
                className="badge badge-orange text-[10px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-8 -mt-6 relative z-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="badge badge-accent text-[10px]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {project.categoryLabel}
            </span>
            <span
              className="badge badge-cyan text-[10px]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {project.industry}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "var(--brand-muted)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {project.year}
            </span>
          </div>

          <h2
            id="modal-title"
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h2>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>
            {project.fullDescription}
          </p>

          {/* Challenge */}
          <div
            className="p-4 rounded-xl mb-5"
            style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.15)" }}
          >
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "var(--brand-accent)", fontFamily: "var(--font-space-grotesk)" }}
            >
              The Challenge
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(248,250,255,0.8)" }}>
              {project.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="mb-5">
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Approach
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.approach.map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {step}
                  </span>
                  {i < project.approach.length - 1 && (
                    <ArrowRight size={10} style={{ color: "var(--brand-muted)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="mb-5">
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 text-xs py-2"
                  style={{ color: "rgba(248,250,255,0.7)" }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--brand-accent)" }}
                    aria-hidden="true"
                  />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Technology
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    color: "rgba(96,165,250,0.9)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visit button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-sm"
            id={`modal-visit-${project.slug}`}
          >
            Visit {project.title}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
