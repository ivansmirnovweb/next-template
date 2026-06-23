import type { ShowcaseAnchor } from '@/app/showcase/types';
import { Button } from '@/components/ui/button';

type ShowcaseAnchorNavProps = {
  anchors: ShowcaseAnchor[];
};

export const ShowcaseAnchorNav = ({ anchors }: ShowcaseAnchorNavProps) => {
  if (!anchors.length) {
    return null;
  }

  return (
    <nav
      aria-label="Sections"
      className="rounded-2xl border border-border/70 bg-card/80 p-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {anchors.map((anchor) => (
            <Button key={anchor.id} variant="outline" size="sm" asChild>
              <a href={`#${anchor.id}`}>{anchor.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
