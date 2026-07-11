import type { BenefitsContrastProps } from "../types";

import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const BenefitsContrast = ({
  title,
  description,
  items,
  problemLabel,
  solutionLabel,
  className,
}: BenefitsContrastProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <div className="space-y-8 sm:space-y-10">
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

          <div className="grid gap-4 lg:gap-5">
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-0 border border-border/70 bg-background p-0 shadow-sm"
              >
                <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
                  <div className="min-w-0 space-y-2 p-5 sm:p-6">
                    {problemLabel && (
                      <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                        {problemLabel}
                      </p>
                    )}
                    <p className="font-heading text-lg leading-snug font-medium text-foreground sm:text-xl">
                      {item.problem}
                    </p>
                  </div>

                  <div className="flex items-center justify-center border-y border-border/70 bg-muted/45 px-5 py-2 lg:border-y-0 lg:border-x lg:px-3">
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 rotate-90 text-primary lg:rotate-0"
                    />
                  </div>

                  <div className="min-w-0 space-y-3 bg-primary/[0.04] p-5 sm:p-6">
                    {solutionLabel && (
                      <p className="text-xs font-medium tracking-[0.12em] text-primary uppercase">
                        {solutionLabel}
                      </p>
                    )}
                    <p className="font-heading text-lg leading-snug font-medium text-foreground sm:text-xl">
                      {item.solution}
                    </p>
                    {item.description && (
                      <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
