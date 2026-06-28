import type { ReactNode } from 'react';

type FieldStackProps = {
  label: string;
  description?: string;
  children: ReactNode;
};

export const FieldStack = ({
  label,
  description,
  children,
}: FieldStackProps) => {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-xs leading-5 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};
