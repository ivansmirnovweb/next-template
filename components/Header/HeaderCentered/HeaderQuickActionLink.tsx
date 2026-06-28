import Link from 'next/link';

import type {
  HeaderAction,
  HeaderCenteredProps,
  HeaderContactItem,
} from '../types';

import { Button } from '@/components/ui/button';

type HeaderQuickActionLinkProps = {
  item?: HeaderCenteredProps['mobileQuickAction'];
};

const isContactQuickAction = (
  item: HeaderAction | HeaderContactItem,
): item is HeaderContactItem => {
  return 'value' in item;
};

export const HeaderQuickActionLink = ({ item }: HeaderQuickActionLinkProps) => {
  if (!item) {
    return <div className="hidden min-[390px]:block" aria-hidden="true" />;
  }

  const label = isContactQuickAction(item) ? item.value : item.label;
  const href = item.href ?? '#contact';
  const variant = isContactQuickAction(item)
    ? 'outline'
    : (item.variant ?? 'outline');

  return (
    <Button asChild variant={variant} size="sm" className="max-w-[9rem]">
      <Link href={href} className="truncate">
        {label}
      </Link>
    </Button>
  );
};
