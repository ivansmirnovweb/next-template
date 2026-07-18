import Image from "next/image";
import Link from "next/link";

import { TestimonialAuthor } from "../TestimonialAuthor";
import type { TestimonialsStoriesProps } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const TestimonialsStories = ({
  title,
  description,
  items,
  className,
}: TestimonialsStoriesProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container min-w-0">
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

          <ol className="min-w-0 space-y-5 sm:space-y-6">
            {items.map((item) => (
              <li key={item.id} className="min-w-0">
                <Card className="min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/85 p-0 shadow-sm">
                  <div className="flex min-w-0 flex-col gap-4 border-b border-border/70 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between lg:p-8">
                    <div className="min-w-0 space-y-2">
                      <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                        Customer story
                      </p>
                      <p className="wrap-break-word text-base leading-7 text-muted-foreground">
                        {item.context}
                      </p>
                    </div>
                    {item.metric && (
                      <Badge
                        className="max-w-full whitespace-normal"
                        variant="secondary"
                      >
                        {item.metric}
                      </Badge>
                    )}
                  </div>

                  <div
                    className={cn(
                      "grid min-w-0",
                      item.image &&
                        "lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)]",
                    )}
                  >
                    <div className="min-w-0 space-y-6 p-5 sm:p-6 lg:p-8">
                      <div className="grid min-w-0 gap-5 md:grid-cols-2">
                        <div className="min-w-0 border-l-2 border-border pl-4">
                          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                            Starting situation
                          </p>
                          <p className="mt-2 wrap-break-word text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                            {item.situation}
                          </p>
                        </div>
                        <div className="min-w-0 border-l-2 border-primary/70 pl-4">
                          <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                            Change after the work
                          </p>
                          <p className="mt-2 wrap-break-word text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                            {item.outcome}
                          </p>
                        </div>
                      </div>

                      <blockquote className="min-w-0 rounded-lg bg-muted/70 p-5 sm:p-6">
                        <p className="wrap-break-word font-heading text-2xl leading-snug font-medium tracking-tight text-foreground sm:text-3xl">
                          “{item.quote}”
                        </p>
                      </blockquote>

                      <div className="flex min-w-0 flex-wrap items-end justify-between gap-5">
                        <TestimonialAuthor author={item.author} />
                        {item.source && (
                          <Button
                            asChild
                            className="max-w-full"
                            variant="outline"
                          >
                            <Link href={item.source.href}>
                              {item.source.label}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {item.image && (
                      <div className="relative aspect-[16/10] min-h-64 overflow-hidden border-t border-border/70 bg-muted lg:min-h-full lg:aspect-auto lg:border-t-0 lg:border-l">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(max-width: 1023px) calc(100vw - 2rem), 36vw"
                          className="object-cover"
                          style={{
                            objectPosition:
                              item.image.objectPosition ?? "center",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
