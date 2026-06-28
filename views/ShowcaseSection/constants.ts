import { HeaderCenteredSectionShowcase } from './components/HeaderCenteredSectionShowcase';
import { HeaderSimpleSectionShowcase } from './components/HeaderSimpleSectionShowcase';
import { HeaderWithContactsSectionShowcase } from './components/HeaderWithContactsSectionShowcase';
import type { ShowcaseSectionEntry, ShowcaseSectionGroup } from './types';

export const showcaseSectionEntries: ShowcaseSectionEntry[] = [
  {
    slug: 'header-simple',
    title: 'HeaderSimple',
    description:
      'Compact product header with a centered nav rail, one CTA, and a sheet-based mobile menu.',
    group: 'headers',
    Component: HeaderSimpleSectionShowcase,
  },
  {
    slug: 'header-with-contacts',
    title: 'HeaderWithContacts',
    description:
      'Two-tier service header that adds direct contact data without weakening the primary row.',
    group: 'headers',
    Component: HeaderWithContactsSectionShowcase,
  },
  {
    slug: 'header-centered',
    title: 'HeaderCentered',
    description:
      'Editorial header with split navigation groups and a centered brand mark.',
    group: 'headers',
    Component: HeaderCenteredSectionShowcase,
  },
];

export const showcaseSectionEntryBySlug: Record<string, ShowcaseSectionEntry> =
  Object.fromEntries(
    showcaseSectionEntries.map((entry) => [entry.slug, entry]),
  );

export const showcaseSectionEntriesByGroup = showcaseSectionEntries.reduce<
  Record<ShowcaseSectionGroup, ShowcaseSectionEntry[]>
>(
  (accumulator, entry) => {
    accumulator[entry.group].push(entry);
    return accumulator;
  },
  {
    headers: [],
  },
);
