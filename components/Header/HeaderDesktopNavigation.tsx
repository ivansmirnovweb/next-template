import Link from 'next/link';

import { ChevronDown } from 'lucide-react';

import { HeaderDesktopNavigationMenuItems } from './HeaderDesktopNavigationMenuItems';
import type { HeaderLinkItem } from './types';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

type HeaderDesktopNavigationProps = {
  items: readonly HeaderLinkItem[];
  ariaLabel: string;
  align?: 'start' | 'center' | 'end';
  listClassName?: string;
};

export const HeaderDesktopNavigation = ({
  items,
  ariaLabel,
  align = 'start',
  listClassName,
}: HeaderDesktopNavigationProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={cn('flex flex-wrap items-center gap-1.5', listClassName)}>
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`} className="min-w-0">
            {item.items?.length ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="max-w-full data-[state=open]:bg-muted"
                  >
                    <span className="truncate">{item.label}</span>
                    <ChevronDown className="size-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={align} className="w-64">
                  <HeaderDesktopNavigationMenuItems items={item.items} />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" size="sm" className="max-w-full">
                <Link href={item.href} className="truncate">
                  {item.label}
                </Link>
              </Button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
