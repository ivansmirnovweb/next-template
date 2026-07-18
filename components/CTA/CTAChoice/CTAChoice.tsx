import Link from "next/link";

import type { CTAChoiceProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const CTAChoice = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  choiceNote,
  className,
}: CTAChoiceProps) => {
  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-muted/30 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <Card className="min-w-0 border border-border/70 bg-card/85 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="min-w-0 space-y-6">
            <div className="max-w-3xl space-y-3">
              <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="default">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            </div>

            {choiceNote && (
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {choiceNote}
              </p>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
