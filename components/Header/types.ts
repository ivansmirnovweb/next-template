import type { ReactNode } from "react";

export type HeaderLinkItem = {
  label: string;
  href: string;
  items?: readonly HeaderLinkItem[];
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
  navigation: readonly HeaderLinkItem[];
  cta?: HeaderAction;
  secondaryLinks?: readonly HeaderSecondaryLink[];
  className?: string;
};

export type HeaderWithContactsProps = {
  logo: HeaderLogo;
  navigation: readonly HeaderLinkItem[];
  cta?: HeaderAction;
  phone: HeaderContactItem;
  address?: HeaderContactItem;
  hours?: HeaderContactItem;
  socialLinks?: readonly HeaderSocialLink[];
  className?: string;
};

export type HeaderCenteredProps = {
  logo: HeaderLogo;
  leftNavigation: readonly HeaderLinkItem[];
  rightNavigation: readonly HeaderLinkItem[];
  cta?: HeaderAction;
  mobileQuickAction?: HeaderAction | HeaderContactItem;
  contacts?: readonly HeaderContactItem[];
  socialLinks?: readonly HeaderSocialLink[];
  className?: string;
};
