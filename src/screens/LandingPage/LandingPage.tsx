import React from "react";
import { AppsSection } from "./sections/AppsSection/AppsSection";
import { CustomizationSection } from "./sections/CustomizationSection/CustomizationSection";
import { DataSection } from "./sections/DataSection/DataSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { TestimonialSection } from "./sections/TestimonialSection/TestimonialSection";
import { WorkManagementSection } from "./sections/WorkManagementSection/WorkManagementSection";
import { WorkSection } from "./sections/WorkSection/WorkSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full">
        <HeaderSection />
        <HeroSection />
        <WorkManagementSection />
        <CustomizationSection />
        <PricingSection />
        <WorkSection />
        <DataSection />
        <AppsSection />
        <TestimonialSection />
        <FooterSection />
      </div>
    </div>
  );
};
