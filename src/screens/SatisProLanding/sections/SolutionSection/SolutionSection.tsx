import React from "react";
import { ArrowRight, Zap, BarChart3, Link } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const steps = [
  {
    icon: Link,
    title: "Connect your Google Business Profile",
    description: "Simple one-click integration with your existing Google Business account",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "AI replies instantly to reviews",
    description: "Our AI crafts personalized, professional responses in your brand voice",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Get weekly dashboards & summaries",
    description: "Track performance and insights with Pro plan analytics",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export const SolutionSection = (): JSX.Element => {
  return (
    <section id="solution" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI handles replies with a{" "}
            <span className="text-blue-600">human touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SatisPro writes replies for you. Each response sounds polite and professional. 
            Your brand voice stays consistent across all reviews.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                See SatisPro in Action
              </h3>
              <p className="text-lg text-gray-600">
                Watch how our AI transforms a negative review into a positive customer interaction, 
                all while maintaining your brand's professional tone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" asChild>
                  <a href="https://calendly.com/contact-satispro/30min" target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              </div>
            </div>
                

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">AM</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Anna M.</div>
                    <div className="flex text-yellow-400">
                      ⭐⭐
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    "The food was cold when it arrived and the service was slow. 
                    Very disappointed with my experience."
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">Your Business</span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                      AI Reply
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Hi Anna, we’re very sorry your food arrived cold and the service was slow. This isn’t the experience we want for our guests, and we’ll address it with our team. We hope you’ll give us another chance to serve you better."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
