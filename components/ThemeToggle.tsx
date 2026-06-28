"use client";

import { useEffect, useState } from "react";

import { Layers, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import type { ThemeOption } from "@/types/theme";

const themeOptions: ThemeOption[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Layers },
];

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();
  const activeTheme = mounted ? theme : "system";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {themeOptions.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant={activeTheme === value ? "default" : "outline"}
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
