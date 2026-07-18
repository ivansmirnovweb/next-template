import Link from "next/link";

import type { CTADirectProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const CTADirect = ({
  title,
  description,
  primaryAction,
  note,
  className,
}: CTADirectProps) => {
  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <Card className="mx-auto min-w-0 max-w-4xl border border-border/70 bg-card/85 p-6 text-center shadow-sm sm:p-8 lg:p-10">
          <div className="mx-auto min-w-0 max-w-2xl space-y-5">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant={primaryAction.variant}>
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
            </div>

            {note && (
              <p className="text-sm leading-6 text-muted-foreground">{note}</p>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
