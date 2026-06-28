import Link from "next/link";

import { ArrowRight } from "lucide-react";

type ShowcaseNavItemProps = {
  title: string;
  description: string;
  href: string;
};

export const ShowcaseNavItem = ({
  title,
  description,
  href,
}: ShowcaseNavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="group block rounded-2xl border border-border/70 bg-card/85 p-5 shadow-sm backdrop-blur-sm transition-colors hover:bg-card"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-xl font-medium text-foreground">
              {title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground">
            <span>Open detail page</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </li>
  );
};
