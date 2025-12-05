import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const sectionData = [
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
    buttonText: "Get Started",
    layout: "text-left",
  },
  {
    id: "work-together",
    title: "Work together",
    description:
      "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
    buttonText: "Try it now",
    layout: "text-right",
  },
];

export const WorkManagementSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-[100px] px-8 py-[140px] relative">
      <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
              {sectionData[0].title}
            </h2>

            <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              {sectionData[0].description}
            </p>
          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#4f9cf9]/90">
            <span className="text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] relative w-fit mt-[-1.00px] font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
              {sectionData[0].buttonText}
            </span>

            <ArrowRightIcon className="relative flex-[0_0_auto] mr-[-0.50px] w-4 h-4 text-white" />
          </Button>
        </div>

        <div className="relative w-[719px] h-[448px] rounded-[24px] bg-gradient-to-br from-primary-100 via-white to-primary-200 border border-primary-200 shadow-lg" />
      </div>

      <div className="items-center gap-40 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[583px] h-[340px] rounded-[28px] bg-gradient-to-br from-[#4f9cf9] via-[#c3ddff] to-white shadow-xl" />

        <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
              {sectionData[1].title}
            </h2>

            <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#212529] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              {sectionData[1].description}
            </p>

          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg h-auto hover:bg-[#4f9cf9]/90">
            <span className="font-[number:var(--paragraph-p2-medium-font-weight)] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] relative w-fit mt-[-1.00px] font-paragraph-p2-medium text-white whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
              {sectionData[1].buttonText}
            </span>

            <ArrowRightIcon className="relative flex-[0_0_auto] mr-[-0.50px] w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
