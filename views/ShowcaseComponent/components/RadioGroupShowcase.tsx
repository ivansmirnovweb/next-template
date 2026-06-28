"use client";

import { useId, useState } from "react";

import { FieldStack } from "./FieldStack";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioGroupShowcase = () => {
  const [radioValue, setRadioValue] = useState("starter");
  const radioStarterId = useId();
  const radioGrowthId = useId();
  const radioScaleId = useId();

  return (
    <ShowcaseSection
      id="radio-group-states"
      title="Radio Group States"
      description="Selected, unselected, disabled, and invalid radio group treatments with live local state."
    >
      <ShowcaseCard>
        <StateGrid>
          <FieldStack label="Interactive">
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioStarterId} value="starter" />
                <Label htmlFor={radioStarterId}>Starter</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioGrowthId} value="growth" />
                <Label htmlFor={radioGrowthId}>Growth</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioScaleId} value="scale" disabled />
                <Label htmlFor={radioScaleId}>Scale (disabled)</Label>
              </div>
            </RadioGroup>
          </FieldStack>
          <FieldStack label="Unselected">
            <RadioGroup>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="design" />
                <Label>Design</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="engineering" />
                <Label>Engineering</Label>
              </div>
            </RadioGroup>
          </FieldStack>
          <FieldStack label="Invalid group">
            <RadioGroup aria-invalid defaultValue="design">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="design" />
                <Label>Design</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="engineering" />
                <Label>Engineering</Label>
              </div>
            </RadioGroup>
          </FieldStack>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
