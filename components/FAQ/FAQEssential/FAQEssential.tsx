"use client";

import type { FAQEssentialProps } from "../types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const FAQEssential = ({
  title,
  description,
  items,
  className,
}: FAQEssentialProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <div className="mx-auto min-w-0 max-w-4xl space-y-8 sm:space-y-10">
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
                    <AccordionTrigger className="min-w-0 gap-4 py-5 text-base font-medium text-foreground hover:no-underline focus-visible:ring-offset-0 sm:text-lg">
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
        </div>
      </div>
    </section>
  );
};
