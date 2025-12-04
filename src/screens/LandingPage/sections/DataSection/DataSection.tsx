import React from "react";
import { Button } from "../../../../components/ui/button";

export const DataSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center px-8 py-[140px] relative">
      <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative">
            <h1 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
              100% your data
            </h1>
            <img
              className="absolute w-[351px] h-[37px] top-[69px] left-[225px]"
              alt="Element"
              src="/element-5.png"
            />
          </div>

          <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
            The app is open source and your notes are saved to an open format,
            so you&#39;ll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 h-auto bg-[#4f9cf9] rounded-lg hover:bg-[#4f9cf9]/90">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23px] whitespace-nowrap">
            Read more
          </span>
          <img
            className="relative flex-[0_0_auto] mr-[-0.50px]"
            alt="Icon"
            src="/icon-18.svg"
          />
        </Button>
      </div>

      <img
        className="relative w-[752px] h-[399.81px] mt-[-3.31px] mb-[-15.37px] mr-[-32.00px]"
        alt="Element"
        src="/element-4.png"
      />
    </section>
  );
};
