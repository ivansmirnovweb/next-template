'use client';

import Link from 'next/link';
import { useId, useMemo, useState } from 'react';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HeaderLogoMark } from '../HeaderLogoMark';
import { HeaderMobileLinkList } from '../HeaderMobileLinkList';
import type { HeaderCenteredProps } from '../types';

type HeaderCenteredMobileMenuProps = Pick<
  HeaderCenteredProps,
  | 'logo'
  | 'leftNavigation'
  | 'rightNavigation'
  | 'cta'
  | 'contacts'
  | 'socialLinks'
>;

export const HeaderCenteredMobileMenu = ({
  logo,
  leftNavigation,
  rightNavigation,
  cta,
  contacts,
  socialLinks,
}: HeaderCenteredMobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const navigation = useMemo(
    () => [...leftNavigation, ...rightNavigation],
    [leftNavigation, rightNavigation],
  );

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>
      </DialogTrigger>

      <DialogContent
        id={menuId}
        showCloseButton
        className="grid h-[calc(100svh-1rem)] max-w-[calc(100%-1rem)] grid-rows-[auto_1fr] gap-0 overflow-hidden rounded-[28px] p-0 sm:max-w-[calc(100%-1rem)]"
      >
        <DialogHeader className="border-b border-border/60 px-5 py-5 pr-12">
          <HeaderLogoMark logo={logo} />
          <DialogTitle className="sr-only">Navigation</DialogTitle>
          <DialogDescription>
            Explore collections, visits, and direct contact routes.
          </DialogDescription>
        </DialogHeader>

        <div className="flex min-h-0 flex-col overflow-y-auto px-5 py-5">
          <nav aria-label="Mobile navigation" className="space-y-5">
            <HeaderMobileLinkList items={navigation} onSelect={closeMenu} />
          </nav>

          {(contacts?.length || socialLinks?.length) && (
            <section className="mt-6 space-y-3 border-t border-border/60 pt-5">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Contacts
              </p>
              <div className="grid gap-3">
                {contacts?.map((contact) =>
                  contact.href ? (
                    <DialogClose
                      key={`${contact.label}-${contact.value}`}
                      asChild
                    >
                      <Link
                        href={contact.href}
                        onClick={closeMenu}
                        className="rounded-2xl border border-border/70 bg-card/75 px-4 py-3 text-sm text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                          {contact.label}
                        </span>
                        <span className="mt-1 block break-words">
                          {contact.value}
                        </span>
                      </Link>
                    </DialogClose>
                  ) : (
                    <div
                      key={`${contact.label}-${contact.value}`}
                      className="rounded-2xl border border-border/70 bg-card/75 px-4 py-3 text-sm text-foreground"
                    >
                      <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                        {contact.label}
                      </span>
                      <span className="mt-1 block break-words">
                        {contact.value}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {socialLinks?.length ? (
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <DialogClose key={`${social.href}-${social.label}`} asChild>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        onClick={closeMenu}
                      >
                        <Link href={social.href}>
                          {social.icon}
                          {social.label}
                        </Link>
                      </Button>
                    </DialogClose>
                  ))}
                </div>
              ) : null}
            </section>
          )}

          {cta ? (
            <div className="mt-6 border-t border-border/60 pt-5">
              <DialogClose asChild>
                <Button
                  asChild
                  variant={cta.variant ?? 'default'}
                  className="w-full"
                  onClick={closeMenu}
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </DialogClose>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};
