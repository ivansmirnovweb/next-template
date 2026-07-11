import { Landmark } from "lucide-react";

import { ShowcaseNavItem } from "@/views/ShowcaseComponents/components/ShowcaseNavItem";
import {
  ShowcaseSection,
  showcaseSectionEntriesByGroup,
} from "@/views/ShowcaseSection";

export const ShowcaseSectionsPage = () => {
  return (
    <div className="layout-container py-8 sm:py-10">
      <div className="space-y-8">
        <header className="rounded-[28px] border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Landmark className="size-3.5" />
            Section Catalog
          </div>

          <h1 className="font-heading text-3xl leading-tight font-medium sm:text-4xl">
            Section showcase navigation
          </h1>
        </header>

        <div className="space-y-10">
          <ShowcaseSection
            title="Headers"
            description="Structural header patterns for product, service, and editorial surfaces."
          >
            <ul className="grid gap-4">
              {showcaseSectionEntriesByGroup.headers.map((entry) => (
                <ShowcaseNavItem
                  key={entry.slug}
                  title={entry.title}
                  description={entry.description}
                  href={`/sections/${entry.slug}`}
                />
              ))}
            </ul>
          </ShowcaseSection>

          <ShowcaseSection
            title="Heroes"
            description="Opening-section patterns for clear offers, credible proof, and product-led demonstrations."
          >
            <ul className="grid gap-4">
              {showcaseSectionEntriesByGroup.heroes.map((entry) => (
                <ShowcaseNavItem
                  key={entry.slug}
                  title={entry.title}
                  description={entry.description}
                  href={`/sections/${entry.slug}`}
                />
              ))}
            </ul>
          </ShowcaseSection>

          <ShowcaseSection
            title="Benefits"
            description="Value-explanation patterns for concrete outcomes, removed risks, and visual proof."
          >
            <ul className="grid gap-4">
              {showcaseSectionEntriesByGroup.benefits.map((entry) => (
                <ShowcaseNavItem
                  key={entry.slug}
                  title={entry.title}
                  description={entry.description}
                  href={`/sections/${entry.slug}`}
                />
              ))}
            </ul>
          </ShowcaseSection>

          <ShowcaseSection
            title="Footers"
            description="Closing section patterns for compact sites, larger navigation systems, and contact-led businesses."
          >
            <ul className="grid gap-4">
              {showcaseSectionEntriesByGroup.footers.map((entry) => (
                <ShowcaseNavItem
                  key={entry.slug}
                  title={entry.title}
                  description={entry.description}
                  href={`/sections/${entry.slug}`}
                />
              ))}
            </ul>
          </ShowcaseSection>
        </div>
      </div>
    </div>
  );
};
