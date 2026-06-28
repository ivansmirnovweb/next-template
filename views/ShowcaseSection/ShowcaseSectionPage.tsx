import { ShowcaseSectionPageShell } from "./components/ShowcaseSectionPageShell";
import type { ShowcaseSectionPageProps } from "./types";

export const ShowcaseSectionPage = ({
  entry,
  previous,
  next,
}: ShowcaseSectionPageProps) => {
  const Component = entry.Component;

  return (
    <ShowcaseSectionPageShell entry={entry} previous={previous} next={next}>
      <Component anchors={entry.anchors} />
    </ShowcaseSectionPageShell>
  );
};
