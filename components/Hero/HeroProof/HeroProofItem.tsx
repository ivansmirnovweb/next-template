import type { HeroProofItem as HeroProofItemType } from "../types";

type HeroProofItemProps = {
  proof: HeroProofItemType;
};

export const HeroProofItem = ({ proof }: HeroProofItemProps) => {
  switch (proof.kind) {
    case "metric":
      return (
        <div className="space-y-1">
          <dt className="font-heading text-3xl font-medium tracking-tight text-foreground">
            {proof.value}
          </dt>
          <dd className="text-sm leading-6 text-muted-foreground">
            {proof.label}
          </dd>
        </div>
      );
    case "rating":
      return (
        <div className="space-y-1">
          <dt className="flex items-center gap-2 font-heading text-xl font-medium text-foreground">
            {proof.icon && <span aria-hidden="true">{proof.icon}</span>}
            <span>{proof.value}</span>
          </dt>
          <dd className="text-sm leading-6 text-muted-foreground">
            {proof.label}
            {proof.detail && (
              <span className="block text-xs">{proof.detail}</span>
            )}
          </dd>
        </div>
      );
    case "assurance":
      return (
        <div className="flex gap-3">
          {proof.icon && (
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&>svg]:size-4"
            >
              {proof.icon}
            </span>
          )}
          <div className="space-y-1">
            <dt className="font-medium text-foreground">{proof.title}</dt>
            {proof.description && (
              <dd className="text-sm leading-6 text-muted-foreground">
                {proof.description}
              </dd>
            )}
          </div>
        </div>
      );
    case "logo":
      return (
        <div className="flex min-h-10 items-center gap-3">
          {proof.mark && (
            <span aria-hidden="true" className="shrink-0 text-foreground">
              {proof.mark}
            </span>
          )}
          <dt className="font-heading text-base font-medium tracking-tight text-foreground">
            {proof.label}
          </dt>
        </div>
      );
  }
};
