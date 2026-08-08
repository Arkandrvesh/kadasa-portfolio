// =============================================================
// KADASA — Global Site Configuration
// Edit this file to update contact info, social links, etc.
// =============================================================

export const siteConfig = {
  name: "KADASA",
  fullName: "KADASA Tech.",
  tagline: "FAST. AGILE. PRECISE.",
  secondaryTagline: "Digital Experiences, Built to Move.",
  description:
    "KADASA adalah digital agency yang membangun website profesional, web application, e-commerce, POS, dan custom software untuk bisnis dan organisasi.",
  url: "https://kadasa.tech",

  // ─── Contact ───────────────────────────────────────────────
  // Replace with real number when available (without leading +)
  whatsappNumber: "62XXXXXXXXXXX",
  email: "hello@kadasa.tech",

  // ─── Social ────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/kadasa.tech",
    linkedin: "https://linkedin.com/company/kadasa-tech",
    github: "https://github.com/kadasa-tech",
  },

  // ─── SEO ───────────────────────────────────────────────────
  seo: {
    title: "KADASA — Digital Agency | Website & Custom Software Development",
    description:
      "KADASA adalah digital agency yang membangun website profesional, web application, e-commerce, POS, dan custom software untuk bisnis dan organisasi.",
    ogImage: "/og-image.png",
    keywords: [
      "digital agency",
      "web development",
      "website company profile",
      "aplikasi web",
      "e-commerce",
      "software development",
      "KADASA",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
