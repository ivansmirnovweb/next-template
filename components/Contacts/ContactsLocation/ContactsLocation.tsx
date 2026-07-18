import Link from "next/link";

import type { ContactsLocationProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ContactsLocation = ({
  locations,
  title,
  description,
  className,
}: ContactsLocationProps) => {
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

          <div className="grid min-w-0 gap-5">
            {locations.map((location) => (
              <Card
                key={location.id}
                className="min-w-0 gap-6 border border-border/70 bg-card/85 p-5 shadow-sm sm:p-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] lg:items-start lg:gap-8"
              >
                <div className="min-w-0 space-y-5">
                  <div className="min-w-0 space-y-2">
                    <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                      Location
                    </p>
                    <h3 className="break-words font-heading text-2xl leading-snug font-medium tracking-tight text-foreground">
                      {location.title}
                    </h3>
                    <p className="whitespace-pre-line break-words text-base leading-7 text-foreground">
                      {location.address}
                    </p>
                  </div>

                  <dl className="grid min-w-0 gap-4 sm:grid-cols-2">
                    {location.hours && (
                      <div className="min-w-0 space-y-1">
                        <dt className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          Hours
                        </dt>
                        <dd className="break-words text-sm leading-6 text-foreground">
                          {location.hours}
                        </dd>
                      </div>
                    )}
                    {location.phone && (
                      <div className="min-w-0 space-y-1">
                        <dt className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          {location.phone.label}
                        </dt>
                        <dd className="min-w-0 break-words text-sm leading-6 text-foreground">
                          {location.phone.href ? (
                            <Link
                              href={location.phone.href}
                              className="underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {location.phone.value}
                            </Link>
                          ) : (
                            location.phone.value
                          )}
                        </dd>
                      </div>
                    )}
                    {location.landmark && (
                      <div className="min-w-0 space-y-1">
                        <dt className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          Arrival
                        </dt>
                        <dd className="break-words text-sm leading-6 text-foreground">
                          {location.landmark}
                        </dd>
                      </div>
                    )}
                    {location.accessibility && (
                      <div className="min-w-0 space-y-1">
                        <dt className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          Access
                        </dt>
                        <dd className="break-words text-sm leading-6 text-foreground">
                          {location.accessibility}
                        </dd>
                      </div>
                    )}
                  </dl>

                  {location.directions && (
                    <Button
                      asChild
                      className="w-fit"
                      variant={location.directions.variant}
                    >
                      <Link href={location.directions.href}>
                        {location.directions.label}
                      </Link>
                    </Button>
                  )}
                </div>

                {location.map && (
                  <div className="min-w-0 overflow-hidden rounded-xl border border-border/70 bg-muted/50">
                    {location.map}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
