import { HeaderActionButton } from "../HeaderActionButton";
import { HeaderDesktopNavigation } from "../HeaderDesktopNavigation";
import { HeaderLogoMark } from "../HeaderLogoMark";
import { HeaderSocialLinkButton } from "../HeaderSocialLinkButton";
import type { HeaderCenteredProps } from "../types";
import { HeaderCenteredMobileMenu } from "./HeaderCenteredMobileMenu";
import { HeaderQuickActionLink } from "./HeaderQuickActionLink";
import { HeaderCompactContact } from "./HeaderCompactContact";
import { cn } from "@/lib/utils";

export const HeaderCentered = ({
  logo,
  leftNavigation,
  rightNavigation,
  cta,
  mobileQuickAction,
  contacts,
  socialLinks,
  className,
}: HeaderCenteredProps) => {
  return (
    <header
      className={cn(
        "border-b border-border/60 bg-background/88 backdrop-blur-xl",
        className,
      )}
    >
      <div className="layout-container py-4">
        <div className="hidden items-center justify-between gap-6 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="flex min-w-0 justify-start">
            <HeaderDesktopNavigation
              items={leftNavigation}
              ariaLabel="Left navigation"
              align="start"
            />
          </div>

          <div className="min-w-0 justify-self-center">
            <HeaderLogoMark logo={logo} />
          </div>

          <div className="flex min-w-0 items-center justify-end gap-3">
            <HeaderDesktopNavigation
              items={rightNavigation}
              ariaLabel="Right navigation"
              align="end"
              listClassName="justify-end"
            />
            {cta && <HeaderActionButton action={cta} />}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 xl:hidden">
          <div className="shrink-0">
            <HeaderCenteredMobileMenu
              logo={logo}
              leftNavigation={leftNavigation}
              rightNavigation={rightNavigation}
              cta={cta}
              contacts={contacts}
              socialLinks={socialLinks}
            />
          </div>

          <div className="min-w-0 flex-1 justify-center">
            <div className="mx-auto w-fit max-w-full">
              <HeaderLogoMark logo={logo} />
            </div>
          </div>

          <div className="shrink-0">
            <HeaderQuickActionLink item={mobileQuickAction} />
          </div>
        </div>

        {(contacts?.length || socialLinks?.length) && (
          <div className="mt-4 hidden items-center justify-center gap-2 border-t border-border/60 pt-3 xl:flex">
            {contacts?.map((contact) => (
              <HeaderCompactContact
                key={`${contact.label}-${contact.value}`}
                item={contact}
              />
            ))}
            {socialLinks?.map((social) => (
              <HeaderSocialLinkButton
                key={`${social.href}-${social.label}`}
                item={social}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
