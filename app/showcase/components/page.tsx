import { Sparkles } from 'lucide-react';

import { ShowcaseNavItem } from '@/app/showcase/_components/ShowcaseNavItem';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { showcaseEntriesByGroup } from '@/app/showcase/components/_components/ShowcaseRegistry';

const ComponentsPage = () => {
  return (
    <div className="space-y-8">
      <header className="rounded-[28px] border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          <Sparkles className="size-3.5" />
          Component Catalog
        </div>

        <h1 className="font-heading text-3xl leading-tight font-medium sm:text-4xl">
          Component showcase navigation
        </h1>
      </header>

      <div className="space-y-10">
        <ShowcaseSection
          title="Actions"
          description="Primary and secondary interaction language for the UI kit."
        >
          <ul className="grid gap-4">
            {showcaseEntriesByGroup.actions.map((entry) => (
              <ShowcaseNavItem
                key={entry.slug}
                title={entry.title}
                description={entry.description}
                href={`/showcase/components/${entry.slug}`}
              />
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection
          title="Inputs"
          description="Field primitives, selection controls, and input-state audits."
        >
          <ul className="grid gap-4">
            {showcaseEntriesByGroup.inputs.map((entry) => (
              <ShowcaseNavItem
                key={entry.slug}
                title={entry.title}
                description={entry.description}
                href={`/showcase/components/${entry.slug}`}
              />
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection
          title="Navigation"
          description="Structural primitives for grouping content and switching local page views."
        >
          <ul className="grid gap-4">
            {showcaseEntriesByGroup.navigation.map((entry) => (
              <ShowcaseNavItem
                key={entry.slug}
                title={entry.title}
                description={entry.description}
                href={`/showcase/components/${entry.slug}`}
              />
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection
          title="Overlays"
          description="Menus, dialogs, and sheets that need real open-state verification."
        >
          <ul className="grid gap-4">
            {showcaseEntriesByGroup.overlays.map((entry) => (
              <ShowcaseNavItem
                key={entry.slug}
                title={entry.title}
                description={entry.description}
                href={`/showcase/components/${entry.slug}`}
              />
            ))}
          </ul>
        </ShowcaseSection>
      </div>
    </div>
  );
};

export default ComponentsPage;
