import { ButtonShowcase } from '@/app/showcase/components/_components/ButtonShowcase';
import { CardShowcase } from '@/app/showcase/components/_components/CardShowcase';
import { DialogSheetShowcase } from '@/app/showcase/components/_components/DialogSheetShowcase';
import { DropdownMenuShowcase } from '@/app/showcase/components/_components/DropdownMenuShowcase';
import { SelectionControlsShowcase } from '@/app/showcase/components/_components/SelectionControlsShowcase';
import { SelectShowcase } from '@/app/showcase/components/_components/SelectShowcase';
import { TabsShowcase } from '@/app/showcase/components/_components/TabsShowcase';
import { TextInputShowcase } from '@/app/showcase/components/_components/TextInputShowcase';
import type { ShowcaseEntry, ShowcaseGroup } from '@/app/showcase/types';

export const SHOWCASE_ENTRIES: ShowcaseEntry[] = [
  {
    slug: 'button',
    title: 'Button',
    description:
      'Action variants, size scale, icon usage, and disabled states.',
    group: 'actions',
    Component: ButtonShowcase,
    anchors: [
      { id: 'variants', label: 'Variants' },
      { id: 'sizes-and-states', label: 'Sizes and states' },
    ],
  },
  {
    slug: 'text-input',
    title: 'Text Input',
    description:
      'Single-line and multi-line field states for form-heavy surfaces.',
    group: 'inputs',
    Component: TextInputShowcase,
    anchors: [
      { id: 'field-states', label: 'Field states' },
      { id: 'textarea', label: 'Textarea' },
    ],
  },
  {
    slug: 'selection-controls',
    title: 'Selection Controls',
    description: 'Checkbox, radio, and switch behavior with real local state.',
    group: 'inputs',
    Component: SelectionControlsShowcase,
    anchors: [{ id: 'interactive-controls', label: 'Interactive controls' }],
  },
  {
    slug: 'select',
    title: 'Select',
    description: 'Select trigger, menu, validation, and disabled states.',
    group: 'inputs',
    Component: SelectShowcase,
    anchors: [{ id: 'select-states', label: 'Select states' }],
  },
  {
    slug: 'tabs',
    title: 'Tabs',
    description: 'Default and line variants with controlled active state.',
    group: 'navigation',
    Component: TabsShowcase,
    anchors: [
      { id: 'default-tabs', label: 'Default tabs' },
      { id: 'line-tabs', label: 'Line tabs' },
    ],
  },
  {
    slug: 'card',
    title: 'Card',
    description: 'Content grouping for default and compact densities.',
    group: 'navigation',
    Component: CardShowcase,
    anchors: [{ id: 'content-grouping', label: 'Content grouping' }],
  },
  {
    slug: 'dialog-sheet',
    title: 'Dialog + Sheet',
    description: 'Overlay layout, dismiss patterns, and live open states.',
    group: 'overlays',
    Component: DialogSheetShowcase,
    anchors: [{ id: 'overlay-behavior', label: 'Overlay behavior' }],
  },
  {
    slug: 'dropdown-menu',
    title: 'Dropdown Menu',
    description:
      'Nested actions, destructive items, and selection state inside a menu.',
    group: 'overlays',
    Component: DropdownMenuShowcase,
    anchors: [{ id: 'menu-composition', label: 'Menu composition' }],
  },
];

export const showcaseEntriesByGroup = SHOWCASE_ENTRIES.reduce<
  Record<ShowcaseGroup, ShowcaseEntry[]>
>(
  (accumulator, entry) => {
    accumulator[entry.group].push(entry);
    return accumulator;
  },
  {
    actions: [],
    inputs: [],
    navigation: [],
    overlays: [],
  },
);

export function getShowcaseEntry(slug: string) {
  return SHOWCASE_ENTRIES.find((entry) => entry.slug === slug);
}

export function getAdjacentShowcaseEntries(slug: string) {
  const currentIndex = SHOWCASE_ENTRIES.findIndex(
    (entry) => entry.slug === slug,
  );

  if (currentIndex === -1) {
    return {};
  }

  return {
    previous: SHOWCASE_ENTRIES[currentIndex - 1],
    next: SHOWCASE_ENTRIES[currentIndex + 1],
  };
}

export function getShowcaseStaticParams() {
  return SHOWCASE_ENTRIES.map((entry) => ({ slug: entry.slug }));
}
