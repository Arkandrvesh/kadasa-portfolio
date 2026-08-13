"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "navbar",
          scrolled ? "navbar-scrolled" : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container-kadasa">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="KADASA — Home"
            >
              <div className="relative w-32 h-10 lg:w-40 lg:h-12 transition-transform duration-300 group-hover:scale-105 bg-white rounded flex items-center justify-center p-1.5">
                <Image
                  src="/brand/kadasa-logo.jpeg"
                  alt="KADASA Logo"
                  fill
                  sizes="(max-width: 1024px) 128px, 160px"
                  className="object-contain p-1"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 underline-hover"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
                id="navbar-cta"
                aria-label="Start a project with KADASA"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                id="mobile-menu-button"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-[99] flex flex-col bg-[#060e1a] transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
        }}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/08">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-28 h-9 bg-white rounded flex items-center justify-center p-1">
              <Image
                src="/brand/kadasa-logo.jpeg"
                alt="KADASA Logo"
                fill
                sizes="112px"
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between py-4 border-b border-white/06 text-white/70 hover:text-white transition-colors"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1.25rem",
                fontWeight: 500,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="opacity-40" />
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="mt-auto px-6 pb-10">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary w-full justify-center text-base"
            id="mobile-cta"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </a>
          <p className="text-center text-white/30 text-xs mt-4">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </>
  );
}
