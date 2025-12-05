import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CustomizationSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center gap-[98px] px-8 py-[140px] relative">
      <div className="flex flex-col items-start gap-[60px] relative flex-1">
        <div className="flex flex-col items-start gap-6 relative w-full">
          <h2 className="relative w-full mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
            Customise it to <br />
            your needs
          </h2>

          <p className="relative w-full font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#4f9cf9]/90">
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23px] whitespace-nowrap">
            Let&apos;s Go
          </span>
          <ArrowRightIcon className="w-4 h-4 text-white" />
        </Button>
      </div>

      <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
        <div className="relative w-[686px] h-[479px] bg-primary-100" />
      </div>
    </section>
  );
};
