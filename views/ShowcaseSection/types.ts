import type { ComponentType } from "react";

export const showcaseSectionGroups = [
  "headers",
  "heroes",
  "benefits",
  "footers",
];

export type ShowcaseSectionGroup = (typeof showcaseSectionGroups)[number];

export type ShowcaseSectionAnchor = {
  id: string;
  label: string;
};

export type SectionShowcaseProps = {
  anchors?: ShowcaseSectionAnchor[];
};

export type ShowcaseSectionEntry = {
  slug: string;
  title: string;
  description: string;
  group: ShowcaseSectionGroup;
  Component: ComponentType<SectionShowcaseProps>;
  anchors?: ShowcaseSectionAnchor[];
};

export type ShowcaseAdjacentSections = {
  previous?: ShowcaseSectionEntry;
  next?: ShowcaseSectionEntry;
};

export type ShowcaseSectionPageProps = {
  entry: ShowcaseSectionEntry;
  previous?: ShowcaseSectionEntry;
  next?: ShowcaseSectionEntry;
};
