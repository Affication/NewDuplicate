import React from "react";
import { Button } from "../../../../components/ui/button";

export const AppsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-[100px] px-8 py-[140px] relative bg-[#043873]">
      <img
        className="absolute w-full h-[700px] top-2.5 left-0"
        alt="Element"
        src="/element-7.png"
      />

      <img
        className="relative w-[582px] h-[470.8px]"
        alt="Apps"
        src="/apps.png"
      />

      <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-white text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
            Work with Your Favorite Apps Using whitepace
          </h1>

          <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-white text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#4f9cf9]/90">
          <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
            Read more
          </span>

          <img
            className="relative flex-[0_0_auto] mr-[-0.50px]"
            alt="Icon"
            src="/icon-18.svg"
          />
        </Button>
      </div>
    </section>
  );
};
