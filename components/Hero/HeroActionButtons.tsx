import Link from "next/link";

import type { HeroAction } from "./types";

import { Button } from "@/components/ui/button";

type HeroActionButtonsProps = {
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

export const HeroActionButtons = ({
  primaryAction,
  secondaryAction,
}: HeroActionButtonsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild size="lg" variant={primaryAction.variant}>
        <Link href={primaryAction.href}>{primaryAction.label}</Link>
      </Button>
      {secondaryAction && (
        <Button
          asChild
          size="lg"
          variant={secondaryAction.variant ?? "outline"}
        >
          <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
        </Button>
      )}
    </div>
  );
};
