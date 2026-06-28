import type { ReactNode } from "react";

type ShowcaseSectionPreviewFrameProps = {
  preview: ReactNode;
};

const previewShell =
  "space-y-4 rounded-[30px] border border-border/70 bg-card/70 p-3 shadow-sm backdrop-blur-sm sm:p-4";

const previewStage =
  "overflow-hidden rounded-[24px] border border-border/60 bg-background/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

export const ShowcaseSectionPreviewFrame = ({
  preview,
}: ShowcaseSectionPreviewFrameProps) => {
  return (
    <div className={previewShell}>
      <div className={previewStage}>{preview}</div>
    </div>
  );
};
