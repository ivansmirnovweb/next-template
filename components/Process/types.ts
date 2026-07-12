import type { ReactNode } from "react";

export type ProcessSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type ProcessStepsItem = {
  id: string;
  title: string;
  description: string;
  marker?: string;
  duration?: string;
  icon?: ReactNode;
};

export type ProcessStepsProps = ProcessSectionProps & {
  items: ProcessStepsItem[];
};

export type ProcessDeliverablesItem = {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  duration?: string;
  accent?: ReactNode;
};

export type ProcessDeliverablesProps = ProcessSectionProps & {
  items: ProcessDeliverablesItem[];
};

export type ProcessCollaborationItem = {
  id: string;
  title: string;
  clientActions: string;
  providerActions: string;
  outcome?: string;
  duration?: string;
};

export type ProcessCollaborationProps = ProcessSectionProps & {
  items: ProcessCollaborationItem[];
};
