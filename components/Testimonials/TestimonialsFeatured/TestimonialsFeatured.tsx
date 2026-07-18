import Image from "next/image";
import Link from "next/link";

import { TestimonialAuthor } from "../TestimonialAuthor";
import type { TestimonialsFeaturedProps } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const TestimonialsFeatured = ({
  title,
  description,
  quote,
  author,
  logo,
  result,
  source,
  media,
  className,
}: TestimonialsFeaturedProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
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

          <Card
            data-testid="testimonials-featured"
            className={cn(
              "min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/80 p-0 shadow-sm",
              media &&
                "lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.75fr)]",
            )}
          >
            <div className="min-w-0 space-y-8 p-6 sm:p-8 lg:p-10">
              <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
                <Badge variant="outline">Client perspective</Badge>
                {logo && (
                  <div className="relative h-8 w-28 shrink-0 overflow-hidden">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="112px"
                      className="object-contain"
                      style={{ objectPosition: logo.objectPosition ?? "right" }}
                    />
                  </div>
                )}
              </div>

              <blockquote className="min-w-0 border-l-2 border-primary/70 pl-5 sm:pl-6">
                <p className="wrap-break-word font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  “{quote}”
                </p>
              </blockquote>

              {result && (
                <div className="max-w-2xl border-t border-border/70 pt-5">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Measurable result
                  </p>
                  <p className="mt-2 text-base leading-7 text-foreground sm:text-lg">
                    {result}
                  </p>
                </div>
              )}

              <div className="flex min-w-0 flex-wrap items-end justify-between gap-5">
                <TestimonialAuthor author={author} />
                {source && (
                  <Button asChild className="max-w-full" variant="outline">
                    <Link href={source.href}>{source.label}</Link>
                  </Button>
                )}
              </div>
            </div>

            {media && (
              <div className="min-w-0 border-t border-border/70 bg-muted lg:border-t-0 lg:border-l">
                {media.type === "image" ? (
                  <div className="relative aspect-[4/3] min-h-64 lg:h-full lg:min-h-full lg:aspect-auto">
                    <Image
                      src={media.image.src}
                      alt={media.image.alt}
                      fill
                      sizes="(max-width: 1023px) calc(100vw - 2rem), 40vw"
                      className="object-cover"
                      style={{
                        objectPosition: media.image.objectPosition ?? "center",
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-full min-h-64 min-w-0">{media.content}</div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
