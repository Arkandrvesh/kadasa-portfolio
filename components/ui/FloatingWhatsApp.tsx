"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Halo KADASA, saya ingin mendiskusikan proyek digital."
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp"
      aria-label="Hubungi KADASA via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
      title="Chat via WhatsApp"
    >
      {/* Tooltip */}
      <span
        className="
          hidden sm:flex
          bg-[#112240] text-white text-xs font-medium px-3 py-1.5 rounded-lg
          opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
          transition-all duration-200 whitespace-nowrap border border-white/10
        "
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        WhatsApp Us
      </span>

      {/* Button */}
      <div
        className="
          w-13 h-13 rounded-full flex items-center justify-center
          shadow-lg shadow-green-900/40 transition-all duration-300
          group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-800/50
          animate-pulse-glow
        "
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          width: "3.25rem",
          height: "3.25rem",
        }}
      >
        <MessageCircle size={22} className="text-white" fill="white" />
      </div>
    </a>
  );
}
