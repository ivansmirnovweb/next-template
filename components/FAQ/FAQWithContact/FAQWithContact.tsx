"use client";

import Link from "next/link";

import type { FAQWithContactProps } from "../types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const FAQWithContact = ({
  title,
  description,
  items,
  contact,
  className,
}: FAQWithContactProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <div className="min-w-0 space-y-8 sm:space-y-10">
          {hasIntroduction && (
            <div className="max-w-3xl space-y-3">
              {title && (
                <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.4fr)] lg:items-start lg:gap-8">
            {items.length > 0 && (
              <Card className="min-w-0 gap-0 border border-border/70 bg-card/80 px-5 py-1 shadow-sm sm:px-6">
                <Accordion type="multiple">
                  {items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      id={item.anchorId}
                      className="border-border/70"
                    >
                      <AccordionTrigger className="min-w-0 gap-4 py-5 text-base font-medium text-foreground hover:no-underline focus-visible:ring-offset-0">
                        <span className="min-w-0 flex-1 pr-2">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="min-w-0 pb-5 text-muted-foreground">
                        <div className="min-w-0 text-sm leading-6 sm:text-base sm:leading-7">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            )}

            <aside className="min-w-0 rounded-2xl border border-primary/15 bg-primary/[0.05] p-5 sm:p-6">
              <div className="min-w-0 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                    Still deciding?
                  </p>
                  <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                    {contact.title}
                  </h3>
                  {contact.description && (
                    <p className="text-sm leading-6 text-muted-foreground">
                      {contact.description}
                    </p>
                  )}
                </div>

                <Button
                  asChild
                  className="w-fit"
                  variant={contact.primaryAction.variant}
                >
                  <Link href={contact.primaryAction.href}>
                    {contact.primaryAction.label}
                  </Link>
                </Button>

                {contact.responseNote && (
                  <p className="text-sm leading-6 text-muted-foreground">
                    {contact.responseNote}
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
