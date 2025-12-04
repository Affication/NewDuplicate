import React from "react";
import { Button } from "@/components/ui/button";

export const WorkSection = (): JSX.Element => {
  return (
    <section className="flex-col bg-[#043873] flex w-full items-center px-8 py-[140px] relative">
      <div className="flex flex-col items-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-full max-w-[1064px] items-center gap-6 flex flex-col relative flex-[0_0_auto]">
          <img
            className="absolute w-[314px] h-6 top-[61px] right-0"
            alt="Element"
            src="/element-3.png"
          />

          <h1 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-white text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)] text-center">
            Your work, everywhere you are
          </h1>

          <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-white text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>

        <div className="relative">
          <img
            className="absolute w-[261px] h-[836px] top-[-555px] left-[-622px]"
            alt="Background"
            src="/background.png"
          />

          <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[#4f9cf9] rounded-lg hover:bg-[#4f9cf9]/90 h-auto">
            <span className="font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] [font-style:var(--paragraph-p2-medium-font-style)]">
              Try Taskey
            </span>

            <img
              className="flex-[0_0_auto] mr-[-0.50px]"
              alt="Icon"
              src="/icon-18.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
