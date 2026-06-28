"use client";

import { useId, useState } from "react";

import { FieldStack } from "./FieldStack";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectShowcase = () => {
  const [selectValue, setSelectValue] = useState("pro");
  const [compactValue, setCompactValue] = useState("anna");
  const [popperValue, setPopperValue] = useState("backlog");
  const selectId = useId();
  const compactSelectId = useId();

  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="select-states"
        title="Select States"
        description="Placeholder, selected, disabled, and invalid select behavior using the current primitive."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Interactive">
              <Label htmlFor={selectId}>Plan</Label>
              <Select value={selectValue} onValueChange={setSelectValue}>
                <SelectTrigger id={selectId} className="w-full">
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Billing</SelectLabel>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FieldStack>
            <FieldStack label="Placeholder">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anna">Anna</SelectItem>
                  <SelectItem value="sergey">Sergey</SelectItem>
                </SelectContent>
              </Select>
            </FieldStack>
            <FieldStack label="Invalid">
              <Select defaultValue="email">
                <SelectTrigger className="w-full" aria-invalid>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="slack">Slack</SelectItem>
                </SelectContent>
              </Select>
            </FieldStack>
            <FieldStack label="Disabled">
              <Select defaultValue="system" disabled>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="select-layout"
        title="Size And Position"
        description="Trigger size scale and both supported menu positioning modes."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Small trigger">
              <Label htmlFor={compactSelectId}>Assignee</Label>
              <Select value={compactValue} onValueChange={setCompactValue}>
                <SelectTrigger
                  id={compactSelectId}
                  size="sm"
                  className="w-full"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anna">Anna</SelectItem>
                  <SelectItem value="sergey">Sergey</SelectItem>
                  <SelectItem value="irina">Irina</SelectItem>
                </SelectContent>
              </Select>
            </FieldStack>
            <FieldStack label="Popper content">
              <Select value={popperValue} onValueChange={setPopperValue}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="backlog">Backlog</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
