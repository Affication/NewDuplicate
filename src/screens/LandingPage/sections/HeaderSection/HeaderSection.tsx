import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Products", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: true },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-4 relative bg-transparent">
      <div className="flex items-center justify-around gap-2.5 relative">
        <div className="relative flex items-center gap-[10px]">
          <img
            className="w-[37px] h-[29px]"
            alt="Logo icon"
            src="/logo-icon.svg"
          />
          <div className="[font-family:'Inter',Helvetica] font-bold text-[#4f9cf9] text-[28px] tracking-[0] leading-[normal]">
            whitepace
          </div>
        </div>
      </div>

      <div className="inline-flex items-center relative flex-[0_0_auto]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="inline-flex items-center gap-2.5 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto">
                  <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#4f9cf9] text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                    {item.label}
                  </div>
                  <ChevronDownIcon className="w-2.5 h-[5px] text-[#4f9cf9]" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <div className="text-sm text-gray-600">
                      {item.label} content
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="h-[60px] items-start justify-end gap-6 inline-flex relative flex-[0_0_auto] ml-8">
          <Button
            variant="secondary"
            className="h-[60px] items-center justify-center gap-2.5 px-10 py-4 bg-[#ffe492] hover:bg-[#ffe492]/90 rounded-lg text-[#043873] font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] [font-style:var(--paragraph-p2-medium-font-style)]"
          >
            Login
          </Button>

          <Button className="inline-flex h-[60px] items-center justify-center gap-2.5 px-6 py-4 bg-[#4f9cf9] hover:bg-[#4f9cf9]/90 rounded-lg text-white font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] [font-style:var(--paragraph-p2-medium-font-style)]">
            Try Whitepace free
            <img className="flex-[0_0_auto]" alt="Icon" src="/icon-18.svg" />
          </Button>
        </div>
      </div>
    </header>
  );
};
