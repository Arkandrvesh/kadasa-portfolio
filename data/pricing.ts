// =============================================================
// KADASA — Pricing Data
// =============================================================

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: PricingFeature[];
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "basic",
    name: "BASIC",
    price: "1.000.000",
    description: "Solusi cepat dan hemat untuk kehadiran digital pertama Anda.",
    features: [
      { text: "Free Domain Web.id (1 Tahun)", included: true },
      { text: "4 Halaman Menu Utama", included: true },
      { text: "Hosting 500MB", included: true },
      { text: "Template Premium", included: true },
      { text: "Integrasi Social Media", included: true },
      { text: "Free SSL (HTTPS)", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "Standard Contact Form", included: true },
      { text: "Free Panduan Penggunaan", included: true },
      { text: "Free Support", included: true },
      { text: "Lifetime Warranty (Error Bebas Biaya)", included: true },
      { text: "CMS / Blog System", included: false },
      { text: "2 Akun Email Bisnis", included: false },
    ],
  },
  {
    id: "starter",
    name: "STARTER",
    price: "2.500.000",
    description: "Paket ideal untuk bisnis yang mulai berkembang.",
    features: [
      { text: "Gratis Domain .com (1 Tahun)", included: true },
      { text: "6 Halaman Menu Utama", included: true },
      { text: "Hosting 3GB", included: true },
      { text: "5ms Server Response (Super Cepat)", included: true },
      { text: "Google Maps Integration", included: true },
      { text: "Statistik Pengunjung (Stats)", included: true },
      { text: "Integrasi Social Media", included: true },
      { text: "Tombol Chat WA/Phone", included: true },
      { text: "Free SSL (HTTPS)", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "Standard Contact Form", included: true },
      { text: "Free Support & Warranty", included: true },
      { text: "CMS / Blog System", included: false },
    ],
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "3.500.000",
    description: "Sistem profesional untuk mempercepat pertumbuhan bisnis.",
    popular: true,
    features: [
      { text: "Free Custom Domain", included: true },
      { text: "10 Halaman Menu Utama", included: true },
      { text: "Hosting 3GB", included: true },
      { text: "Annual Renewal (Gratis Tahun Berikutnya)", included: true },
      { text: "Tombol Chat WA/Phone", included: true },
      { text: "Google Maps Integration", included: true },
      { text: "Statistik Pengunjung (Stats)", included: true },
      { text: "Integrasi Social Media", included: true },
      { text: "Free SSL (HTTPS)", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "Standard Contact Form", included: true },
      { text: "Free Support & Warranty", included: true },
      { text: "CMS / Blog System", included: false },
    ],
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "12.000.000",
    description: "Solusi enterprise dengan fitur custom tanpa batas.",
    features: [
      { text: "Free Custom Domain", included: true },
      { text: "15-20 Halaman Menu Utama", included: true },
      { text: "Hosting 5GB", included: true },
      { text: "CMS / Blog System", included: true },
      { text: "2 Akun Email Bisnis", included: true },
      { text: "Integrasi Marketplace", included: true },
      { text: "Super Fast Server Response", included: true },
      { text: "Annual Renewal (Gratis Tahun Berikutnya)", included: true },
      { text: "Tombol Chat WA/Phone", included: true },
      { text: "Google Maps & Stats", included: true },
      { text: "Integrasi Social Media", included: true },
      { text: "Free SSL (HTTPS)", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "Free Support & Warranty", included: true },
    ],
  },
];
