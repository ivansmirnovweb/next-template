import type { ReactNode } from "react";

import { Sparkles } from "lucide-react";

type ShowcaseSectionPreviewCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const ShowcaseSectionPreviewCard = ({
  eyebrow,
  title,
  description,
  children,
}: ShowcaseSectionPreviewCardProps) => {
  return (
    <div className="overflow-hidden rounded-[30px] border border-border/70 bg-card/80 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-border/60 bg-background/80 px-5 py-5 sm:px-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/85 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
          <Sparkles className="size-3.5" />
          {eyebrow}
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-medium text-foreground">
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
