import type { ReactNode } from "react";

type StateTileProps = {
  label: string;
  children: ReactNode;
};

export const StateTile = ({ label, children }: StateTileProps) => {
  return (
    <div className="rounded-xl border border-border/70 bg-background/75 p-3">
      <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <div className="flex min-h-12 flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  );
};
