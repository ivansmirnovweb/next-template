import Link from "next/link";

import { PhoneCall } from "lucide-react";

import { HeaderActionButton } from "../HeaderActionButton";
import { HeaderDesktopNavigation } from "../HeaderDesktopNavigation";
import { HeaderLogoMark } from "../HeaderLogoMark";
import { HeaderSocialLinkButton } from "../HeaderSocialLinkButton";
import type { HeaderWithContactsProps } from "../types";
import { HeaderContactValue } from "./HeaderContactValue";
import { HeaderWithContactsMobileMenu } from "./HeaderWithContactsMobileMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HeaderWithContacts = ({
  logo,
  navigation,
  cta,
  phone,
  address,
  hours,
  socialLinks,
  className,
}: HeaderWithContactsProps) => {
  return (
    <header
      className={cn(
        "border-b border-border/60 bg-background/88 backdrop-blur-xl",
        className,
      )}
    >
      <div className="layout-container py-3">
        <div className="flex items-center justify-between gap-4">
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

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <Button asChild variant="secondary" size="sm">
              <Link href={phone.href ?? "#phone"}>
                <PhoneCall className="size-4" />
                Call
              </Link>
            </Button>
            <HeaderWithContactsMobileMenu
              logo={logo}
              navigation={navigation}
              cta={cta}
              phone={phone}
              address={address}
              hours={hours}
              socialLinks={socialLinks}
            />
          </div>
        </div>

        <div className="mt-3 hidden items-start justify-between gap-3 border-t border-border/60 pt-3 xl:flex">
          <div className="grid min-w-0 flex-1 gap-2 md:grid-cols-2">
            {address && <HeaderContactValue item={address} />}
            {hours && <HeaderContactValue item={hours} />}
          </div>

          <div className="flex min-w-0 shrink-0 items-center gap-2">
            {socialLinks?.map((social) => (
              <HeaderSocialLinkButton
                key={`${social.href}-${social.label}`}
                item={social}
              />
            ))}
            <HeaderContactValue
              item={phone}
              className="rounded-xl border border-border/70 bg-card/80"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
