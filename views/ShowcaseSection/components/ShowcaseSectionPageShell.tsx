import Link from 'next/link';
import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';

import type { ShowcaseSectionEntry } from '../types';

import { Button } from '@/components/ui/button';
import { ShowcaseAnchorNav } from '@/views/ShowcaseComponent/components/ShowcaseAnchorNav';
import { ShowcaseSectionNavLink } from './ShowcaseSectionNavLink';

type ShowcaseSectionPageShellProps = {
  entry: ShowcaseSectionEntry;
  previous?: ShowcaseSectionEntry;
  next?: ShowcaseSectionEntry;
  children: ReactNode;
};

export const ShowcaseSectionPageShell = ({
  entry,
  previous,
  next,
  children,
}: ShowcaseSectionPageShellProps) => {
  return (
    <div className="layout-container py-8 sm:py-10">
      <div className="space-y-10">
        <header className="space-y-6 rounded-[28px] border border-border/70 bg-card/80 px-6 py-6 shadow-sm backdrop-blur-sm lg:px-8 lg:py-8">
          <div className="space-y-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/sections">
                <ArrowLeft />
                Back to catalog
              </Link>
            </Button>
            <div className="space-y-3">
              <h1 className="font-heading text-3xl leading-tight font-medium sm:text-4xl">
                {entry.title}
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                {entry.description}
              </p>
            </div>
          </div>
        </header>

        {!!entry.anchors?.length && (
          <ShowcaseAnchorNav anchors={entry.anchors} />
        )}

        {children}

        <section className="grid gap-4 md:grid-cols-2">
          <ShowcaseSectionNavLink
            label="Previous section"
            entry={previous}
            direction="previous"
          />
          <ShowcaseSectionNavLink
            label="Next section"
            entry={next}
            direction="next"
          />
        </section>
      </div>
    </div>
  );
};
