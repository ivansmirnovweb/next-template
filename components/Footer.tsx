import Link from "next/link";

import { ArrowUpRight, Compass, HeartPulse, Layers3 } from "lucide-react";

const FOOTER_LINK_GROUPS = [
  {
    title: "Showcase",
    links: [
      { label: "Overview", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Sections", href: "/sections" },
    ],
  },
  {
    title: "Template",
    links: [
      { label: "API Health", href: "/api/health" },
      { label: "Root Redirect", href: "/" },
    ],
  },
] as const;

const STACK_ITEMS = ["Next.js 16", "React 19", "Tailwind v4", "shadcn/ui"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="layout-container grid gap-8 py-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-2xl border border-border/70 bg-card text-foreground shadow-sm">
              <Compass className="size-4" />
            </span>
            <div>
              <p className="font-heading text-base font-medium text-foreground">
                Next Template
              </p>
              <p className="text-sm text-muted-foreground">
                Reusable app starter with a live showcase surface.
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            UI primitives, route structure, theme support, and baseline app
            patterns collected into one clean starting point.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:col-span-1">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Layers3 className="size-3.5" />
            Stack baseline
          </div>

          <ul className="flex flex-wrap gap-2">
            {STACK_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border/70 bg-card/75 px-3 py-1 text-xs font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <HeartPulse className="size-4" />
            <span>Template health endpoint available at `/api/health`.</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Next Template. Built for maintainable App Router
            projects.
          </p>
        </div>
      </div>
    </footer>
  );
};
