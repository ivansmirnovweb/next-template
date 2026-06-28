import { FieldStack } from "./FieldStack";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LabelShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="standalone-label"
        title="Standalone Label"
        description="Labels used as short descriptors or metadata headers outside of forms."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Default">
              <Label>Workspace name</Label>
            </FieldStack>
            <FieldStack label="With helper copy">
              <div className="space-y-1">
                <Label>Release channel</Label>
                <p className="text-sm text-muted-foreground">
                  Choose where new component changes should appear first.
                </p>
              </div>
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="field-composition"
        title="Field Composition"
        description="Label pairing with form controls, including disabled behavior inherited from surrounding state."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Label + input">
              <Label htmlFor="showcase-label-input">Project name</Label>
              <Input id="showcase-label-input" placeholder="Northstar UI" />
            </FieldStack>
            <FieldStack label="Peer disabled">
              <div className="space-y-2">
                <Input
                  className="peer"
                  disabled
                  defaultValue="Locked by policy"
                />
                <Label>Inherited disabled state</Label>
              </div>
            </FieldStack>
            <FieldStack label="Group disabled">
              <div className="space-y-2 group" data-disabled="true">
                <Label>Controlled by parent state</Label>
                <Input disabled defaultValue="Managed elsewhere" />
              </div>
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
