// =============================================================
// KADASA — Services Data
// =============================================================

export interface Service {
  id: string;
  icon: string; // SVG path or lucide icon name
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  color: string; // accent color class
}

export const services: Service[] = [
  {
    id: "website-development",
    icon: "monitor",
    title: "Website Development",
    subtitle: "Professional Web Presence",
    description:
      "Website profesional yang dirancang sesuai identitas dan kebutuhan bisnis — bukan template generik.",
    examples: [
      "Company Profile",
      "Corporate Website",
      "Business Website",
      "Landing Page",
      "Organization Website",
    ],
    color: "blue",
  },
  {
    id: "web-application",
    icon: "layout-dashboard",
    title: "Web Application",
    subtitle: "Custom Digital Tools",
    description:
      "Aplikasi berbasis web untuk mendukung kebutuhan operasional, manajemen, dan proses bisnis.",
    examples: [
      "Dashboard System",
      "Management System",
      "Internal Application",
      "Booking System",
      "Workflow System",
    ],
    color: "purple",
  },
  {
    id: "ecommerce",
    icon: "shopping-bag",
    title: "E-Commerce",
    subtitle: "Sell Online, Grow Faster",
    description:
      "Solusi digital commerce untuk menjual produk secara online dengan pengalaman belanja yang lancar.",
    examples: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout & Payment",
      "Order Management",
      "Payment Integration",
    ],
    color: "green",
  },
  {
    id: "business-system",
    icon: "building-2",
    title: "Business System",
    subtitle: "Digitize Your Operations",
    description:
      "Digitalisasi proses bisnis yang sebelumnya manual — dari kasir hingga manajemen SDM.",
    examples: [
      "POS System",
      "Inventory Management",
      "Financial System",
      "Reporting Dashboard",
      "Employee Management",
    ],
    color: "orange",
  },
  {
    id: "custom-software",
    icon: "code-2",
    title: "Custom Software",
    subtitle: "Built From Scratch",
    description:
      "Software yang dibangun dari nol berdasarkan kebutuhan spesifik bisnis Anda — tidak ada batasan template.",
    examples: [
      "Enterprise Application",
      "SaaS Product",
      "API & Integration",
      "Data Platform",
      "Automation System",
    ],
    color: "cyan",
  },
  {
    id: "ui-ux",
    icon: "figma",
    title: "UI/UX & Digital Experience",
    subtitle: "Design That Converts",
    description:
      "Interface yang intuitif, accessible, dan dirancang untuk memberikan pengalaman digital yang memorable.",
    examples: [
      "UX Research",
      "Interface Design",
      "Design System",
      "Prototyping",
      "Usability Testing",
    ],
    color: "pink",
  },
];
