import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center px-8 py-[100px] relative bg-white">
      <img
        className="absolute w-full h-[433px] top-[152px] left-0"
        alt="Element"
        src="/element.png"
      />

      <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-header-h2 font-[number:var(--header-h2-font-weight)] text-[#4f9cf9] text-[length:var(--header-h2-font-size)] tracking-[var(--header-h2-letter-spacing)] leading-[var(--header-h2-line-height)] [font-style:var(--header-h2-font-style)]">
            Get More Done with whitepace
          </h1>

          <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#4f9cf9] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>

        <Button className="inline-flex items-center gap-2.5 p-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#3d7bd6]">
          <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
            Try Whitepace free
          </span>

          <ArrowRightIcon className="relative w-[11px] h-[11px] mr-[-0.50px]" />
        </Button>
      </div>

      <div className="inline-flex flex-col items-start gap-[3.33px] relative flex-[0_0_auto]">
        <div className="relative w-[685px] h-[456.39px] bg-primary-100" />
      </div>
    </section>
  );
};
