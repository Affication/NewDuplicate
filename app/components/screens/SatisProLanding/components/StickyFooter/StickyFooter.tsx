"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyFooter = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky footer after scrolling past the hero section
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-2xl transform transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <span className="font-semibold">Ready to automate your reviews?</span>
            <span className="ml-2 text-blue-100">Start your free trial today</span>
          </div>
          <div className="sm:hidden">
            <span className="font-semibold">Start automating reviews today</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2" asChild>
            <a href="https://calendly.com/aidar-sharipov-satispro/30min" target="_blank" rel="noopener noreferrer">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-blue-100 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};