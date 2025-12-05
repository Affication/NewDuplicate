import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-14 h-14 rounded-lg bg-blue-600 text-white font-black text-xl grid place-items-center">SP</span>
          <span className="text-2xl font-bold text-gray-900">SatisPro</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors">
            How It Works
          </a>
          <a href="mailto:contact@satispro.net" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <a href="https://calendly.com/contact-satispro/30min" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
