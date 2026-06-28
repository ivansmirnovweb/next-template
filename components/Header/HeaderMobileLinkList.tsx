import Link from 'next/link';

import type { HeaderLinkItem } from './types';

import { cn } from '@/lib/utils';

type HeaderMobileLinkListProps = {
  items: readonly HeaderLinkItem[];
  onSelect?: () => void;
  level?: number;
};

export const HeaderMobileLinkList = ({
  items,
  onSelect,
  level = 0,
}: HeaderMobileLinkListProps) => {
  return (
    <ul
      className={cn(
        'space-y-2',
        level > 0 && 'mt-3 border-l border-border/70 pl-4',
      )}
    >
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`} className="min-w-0">
          <Link
            href={item.href}
            onClick={onSelect}
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="block break-words">{item.label}</span>
          </Link>
          {item.items?.length ? (
            <HeaderMobileLinkList
              items={item.items}
              onSelect={onSelect}
              level={level + 1}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};
