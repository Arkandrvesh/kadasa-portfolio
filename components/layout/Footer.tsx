import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Mail, Globe, GitBranch } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerServices = [
  "Website Development",
  "Web Application",
  "E-Commerce",
  "Business System",
  "Custom Software",
  "UI/UX Design",
];

const footerCompany = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)", background: "var(--brand-dark)" }}
      role="contentinfo"
      aria-label="KADASA Footer"
    >
      {/* Main footer content */}
      <div className="container-kadasa py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center mb-4 group"
              aria-label="KADASA Home"
            >
              <div className="relative w-32 h-10 lg:w-40 lg:h-12 transition-transform duration-300 group-hover:scale-105 bg-white rounded flex items-center justify-center p-1.5">
                <Image
                  src="/brand/kadasa-logo.jpeg"
                  alt="KADASA Logo"
                  fill
                  sizes="(max-width: 1024px) 128px, 160px"
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--brand-muted)" }}
            >
              Digital experiences built with speed, agility & precision. Kami membangun
              website, aplikasi, dan sistem digital yang dirancang sesuai kebutuhan bisnis.
            </p>

            {/* Tagline */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "rgba(96,165,250,0.9)",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              FAST · AGILE · PRECISE
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:bg-white/08 text-white/40 hover:text-white"
                aria-label="KADASA Instagram"
              >
                <Globe size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:bg-white/08 text-white/40 hover:text-white"
                aria-label="KADASA LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:bg-white/08 text-white/40 hover:text-white"
                aria-label="KADASA GitHub"
              >
                <GitBranch size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2 rounded-lg transition-all hover:bg-white/08 text-white/40 hover:text-white"
                aria-label="Email KADASA"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="footer-link hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-link hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="footer-link hover:text-white transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container-kadasa flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "var(--brand-muted)" }}
          >
            © {currentYear} KADASA Tech. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(136,153,170,0.5)" }}
          >
            Built with ♥ by KADASA
          </p>
        </div>
      </div>
    </footer>
  );
}
