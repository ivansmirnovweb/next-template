import type { ReactNode } from "react";

export type HeaderLinkItem = {
  label: string;
  href: string;
  items?: HeaderLinkItem[];
};

export type HeaderAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type HeaderSecondaryLink = {
  label: string;
  href: string;
};

export type HeaderLogo = {
  label: string;
  href: string;
  icon?: ReactNode;
  subtitle?: string;
};

export type HeaderContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type HeaderSocialLink = {
  label: string;
  href: string;
  icon?: ReactNode;
};

export type HeaderSimpleProps = {
  logo: HeaderLogo;
  navigation: HeaderLinkItem[];
  cta?: HeaderAction;
  secondaryLinks?: HeaderSecondaryLink[];
  className?: string;
};

export type HeaderWithContactsProps = {
  logo: HeaderLogo;
  navigation: HeaderLinkItem[];
  cta?: HeaderAction;
  phone: HeaderContactItem;
  address?: HeaderContactItem;
  hours?: HeaderContactItem;
  socialLinks?: HeaderSocialLink[];
  className?: string;
};

export type HeaderCenteredProps = {
  logo: HeaderLogo;
  leftNavigation: HeaderLinkItem[];
  rightNavigation: HeaderLinkItem[];
  cta?: HeaderAction;
  mobileQuickAction?: HeaderAction | HeaderContactItem;
  contacts?: HeaderContactItem[];
  socialLinks?: HeaderSocialLink[];
  className?: string;
};
