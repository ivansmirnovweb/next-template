import type { LucideIcon } from 'lucide-react';

export const themeValues = ['light', 'dark', 'system'] as const;

export type ThemeValue = (typeof themeValues)[number];

export type ThemeOption = {
  value: ThemeValue;
  label: string;
  icon: LucideIcon;
};
