import type { ProcessCollaborationProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProcessCollaboration = ({
  title,
  description,
  items,
  className,
}: ProcessCollaborationProps) => {
  const hasIntroduction = title || description;

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

          <ol className="min-w-0 space-y-4 sm:space-y-5">
            {items.map((item, index) => (
              <li key={item.id} className="min-w-0">
                <Card className="min-w-0 gap-0 border border-border/70 bg-background p-0 shadow-sm">
                  <div className="flex min-w-0 flex-col gap-3 border-b border-border/70 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-5 sm:p-6">
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <span
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08] font-heading text-sm font-medium text-primary sm:size-10"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 space-y-1">
                        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                          Shared step
                        </p>
                        <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {item.duration && (
                      <p className="w-fit shrink-0 rounded-full border border-border/70 bg-muted/55 px-3 py-1 text-sm leading-5 text-muted-foreground">
                        {item.duration}
                      </p>
                    )}
                  </div>

                  <div className="grid min-w-0 gap-px bg-border/70 md:grid-cols-2">
                    <div className="min-w-0 bg-background p-5 sm:p-6">
                      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                        Client
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.clientActions}
                      </p>
                    </div>

                    <div className="min-w-0 bg-primary/[0.05] p-5 sm:p-6">
                      <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                        Team
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {item.providerActions}
                      </p>
                    </div>
                  </div>

                  {item.outcome && (
                    <div className="min-w-0 border-t border-border/70 bg-muted/35 px-5 py-4 sm:px-6">
                      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                        Shared outcome
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {item.outcome}
                      </p>
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
