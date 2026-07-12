import Image from "next/image";
import Link from "next/link";

import type { ServicesCatalogProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ServicesCatalog = ({
  title,
  description,
  items,
  className,
}: ServicesCatalogProps) => {
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

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {items.map((item) => (
              <Card
                key={item.id}
                className="min-w-0 gap-0 overflow-hidden border border-border/70 bg-card/70 p-0 shadow-sm"
              >
                {item.visual && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-muted">
                    {item.visual.type === "image" ? (
                      <Image
                        src={item.visual.src}
                        alt={item.visual.alt}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
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
                )}

                <div className="flex min-w-0 flex-1 flex-col gap-5 p-5 sm:p-6">
                  <div className="min-w-0 space-y-3">
                    {item.icon && (
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground [&>svg]:size-5">
                        {item.icon}
                      </div>
                    )}
                    <h3 className="font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                  {item.included && item.included.length > 0 && (
                    <ul className="space-y-2 border-t border-border/70 pt-4 text-sm leading-6 text-muted-foreground">
                      {item.included.map((includedItem) => (
                        <li key={includedItem} className="flex gap-2">
                          <span aria-hidden="true" className="text-primary">
                            —
                          </span>
                          <span>{includedItem}</span>
                        </li>
                      ))}
                    </ul>
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
