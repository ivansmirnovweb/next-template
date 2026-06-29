import Link from "next/link";

import type { FooterContactItem } from "./types";
import { cn } from "@/lib/utils";

type FooterContactListProps = {
  items: readonly FooterContactItem[];
  className?: string;
  emphasize?: boolean;
};

export const FooterContactList = ({
  items,
  className,
  emphasize = false,
}: FooterContactListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <dl className={cn("grid gap-3", className)}>
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="min-w-0 space-y-1">
          <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {item.label}
          </dt>
          <dd className="min-w-0">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "inline-flex max-w-full rounded-md text-sm leading-6 text-foreground transition-colors hover:text-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  emphasize && "text-base font-medium sm:text-lg",
                )}
              >
                <span className="truncate">{item.value}</span>
              </Link>
            ) : (
              <p
                className={cn(
                  "text-sm leading-6 text-foreground",
                  emphasize && "text-base font-medium sm:text-lg",
                )}
              >
                {item.value}
              </p>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};
