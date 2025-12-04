import React from "react";
import { Clock, Bell, TrendingUp, Search, MapPin, BarChart3 } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const benefits = [
  {
    icon: Clock,
    title: "Save hours every week",
    description: "Automate what used to take 2-3 hours of manual work weekly",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Bell,
    title: "Never miss a review again",
    description: "Instant notifications and automated responses ensure 100% coverage",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: TrendingUp,
    title: "Boost trust and reputation",
    description: "Consistent, professional replies build customer confidence",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Search,
    title: "Improve Google ranking & visibility",
    description: "Active review engagement signals boost your local SEO",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: MapPin,
    title: "Scale replies across all locations",
    description: "Manage multiple business locations from one dashboard",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: BarChart3,
    title: "Gain insights with Pro dashboards",
    description: "Track sentiment, response times, and customer satisfaction trends",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How SatisPro Helps Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn review replies from a daily chore into automatic growth. 
            SatisPro works 24/7 so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Review Management?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses already saving time and improving their reputation with SatisPro.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors" asChild>
              <a href="mailto:contact@satispro.net">
                Start Your Free Trial
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
