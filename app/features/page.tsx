import type { Metadata } from "next";
import { BenefitsSection } from "@/components/screens/SatisProLanding/sections/BenefitsSection/BenefitsSection";
import { FinalCTASection } from "@/components/screens/SatisProLanding/sections/FinalCTASection/FinalCTASection";
import { FooterSection } from "@/components/screens/SatisProLanding/sections/FooterSection/FooterSection";
import { HeaderSection } from "@/components/screens/SatisProLanding/sections/HeaderSection/HeaderSection";
import { ProblemSection } from "@/components/screens/SatisProLanding/sections/ProblemSection/ProblemSection";
import { SolutionSection } from "@/components/screens/SatisProLanding/sections/SolutionSection/SolutionSection";
import { StatsSection } from "@/components/screens/SatisProLanding/sections/StatsSection/StatsSection";
import { TestimonialsSection } from "@/components/screens/SatisProLanding/sections/TestimonialsSection/TestimonialsSection";

export const metadata: Metadata = {
  title: "Features | SatisPro AI for Google Reviews",
  description:
    "Explore SatisPro features: instant AI replies, voice-consistent messaging, review insights, and automation for every location.",
};

export default function FeaturesPage() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderSection />
      <main className="pt-24 space-y-12">
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
}
