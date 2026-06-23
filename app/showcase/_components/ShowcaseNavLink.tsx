import Link from 'next/link';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { ShowcaseEntry } from '@/app/showcase/types';
import { cn } from '@/lib/utils';

type ShowcaseNavLinkProps = {
  label: string;
  entry?: ShowcaseEntry;
  direction: 'previous' | 'next';
};

export const ShowcaseNavLink = ({
  label,
  entry,
  direction,
}: ShowcaseNavLinkProps) => {
  const isNext = direction === 'next';

  if (!entry) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 bg-card/40 p-4 text-sm text-muted-foreground">
        {isNext
          ? 'End of the component sequence'
          : 'Start of the component sequence'}
      </div>
    );
  }

  return (
    <Link
      href={`/showcase/components/${entry.slug}`}
      className="group rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm transition-colors hover:bg-card"
    >
      <div
        className={cn(
          'flex items-center justify-end  gap-4 ',
          isNext ? 'flex-row' : 'flex-row-reverse',
        )}
      >
        <div className={cn('space-y-1', isNext ? 'text-right' : 'text-left')}>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {label}
          </p>
          <p className="font-medium text-foreground">{entry.title}</p>
          <p className="text-sm text-muted-foreground">{entry.description}</p>
        </div>
        {isNext ? (
          <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
        ) : (
          <ArrowLeft className="size-4 shrink-0 text-muted-foreground" />
        )}
      </div>
    </Link>
  );
};
