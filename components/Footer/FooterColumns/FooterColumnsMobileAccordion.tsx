"use client";

import type { FooterLinkGroup } from "../types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { FooterLinkList } from "../FooterLinkList";

type FooterColumnsMobileAccordionProps = {
  groups: readonly FooterLinkGroup[];
  className?: string;
};

export const FooterColumnsMobileAccordion = ({
  groups,
  className,
}: FooterColumnsMobileAccordionProps) => {
  const visibleGroups = groups.filter((group) => group.links.length > 0);

  if (!visibleGroups.length) {
    return null;
  }

  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "rounded-3xl border border-border/60 bg-card/70 px-4 shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {visibleGroups.map((group, index) => {
        const value = `footer-columns-mobile-${index}`;

        return (
          <AccordionItem
            key={`${group.title}-${index}`}
            value={value}
            className="border-border/60"
          >
            <AccordionTrigger className="py-4 text-left text-base font-medium text-foreground hover:no-underline focus-visible:ring-offset-0">
              <span className="min-w-0 flex-1 whitespace-normal pr-3">
                {group.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <FooterLinkList
                links={group.links}
                className="flex-col gap-2.5"
                itemClassName="whitespace-normal"
              />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
