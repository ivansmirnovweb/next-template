import Link from "next/link";

import type { FooterAction } from "./types";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FooterActionButtonProps = {
  action?: FooterAction;
  className?: string;
};

export const FooterActionButton = ({
  action,
  className,
}: FooterActionButtonProps) => {
  if (!action) {
    return null;
  }

  return (
    <Button
      asChild
      variant={action.variant ?? "default"}
      className={cn("min-w-0 max-w-full", className)}
      size="lg"
    >
      <Link href={action.href} className="truncate">
        {action.label}
      </Link>
    </Button>
  );
};
