import Image from "next/image";
import Link from "next/link";

import type { ServicesFeaturedProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ServicesFeatured = ({
  title,
  description,
  featured,
  items,
  className,
}: ServicesFeaturedProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
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

          <Card
            data-testid="services-featured-primary"
            className="overflow-hidden border border-border/70 bg-card/80 p-0 shadow-sm"
          >
            <div
              className={cn(
                "grid min-w-0",
                featured.visual &&
                  "lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]",
              )}
            >
              <div className="min-w-0 space-y-6 p-6 sm:p-8 lg:p-10">
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                    Featured service
                  </p>
                  <h3 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {featured.description}
                  </p>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {featured.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="min-w-0 border-l-2 border-primary/60 pl-3 text-sm leading-6 text-foreground"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={featured.primaryAction.variant}
                >
                  <Link href={featured.primaryAction.href}>
                    {featured.primaryAction.label}
                  </Link>
                </Button>
              </div>

              {featured.visual && (
                <div className="relative min-h-64 overflow-hidden border-t border-border/70 bg-muted lg:min-h-full lg:border-t-0 lg:border-l">
                  {featured.visual.type === "image" ? (
                    <Image
                      src={featured.visual.src}
                      alt={featured.visual.alt}
                      fill
                      sizes="(max-width: 1023px) calc(100vw - 2rem), 560px"
                      className="object-cover"
                      style={{
                        objectPosition:
                          featured.visual.objectPosition ?? "center",
                      }}
                    />
                  ) : (
                    <div className="size-full">{featured.visual.content}</div>
                  )}
                </div>
              )}
            </div>
          </Card>

          {items.length > 0 && (
            <div
              data-testid="services-featured-secondary"
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            >
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="min-w-0 gap-4 border border-border/70 bg-muted/30 p-5 shadow-none sm:p-6"
                >
                  <div className="min-w-0 space-y-2">
                    <h3 className="font-heading text-lg leading-snug font-medium text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {item.action && (
                    <Button
                      asChild
                      className="w-fit"
                      variant={item.action.variant ?? "link"}
                    >
                      <Link href={item.action.href}>{item.action.label}</Link>
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
