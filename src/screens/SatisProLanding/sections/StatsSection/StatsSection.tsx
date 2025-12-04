import React from "react";
import { Users, Globe, Shield, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    percentage: "88%",
    description: "of consumers read Google reviews before choosing a business",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Globe,
    percentage: "73%",
    description: "of all online reviews are on Google",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Shield,
    percentage: "74%",
    description: "trust businesses more if they have positive reviews",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Google Reviews Control Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your reputation lives on Google. Quick replies win customers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 min-w-[200px] max-w-[250px]">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.percentage}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};