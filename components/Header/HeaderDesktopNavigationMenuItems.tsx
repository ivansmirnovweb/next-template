import Link from "next/link";

import type { HeaderLinkItem } from "./types";

import {
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderDesktopNavigationMenuItemsProps = {
  items: HeaderLinkItem[];
};

export const HeaderDesktopNavigationMenuItems = ({
  items,
}: HeaderDesktopNavigationMenuItemsProps) => {
  return items.map((item) => {
    if (item.items?.length) {
      return (
        <DropdownMenuSub key={`${item.href}-${item.label}`}>
          <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-64">
            <HeaderDesktopNavigationMenuItems items={item.items} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }

    return (
      <DropdownMenuItem key={`${item.href}-${item.label}`} asChild>
        <Link href={item.href} className="min-w-0 truncate">
          {item.label}
        </Link>
      </DropdownMenuItem>
    );
  });
};
