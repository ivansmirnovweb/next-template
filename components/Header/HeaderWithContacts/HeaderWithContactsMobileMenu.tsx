"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HeaderLogoMark } from "../HeaderLogoMark";
import { HeaderMobileLinkList } from "../HeaderMobileLinkList";
import { HeaderSocialLinkButton } from "../HeaderSocialLinkButton";
import type { HeaderWithContactsProps } from "../types";
import { HeaderContactRow } from "./HeaderContactRow";

type HeaderWithContactsMobileMenuProps = Pick<
  HeaderWithContactsProps,
  "logo" | "navigation" | "cta" | "phone" | "address" | "hours" | "socialLinks"
>;

export const HeaderWithContactsMobileMenu = ({
  logo,
  navigation,
  cta,
  phone,
  address,
  hours,
  socialLinks,
}: HeaderWithContactsMobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        id={menuId}
        side="right"
        className="flex w-[min(25rem,calc(100vw-1rem))] flex-col gap-0 overflow-hidden p-0"
      >
        <SheetHeader className="border-b border-border/60 px-4 py-4 pr-12">
          <HeaderLogoMark logo={logo} />
          <SheetTitle className="sr-only">Навигация и контакты</SheetTitle>
          <SheetDescription className="sr-only">
            Меню с навигацией, контактами и мессенджерами.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 overflow-y-auto px-4 py-5">
          <div className="grid gap-3">
            <HeaderContactRow item={phone} />
            {address ? <HeaderContactRow item={address} /> : null}
            {hours ? <HeaderContactRow item={hours} /> : null}
          </div>

          <nav aria-label="Mobile navigation">
            <HeaderMobileLinkList items={navigation} onSelect={closeMenu} />
          </nav>

          {socialLinks?.length ? (
            <section className="space-y-3">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Мессенджеры
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <HeaderSocialLinkButton
                    key={`${social.href}-${social.label}`}
                    item={social}
                    onClick={closeMenu}
                    variant="outline"
                  />
                ))}
              </div>
            </section>
          ) : null}

          {cta ? (
            <SheetClose asChild>
              <Button
                asChild
                variant={cta.variant ?? "default"}
                className="w-full"
                onClick={closeMenu}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </SheetClose>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
};
