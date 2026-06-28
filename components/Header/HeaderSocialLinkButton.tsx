import Link from "next/link";

import type { HeaderSocialLink } from "./types";

import { Button } from "@/components/ui/button";

type HeaderSocialLinkButtonProps = {
  item: HeaderSocialLink;
  onClick?: () => void;
  variant?: "ghost" | "outline";
  size?: "sm" | "icon-sm";
};

export const HeaderSocialLinkButton = ({
  item,
  onClick,
  variant = "ghost",
  size = "sm",
}: HeaderSocialLinkButtonProps) => {
  return (
    <Button asChild variant={variant} size={size}>
      <Link href={item.href} onClick={onClick}>
        {item.icon}
        {item.label}
      </Link>
    </Button>
  );
};
