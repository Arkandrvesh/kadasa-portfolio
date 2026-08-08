"use client";

import { useState } from "react";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const projectTypes = [
  "Website",
  "Web Application",
  "E-Commerce",
  "POS / Business System",
  "Custom Software",
  "UI/UX Design",
  "Other / Belum yakin",
];

const budgetOptions = [
  "Not sure yet / Belum yakin",
  "Di bawah Rp 5 Juta",
  "Rp 5 Juta – Rp 10 Juta",
  "Rp 10 Juta – Rp 25 Juta",
  "Rp 25 Juta+",
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--brand-secondary)" }}
      aria-labelledby="contact-heading"
    >
      <div className="container-kadasa">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="section-label block mb-4">Get In Touch</span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              Let&apos;s Build Something
              <br />
              <span className="text-gradient">Meaningful.</span>
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--brand-muted)" }}>
              Ceritakan apa yang sedang Anda bangun, masalah yang ingin dipecahkan, dan ke mana
              bisnis Anda ingin berkembang. Kami akan membaca setiap inquiry dengan serius.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <Mail size={15} style={{ color: "#60a5fa" }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--brand-muted)" }}>Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  <Phone size={15} style={{ color: "#4ade80" }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--brand-muted)" }}>WhatsApp</div>
                  <span className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    +{siteConfig.whatsappNumber}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                >
                  <MapPin size={15} style={{ color: "#fb923c" }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--brand-muted)" }}>Location</div>
                  <span className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Microcopy */}
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.12)" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="text-white font-semibold">Small team. Serious work.</span>
                <br />
                Kami membalas setiap inquiry dalam 1–2 hari kerja.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="p-7 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <CheckCircle size={30} style={{ color: "#4ade80" }} />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Terima kasih!
                </h3>
                <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
                  Project inquiry Anda telah kami terima. Tim KADASA akan mereview kebutuhan
                  Anda dan menghubungi Anda dalam 1–2 hari kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Project inquiry form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Nama *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama lengkap"
                      className={`form-input ${errors.name ? "error" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@bisnis.com"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Perusahaan / Organisasi
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama bisnis atau organisasi (opsional)"
                    className="form-input"
                    autoComplete="organization"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Jenis Proyek
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#0a1628" }}>Pilih jenis</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} style={{ background: "#0a1628" }}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Estimasi Budget
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#0a1628" }}>Pilih range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#0a1628" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "rgba(248,250,255,0.6)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Ceritakan proyekmu *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Apa yang ingin Anda bangun? Apa masalah yang ingin dipecahkan? Target pengguna?"
                    className={`form-input resize-none ${errors.message ? "error" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm"
                  id="contact-submit"
                  aria-label="Send project inquiry to KADASA"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
