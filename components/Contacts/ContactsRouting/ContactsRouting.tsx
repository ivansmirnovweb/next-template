import Link from "next/link";

import type { ContactsRoutingProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ContactsRouting = ({
  routes,
  title,
  description,
  className,
}: ContactsRoutingProps) => {
  const hasIntroduction = title || description;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,var(--primary)_10%,transparent),_transparent_72%)]" />
      <div className="layout-container relative z-10 min-w-0">
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

          <ol className="grid min-w-0 gap-4 lg:grid-cols-2 lg:gap-5">
            {routes.map((route) => (
              <li key={route.id} className="min-w-0">
                <Card className="h-full min-w-0 gap-5 border border-border/70 bg-card/85 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                  <div className="min-w-0 space-y-2">
                    <h3 className="break-words font-heading text-2xl leading-snug font-medium tracking-tight text-foreground">
                      {route.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {route.description}
                    </p>
                  </div>

                  <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 border-y border-border/70 py-4 text-sm leading-6">
                    <p className="min-w-0 break-words text-foreground">
                      <span className="text-muted-foreground">Handled by </span>
                      {route.owner}
                    </p>
                    {route.responseTime && (
                      <p className="min-w-0 break-words text-muted-foreground">
                        {route.responseTime}
                      </p>
                    )}
                  </div>

                  <ul className="grid min-w-0 gap-3">
                    {route.contacts.map((contact) => (
                      <li key={contact.id} className="min-w-0">
                        <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border/70 bg-muted/35 p-3">
                          {contact.icon && (
                            <div className="mt-0.5 shrink-0 text-primary">
                              {contact.icon}
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                              {contact.label}
                            </p>
                            {contact.href ? (
                              <Link
                                href={contact.href}
                                className="break-words text-sm leading-6 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                {contact.value}
                              </Link>
                            ) : (
                              <p className="break-words text-sm leading-6 text-foreground">
                                {contact.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {route.action && (
                    <Button
                      asChild
                      className="w-fit"
                      variant={route.action.variant}
                    >
                      <Link href={route.action.href}>{route.action.label}</Link>
                    </Button>
                  )}
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
