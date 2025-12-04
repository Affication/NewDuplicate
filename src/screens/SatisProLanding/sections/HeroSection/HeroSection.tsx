import React from "react";
import { Button } from "../../../../components/ui/button";
import { PlayCircle, MessageSquare, Clock } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                AI that instantly answers your Google reviews: {" "}
                <span className="text-blue-600">automatically</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Save 3+ hours weekly. Each response sounds professional. Your brand voice stays consistent across all reviews.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto" asChild>
                <a href="https://calendly.com/contact-satispro/30min" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
             
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">50+ businesses trust SatisPro</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <img src="/image.png" alt="Google Maps Icon" className="w-5 h-6" />
                  <span className="font-semibold text-gray-900">Google Maps Reviews</span>
                  <span className="ml-auto text-xs sm:text-sm text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                    AI Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">JD</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">John D.</span>
                          <div className="flex">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          "Great service and friendly staff! Will definitely come back."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">Your Business</span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                            AI Reply
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          "Thank you, John! We’re delighted you had a great experience with our team. Your kind words mean a lot, and we can’t wait to welcome you back soon!"
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Replied in 2 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              100% Automated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
