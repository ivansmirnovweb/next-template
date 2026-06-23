'use client';

import { Layers, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const themeOptions = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Layers },
] as const;

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const activeTheme = theme ?? 'system';

  return (
    <div className="flex flex-wrap items-center gap-2">
      {themeOptions.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant={activeTheme === value ? 'default' : 'outline'}
          size="sm"
          onClick={() => setTheme(value)}
          aria-pressed={activeTheme === value}
        >
          <Icon />
          {label}
        </Button>
      ))}
    </div>
  );
};
