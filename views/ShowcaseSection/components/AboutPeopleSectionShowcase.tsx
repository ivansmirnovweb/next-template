import { AboutPeople } from "@/components/About";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const PEOPLE = [
  {
    id: "maya",
    name: "Maya Chen",
    role: "Strategy and content lead",
    image: {
      src: "/PersonalImage.webp",
      alt: "Portrait of Maya Chen",
      objectPosition: "45% 34%",
    },
    description:
      "Maya turns product knowledge into a story customers can follow from first visit to the next conversation.",
    facts: [
      "12 years in product communications",
      "Leads discovery and message architecture",
    ],
    action: { label: "Read Maya’s approach", href: "/people/maya-chen" },
  },
  {
    id: "leo",
    name: "Leo Martins",
    role: "Design and interface lead",
    image: {
      src: "/PersonalImage.webp",
      alt: "Portrait of Leo Martins",
      objectPosition: "55% 30%",
    },
    description:
      "Leo translates the approved story into a responsive interface that helps customers compare, understand, and act.",
    facts: ["Specialises in product launches", "Owns interaction and handoff"],
  },
];

export const AboutPeopleSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="AboutPeople"
      title="Show the people responsible for the professional decisions"
      description="Each profile explains a role in the work, rather than repeating an offer-level personal hero."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <AboutPeople
            title="The people who stay close to the important decisions"
            description="A small senior team works directly with clients from the first workshop through to handoff."
            people={PEOPLE}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
