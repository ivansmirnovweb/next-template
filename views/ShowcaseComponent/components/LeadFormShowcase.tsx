import { LeadForm } from "@/components/LeadForm";

import { ShowcaseSection } from "./ShowcaseSection";

export const LeadFormShowcase = () => {
  return (
    <ShowcaseSection
      id="lead-form"
      title="Lead form"
      description="Validated contact request flow with submission feedback."
    >
      <div className="max-w-xl">
        <LeadForm />
      </div>
    </ShowcaseSection>
  );
};
