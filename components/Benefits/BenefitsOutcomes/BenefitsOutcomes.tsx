import type { BenefitsOutcomesProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const BenefitsOutcomes = ({
  title,
  description,
  items,
  className,
}: BenefitsOutcomesProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-y border-border/70 bg-card/60 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,var(--primary)_10%,transparent),_transparent_72%)]" />

      <div className="layout-container relative z-10">
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-5 border border-border/70 bg-background/80 p-5 shadow-sm backdrop-blur-sm sm:p-6"
              >
                {item.icon && (
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground [&>svg]:size-5">
                    {item.icon}
                  </div>
                )}
                <div className="min-w-0 space-y-3">
                  <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
