import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FooterBottomBarProps = {
  leading: ReactNode;
  center?: ReactNode;
  trailing?: ReactNode;
  className?: string;
};

export const FooterBottomBar = ({
  leading,
  center,
  trailing,
  className,
}: FooterBottomBarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-t border-border/60 pt-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      <div className="min-w-0">{leading}</div>
      {center ? (
        <div className="min-w-0 lg:flex-1 lg:justify-center">{center}</div>
      ) : null}
      {trailing ? (
        <div className="min-w-0 lg:text-right">{trailing}</div>
      ) : null}
    </div>
  );
};
