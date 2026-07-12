import Image from "next/image";
import Link from "next/link";

import type { AboutOverviewProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const AboutOverview = ({
  title,
  paragraphs,
  image,
  facts,
  action,
  className,
}: AboutOverviewProps) => {
  const hasFacts = Boolean(facts?.length);
  const hasAside = image || hasFacts;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <div
          className={cn(
            "grid min-w-0 items-start gap-8 lg:gap-12",
            hasAside && "lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]",
          )}
        >
          <div className="min-w-0 max-w-3xl space-y-6">
            <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {paragraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph}`}>{paragraph}</p>
              ))}
            </div>

            {action && (
              <Button asChild size="lg" variant={action.variant}>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            )}
          </div>

          {hasAside && (
            <aside className="min-w-0 space-y-4 sm:space-y-5">
              {image && (
                <Card className="overflow-hidden border border-border/70 bg-card/80 p-2 shadow-sm sm:p-3">
                  <figure className="min-w-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius)-0.15rem)] bg-muted">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1023px) calc(100vw - 2rem), 40vw"
                        className="object-cover"
                        style={{
                          objectPosition: image.objectPosition ?? "center",
                        }}
                      />
                    </div>
                  </figure>
                </Card>
              )}

              {hasFacts && (
                <dl className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
                  {facts?.map((fact) => (
                    <Card
                      key={fact.id}
                      className="min-w-0 gap-2 border border-border/70 bg-muted/35 p-4 shadow-none"
                    >
                      <dt className="text-sm leading-5 text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="min-w-0 font-heading text-2xl leading-tight font-medium tracking-tight text-foreground sm:text-3xl">
                        {fact.value}
                      </dd>
                      {fact.description && (
                        <dd className="text-sm leading-6 text-muted-foreground">
                          {fact.description}
                        </dd>
                      )}
                    </Card>
                  ))}
                </dl>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};
