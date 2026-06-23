import type { ComponentType } from 'react';

export const showcaseGroups = [
  'actions',
  'inputs',
  'navigation',
  'overlays',
] as const;

export type ShowcaseGroup = (typeof showcaseGroups)[number];

export type ShowcaseAnchor = {
  id: string;
  label: string;
};

export type ShowcaseComponentProps = {
  anchors?: ShowcaseAnchor[];
};

export type ShowcaseEntry = {
  slug: string;
  title: string;
  description: string;
  group: ShowcaseGroup;
  Component: ComponentType<ShowcaseComponentProps>;
  anchors?: ShowcaseAnchor[];
};
