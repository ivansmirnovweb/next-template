import Image from "next/image";

import { HeroActionButtons } from "../HeroActionButtons";
import type { HeroPersonalProps } from "../types";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const HeroPersonal = ({
  title,
  role,
  description,
  portrait,
  primaryAction,
  secondaryAction,
  proofs,
  className,
}: HeroPersonalProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border border-border/70 bg-card/70 py-12 shadow-sm backdrop-blur-sm sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,_color-mix(in_oklch,var(--primary)_14%,transparent),_transparent_28%),radial-gradient(circle_at_10%_90%,_color-mix(in_oklch,var(--primary)_9%,transparent),_transparent_32%)]" />

      <div className="layout-container relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)] lg:gap-8">
          <div className="max-w-2xl space-y-6">
            <Badge variant="outline" className="w-fit rounded-full px-3 py-1">
              {role}
            </Badge>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <HeroActionButtons
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />
          </div>

          <figure className="min-w-0">
            <Card className="overflow-hidden border border-border/70 bg-background/80 p-2 shadow-lg backdrop-blur-md sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-0.15rem)] bg-muted">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  preload
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 50vw"
                  className="object-cover"
                  style={{
                    objectPosition: portrait.objectPosition ?? "50% 35%",
                  }}
                />
              </div>
            </Card>
          </figure>

          {!!proofs?.length && (
            <ul className="flex flex-wrap gap-2 lg:col-start-1 lg:row-start-2">
              {proofs.map((proof) => (
                <li
                  key={proof.id}
                  className="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-sm text-muted-foreground shadow-sm"
                >
                  {proof.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
