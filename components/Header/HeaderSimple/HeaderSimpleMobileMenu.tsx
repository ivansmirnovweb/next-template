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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HeaderLogoMark } from "../HeaderLogoMark";
import { HeaderMobileLinkList } from "../HeaderMobileLinkList";
import type { HeaderSimpleProps } from "../types";

type HeaderSimpleMobileMenuProps = Pick<
  HeaderSimpleProps,
  "logo" | "navigation" | "cta" | "secondaryLinks"
>;

export const HeaderSimpleMobileMenu = ({
  logo,
  navigation,
  cta,
  secondaryLinks,
}: HeaderSimpleMobileMenuProps) => {
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
        className="flex w-[min(24rem,calc(100vw-1rem))] flex-col gap-0 overflow-hidden p-0"
      >
        <SheetHeader className="border-b border-border/60 px-4 py-4 pr-12">
          <HeaderLogoMark logo={logo} />
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription>
            Browse primary links and quick actions.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 overflow-y-auto px-4 py-5">
          <nav aria-label="Mobile navigation">
            <HeaderMobileLinkList items={navigation} onSelect={closeMenu} />
          </nav>

          {secondaryLinks?.length && (
            <section className="space-y-3">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                More
              </p>
              <ul className="space-y-2">
                {secondaryLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <SheetClose asChild>
                      <Button
                        asChild
                        variant="ghost"
                        className="h-auto w-full justify-start px-3 py-2.5 text-left text-muted-foreground"
                        onClick={closeMenu}
                      >
                        <Link href={item.href} className="break-words">
                          {item.label}
                        </Link>
                      </Button>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {cta && (
          <SheetFooter className="border-t border-border/60 bg-background/80">
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
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
