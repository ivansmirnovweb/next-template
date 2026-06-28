import { ShowcasePageShell } from './components/ShowcasePageShell';
import type { ShowcaseComponentPageProps } from './types';

export const ShowcaseComponentPage = ({
  entry,
  previous,
  next,
}: ShowcaseComponentPageProps) => {
  const Component = entry.Component;

  return (
    <ShowcasePageShell entry={entry} previous={previous} next={next}>
      <Component anchors={entry.anchors} />
    </ShowcasePageShell>
  );
};
