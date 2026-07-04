import Link from "next/link";

import type { FooterLogo } from "./types";

export const FooterLogoMark = ({ logo }: { logo: FooterLogo }) => {
  return (
    <Link
      href={logo.href}
      className="inline-flex min-w-0 items-center gap-3 rounded-2xl text-left text-sm text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {logo.icon && (
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/85 shadow-sm">
          {logo.icon}
        </span>
      )}
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-heading text-base leading-tight font-medium">
          {logo.label}
        </span>
        {logo.subtitle && (
          <span className="truncate text-xs text-muted-foreground">
            {logo.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
};
