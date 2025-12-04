import React from "react";
import { Check, MapPin } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "€25",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Connect 1 business location",
      "Up to 40 comments",
      "Basic tone customization (professional, friendly, casual)",
      "Email support"
    ],
    buttonText: "Start Now",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Standard",
    price: "€49",
    period: "/month",
    description: "Great for growing businesses with more reviews",
    features: [
      "Connect up to 3 business locations",
      "Up to 100 comments",
      "Customizable brand voice",
      "Auto-insert customer names in replies",
      "Priority email support"
    ],
    buttonText: "Start Now",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "€99",
    period: "/month",
    description: "Complete solution for established businesses",
    features: [
      "Connect unlimited locations",
      "Unlimited AI-powered replies",
      "Weekly dashboards & summaries",
      "Customizable brand voice",
      "Auto-insert customer names in replies",
      "Access to all reply records",
      "Priority email + phone support",
      
    ],
    buttonText: "Start Now",
    buttonVariant: "default" as const,
    popular: true
  }
];

export const PricingSection = (): JSX.Element => {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clear, Fair Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pick your plan. Cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-3 text-lg font-medium ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};