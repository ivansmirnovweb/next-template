import Link from "next/link";

import type { HeaderContactItem } from "../types";

type HeaderCompactContactProps = {
  item: HeaderContactItem;
};

export const HeaderCompactContact = ({ item }: HeaderCompactContactProps) => {
  const content = <span className="truncate">{item.value}</span>;

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="rounded-full border border-border/70 bg-card/75 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </Link>
    );
  }

  return (
    <span className="rounded-full border border-border/70 bg-card/75 px-3 py-1.5 text-xs text-muted-foreground">
      {content}
    </span>
  );
};
