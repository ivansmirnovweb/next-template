import Link from "next/link";

import type { FooterLinkItem } from "./types";
import { cn } from "@/lib/utils";

type FooterLinkListProps = {
  links: FooterLinkItem[];
  className?: string;
  listClassName?: string;
  itemClassName?: string;
};

export const FooterLinkList = ({
  links,
  className,
  listClassName,
  itemClassName,
}: FooterLinkListProps) => {
  if (!links.length) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}>
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`} className={listClassName}>
          <Link
            href={link.href}
            className={cn(
              "inline-flex min-w-0 max-w-full rounded-md text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              itemClassName,
            )}
          >
            <span className="truncate">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
