import type { LucideIcon } from "lucide-react";

export const themeValues = ["light", "dark", "system"];

export type ThemeValue = (typeof themeValues)[number];

export type ThemeOption = {
  value: ThemeValue;
  label: string;
  icon: LucideIcon;
};
