import { showcaseEntries } from '../constants';
import type { ShowcaseAdjacentEntries } from '../types';

export function getAdjacentComponents(slug: string) {
  const currentIndex = showcaseEntries.findIndex(
    (entry) => entry.slug === slug,
  );

  if (currentIndex === -1) {
    return {};
  }

  return {
    previous: showcaseEntries[currentIndex - 1],
    next: showcaseEntries[currentIndex + 1],
  } satisfies ShowcaseAdjacentEntries;
}
