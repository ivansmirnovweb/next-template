import Link from 'next/link';

import type { HeaderAction } from './types';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type HeaderActionButtonProps = {
  action?: HeaderAction;
  className?: string;
};

export const HeaderActionButton = ({
  action,
  className,
}: HeaderActionButtonProps) => {
  if (!action) {
    return null;
  }

  return (
    <Button
      asChild
      variant={action.variant ?? 'default'}
      className={cn('min-w-0 max-w-full', className)}
    >
      <Link href={action.href} className="truncate">
        {action.label}
      </Link>
    </Button>
  );
};
