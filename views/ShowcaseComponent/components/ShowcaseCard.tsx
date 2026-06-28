import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ShowcaseCardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export const ShowcaseCard = ({
  title,
  description,
  children,
  footer,
  className,
}: ShowcaseCardProps) => {
  const hasHeader = !!title || !!description;

  return (
    <Card
      className={cn(
        "border border-border/70 bg-card/90 shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {hasHeader && (
        <CardHeader className="border-b border-border/60">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("space-y-4", hasHeader ? "pt-5" : "pt-6")}>
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
