import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
