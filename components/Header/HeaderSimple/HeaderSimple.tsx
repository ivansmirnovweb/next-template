import { HeaderActionButton } from "../HeaderActionButton";
import { HeaderDesktopNavigation } from "../HeaderDesktopNavigation";
import { HeaderLogoMark } from "../HeaderLogoMark";
import { HeaderSimpleMobileMenu } from "./HeaderSimpleMobileMenu";
import type { HeaderSimpleProps } from "../types";

import { cn } from "@/lib/utils";

export const HeaderSimple = ({
  logo,
  navigation,
  cta,
  secondaryLinks,
  className,
}: HeaderSimpleProps) => {
  return (
    <header
      className={cn(
        "border-b border-border/60 bg-background/85 backdrop-blur-xl",
        className,
      )}
    >
      <div className="layout-container flex items-center justify-between gap-4 py-4">
        <div className="flex min-w-0 flex-1 items-center gap-4 xl:gap-6">
          <div className="min-w-0 shrink-0">
            <HeaderLogoMark logo={logo} />
          </div>

          <div className="hidden min-w-0 flex-1 justify-center xl:flex">
            <HeaderDesktopNavigation
              items={navigation}
              ariaLabel="Primary navigation"
            />
          </div>
        </div>

        <div className="hidden shrink-0 xl:block">
          <HeaderActionButton action={cta} />
        </div>

        <div className="shrink-0 xl:hidden">
          <HeaderSimpleMobileMenu
            logo={logo}
            navigation={navigation}
            cta={cta}
            secondaryLinks={secondaryLinks}
          />
        </div>
      </div>
    </header>
  );
};
