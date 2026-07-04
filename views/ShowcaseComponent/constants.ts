import { BadgeShowcase } from "./components/BadgeShowcase";
import { ButtonShowcase } from "./components/ButtonShowcase";
import { CardShowcase } from "./components/CardShowcase";
import { CheckboxShowcase } from "./components/CheckboxShowcase";
import { DialogShowcase } from "./components/DialogShowcase";
import { DropdownMenuShowcase } from "./components/DropdownMenuShowcase";
import { InputShowcase } from "./components/InputShowcase";
import { LabelShowcase } from "./components/LabelShowcase";
import { RadioGroupShowcase } from "./components/RadioGroupShowcase";
import { SelectShowcase } from "./components/SelectShowcase";
import { SheetShowcase } from "./components/SheetShowcase";
import { SwitchShowcase } from "./components/SwitchShowcase";
import { TabsShowcase } from "./components/TabsShowcase";
import { TextareaShowcase } from "./components/TextareaShowcase";
import { ShowcaseEntry, ShowcaseGroup } from "./types";

export const showcaseEntries: ShowcaseEntry[] = [
  {
    slug: "button",
    title: "Button",
    description:
      "Action variants, size scale, icon usage, and disabled states.",
    group: "actions",
    Component: ButtonShowcase,
    anchors: [
      { id: "variants", label: "Variants" },
      { id: "sizes-and-states", label: "Sizes and states" },
    ],
  },
  {
    slug: "badge",
    title: "Badge",
    description:
      "Status tokens across variants, tone, and icon-bearing states.",
    group: "actions",
    Component: BadgeShowcase,
    anchors: [
      { id: "variants", label: "Variants" },
      { id: "with-icon", label: "With icon" },
    ],
  },
  {
    slug: "input",
    title: "Input",
    description:
      "Single-line field states for text entry, validation, and disabled treatment.",
    group: "inputs",
    Component: InputShowcase,
    anchors: [{ id: "field-states", label: "Field states" }],
  },
  {
    slug: "textarea",
    title: "Textarea",
    description:
      "Long-form field states for notes, comments, and supporting copy.",
    group: "inputs",
    Component: TextareaShowcase,
    anchors: [{ id: "textarea-states", label: "Textarea states" }],
  },

  {
    slug: "checkbox",
    title: "Checkbox",
    description:
      "Binary list selection with checked, partial, invalid, and disabled states.",
    group: "inputs",
    Component: CheckboxShowcase,
    anchors: [{ id: "checkbox-states", label: "Checkbox states" }],
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    description:
      "Exclusive choice sets with invalid and disabled item treatments.",
    group: "inputs",
    Component: RadioGroupShowcase,
    anchors: [{ id: "radio-group-states", label: "Radio group states" }],
  },
  {
    slug: "switch",
    title: "Switch",
    description:
      "Binary settings with size variants and validation-aware styling.",
    group: "inputs",
    Component: SwitchShowcase,
    anchors: [{ id: "switch-states", label: "Switch states" }],
  },
  {
    slug: "select",
    title: "Select",
    description:
      "Select trigger, menu, size, position, validation, and disabled states.",
    group: "inputs",
    Component: SelectShowcase,
    anchors: [
      { id: "select-states", label: "Select states" },
      { id: "select-layout", label: "Size and position" },
    ],
  },
  {
    slug: "label",
    title: "Label",
    description:
      "Standalone and field-bound labels, including disabled inheritance behavior.",
    group: "inputs",
    Component: LabelShowcase,
    anchors: [
      { id: "standalone-label", label: "Standalone label" },
      { id: "field-composition", label: "Field composition" },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description:
      "Default, line, and vertical tab layouts with disabled trigger coverage.",
    group: "navigation",
    Component: TabsShowcase,
    anchors: [
      { id: "default-tabs", label: "Default tabs" },
      { id: "line-tabs", label: "Line tabs" },
      { id: "vertical-tabs", label: "Vertical tabs" },
    ],
  },
  {
    slug: "card",
    title: "Card",
    description:
      "Content grouping across densities and slot-based composition patterns.",
    group: "navigation",
    Component: CardShowcase,
    anchors: [
      { id: "content-grouping", label: "Content grouping" },
      { id: "slot-structure", label: "Slot structure" },
    ],
  },
  {
    slug: "dialog",
    title: "Dialog",
    description:
      "Overlay layout, footer actions, and optional close affordances.",
    group: "overlays",
    Component: DialogShowcase,
    anchors: [{ id: "dialog-composition", label: "Dialog composition" }],
  },
  {
    slug: "sheet",
    title: "Sheet",
    description:
      "Directional overlays with side variants and optional close affordances.",
    group: "overlays",
    Component: SheetShowcase,
    anchors: [
      { id: "sheet-sides", label: "Sheet sides" },
      { id: "sheet-close-button", label: "Close button" },
    ],
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    description:
      "Nested actions, destructive items, and selection state inside a menu.",
    group: "overlays",
    Component: DropdownMenuShowcase,
    anchors: [{ id: "menu-composition", label: "Menu composition" }],
  },
];

export const showcaseEntryBySlug: Record<string, ShowcaseEntry> =
  Object.fromEntries(showcaseEntries.map((entry) => [entry.slug, entry]));

export const showcaseEntriesByGroup = showcaseEntries.reduce<
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
