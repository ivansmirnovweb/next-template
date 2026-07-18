import { FAQWithContact } from "@/components/FAQ";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CONTACT_FAQ_ITEMS = [
  {
    id: "fit",
    question: "How do we know whether this is the right fit?",
    answer:
      "The first conversation looks at the decision ahead, the people involved, and the result that would make the work worthwhile.",
  },
  {
    id: "preparation",
    question: "What should we prepare before a conversation?",
    answer:
      "A short note on the current situation and what needs to change is enough. Relevant examples or constraints are useful but optional.",
  },
  {
    id: "first-step",
    question: "What happens after we get in touch?",
    answer:
      "You receive a reply with the most practical next step, whether that is a short call, a scoped recommendation, or a useful resource.",
  },
];

export const FAQWithContactSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FAQWithContact"
      title="Answer common questions and offer a quiet route to a specific answer"
      description="The contact block remains secondary to the FAQ while making the next step obvious for visitors whose situation needs context."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FAQWithContact
            title="Questions before the first conversation"
            description="A few practical answers, plus a simple way to ask about your situation."
            items={CONTACT_FAQ_ITEMS}
            contact={{
              title: "Need an answer for your situation?",
              description:
                "Share the context and the decision you are making; the reply will point to a useful next step.",
              primaryAction: {
                label: "Ask a project question",
                href: "#contact",
              },
              responseNote: "Usually answered within one working day.",
            }}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
