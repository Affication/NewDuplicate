import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PricingSection = (): JSX.Element => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      textColor: "text-[#212529]",
      priceColor: "text-[#212529]",
      borderColor: "border-[#ffe492]",
      buttonVariant: "outline" as const,
      buttonClass: "bg-white border-[#ffe492] text-[#212529] h-auto",
      cardClass: "border-[#ffe492]",
      features: [
        { text: "Sync unlimited devices" },
        { text: "10 GB monthly uploads" },
        { text: "200 MB max. note size" },
        {
          text: "Customize Home dashboard and access extra widgets",
        },
        {
          text: "Connect primary Google Calendar account",
        },
        {
          text: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      textColor: "text-[#043873]",
      priceColor: "text-[#043873]",
      borderColor: "",
      buttonVariant: "default" as const,
      buttonClass: "bg-[#4f9cf9] text-white h-auto",
      cardClass: "shadow-[0px_4px_50px_#00000014]",
      features: [
        { text: "Sync unlimited devices" },
        { text: "10 GB monthly uploads" },
        { text: "200 MB max. note size" },
        {
          text: "Customize Home dashboard and access extra widgets",
        },
        {
          text: "Connect primary Google Calendar account",
        },
        {
          text: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      textColor: "text-[#212529]",
      priceColor: "text-[#212529]",
      borderColor: "border-[#ffe492]",
      buttonVariant: "outline" as const,
      buttonClass: "bg-white border-[#ffe492] text-[#212529] h-auto",
      cardClass: "border-[#ffe492]",
      features: [
        { text: "Sync unlimited devices" },
        { text: "10 GB monthly uploads" },
        { text: "200 MB max. note size" },
        {
          text: "Customize Home dashboard and access extra widgets",
        },
        {
          text: "Connect primary Google Calendar account",
        },
        {
          text: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] px-8 py-[140px] relative">
      <header className="flex flex-col items-center gap-6 relative w-full">
        <h1 className="relative w-full mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] text-center tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
          Choose Your Plan
        </h1>

        <p className="relative max-w-[979px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </header>

      <div className="flex items-center justify-center gap-8 relative w-full">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`flex flex-col items-start justify-center gap-[25px] px-11 ${index === 1 ? "py-20" : "py-10"} relative flex-1 bg-white rounded-[10px] border border-solid ${plan.cardClass}`}
          >
            <CardContent className="p-0 w-full">
              <div className="items-start gap-[25px] w-full flex flex-col relative mb-[25px]">
                <h3 className="relative w-full mt-[-1.00px] font-paragraph-p1-semibold font-[number:var(--paragraph-p1-semibold-font-weight)] ${plan.textColor} text-[length:var(--paragraph-p1-semibold-font-size)] tracking-[var(--paragraph-p1-semibold-letter-spacing)] leading-[var(--paragraph-p1-semibold-line-height)] [font-style:var(--paragraph-p1-semibold-font-style)]">
                  {plan.name}
                </h3>

                <div
                  className={`relative w-full font-header-h4 font-[number:var(--header-h4-font-weight)] ${plan.priceColor} text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]`}
                >
                  {plan.price}
                </div>

                <p
                  className={`relative w-full font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] ${plan.textColor} text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] [font-style:var(--paragraph-p2-medium-font-style)]`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-7 relative w-full mb-[25px]">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-[19px] relative w-full"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#4f9cf9] text-white text-xs font-bold">
                      ✓
                    </span>

                    <div
                      className={`relative flex-1 mt-[-1.00px] ${index === 1 ? "font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-[#043873] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] [font-style:var(--paragraph-p2-medium-font-style)]" : "font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]"}`}
                    >
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className={`inline-flex items-center justify-center px-10 py-4 relative rounded-lg ${plan.buttonClass}`}
              >
                <span className="relative w-fit mt-[-1.00px] font-paragraph-p3-medium font-[number:var(--paragraph-p3-medium-font-weight)] text-[length:var(--paragraph-p3-medium-font-size)] tracking-[var(--paragraph-p3-medium-letter-spacing)] leading-[var(--paragraph-p3-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-medium-font-style)]">
                  Get Started
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
