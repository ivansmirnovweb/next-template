import Image from "next/image";
import Link from "next/link";

import type { AboutStoryProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const AboutStory = ({
  title,
  intro,
  problem,
  idea,
  stages,
  image,
  action,
  className,
}: AboutStoryProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,var(--primary)_12%,transparent),_transparent_70%)]" />

      <div className="layout-container relative z-10 min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-6 lg:sticky lg:top-8">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                Our starting point
              </p>
              <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {intro}
              </p>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Card className="min-w-0 gap-2 border border-border/70 bg-background/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                  The problem
                </p>
                <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                  {problem}
                </p>
              </Card>
              <Card className="min-w-0 gap-2 border border-primary/20 bg-primary/[0.06] p-5 shadow-sm">
                <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                  The idea
                </p>
                <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                  {idea}
                </p>
              </Card>
            </div>

            {image && (
              <figure className="min-w-0 overflow-hidden rounded-xl border border-border/70 bg-muted shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 42vw"
                    className="object-cover"
                    style={{ objectPosition: image.objectPosition ?? "center" }}
                  />
                </div>
              </figure>
            )}

            {action && (
              <Button
                asChild
                className="w-fit max-w-full whitespace-normal"
                variant={action.variant ?? "outline"}
              >
                <Link href={action.href}>{action.label}</Link>
              </Button>
            )}
          </div>

          <div className="min-w-0">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              How the approach took shape
            </p>
            <ol className="relative min-w-0 space-y-4 border-l border-border/80 pl-5 sm:pl-7">
              {stages.map((stage) => (
                <li key={stage.id} className="relative min-w-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-6 -left-[1.86rem] size-3 rounded-full border-2 border-background bg-primary sm:-left-[2.36rem]"
                  />
                  <Card className="min-w-0 gap-3 border border-border/70 bg-background/85 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                    {stage.label && (
                      <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                        {stage.label}
                      </p>
                    )}
                    <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {stage.title}
                    </h3>
                    <p className="break-words text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {stage.description}
                    </p>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
