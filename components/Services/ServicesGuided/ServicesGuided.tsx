import Link from "next/link";

import type { ServicesGuidedProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ServicesGuided = ({
  title,
  description,
  items,
  className,
}: ServicesGuidedProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
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

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-5 border border-border/70 bg-background/85 p-5 shadow-sm backdrop-blur-sm sm:p-6"
              >
                <div className="min-w-0 space-y-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Your situation
                  </p>
                  <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                    {item.need}
                  </h3>
                </div>

                <div className="min-w-0 rounded-xl border border-primary/20 bg-primary/[0.06] p-4 sm:p-5">
                  <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                    A useful next step
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                    {item.solution}
                  </p>
                </div>

                {item.destination.type === "services" ? (
                  <div className="min-w-0 space-y-2">
                    <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      Relevant services
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {item.destination.items.map((service) => (
                        <li
                          key={service}
                          className="rounded-full border border-border/70 bg-muted/55 px-3 py-1.5 text-sm text-muted-foreground"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="min-w-0 border-l-2 border-primary/60 pl-4">
                    <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      Expected result
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {item.destination.value}
                    </p>
                  </div>
                )}

                {item.action && (
                  <Button
                    asChild
                    className="w-fit"
                    variant={item.action.variant ?? "outline"}
                  >
                    <Link href={item.action.href}>{item.action.label}</Link>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
