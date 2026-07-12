import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

export type ServicesSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type ServiceAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type ServiceImageVisual = {
  type: "image";
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
};

export type ServiceContentVisual = {
  type: "content";
  content: ReactNode;
};

export type ServiceVisual = ServiceImageVisual | ServiceContentVisual;

export type ServicesCatalogItem = {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  visual?: ServiceVisual;
  included?: string[];
  action?: ServiceAction;
};

export type ServicesCatalogProps = ServicesSectionProps & {
  items: ServicesCatalogItem[];
};

export type GuidedServiceDestination =
  | {
      type: "services";
      items: string[];
    }
  | {
      type: "result";
      value: string;
    };

export type ServicesGuidedItem = {
  id: string;
  need: string;
  solution: string;
  destination: GuidedServiceDestination;
  action?: ServiceAction;
};

export type ServicesGuidedProps = ServicesSectionProps & {
  items: ServicesGuidedItem[];
};

export type ServicesFeaturedPrimary = {
  title: string;
  description: string;
  outcomes: string[];
  primaryAction: ServiceAction;
  visual?: ServiceVisual;
};

export type ServicesFeaturedItem = {
  id: string;
  title: string;
  description: string;
  action?: ServiceAction;
};

export type ServicesFeaturedProps = ServicesSectionProps & {
  featured: ServicesFeaturedPrimary;
  items: ServicesFeaturedItem[];
};
