import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutKadasa from "@/components/sections/AboutKadasa";
import Services from "@/components/sections/Services";
import DigitalSystems from "@/components/sections/DigitalSystems";
import Industries from "@/components/sections/Industries";
import WhyKadasa from "@/components/sections/WhyKadasa";
import Process from "@/components/sections/Process";
import Technology from "@/components/sections/Technology";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / Credibility Bar */}
      <TrustBar />

      {/* 3. Selected Work / Portfolio */}
      <SelectedWork />

      {/* 4. About KADASA */}
      <AboutKadasa />

      {/* 5. Services */}
      <Services />

      {/* 6. From Websites to Digital Systems */}
      <DigitalSystems />

      {/* 7. Industries Marquee */}
      <Industries />

      {/* 8. Why KADASA */}
      <WhyKadasa />

      {/* 9. Process */}
      <Process />

      {/* 10. Technology */}
      <Technology />

      {/* 11. CTA */}
      <CtaSection />

      {/* 12. Contact */}
      <ContactSection />
    </>
  );
}
