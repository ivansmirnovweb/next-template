import type { ReactNode } from "react";

import type { HeroAction } from "@/components/Hero";

export type FAQItem = {
  id: string;
  question: string;
  answer: ReactNode;
  anchorId?: string;
};

export type FAQSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type FAQEssentialProps = FAQSectionProps & {
  items: FAQItem[];
};

export type FAQCategory = {
  id: string;
  title: string;
  description?: string;
  items: FAQItem[];
};

export type FAQCategoriesProps = FAQSectionProps & {
  categories: FAQCategory[];
};

export type FAQContact = {
  title: string;
  description?: string;
  primaryAction: HeroAction;
  responseNote?: string;
};

export type FAQWithContactProps = FAQSectionProps & {
  items: FAQItem[];
  contact: FAQContact;
};
