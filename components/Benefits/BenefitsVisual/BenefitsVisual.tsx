import Image from "next/image";

import type { BenefitsVisualProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const BenefitsVisual = ({
  title,
  description,
  items,
  className,
}: BenefitsVisualProps) => {
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

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-0 border border-border/70 bg-card/70 p-0 shadow-sm"
              >
                <figure className="min-w-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {item.visual.type === "image" ? (
                      <Image
                        src={item.visual.src}
                        alt={item.visual.alt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 1.5rem), 560px"
                        className="object-cover"
                        style={{
                          objectPosition:
                            item.visual.objectPosition ?? "center",
                        }}
                      />
                    ) : (
                      <div className="size-full">{item.visual.content}</div>
                    )}
                  </div>
                  {item.caption && (
                    <figcaption className="border-b border-border/70 bg-muted/35 px-5 py-3 text-sm leading-6 text-muted-foreground sm:px-6">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>

                <div className="min-w-0 space-y-3 p-5 sm:p-6">
                  <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
