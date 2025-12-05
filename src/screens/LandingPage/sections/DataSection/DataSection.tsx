import React from "react";
import { Button } from "../../../../components/ui/button";

export const DataSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center px-8 py-[140px] relative">
      <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative">
            <div className="absolute w-32 h-32 bg-primary-100/80 rounded-full blur-3xl -left-16 top-10" aria-hidden />
            <h1 className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-[#212529] text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
              100% your data
            </h1>
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
          <span aria-hidden className="text-white text-xl">→</span>
        </Button>
      </div>

      <div className="relative w-full max-w-[720px] h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 opacity-70" aria-hidden />
        <div className="relative grid grid-cols-2 gap-4 w-full h-full p-8">
          {["Encrypted backups", "Self-host friendly", "Open export", "Role-based access"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between bg-white shadow-lg rounded-2xl px-4 py-6 text-left"
            >
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold">
                  ✓
                </span>
                {item}
              </div>
              <span className="text-primary-500 font-bold">100%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
