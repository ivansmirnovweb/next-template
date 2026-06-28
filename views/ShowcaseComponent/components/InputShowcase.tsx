import { FieldStack } from "./FieldStack";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const InputShowcase = () => {
  return (
    <ShowcaseSection
      id="field-states"
      title="Field States"
      description="Single-line input states for empty, filled, invalid, disabled, and labeled form scenarios."
    >
      <ShowcaseCard>
        <StateGrid>
          <FieldStack label="Empty">
            <Input placeholder="name@company.com" />
          </FieldStack>
          <FieldStack label="Filled">
            <Input defaultValue="ops@northstar.dev" />
          </FieldStack>
          <FieldStack label="Invalid">
            <Input aria-invalid defaultValue="missing-domain" />
          </FieldStack>
          <FieldStack label="Disabled">
            <Input disabled defaultValue="read-only@example.com" />
          </FieldStack>
          <FieldStack label="Paired label">
            <Label htmlFor="showcase-work-email">Work email</Label>
            <Input id="showcase-work-email" placeholder="hello@company.com" />
          </FieldStack>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
