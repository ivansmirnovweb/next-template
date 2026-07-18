import type { HeroAction } from "@/components/Hero";

export type CTASectionProps = {
  title: string;
  description?: string;
  primaryAction: HeroAction;
  className?: string;
};

export type CTADirectProps = CTASectionProps & {
  note?: string;
};

export type CTAReassuranceProps = CTASectionProps & {
  conditions: string[];
  responseNote?: string;
};

export type CTAChoiceProps = CTASectionProps & {
  secondaryAction: HeroAction;
  choiceNote?: string;
};
