import type { FooterContactItem, FooterWithContactsProps } from "../types";

import { FooterActionButton } from "../FooterActionButton";
import { FooterBottomBar } from "../FooterBottomBar";
import { FooterContactList } from "../FooterContactList";
import { FooterLegalLinks } from "../FooterLegalLinks";
import { FooterLinkList } from "../FooterLinkList";
import { FooterLogoMark } from "../FooterLogoMark";
import { FooterSocialLinks } from "../FooterSocialLinks";
import { cn } from "@/lib/utils";

export const FooterWithContacts = ({
  logo,
  description,
  navigation,
  phone,
  email,
  address,
  hours,
  socialLinks,
  cta,
  copyright,
  legalLinks,
  supplementaryText,
  className,
}: FooterWithContactsProps) => {
  const contactItems: FooterContactItem[] = [];

  if (phone) {
    contactItems.push(phone);
  }

  if (email) {
    contactItems.push(email);
  }

  if (address) {
    contactItems.push(address);
  }

  if (hours) {
    contactItems.push(hours);
  }

  const hasNavigation = Boolean(navigation?.length);
  const hasSocialLinks = Boolean(socialLinks?.length);
  const hasAction = Boolean(cta);
  const hasSupplementaryText = Boolean(supplementaryText);
  const hasLegalLinks = Boolean(legalLinks?.length);

  return (
    <footer
      className={cn("border-t border-border/60 bg-background/95", className)}
    >
      <div className="layout-container py-10 sm:py-12">
        <div className="rounded-[2rem] border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <section className="space-y-6">
              <FooterLogoMark logo={logo} />

              {contactItems.length ? (
                <div className="rounded-3xl border border-border/60 bg-background/75 p-4 sm:p-5">
                  <FooterContactList
                    items={contactItems}
                    emphasize
                    className="gap-4 sm:grid-cols-2"
                  />
                </div>
              ) : null}

              {description ? (
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {description}
                </p>
              ) : null}

              {hasAction || hasSocialLinks ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <FooterActionButton
                    action={cta}
                    className="w-full sm:w-auto"
                  />
                  <FooterSocialLinks
                    items={socialLinks ?? []}
                    className="w-full sm:w-auto"
                  />
                </div>
              ) : null}
            </section>

            {hasNavigation ? (
              <nav aria-label="Footer navigation" className="space-y-4">
                <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Navigation
                </h2>
                <FooterLinkList
                  links={navigation ?? []}
                  className="flex-col gap-3"
                />
              </nav>
            ) : null}
          </div>

          <FooterBottomBar
            leading={<span>{copyright}</span>}
            center={
              hasSupplementaryText ? (
                <span className="text-xs leading-5 text-muted-foreground sm:text-sm">
                  {supplementaryText}
                </span>
              ) : undefined
            }
            trailing={
              hasLegalLinks ? (
                <nav aria-label="Legal links">
                  <FooterLegalLinks links={legalLinks ?? []} />
                </nav>
              ) : undefined
            }
            className="mt-8"
          />
        </div>
      </div>
    </footer>
  );
};
