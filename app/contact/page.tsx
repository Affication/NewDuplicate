import type { Metadata } from "next";
import { FinalCTASection } from "@/components/screens/SatisProLanding/sections/FinalCTASection/FinalCTASection";
import { FooterSection } from "@/components/screens/SatisProLanding/sections/FooterSection/FooterSection";
import { HeaderSection } from "@/components/screens/SatisProLanding/sections/HeaderSection/HeaderSection";

export const metadata: Metadata = {
  title: "Contact | Talk with the SatisPro Team",
  description:
    "Get in touch with SatisPro for demos, onboarding help, and partnership questions. We respond quickly to every inquiry.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderSection />
      <main className="pt-24 space-y-12">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Let&apos;s Connect</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you want a personalized walkthrough or have questions about pricing and integrations, the SatisPro team is
              ready to help.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6 text-left bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Schedule a call</h2>
                <p className="text-gray-600 mb-4">Pick a time that works for you and see SatisPro in action.</p>
                <a
                  href="https://calendly.com/contact-satispro/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Book a 30-minute demo ↗
                </a>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 text-left bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Email us</h2>
                <p className="text-gray-600 mb-4">Share your questions and we&apos;ll respond with tailored guidance.</p>
                <a href="mailto:contact@satispro.net" className="text-blue-600 hover:text-blue-700 font-semibold">
                  contact@satispro.net
                </a>
              </div>
            </div>
          </div>
        </section>
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
}
