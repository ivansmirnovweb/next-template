import { HeroActionButtons } from "../HeroActionButtons";
import type { HeroShowcaseProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const HeroShowcase = ({
  title,
  description,
  primaryAction,
  visual,
  eyebrow,
  secondaryAction,
  caption,
  proof,
  className,
}: HeroShowcaseProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border border-border/70 bg-card/70 py-12 shadow-sm backdrop-blur-sm sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_color-mix(in_oklch,var(--primary)_16%,transparent),_transparent_30%),radial-gradient(circle_at_10%_100%,_color-mix(in_oklch,var(--primary)_9%,transparent),_transparent_34%)]" />

      <div className="layout-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
          <div className="max-w-2xl space-y-6">
            {eyebrow && <div>{eyebrow}</div>}

            <div className="space-y-4">
              <h1 className="font-heading text-4xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <HeroActionButtons
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />

            {proof && (
              <div className="border-l-2 border-primary/40 pl-4 text-sm leading-6 text-muted-foreground">
                {proof}
              </div>
            )}
          </div>

          <figure className="min-w-0">
            <Card className="overflow-hidden border border-border/70 bg-background/80 p-2 shadow-lg backdrop-blur-md sm:p-3">
              <div className="min-w-0 overflow-hidden rounded-[calc(var(--radius)-0.15rem)]">
                {visual}
              </div>
            </Card>
            {caption && (
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
};
