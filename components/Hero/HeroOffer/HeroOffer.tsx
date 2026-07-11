import { HeroActionButtons } from "../HeroActionButtons";
import type { HeroOfferProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const HeroOffer = ({
  title,
  description,
  primaryAction,
  eyebrow,
  secondaryAction,
  trust,
  visual,
  className,
}: HeroOfferProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border border-border/70 bg-card/70 py-12 shadow-sm backdrop-blur-sm sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_color-mix(in_oklch,var(--primary)_8%,transparent),_transparent_42%),radial-gradient(circle_at_bottom_right,_color-mix(in_oklch,var(--primary)_12%,transparent),_transparent_34%)]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="layout-container relative z-10">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-16",
            visual && "lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]",
          )}
        >
          <div className="max-w-3xl space-y-6">
            {eyebrow && <div>{eyebrow}</div>}

            <div className="space-y-4">
              <h1 className="font-heading text-4xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <HeroActionButtons
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />

            {trust && (
              <div className="pt-1 text-sm text-muted-foreground">{trust}</div>
            )}
          </div>

          {visual && (
            <Card className="border border-border/70 bg-background/75 p-2 shadow-sm backdrop-blur-md sm:p-3">
              {visual}
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
