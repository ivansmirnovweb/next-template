import type { ProcessStepsProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProcessSteps = ({
  title,
  description,
  items,
  className,
}: ProcessStepsProps) => {
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

          <ol className="min-w-0 space-y-4 sm:space-y-5">
            {items.map((item, index) => {
              const marker = item.marker ?? String(index + 1).padStart(2, "0");
              const isLastItem = index === items.length - 1;

              return (
                <li key={item.id} className="relative min-w-0 pl-14 sm:pl-16">
                  {!isLastItem && (
                    <span
                      aria-hidden="true"
                      className="absolute top-12 bottom-[-1.25rem] left-5 w-px bg-border/80 sm:left-6"
                    />
                  )}

                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] font-heading text-sm font-medium tracking-tight text-primary sm:size-12 sm:text-base"
                  >
                    {item.icon ?? marker}
                  </span>

                  <Card className="min-w-0 gap-3 border border-border/70 bg-card/80 p-5 shadow-sm sm:p-6">
                    <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="min-w-0 space-y-1.5">
                        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                          Step {marker}
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
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
