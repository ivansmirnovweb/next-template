import Link from 'next/link';
import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';

import type { ShowcaseEntry } from '../types';

import { Button } from '@/components/ui/button';
import { ShowcaseAnchorNav } from './ShowcaseAnchorNav';
import { ShowcaseNavLink } from './ShowcaseNavLink';

type ShowcasePageShellProps = {
  entry: ShowcaseEntry;
  previous?: ShowcaseEntry;
  next?: ShowcaseEntry;
  children: ReactNode;
};

export const ShowcasePageShell = ({
  entry,
  previous,
  next,
  children,
}: ShowcasePageShellProps) => {
  return (
    <div className="space-y-10">
      <header className="space-y-6 rounded-[28px] border border-border/70 bg-card/80 px-6 py-6 shadow-sm backdrop-blur-sm lg:px-8 lg:py-8">
        <div className="space-y-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/showcase/components">
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

      {!!entry.anchors?.length && <ShowcaseAnchorNav anchors={entry.anchors} />}

      {children}
      <section className="grid gap-4 md:grid-cols-2">
        <ShowcaseNavLink
          label="Previous component"
          entry={previous}
          direction="previous"
        />
        <ShowcaseNavLink label="Next component" entry={next} direction="next" />
      </section>
    </div>
  );
};
