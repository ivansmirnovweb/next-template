import type { ProcessDeliverablesProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProcessDeliverables = ({
  title,
  description,
  items,
  className,
}: ProcessDeliverablesProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,var(--primary)_10%,transparent),_transparent_72%)]" />

      <div className="layout-container relative z-10 min-w-0">
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

          <ol className="grid min-w-0 gap-4 lg:grid-cols-2 lg:gap-5">
            {items.map((item, index) => (
              <li key={item.id} className="min-w-0">
                <Card className="h-full min-w-0 gap-5 border border-border/70 bg-background/85 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 space-y-2">
                      <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    {item.duration && (
                      <p className="w-fit shrink-0 rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-sm leading-5 text-muted-foreground">
                        {item.duration}
                      </p>
                    )}
                  </div>

                  <p className="min-w-0 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {item.description}
                  </p>

                  <div className="min-w-0 rounded-xl border border-primary/20 bg-primary/[0.06] p-4 sm:p-5">
                    <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                      You receive
                    </p>
                    <p className="mt-2 break-words font-heading text-lg leading-snug font-medium text-foreground sm:text-xl">
                      {item.deliverable}
                    </p>
                  </div>

                  {item.accent && (
                    <div className="min-w-0 border-l-2 border-primary/60 pl-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {item.accent}
                    </div>
                  )}
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
