import { showcaseSectionEntries } from '../constants';
import type { ShowcaseAdjacentSections } from '../types';

export const getAdjacentSections = (slug: string) => {
  const currentIndex = showcaseSectionEntries.findIndex(
    (entry) => entry.slug === slug,
  );

  if (currentIndex === -1) {
    return {};
  }

  return {
    previous: showcaseSectionEntries[currentIndex - 1],
    next: showcaseSectionEntries[currentIndex + 1],
  } satisfies ShowcaseAdjacentSections;
};
