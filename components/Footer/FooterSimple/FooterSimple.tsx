import type { FooterSimpleProps } from "../types";

import { FooterBottomBar } from "../FooterBottomBar";
import { FooterLegalLinks } from "../FooterLegalLinks";
import { FooterLinkList } from "../FooterLinkList";
import { FooterLogoMark } from "../FooterLogoMark";
import { FooterSocialLinks } from "../FooterSocialLinks";
import { cn } from "@/lib/utils";

export const FooterSimple = ({
  logo,
  navigation,
  socialLinks,
  copyright,
  legalLinks,
  className,
}: FooterSimpleProps) => {
  const hasNavigation = Boolean(navigation?.length);
  const hasSocialLinks = Boolean(socialLinks?.length);
  const hasLegalLinks = Boolean(legalLinks?.length);

  return (
    <footer
      className={cn("border-t border-border/60 bg-background/92", className)}
    >
      <div className="layout-container py-8 sm:py-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_auto] lg:items-center lg:gap-6">
            <div className="min-w-0">
              <FooterLogoMark logo={logo} />
            </div>

            {hasNavigation ? (
              <nav
                aria-label="Footer navigation"
                className="min-w-0 lg:justify-self-center"
              >
                <FooterLinkList
                  links={navigation ?? []}
                  className="flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-4 lg:gap-y-2"
                  itemClassName="whitespace-normal"
                />
              </nav>
            ) : null}

            {hasSocialLinks ? (
              <FooterSocialLinks
                items={socialLinks ?? []}
                className="lg:justify-self-end"
                variant="ghost"
              />
            ) : null}
          </div>

          <FooterBottomBar
            leading={<span>{copyright}</span>}
            trailing={
              hasLegalLinks ? (
                <nav aria-label="Legal links">
                  <FooterLegalLinks links={legalLinks ?? []} />
                </nav>
              ) : undefined
            }
          />
        </div>
      </div>
    </footer>
  );
};
