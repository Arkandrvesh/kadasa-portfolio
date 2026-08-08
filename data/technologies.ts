// =============================================================
// KADASA — Technology Stack Data
// =============================================================

export interface TechItem {
  name: string;
  category: string;
}

export const technologies: Record<string, TechItem[]> = {
  Frontend: [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
  ],
  Backend: [
    { name: "NestJS", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "REST API", category: "Backend" },
    { name: "Socket.IO", category: "Backend" },
    { name: "Express", category: "Backend" },
  ],
  Database: [
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Prisma ORM", category: "Database" },
    { name: "MySQL", category: "Database" },
  ],
  Infrastructure: [
    { name: "Docker", category: "Infrastructure" },
    { name: "Vercel", category: "Infrastructure" },
    { name: "Netlify", category: "Infrastructure" },
    { name: "Git & GitHub", category: "Infrastructure" },
    { name: "CI/CD", category: "Infrastructure" },
  ],
  Design: [
    { name: "Figma", category: "Design" },
    { name: "Design Systems", category: "Design" },
    { name: "UI/UX Research", category: "Design" },
    { name: "Prototyping", category: "Design" },
  ],
  CMS: [
    { name: "WordPress", category: "CMS" },
    { name: "Headless CMS", category: "CMS" },
    { name: "WooCommerce", category: "CMS" },
  ],
};

export const industries = [
  "Travel & Tourism",
  "F&B / Kuliner",
  "Retail",
  "Agriculture",
  "Education",
  "Government",
  "Organizations",
  "E-Commerce",
  "Startup",
  "Professional Services",
  "Healthcare",
  "Real Estate",
];
