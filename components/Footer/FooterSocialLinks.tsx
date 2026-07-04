import Link from "next/link";

import type { FooterSocialLink } from "./types";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FooterSocialLinksProps = {
  items: FooterSocialLink[];
  className?: string;
  variant?: "ghost" | "outline";
};

export const FooterSocialLinks = ({
  items,
  className,
  variant = "outline",
}: FooterSocialLinksProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Button asChild variant={variant} size="sm">
            <Link href={item.href} aria-label={item.label}>
              {item.icon}
              {item.label}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};
