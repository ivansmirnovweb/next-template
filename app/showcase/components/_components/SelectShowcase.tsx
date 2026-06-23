'use client';

import { useId, useState } from 'react';

import { FieldStack } from '@/app/showcase/components/_components/FieldStack';
import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { StateGrid } from '@/app/showcase/components/_components/StateGrid';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const SelectShowcase = () => {
  const [selectValue, setSelectValue] = useState('pro');
  const selectId = useId();

  return (
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
  );
};
