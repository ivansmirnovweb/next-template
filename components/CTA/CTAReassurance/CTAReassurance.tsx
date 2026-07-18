import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

import type { CTAReassuranceProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const CTAReassurance = ({
  title,
  description,
  primaryAction,
  conditions,
  responseNote,
  className,
}: CTAReassuranceProps) => {
  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <Card className="min-w-0 overflow-hidden border border-border/70 bg-card/80 p-0 shadow-sm">
          <div className="grid min-w-0 gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)] lg:gap-12 lg:p-10">
            <div className="min-w-0 space-y-6">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
                {description && (
                  <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                    {description}
                  </p>
                )}
              </div>

              <Button asChild size="lg" variant={primaryAction.variant}>
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>

              {responseNote && (
                <p className="text-sm leading-6 text-muted-foreground">
                  {responseNote}
                </p>
              )}
            </div>

            {conditions.length > 0 && (
              <ul className="grid min-w-0 content-start gap-3 border-t border-border/70 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                {conditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-foreground"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
