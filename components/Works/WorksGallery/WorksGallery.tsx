import Image from "next/image";
import Link from "next/link";

import type { WorksGalleryProps, WorksImageAspectRatio } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const IMAGE_ASPECT_RATIO_CLASSES: Record<WorksImageAspectRatio, string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export const WorksGallery = ({
  title,
  description,
  items,
  className,
}: WorksGalleryProps) => {
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

          <div
            data-testid="works-gallery-grid"
            className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          >
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/70 p-0 shadow-sm"
              >
                <div
                  className={cn(
                    "relative overflow-hidden border-b border-border/70 bg-muted",
                    IMAGE_ASPECT_RATIO_CLASSES[
                      item.image.aspectRatio ?? "landscape"
                    ],
                  )}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
                    className="object-cover"
                    style={{
                      objectPosition: item.image.objectPosition ?? "center",
                    }}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-5 p-5 sm:p-6">
                  <div className="min-w-0 space-y-3">
                    <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                      {item.category}
                    </p>
                    <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div
                      className="flex flex-wrap gap-2"
                      aria-label="Project tags"
                    >
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {item.action && (
                    <Button
                      asChild
                      className="mt-auto w-fit"
                      variant={item.action.variant ?? "outline"}
                    >
                      <Link href={item.action.href}>{item.action.label}</Link>
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
