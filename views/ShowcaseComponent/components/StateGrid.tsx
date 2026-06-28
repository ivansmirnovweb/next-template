import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StateGridProps = {
  children: ReactNode;
  columns?: string;
};

export const StateGrid = ({
  children,
  columns = "md:grid-cols-2 xl:grid-cols-3",
}: StateGridProps) => {
  return <div className={cn("grid gap-3", columns)}>{children}</div>;
};
