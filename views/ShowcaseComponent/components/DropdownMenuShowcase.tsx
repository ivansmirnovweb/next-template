'use client';

import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const DropdownMenuShowcase = () => {
  const [menuPinned, setMenuPinned] = useState(true);
  const [menuDensity, setMenuDensity] = useState('comfortable');

  return (
    <ShowcaseSection
      id="menu-composition"
      title="Menu Composition"
      description="Action items, destructive options, checkbox state, radio state, and nested actions in a real menu."
    >
      <ShowcaseCard>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Open menu
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Component settings</DropdownMenuLabel>
            <DropdownMenuItem>
              Edit metadata
              <DropdownMenuShortcut>E</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Duplicate section
              <DropdownMenuShortcut>D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              Remove from library
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={menuPinned}
              onCheckedChange={(checked) => setMenuPinned(checked === true)}
            >
              Pinned to navigation
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel inset>Density</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={menuDensity}
              onValueChange={setMenuDensity}
            >
              <DropdownMenuRadioItem value="comfortable">
                Comfortable
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="compact">
                Compact
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More actions</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Open changelog</DropdownMenuItem>
                <DropdownMenuItem disabled>Sync to Figma</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem disabled>Archived action</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
