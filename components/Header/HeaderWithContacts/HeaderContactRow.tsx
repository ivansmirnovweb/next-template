import Link from 'next/link';

import type { HeaderContactItem } from '../types';

type HeaderContactRowProps = {
  item: HeaderContactItem;
};

export const HeaderContactRow = ({ item }: HeaderContactRowProps) => {
  const content = (
    <div className="space-y-1">
      <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {item.label}
      </p>
      <p className="break-words text-sm text-foreground">{item.value}</p>
    </div>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block rounded-2xl border border-border/70 bg-card/75 px-4 py-3 transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-border/70 bg-card/75 px-4 py-3">
      {content}
    </div>
  );
};
