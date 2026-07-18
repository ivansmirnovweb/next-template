import Link from "next/link";

import type { ContactsChannelsProps } from "../types";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ContactsChannels = ({
  channels,
  title,
  description,
  className,
}: ContactsChannelsProps) => {
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

          <ul className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.id} className="min-w-0">
                <Card className="h-full min-w-0 gap-5 border border-border/70 bg-card/85 p-5 shadow-sm sm:p-6">
                  <div className="flex min-w-0 items-start gap-3">
                    {channel.icon && (
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.06] text-primary">
                        {channel.icon}
                      </div>
                    )}
                    <div className="min-w-0 space-y-1">
                      <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                        {channel.kind}
                      </p>
                      <h3 className="break-words font-heading text-xl leading-snug font-medium tracking-tight text-foreground">
                        {channel.label}
                      </h3>
                    </div>
                  </div>

                  <div className="min-w-0 space-y-2">
                    {channel.href ? (
                      <Link
                        href={channel.href}
                        className="block break-words text-base leading-7 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {channel.value}
                      </Link>
                    ) : (
                      <p className="break-words text-base leading-7 font-medium text-foreground">
                        {channel.value}
                      </p>
                    )}
                    {channel.description && (
                      <p className="text-sm leading-6 text-muted-foreground">
                        {channel.description}
                      </p>
                    )}
                  </div>

                  {(channel.availability || channel.contactPerson) && (
                    <dl className="min-w-0 space-y-2 border-t border-border/70 pt-4 text-sm leading-6">
                      {channel.availability && (
                        <div className="flex min-w-0 justify-between gap-4">
                          <dt className="shrink-0 text-muted-foreground">
                            Response
                          </dt>
                          <dd className="min-w-0 break-words text-right text-foreground">
                            {channel.availability}
                          </dd>
                        </div>
                      )}
                      {channel.contactPerson && (
                        <div className="flex min-w-0 justify-between gap-4">
                          <dt className="shrink-0 text-muted-foreground">
                            Contact
                          </dt>
                          <dd className="min-w-0 break-words text-right text-foreground">
                            {channel.contactPerson}
                          </dd>
                        </div>
                      )}
                    </dl>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
