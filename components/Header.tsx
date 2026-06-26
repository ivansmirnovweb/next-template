'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Compass } from 'lucide-react';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

type NavLink = {
  label: string;
  href: string;
};

const HEADER_NAV_ITEMS: NavLink[] = [
  {
    label: 'Components',
    href: '/components',
  },
  {
    label: 'Sections',
    href: '/sections',
  },
];

const isActivePath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            <span className="flex size-9 items-center justify-center rounded-2xl border border-border/70 bg-card text-foreground shadow-sm">
              <Compass className="size-4" />
            </span>
            <span className="font-heading text-base">Next Template</span>
          </Link>

          <nav aria-label="Showcase navigation">
            <ul className="flex flex-wrap items-center gap-2">
              {HEADER_NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Button
                      asChild
                      variant={active ? 'default' : 'ghost'}
                      size="sm"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};
