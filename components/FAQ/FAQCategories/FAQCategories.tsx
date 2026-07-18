"use client";

import type { FAQCategoriesProps } from "../types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const FAQCategories = ({
  title,
  description,
  categories,
  className,
}: FAQCategoriesProps) => {
  const hasIntroduction = title || description;
  const visibleCategories = categories.filter(
    (category) => category.items.length > 0,
  );

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
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

          {visibleCategories.length > 0 && (
            <div className="grid min-w-0 gap-4 lg:grid-cols-2 lg:gap-5">
              {visibleCategories.map((category) => (
                <Card
                  key={category.id}
                  className="min-w-0 gap-0 border border-border/70 bg-card/85 px-5 py-5 shadow-sm sm:px-6"
                >
                  <div className="min-w-0 space-y-1.5 pb-4">
                    <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <Accordion
                    type="multiple"
                    className="border-t border-border/70"
                  >
                    {category.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        id={item.anchorId}
                        className="border-border/70"
                      >
                        <AccordionTrigger className="min-w-0 gap-4 py-4 text-sm font-medium text-foreground hover:no-underline sm:text-base">
                          <span className="min-w-0 flex-1 pr-2">
                            {item.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="min-w-0 pb-4 text-muted-foreground">
                          <div className="min-w-0 text-sm leading-6">
                            {item.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
