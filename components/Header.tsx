'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown, Compass } from 'lucide-react';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { showcaseEntries } from '@/views/showcaseComponent';

type NavLink = {
  label: string;
  href: string;
};

type HeaderNavItem = NavLink & {
  children?: NavLink[];
};

const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  {
    label: 'Components',
    href: '/showcase/components',
    children: showcaseEntries.map((entry) => ({
      label: entry.title,
      href: `/showcase/components/${entry.slug}`,
    })),
  },
  {
    label: 'Sections',
    href: '/showcase/sections',
  },
];

const isActivePath = (pathname: string, href: string) => pathname === href;

export const Header = () => {
  const pathname = usePathname();
  const [openItemHref, setOpenItemHref] = React.useState<string | null>(null);

  const handleNavItemBlur =
    (href: string) => (event: React.FocusEvent<HTMLLIElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setOpenItemHref((current) => (current === href ? null : current));
      }
    };

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
                const childActive = item.children?.some((child) =>
                  isActivePath(pathname, child.href),
                );
                const active = isActivePath(pathname, item.href) || childActive;

                if (item.children?.length) {
                  const isOpen = openItemHref === item.href;

                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenItemHref(item.href)}
                      onMouseLeave={() => setOpenItemHref(null)}
                      onFocus={() => setOpenItemHref(item.href)}
                      onBlur={handleNavItemBlur(item.href)}
                    >
                      <div className="flex items-center rounded-lg border border-transparent bg-background">
                        <Button
                          asChild
                          variant={active ? 'default' : 'outline'}
                          size="sm"
                          className="rounded-r-none border-r-0"
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </Button>
                        <button
                          type="button"
                          aria-label={`Open ${item.label} menu`}
                          aria-expanded={isOpen}
                          className={cn(
                            buttonVariants({
                              variant: active ? 'default' : 'outline',
                              size: 'sm',
                            }),
                            'rounded-l-none px-2',
                          )}
                          onClick={() =>
                            setOpenItemHref((current) =>
                              current === item.href ? null : item.href,
                            )
                          }
                        >
                          <ChevronDown
                            className={cn(
                              'size-4 transition-transform',
                              isOpen && 'rotate-180',
                            )}
                          />
                        </button>
                      </div>

                      {isOpen ? (
                        <div className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
                          <div className="px-1.5 py-1 text-xs font-medium text-muted-foreground">
                            {item.label}
                          </div>
                          <Button
                            asChild
                            variant={isActivePath(pathname, item.href) ? 'secondary' : 'ghost'}
                            size="sm"
                            className="w-full justify-start"
                          >
                            <Link href={item.href}>Open overview</Link>
                          </Button>
                          <div className="-mx-1 my-1 h-px bg-border" />
                          {item.children.map((child) => (
                            <Button
                              key={child.href}
                              asChild
                              variant={
                                isActivePath(pathname, child.href)
                                  ? 'secondary'
                                  : 'ghost'
                              }
                              size="sm"
                              className="w-full justify-start"
                            >
                              <Link
                                href={child.href}
                              >
                                {child.label}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                }

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
