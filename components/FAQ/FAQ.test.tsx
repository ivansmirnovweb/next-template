import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { FAQCategories, FAQEssential, FAQWithContact } from "@/components/FAQ";

describe("FAQ variants", () => {
  it("renders essential questions and supports opening multiple answers", async () => {
    const user = userEvent.setup();

    render(
      <FAQEssential
        title="Questions before starting"
        items={[
          {
            id: "pricing",
            question: "How is the work priced?",
            answer: "We agree the scope and price before work begins.",
            anchorId: "pricing",
          },
          {
            id: "timeline",
            question: "How long does a typical project take?",
            answer: "The timeline follows the agreed scope and priorities.",
          },
        ]}
      />,
    );

    const pricingTrigger = screen.getByRole("button", {
      name: "How is the work priced?",
    });
    const timelineTrigger = screen.getByRole("button", {
      name: "How long does a typical project take?",
    });

    expect(screen.getByText("Questions before starting")).toBeVisible();
    expect(pricingTrigger).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.getByText("How is the work priced?").closest("[id='pricing']"),
    ).not.toBeNull();

    await user.click(pricingTrigger);
    await user.click(timelineTrigger);

    expect(pricingTrigger).toHaveAttribute("aria-expanded", "true");
    expect(timelineTrigger).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText("We agree the scope and price before work begins."),
    ).toBeVisible();
    expect(
      screen.getByText("The timeline follows the agreed scope and priorities."),
    ).toBeVisible();

    await user.click(pricingTrigger);

    expect(pricingTrigger).toHaveAttribute("aria-expanded", "false");
    expect(timelineTrigger).toHaveAttribute("aria-expanded", "true");
  });

  it("renders visible FAQ categories and omits category descriptions when absent", () => {
    render(
      <FAQCategories
        categories={[
          {
            id: "planning",
            title: "Planning",
            description: "How the engagement begins.",
            items: [
              {
                id: "brief",
                question: "Do I need a finished brief?",
                answer: "No, the first conversation can shape it together.",
              },
            ],
          },
          {
            id: "delivery",
            title: "Delivery",
            items: [
              {
                id: "handover",
                question: "What happens after delivery?",
                answer: "You receive the agreed files and next-step guidance.",
              },
            ],
          },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: "Planning" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Delivery" })).toBeVisible();
    expect(screen.getByText("How the engagement begins.")).toBeVisible();
    expect(
      screen.getByRole("button", { name: "What happens after delivery?" }),
    ).toBeVisible();
  });

  it("renders a secondary contact block, CTA, and optional response timing", () => {
    render(
      <FAQWithContact
        items={[
          {
            id: "next-step",
            question: "What is the next step?",
            answer: <span>Share the context and desired outcome.</span>,
          },
        ]}
        contact={{
          title: "Need a more specific answer?",
          description:
            "Send the context and we will point you in a useful direction.",
          primaryAction: { label: "Ask about the project", href: "/contact" },
          responseNote: "A reply usually arrives within one working day.",
        }}
      />,
    );

    expect(
      screen.getByRole("link", { name: "Ask about the project" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByText("A reply usually arrives within one working day."),
    ).toBeVisible();
  });
});
