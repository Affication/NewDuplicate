import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = [
  {
    id: 1,
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    name: "Jessie Owner",
    title: "Founder, XYZ Company",
    bgColor: "bg-white",
    textColor: "text-[#01252a]",
    shadow: "shadow-[10px_10px_50px_#00000014]",
  },
  {
    id: 2,
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    name: "Jessie Owner",
    title: "Founder, XYZ Company",
    bgColor: "bg-[#4f9cf9]",
    textColor: "text-white",
    shadow: "",
  },
  {
    id: 3,
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    name: "Jessie Owner",
    title: "Founder, XYZ Company",
    bgColor: "bg-[#4f9cf9]",
    textColor: "text-white",
    shadow: "",
  },
];

const stars = Array(5).fill(0);

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] px-8 py-[140px] relative">
      <h2 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] text-center tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
        See what our trusted users Say
      </h2>

      <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {testimonialData.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`flex flex-col items-start gap-[49px] px-10 py-[60px] relative flex-1 grow ${testimonial.bgColor} rounded-[10px] ${testimonial.shadow} border-0`}
          >
            <CardContent className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto] p-0">
              <Avatar className="relative w-[70px] h-[70px] bg-[#01252a] text-white font-bold flex items-center justify-center">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </Avatar>

              <p
                className={`relative w-[350px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] ${testimonial.textColor} text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]`}
              >
                "{testimonial.text}"
              </p>
            </CardContent>

            <div className="inline-flex items-start gap-[53px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div
                  className={`relative w-[137px] mt-[-1.00px] font-paragraph-p2-bold font-[number:var(--paragraph-p2-bold-font-weight)] ${testimonial.textColor} text-[length:var(--paragraph-p2-bold-font-size)] tracking-[var(--paragraph-p2-bold-letter-spacing)] leading-[var(--paragraph-p2-bold-line-height)] [font-style:var(--paragraph-p2-bold-font-style)]`}
                >
                  {testimonial.name}
                </div>

                <div
                  className={`relative w-[194px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] ${testimonial.textColor} text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]`}
                >
                  {testimonial.title}
                </div>
              </div>

              <div className="items-start gap-[7px] inline-flex relative flex-[0_0_auto]">
                {stars.map((_, index) => (
                  <div
                    key={index}
                    className="relative w-[15px] h-[15px] bg-[#ffe492] rounded-sm flex items-center justify-center text-[#043873] text-[10px] font-bold"
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
