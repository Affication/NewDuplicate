import type { Metadata } from "next";
import { FinalCTASection } from "@/components/screens/SatisProLanding/sections/FinalCTASection/FinalCTASection";
import { FooterSection } from "@/components/screens/SatisProLanding/sections/FooterSection/FooterSection";
import { HeaderSection } from "@/components/screens/SatisProLanding/sections/HeaderSection/HeaderSection";
import { PricingSection } from "@/components/screens/SatisProLanding/sections/PricingSection/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | SatisPro AI Review Replies",
  description:
    "Choose the SatisPro plan that fits your business. Get AI-powered review replies with transparent pricing and a free trial.",
};

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderSection />
      <main className="pt-24 space-y-12">
        <PricingSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
}
