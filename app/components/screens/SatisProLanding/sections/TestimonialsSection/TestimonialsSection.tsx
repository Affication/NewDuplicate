import React from "react";
import { MapPin, Quote, Map } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Restaurant Owner",
    business: "Bella Vista Restaurant",
    content: "SatisPro has been a game-changer for our restaurant. We went from spending hours each week replying to reviews to having it completely automated. Our response rate is now 100% and customers love the quick, professional replies.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Mike Chen",
    title: "Marketing Director",
    business: "Urban Fitness Chain",
    content: "Managing reviews across 12 locations was a nightmare before SatisPro. Now our AI handles everything consistently, and the Pro dashboard gives us incredible insights into customer sentiment across all our gyms.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Lisa Rodriguez",
    title: "Hotel Manager",
    business: "Seaside Resort",
    content: "The AI replies are so natural that guests often don't realize they're automated. We've seen a 40% increase in positive follow-up reviews since we started using SatisPro. It's like having a dedicated customer service rep 24/7.",
    rating: 5,
    avatar: "LR"
  }
];

const logos = [
  "Google Maps",
  "TripAdvisor",
   "Facebook"
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how SatisPro saves time and builds better reputations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Map key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-200 mb-4" />

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8">As seen on:</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-medium text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};