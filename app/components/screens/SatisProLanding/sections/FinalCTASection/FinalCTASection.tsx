import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = (): JSX.Element => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Turn Reviews Into Growth
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Customers are talking. Always listen. Always reply.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 shadow-lg" asChild>
              <a href="https://calendly.com/contact-satispro/30min" target="_blank" rel="noopener noreferrer">
                <Zap className="w-6 h-6" />
                Start Free Trial Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <div className="text-blue-100 text-sm">
              ✓ 30-day free trial • ✓ No credit card required • ✓ Setup in 5 minutes
            </div>
          </div>

          <div className="pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-blue-100">Businesses Trust SatisPro</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">20K+</div>
                  <div className="text-blue-100">Reviews Replied To</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-blue-100">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
