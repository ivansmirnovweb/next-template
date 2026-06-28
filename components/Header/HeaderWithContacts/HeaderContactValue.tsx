import Link from 'next/link';

import type { HeaderContactItem } from '../types';

import { cn } from '@/lib/utils';

type HeaderContactValueProps = {
  item: HeaderContactItem;
  className?: string;
};

export const HeaderContactValue = ({
  item,
  className,
}: HeaderContactValueProps) => {
  const content = (
    <>
      <span className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        {item.label}
      </span>
      <span className="break-words text-sm text-foreground">{item.value}</span>
    </>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          'flex min-w-0 flex-col gap-1 rounded-xl px-3 py-2 transition-colors hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn('flex min-w-0 flex-col gap-1 px-3 py-2', className)}>
      {content}
    </div>
  );
};
