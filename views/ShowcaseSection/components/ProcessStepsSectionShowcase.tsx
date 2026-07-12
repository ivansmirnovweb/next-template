import { CalendarDays, MessageCircle, Rocket, Search } from "lucide-react";

import { ProcessSteps } from "@/components/Process";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const PROCESS_STEPS_ITEMS = [
  {
    id: "request",
    title: "Tell us what you need to change",
    description:
      "Share the goal, current context, and the decision you want the work to support.",
    duration: "1–2 days",
    icon: <MessageCircle />,
  },
  {
    id: "direction",
    title: "Agree on a useful direction",
    description:
      "We turn the brief into a focused plan, scope, and a clear way to measure progress.",
    duration: "Week 1",
    icon: <Search />,
  },
  {
    id: "delivery",
    title: "Review the work as it takes shape",
    description:
      "You see the important decisions early and give feedback while changes are still easy.",
    icon: <CalendarDays />,
  },
  {
    id: "result",
    title: "Put the result to work",
    description:
      "Receive the final materials, practical guidance, and a confident next step.",
    icon: <Rocket />,
  },
];

export const ProcessStepsSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ProcessSteps"
      title="Make the customer journey easy to scan"
      description="A clear sequence answers what will happen next, from the first message to a usable result."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ProcessSteps
            title="From the first conversation to a result you can use"
            description="Each stage keeps the next decision visible without hiding the whole path behind interaction."
            items={PROCESS_STEPS_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
