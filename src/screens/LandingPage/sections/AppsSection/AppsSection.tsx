import React from "react";
import { Button } from "../../../../components/ui/button";

export const AppsSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-start gap-10 px-8 py-[120px] relative bg-gradient-to-br from-[#0b2a66] via-[#0f3c9e] to-[#0b2a66] overflow-hidden">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-6" />
        <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 relative">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 flex-wrap">
            {["Zapier", "Calendars", "Point of sale", "Web chat", "Email"].map((tag) => (
              <span
                key={tag}
                className="text-white/90 bg-white/10 border border-white/20 px-3 py-2 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-header-h1 text-white leading-[var(--header-h1-line-height)] text-[length:var(--header-h1-font-size)]">
            Work with your favorite apps without extra tabs
          </h1>
          <p className="font-paragraph-p2-regular text-white/90 text-[length:var(--paragraph-p2-regular-font-size)]">
            Connect calendars, CRMs, and ticketing tools so review requests fire automatically after every visit while replies
            stay consistent across channels.
          </p>
          <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white text-[#0b2a66] rounded-lg h-auto hover:bg-white/90">
            <span className="font-paragraph-p2-medium text-[length:var(--paragraph-p2-medium-font-size)]">Read more</span>
            <span aria-hidden className="text-lg font-semibold">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          {["Email & SMS", "CRM", "POS", "Support Desk", "Calendar", "Webhooks"].map((item) => (
            <div
              key={item}
              className="h-28 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center text-center px-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
