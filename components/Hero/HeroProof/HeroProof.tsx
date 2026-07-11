import { HeroActionButtons } from "../HeroActionButtons";
import type { HeroProofProps } from "../types";

import { HeroProofItem } from "./HeroProofItem";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const HeroProof = ({
  title,
  description,
  primaryAction,
  proofs,
  eyebrow,
  secondaryAction,
  featuredProof,
  className,
}: HeroProofProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border border-border/70 bg-card/70 py-12 shadow-sm backdrop-blur-sm sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,var(--primary)_14%,transparent),_transparent_70%)]" />

      <div className="layout-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-16">
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

            {featuredProof && (
              <Card className="max-w-xl border border-border/70 bg-background/75 p-4 shadow-sm sm:p-5">
                <div className="text-sm leading-6 text-muted-foreground">
                  {featuredProof}
                </div>
              </Card>
            )}
          </div>

          <Card className="border border-border/70 bg-background/75 p-4 shadow-sm sm:p-5">
            <Badge variant="outline" className="mb-4">
              Нам доверяют
            </Badge>
            <dl className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {proofs.map((proof) => (
                <div
                  key={proof.id}
                  className="min-w-0 border-b border-border/70 pb-5 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
                >
                  <HeroProofItem proof={proof} />
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
};
