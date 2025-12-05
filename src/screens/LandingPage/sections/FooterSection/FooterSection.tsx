import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const footerColumns = [
  {
    title: "Product",
    links: [
      { text: "Overview", highlighted: true },
      { text: "Pricing", highlighted: false },
      { text: "Customer stories", highlighted: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", highlighted: false },
      { text: "Guides & tutorials", highlighted: false },
      { text: "Help center", highlighted: false },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About us", highlighted: false },
      { text: "Careers", highlighted: false },
      { text: "Media kit", highlighted: false },
    ],
  },
];

const bottomLinks = [
  "Terms & privacy",
  "Security",
  "Status",
  "©2021 Whitepace LLC.",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center justify-center gap-[200px] pt-[140px] pb-8 px-8 relative bg-[#043873]">
      <div className="flex-col items-start gap-[100px] flex relative w-full max-w-[1480px] flex-[0_0_auto]">
        <div className="flex w-full gap-[100px] items-start relative flex-[0_0_auto]">
          <div className="inline-flex flex-col gap-[15px] items-start relative flex-[0_0_auto]">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-xl bg-white/20 text-white font-bold inline-flex items-center justify-center">SP</span>
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[normal]">
                whitepace
              </div>
            </div>

            <div className="relative w-60 font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#f7f7ee] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </div>
          </div>

          {footerColumns.map((column, index) => (
            <div
              key={column.title}
              className="inline-flex flex-col gap-[15px] items-start relative flex-[0_0_auto]"
            >
              <div className="relative w-fit mt-[-1.00px] font-paragraph-p2-bold font-[number:var(--paragraph-p2-bold-font-weight)] text-white text-[length:var(--paragraph-p2-bold-font-size)] tracking-[var(--paragraph-p2-bold-letter-spacing)] leading-[var(--paragraph-p2-bold-line-height)] [font-style:var(--paragraph-p2-bold-font-style)]">
                {column.title}
              </div>

              {column.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className={`relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)] ${
                    link.highlighted ? "text-[#ffe492]" : "text-white"
                  }`}
                >
                  {link.text}
                </div>
              ))}
            </div>
          ))}

          <div className="inline-flex flex-col items-start gap-[23px] relative flex-[0_0_auto]">
            <div className="font-[number:var(--header-h5-font-weight)] text-[length:var(--header-h5-font-size)] tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] relative w-fit mt-[-1.00px] font-header-h5 text-white whitespace-nowrap [font-style:var(--header-h5-font-style)]">
              Try It Today
            </div>

            <div className="relative w-[259px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
              Get started for free. Add your whole team as your needs grow.
            </div>

            <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#4f9cf9]/90">
              <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                Start today
              </div>

              <span aria-hidden className="relative flex-[0_0_auto] mr-[-0.50px] text-white font-semibold">→</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between relative w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                English
              </div>

              <ChevronDownIcon className="relative flex-[0_0_auto] w-4 h-4 text-white" />
            </div>

            {bottomLinks.map((link, index) => (
              <div
                key={index}
                className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]"
              >
                {link}
              </div>
            ))}
          </div>

          <div className="flex gap-3 text-white">
            {["in", "fb", "tw"].map((network) => (
              <span
                key={network}
                className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center uppercase text-sm font-semibold"
              >
                {network}
              </span>
            ))}
          </div>
        </div>

        <Separator className="absolute w-full h-px top-[248px] left-0 bg-white/20" />
      </div>
    </footer>
  );
};
