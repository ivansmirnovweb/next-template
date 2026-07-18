import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { TestimonialAuthor } from "../TestimonialAuthor";
import type { TestimonialsCollectionProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const getCardSpanClass = (index: number, itemCount: number) => {
  if (itemCount < 3) {
    return "lg:col-span-6";
  }

  return ["lg:col-span-5", "lg:col-span-3", "lg:col-span-4"][index % 3];
};

export const TestimonialsCollection = ({
  title,
  description,
  items,
  className,
}: TestimonialsCollectionProps) => {
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

          <div
            data-testid="testimonials-collection-grid"
            className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5"
          >
            {items.map((item, index) => (
              <Card
                key={item.id}
                className={cn(
                  "min-w-0 gap-6 border border-border/70 bg-card/85 p-5 shadow-sm sm:p-6",
                  getCardSpanClass(index, items.length),
                )}
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  {item.rating && (
                    <div
                      className="flex shrink-0 gap-1 text-primary"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }, (_, ratingIndex) => (
                        <Star
                          key={ratingIndex}
                          className="size-3.5 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  )}
                  {item.logo && (
                    <div className="relative ml-auto h-7 w-24 shrink-0 overflow-hidden">
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        fill
                        sizes="96px"
                        className="object-contain"
                        style={{
                          objectPosition: item.logo.objectPosition ?? "right",
                        }}
                      />
                    </div>
                  )}
                </div>

                <blockquote className="min-w-0">
                  <p className="wrap-break-word font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                    “{item.quote}”
                  </p>
                </blockquote>

                <div className="mt-auto flex min-w-0 flex-wrap items-end justify-between gap-4">
                  <TestimonialAuthor author={item.author} />
                  {item.source && (
                    <Button
                      asChild
                      variant="link"
                      className="h-auto max-w-full px-0"
                    >
                      <Link href={item.source.href}>{item.source.label}</Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
