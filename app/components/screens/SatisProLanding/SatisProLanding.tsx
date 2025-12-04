import React from "react";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { StatsSection } from "./sections/StatsSection/StatsSection";
import { ProblemSection } from "./sections/ProblemSection/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection/SolutionSection";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FinalCTASection } from "./sections/FinalCTASection/FinalCTASection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { StickyFooter } from "./components/StickyFooter/StickyFooter";

export const SatisProLanding = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen relative">
      <HeaderSection />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FooterSection />
      <StickyFooter />
    </div>
  );
};