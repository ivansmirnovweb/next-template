import type { ReactNode } from "react";
import type { ImageProps } from "next/image";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type HeroOfferProps = {
  title: string;
  description: string;
  primaryAction: HeroAction;
  eyebrow?: ReactNode;
  secondaryAction?: HeroAction;
  trust?: ReactNode;
  visual?: ReactNode;
  className?: string;
};

type HeroProofBase = {
  id: string;
};

export type HeroMetricProof = HeroProofBase & {
  kind: "metric";
  value: string;
  label: string;
};

export type HeroRatingProof = HeroProofBase & {
  kind: "rating";
  value: string;
  label: string;
  detail?: string;
  icon?: ReactNode;
};

export type HeroAssuranceProof = HeroProofBase & {
  kind: "assurance";
  title: string;
  description?: string;
  icon?: ReactNode;
};

export type HeroLogoProof = HeroProofBase & {
  kind: "logo";
  label: string;
  mark?: ReactNode;
};

export type HeroProofItem =
  | HeroMetricProof
  | HeroRatingProof
  | HeroAssuranceProof
  | HeroLogoProof;

export type HeroProofProps = {
  title: string;
  description: string;
  primaryAction: HeroAction;
  proofs: HeroProofItem[];
  eyebrow?: ReactNode;
  secondaryAction?: HeroAction;
  featuredProof?: ReactNode;
  className?: string;
};

export type HeroShowcaseProps = {
  title: string;
  description: string;
  primaryAction: HeroAction;
  visual: ReactNode;
  eyebrow?: ReactNode;
  secondaryAction?: HeroAction;
  caption?: ReactNode;
  proof?: ReactNode;
  className?: string;
};

export type HeroPersonalPortrait = {
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
};

export type HeroPersonalProof = {
  id: string;
  label: string;
};

export type HeroPersonalProps = {
  title: string;
  role: string;
  description: string;
  portrait: HeroPersonalPortrait;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  proofs?: HeroPersonalProof[];
  className?: string;
};
