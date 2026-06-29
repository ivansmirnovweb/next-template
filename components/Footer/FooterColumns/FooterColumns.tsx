import Link from "next/link";

import type { FooterColumnsProps } from "../types";

import { FooterBottomBar } from "../FooterBottomBar";
import { FooterContactList } from "../FooterContactList";
import { FooterLegalLinks } from "../FooterLegalLinks";
import { FooterLogoMark } from "../FooterLogoMark";
import { FooterSocialLinks } from "../FooterSocialLinks";
import { cn } from "@/lib/utils";

import { FooterColumnsMobileAccordion } from "./FooterColumnsMobileAccordion";

export const FooterColumns = ({
  logo,
  description,
  groups,
  contacts,
  socialLinks,
  copyright,
  legalLinks,
  bottomNote,
  className,
}: FooterColumnsProps) => {
  const contactItems = contacts ?? [];
  const socialItems = socialLinks ?? [];
  const legalItems = legalLinks ?? [];
  const visibleGroups = groups.filter((group) => group.links.length > 0);
  const hasGroups = visibleGroups.length > 0;
  const hasContacts = contactItems.length > 0;
  const hasSocialLinks = socialItems.length > 0;

  return (
    <footer
      className={cn("border-t border-border/60 bg-background/90", className)}
    >
      <div className="layout-container py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 min-[1120px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(280px,0.9fr)] min-[1120px]:items-start">
          <div className="space-y-4 min-[1120px]:max-w-xl">
            <FooterLogoMark logo={logo} />
            {description ? (
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {description}
              </p>
            ) : null}
          </div>

          {hasGroups ? (
            <nav
              aria-label="Footer navigation"
              className="hidden min-w-0 min-[1120px]:block"
            >
              <div className="grid gap-8 md:grid-cols-2">
                {visibleGroups.map((group, index) => {
                  const groupId = `footer-columns-group-${index}`;

                  return (
                    <section
                      key={`${group.title}-${index}`}
                      aria-labelledby={groupId}
                      className="space-y-3"
                    >
                      <h2
                        id={groupId}
                        className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
                      >
                        <span className="block max-w-full break-words">
                          {group.title}
                        </span>
                      </h2>
                      <ul className="flex flex-col gap-2">
                        {group.links.map((link) => (
                          <li key={`${link.href}-${link.label}`}>
                            <Link
                              href={link.href}
                              className="inline-flex max-w-full rounded-md text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                              <span className="truncate">{link.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </nav>
          ) : (
            <div className="hidden min-[1120px]:block" aria-hidden="true" />
          )}

          <aside className="hidden space-y-6 rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm min-[1120px]:flex min-[1120px]:flex-col">
            {hasContacts ? (
              <section aria-label="Footer contacts" className="space-y-3">
                <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Contacts
                </h2>
                <FooterContactList
                  items={contactItems}
                  emphasize
                  className="gap-4"
                />
              </section>
            ) : null}

            {hasSocialLinks ? (
              <section aria-label="Footer social links" className="space-y-3">
                <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Social
                </h2>
                <FooterSocialLinks
                  items={socialItems}
                  className="justify-start"
                />
              </section>
            ) : null}
          </aside>
        </div>

        {hasGroups ? (
          <div className="mt-8 min-[1120px]:hidden">
            <nav aria-label="Footer navigation">
              <FooterColumnsMobileAccordion groups={visibleGroups} />
            </nav>
          </div>
        ) : null}

        {hasContacts || hasSocialLinks ? (
          <div className="mt-6 min-[1120px]:hidden">
            <div className="space-y-6 rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm">
              {hasContacts ? (
                <section aria-label="Footer contacts" className="space-y-3">
                  <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    Contacts
                  </h2>
                  <FooterContactList
                    items={contactItems}
                    emphasize
                    className="gap-4"
                  />
                </section>
              ) : null}

              {hasSocialLinks ? (
                <section aria-label="Footer social links" className="space-y-3">
                  <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    Social
                  </h2>
                  <FooterSocialLinks
                    items={socialItems}
                    className="justify-start"
                  />
                </section>
              ) : null}
            </div>
          </div>
        ) : null}

        <FooterBottomBar
          className="mt-10"
          leading={<span>{copyright}</span>}
          center={bottomNote ? <span>{bottomNote}</span> : undefined}
          trailing={
            legalItems.length ? (
              <FooterLegalLinks links={legalItems} />
            ) : undefined
          }
        />
      </div>
    </footer>
  );
};
