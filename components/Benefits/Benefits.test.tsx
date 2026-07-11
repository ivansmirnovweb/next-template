import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  BenefitsContrast,
  BenefitsOutcomes,
  BenefitsVisual,
} from "@/components/Benefits";

describe("Benefits variants", () => {
  it("renders outcome titles and adapts to one or multiple items", () => {
    const { rerender } = render(
      <BenefitsOutcomes
        title="Concrete outcomes"
        description="How the work creates them."
        items={[
          {
            id: "move-in",
            title: "Move in on schedule",
            description: "Milestones are fixed before work starts.",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Concrete outcomes" }),
    ).toBeVisible();
    expect(screen.getByText("Move in on schedule")).toBeVisible();

    rerender(
      <BenefitsOutcomes
        items={[
          {
            id: "move-in",
            title: "Move in on schedule",
            description: "Milestones are fixed before work starts.",
          },
          {
            id: "budget",
            title: "Protect the budget",
            description: "Changes are agreed before ordering.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Protect the budget")).toBeVisible();
    expect(
      screen.queryByRole("heading", { name: "Concrete outcomes" }),
    ).not.toBeInTheDocument();
  });

  it("renders contrast labels, problem, solution, and omits optional content", () => {
    const { rerender } = render(
      <BenefitsContrast
        title="Remove familiar risks"
        problemLabel="Usually"
        solutionLabel="With us"
        items={[
          {
            id: "deadline",
            problem: "The deadline moves after the move is booked.",
            solution: "Critical milestones are reviewed every week.",
            description: "Risks are visible before they cause a delay.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Usually")).toBeVisible();
    expect(screen.getByText("With us")).toBeVisible();
    expect(
      screen.getByText("The deadline moves after the move is booked."),
    ).toBeVisible();
    expect(
      screen.getByText("Critical milestones are reviewed every week."),
    ).toBeVisible();

    rerender(
      <BenefitsContrast
        items={[
          {
            id: "changes",
            problem: "Costs appear without context.",
            solution: "Changes are approved before work starts.",
          },
        ]}
      />,
    );

    expect(screen.queryByText("Usually")).not.toBeInTheDocument();
    expect(screen.queryByText("With us")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Risks are visible before they cause a delay."),
    ).not.toBeInTheDocument();
  });

  it("renders image and React content visuals with optional captions omitted", () => {
    render(
      <BenefitsVisual
        title="Value made visible"
        items={[
          {
            id: "image",
            title: "A meaningful image",
            description: "The photo demonstrates the result.",
            visual: {
              type: "image",
              src: "/PersonalImage.webp",
              alt: "Person resting by the sea",
            },
            caption: "The intended result.",
          },
          {
            id: "content",
            title: "A useful interface",
            description: "The interface demonstrates the next step.",
            visual: {
              type: "content",
              content: (
                <div data-testid="benefits-visual-content">Plan preview</div>
              ),
            },
          },
        ]}
      />,
    );

    const image = screen.getByRole("img", {
      name: "Person resting by the sea",
    });

    expect(image).toHaveAttribute("alt", "Person resting by the sea");
    expect(image.getAttribute("src")).toContain("PersonalImage.webp");
    expect(screen.getByText("The intended result.")).toBeVisible();
    expect(screen.getByTestId("benefits-visual-content")).toHaveTextContent(
      "Plan preview",
    );
  });
});
