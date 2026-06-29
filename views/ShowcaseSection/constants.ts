import { FooterColumnsSectionShowcase } from "./components/FooterColumnsSectionShowcase";
import { FooterSimpleSectionShowcase } from "./components/FooterSimpleSectionShowcase";
import { FooterWithContactsSectionShowcase } from "./components/FooterWithContactsSectionShowcase";
import { HeaderCenteredSectionShowcase } from "./components/HeaderCenteredSectionShowcase";
import { HeaderSimpleSectionShowcase } from "./components/HeaderSimpleSectionShowcase";
import { HeaderWithContactsSectionShowcase } from "./components/HeaderWithContactsSectionShowcase";
import type { ShowcaseSectionEntry, ShowcaseSectionGroup } from "./types";

export const showcaseSectionEntries: ShowcaseSectionEntry[] = [
  {
    slug: "header-simple",
    title: "HeaderSimple",
    description:
      "Compact product header with a centered nav rail, one CTA, and a sheet-based mobile menu.",
    group: "headers",
    Component: HeaderSimpleSectionShowcase,
  },
  {
    slug: "header-with-contacts",
    title: "HeaderWithContacts",
    description:
      "Two-tier service header that adds direct contact data without weakening the primary row.",
    group: "headers",
    Component: HeaderWithContactsSectionShowcase,
  },
  {
    slug: "header-centered",
    title: "HeaderCentered",
    description:
      "Editorial header with split navigation groups and a centered brand mark.",
    group: "headers",
    Component: HeaderCenteredSectionShowcase,
  },
  {
    slug: "footer-simple",
    title: "FooterSimple",
    description:
      "Compact footer with brand, short navigation, social links, and a legal row.",
    group: "footers",
    Component: FooterSimpleSectionShowcase,
  },
  {
    slug: "footer-columns",
    title: "FooterColumns",
    description:
      "Navigation-heavy footer with dynamic link groups, contacts, and mobile accordions.",
    group: "footers",
    Component: FooterColumnsSectionShowcase,
  },
  {
    slug: "footer-with-contacts",
    title: "FooterWithContacts",
    description:
      "Contact-first footer that prioritizes direct outreach, hours, and a final CTA.",
    group: "footers",
    Component: FooterWithContactsSectionShowcase,
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
    footers: [],
  },
);
