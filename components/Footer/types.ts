import type { ReactNode } from "react";

export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLinkItem[];
};

export type FooterLogo = {
  label: string;
  href: string;
  icon?: ReactNode;
  subtitle?: string;
};

export type FooterContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon?: ReactNode;
};

export type FooterLegalLink = {
  label: string;
  href: string;
};

export type FooterAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type FooterSimpleProps = {
  logo: FooterLogo;
  navigation?: FooterLinkItem[];
  socialLinks?: FooterSocialLink[];
  copyright: string;
  legalLinks?: FooterLegalLink[];
  className?: string;
};

export type FooterColumnsProps = {
  logo: FooterLogo;
  description?: string;
  groups: FooterLinkGroup[];
  contacts?: FooterContactItem[];
  socialLinks?: FooterSocialLink[];
  copyright: string;
  legalLinks?: FooterLegalLink[];
  bottomNote?: string;
  className?: string;
};

export type FooterWithContactsProps = {
  logo: FooterLogo;
  description?: string;
  navigation?: FooterLinkItem[];
  phone?: FooterContactItem;
  email?: FooterContactItem;
  address?: FooterContactItem;
  hours?: FooterContactItem;
  socialLinks?: FooterSocialLink[];
  cta?: FooterAction;
  copyright: string;
  legalLinks?: FooterLegalLink[];
  supplementaryText?: string;
  className?: string;
};
