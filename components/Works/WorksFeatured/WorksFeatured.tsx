import Image from "next/image";
import Link from "next/link";

import type { WorksFeaturedProps, WorksImage } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const IMAGE_ASPECT_RATIO_CLASSES: Record<
  NonNullable<WorksImage["aspectRatio"]>,
  string
> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

const getImageAspectRatioClass = (image: WorksImage) => {
  return IMAGE_ASPECT_RATIO_CLASSES[image.aspectRatio ?? "landscape"];
};

export const WorksFeatured = ({
  title,
  description,
  items,
  className,
}: WorksFeaturedProps) => {
  const [primary, ...secondaryItems] = items;
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

          {primary && (
            <Card
              data-testid="works-featured-primary"
              className="min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/80 p-0 shadow-sm"
            >
              <div className="grid min-w-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div
                  className={cn(
                    "relative overflow-hidden border-b border-border/70 bg-muted lg:order-2 lg:min-h-full lg:border-t-0 lg:border-b-0 lg:border-l",
                    getImageAspectRatioClass(primary.image),
                  )}
                >
                  <Image
                    src={primary.image.src}
                    alt={primary.image.alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 2rem), 55vw"
                    className="object-cover"
                    style={{
                      objectPosition: primary.image.objectPosition ?? "center",
                    }}
                  />
                </div>

                <div className="min-w-0 space-y-6 p-6 sm:p-8 lg:p-10">
                  <div className="space-y-3">
                    <Badge variant="outline">Featured project</Badge>
                    <h3 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl">
                      {primary.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {primary.context}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                      Services delivered
                    </p>
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label="Services delivered"
                    >
                      {primary.services.map((service) => (
                        <li key={service} className="max-w-full">
                          <Badge
                            variant="secondary"
                            className="max-w-full wrap-break-word"
                          >
                            {service}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {primary.result && (
                    <div className="border-l-2 border-primary/60 pl-4">
                      <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                        Result
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                        {primary.result}
                      </p>
                    </div>
                  )}

                  {primary.action && (
                    <Button asChild size="lg" variant={primary.action.variant}>
                      <Link href={primary.action.href}>
                        {primary.action.label}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )}

          {secondaryItems.length > 0 && (
            <div
              data-testid="works-featured-secondary"
              className="grid min-w-0 gap-4 md:grid-cols-2 lg:gap-5"
            >
              {secondaryItems.map((item) => (
                <Card
                  key={item.id}
                  className="min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/70 p-0 shadow-sm"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden border-b border-border/70 bg-muted",
                      getImageAspectRatioClass(item.image),
                    )}
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
                      className="object-cover"
                      style={{
                        objectPosition: item.image.objectPosition ?? "center",
                      }}
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-5 p-5 sm:p-6">
                    <div className="min-w-0 space-y-3">
                      <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {item.context}
                      </p>
                    </div>

                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label="Services delivered"
                    >
                      {item.services.map((service) => (
                        <li key={service} className="max-w-full">
                          <Badge
                            variant="secondary"
                            className="max-w-full wrap-break-word"
                          >
                            {service}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    {item.result && (
                      <p className="border-l-2 border-primary/60 pl-3 text-sm leading-6 text-foreground">
                        {item.result}
                      </p>
                    )}

                    {item.action && (
                      <Button
                        asChild
                        className="mt-auto w-fit max-w-full"
                        variant={item.action.variant ?? "outline"}
                      >
                        <Link href={item.action.href}>{item.action.label}</Link>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
