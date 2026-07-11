import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

export type BenefitsSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type BenefitsOutcomeItem = {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export type BenefitsOutcomesProps = BenefitsSectionProps & {
  items: BenefitsOutcomeItem[];
};

export type BenefitsContrastItem = {
  id: string;
  problem: string;
  solution: string;
  description?: string;
};

export type BenefitsContrastProps = BenefitsSectionProps & {
  items: BenefitsContrastItem[];
  problemLabel?: string;
  solutionLabel?: string;
};

export type BenefitsVisualImage = {
  type: "image";
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
};

export type BenefitsVisualContent = {
  type: "content";
  content: ReactNode;
};

export type BenefitsVisualItem = {
  id: string;
  title: string;
  description: string;
  visual: BenefitsVisualImage | BenefitsVisualContent;
  caption?: string;
};

export type BenefitsVisualProps = BenefitsSectionProps & {
  items: BenefitsVisualItem[];
};
