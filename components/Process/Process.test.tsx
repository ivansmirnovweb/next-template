import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ProcessCollaboration,
  ProcessDeliverables,
  ProcessSteps,
} from "@/components/Process";

describe("Process variants", () => {
  it("renders process steps with a generated number and supports different item counts", () => {
    const { rerender } = render(
      <ProcessSteps
        items={[
          {
            id: "brief",
            title: "Share the brief",
            description: "Describe the goal and current context.",
          },
        ]}
      />,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByText("Step 01")).toBeVisible();
    expect(screen.queryByText("1–2 days")).not.toBeInTheDocument();

    rerender(
      <ProcessSteps
        items={[
          {
            id: "brief",
            title: "Share the brief",
            description: "Describe the goal and current context.",
          },
          {
            id: "review",
            marker: "Go",
            title: "Review the direction",
            description: "Confirm what should move forward.",
            duration: "1–2 days",
          },
          {
            id: "result",
            title: "Use the result",
            description: "Put the agreed work into practice.",
          },
        ]}
      />,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText("Step Go")).toBeVisible();
    expect(screen.getByText("1–2 days")).toBeVisible();
  });

  it("makes the client deliverable visible for every deliverable stage", () => {
    render(
      <ProcessDeliverables
        title="What you receive"
        items={[
          {
            id: "concept",
            title: "Shape the concept",
            description: "Turn the brief into an agreed direction.",
            deliverable: "A reviewed concept document.",
          },
          {
            id: "handover",
            title: "Prepare the handover",
            description: "Package the approved materials.",
            deliverable: "Source files and implementation notes.",
          },
        ]}
      />,
    );

    expect(screen.getByText("A reviewed concept document.")).toBeVisible();
    expect(
      screen.getByText("Source files and implementation notes."),
    ).toBeVisible();
    expect(screen.queryByText("Week 1")).not.toBeInTheDocument();
  });

  it("renders both sides of process collaboration and omits an absent outcome", () => {
    render(
      <ProcessCollaboration
        items={[
          {
            id: "align",
            title: "Align on the goal",
            clientActions: "Share the goal and constraints.",
            providerActions: "Create a focused working plan.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Client")).toBeVisible();
    expect(screen.getByText("Team")).toBeVisible();
    expect(screen.getByText("Share the goal and constraints.")).toBeVisible();
    expect(screen.getByText("Create a focused working plan.")).toBeVisible();
    expect(screen.queryByText("Shared outcome")).not.toBeInTheDocument();
  });
});
