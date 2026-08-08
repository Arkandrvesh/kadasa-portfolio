"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import CaseStudyModal from "@/components/portfolio/CaseStudyModal";
import type { Project } from "@/data/projects";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter]);

  // Featured projects first
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filteredProjects]);

  return (
    <>
      <section
        id="portfolio"
        className="section-padding"
        style={{ background: "var(--brand-dark)" }}
        aria-labelledby="portfolio-heading"
      >
        <div className="container-kadasa">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="section-label block mb-3">Selected Work</span>
              <h2
                id="portfolio-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
              >
                What We&apos;ve Built
              </h2>
              <p
                className="mt-3 text-base max-w-lg"
                style={{ color: "var(--brand-muted)" }}
              >
                Dari bisnis lokal hingga sistem digital kompleks — setiap proyek dibangun sesuai
                kebutuhan spesifik klien.
              </p>
            </div>

            {/* Filter */}
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((cat) => (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={activeFilter === cat.value}
                  id={`filter-${cat.value}`}
                  onClick={() => setActiveFilter(cat.value as ProjectCategory)}
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    background:
                      activeFilter === cat.value
                        ? "var(--brand-accent)"
                        : "rgba(255,255,255,0.05)",
                    color: activeFilter === cat.value ? "white" : "var(--brand-muted)",
                    border:
                      activeFilter === cat.value
                        ? "1px solid var(--brand-accent)"
                        : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio grid — asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, i) => {
              // Make first 2 featured projects span wider
              const isWide = i < 2 && project.featured;
              return (
                <article
                  key={project.slug}
                  className={`project-card ${isWide && i === 0 ? "md:col-span-2" : ""}`}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${project.title} case study`}
                  id={`project-card-${project.slug}`}
                >
                  {/* Image */}
                  <div className={`card-image ${isWide && i === 0 ? "aspect-video" : "aspect-[4/3]"} relative`}>
                    <Image
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      fill
                      sizes={
                        isWide && i === 0
                          ? "(max-width: 768px) 100vw, 65vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className="object-cover object-top"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    {/* Hover overlay */}
                    <div className="card-overlay" aria-hidden="true" />

                    {/* Badge */}
                    {project.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className="badge badge-orange text-[10px]"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span
                          className="text-[11px] font-bold tracking-widest uppercase block mb-1"
                          style={{ color: "var(--brand-accent)", fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.categoryLabel}
                        </span>
                        <h3
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-all"
                        style={{ marginTop: "0.125rem" }}
                      >
                        <ArrowUpRight size={14} className="text-white/60" />
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-4 line-clamp-2"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(59,130,246,0.08)",
                            color: "rgba(96,165,250,0.8)",
                            border: "1px solid rgba(59,130,246,0.15)",
                            fontFamily: "var(--font-space-grotesk)",
                            fontWeight: 600,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty state */}
          {sortedProjects.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "var(--brand-muted)" }}>
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
