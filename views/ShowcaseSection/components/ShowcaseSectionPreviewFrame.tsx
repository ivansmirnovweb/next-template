import type { ReactNode } from "react";

type ShowcaseSectionPreviewFrameProps = {
  preview: ReactNode;
  summary: string;
  actions: ReactNode;
  bullets: readonly string[];
};

const previewShell =
  "relative left-1/2 w-screen -translate-x-1/2 border-y border-border/70 bg-card/60 shadow-sm backdrop-blur-sm";

const previewBody =
  "border-t border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.55),_rgba(255,255,255,0.2))] px-4 py-8 dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))] sm:px-6 lg:px-8";

export const ShowcaseSectionPreviewFrame = ({
  preview,
  summary,
  actions,
  bullets,
}: ShowcaseSectionPreviewFrameProps) => {
  return (
    <div className={previewShell}>
      {preview}
      <div className={previewBody}>
        <div className="layout-container grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">{summary}</p>
            {actions}
          </div>
          <div className="rounded-[24px] border border-border/70 bg-background/80 p-5">
            <p className="text-sm font-medium text-foreground">Demo coverage</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
