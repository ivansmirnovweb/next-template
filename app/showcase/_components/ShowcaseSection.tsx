import type { ReactNode } from 'react';

type ShowcaseSectionProps = {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
  action?: ReactNode;
};

export const ShowcaseSection = ({
  id,
  title,
  description,
  children,
  action,
}: ShowcaseSectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="space-y-1">
            <h2 className="font-heading text-2xl font-medium text-foreground">
              {title}
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
    </section>
  );
};
