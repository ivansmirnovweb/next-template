import Image from "next/image";
import Link from "next/link";

import type { WorksCaseStudiesProps, WorksImageAspectRatio } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const IMAGE_ASPECT_RATIO_CLASSES: Record<WorksImageAspectRatio, string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export const WorksCaseStudies = ({
  title,
  description,
  items,
  className,
}: WorksCaseStudiesProps) => {
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
            {items.map((item, index) => {
              const metadata = [item.industry, item.duration].filter(Boolean);

              return (
                <li key={item.id} className="min-w-0">
                  <Card className="min-w-0 gap-0 border border-border/70 bg-background/90 p-0 shadow-sm">
                    <div className="flex min-w-0 flex-col gap-4 border-b border-border/70 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:p-8">
                      <div className="min-w-0 space-y-2">
                        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                          Case study {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="break-words font-heading text-2xl leading-tight font-medium tracking-tight text-foreground sm:text-3xl">
                          {item.title}
                        </h3>
                      </div>

                      {metadata.length > 0 && (
                        <div className="flex min-w-0 shrink-0 flex-wrap gap-2 lg:justify-end">
                          {metadata.map((value) => (
                            <Badge key={value} variant="outline">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div
                      className={cn(
                        "grid min-w-0",
                        item.image &&
                          "lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]",
                      )}
                    >
                      <div className="min-w-0 space-y-5 p-5 sm:p-6 lg:p-8">
                        <div className="min-w-0 space-y-2">
                          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                            Context
                          </p>
                          <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                            {item.context}
                          </p>
                        </div>

                        {item.services && item.services.length > 0 && (
                          <div className="min-w-0 space-y-2">
                            <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                              Services
                            </p>
                            <div className="flex min-w-0 flex-wrap gap-2">
                              {item.services.map((service) => (
                                <Badge key={service} variant="secondary">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {item.image && (
                        <div
                          className={cn(
                            "relative min-h-64 overflow-hidden border-t border-border/70 bg-muted lg:min-h-full lg:border-t-0 lg:border-l",
                            IMAGE_ASPECT_RATIO_CLASSES[
                              item.image.aspectRatio ?? "landscape"
                            ],
                            "lg:aspect-auto",
                          )}
                        >
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            fill
                            sizes="(max-width: 1023px) calc(100vw - 2rem), 40vw"
                            className="object-cover"
                            style={{
                              objectPosition:
                                item.image.objectPosition ?? "center",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="grid min-w-0 gap-px border-y border-border/70 bg-border/70 md:grid-cols-3">
                      <div className="min-w-0 bg-background p-5 sm:p-6">
                        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          Challenge
                        </p>
                        <p className="mt-2 break-words text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="min-w-0 bg-muted/35 p-5 sm:p-6">
                        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                          Solution
                        </p>
                        <p className="mt-2 break-words text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                          {item.solution}
                        </p>
                      </div>
                      <div className="min-w-0 bg-primary/[0.06] p-5 sm:p-6">
                        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                          Result
                        </p>
                        <p className="mt-2 break-words text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                          {item.result}
                        </p>
                      </div>
                    </div>

                    {(item.metric || item.action) && (
                      <div className="flex min-w-0 flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
                        {item.metric && (
                          <div className="min-w-0 border-l-2 border-primary/60 pl-3">
                            <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                              Measurable impact
                            </p>
                            <p className="mt-1 break-words font-heading text-lg leading-snug font-medium text-foreground sm:text-xl">
                              {item.metric}
                            </p>
                          </div>
                        )}

                        {item.action && (
                          <Button
                            asChild
                            className="w-fit shrink-0"
                            variant={item.action.variant ?? "outline"}
                          >
                            <Link href={item.action.href}>
                              {item.action.label}
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
