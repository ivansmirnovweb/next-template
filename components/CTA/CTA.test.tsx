import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CTAChoice, CTADirect, CTAReassurance } from "@/components/CTA";

describe("CTA variants", () => {
  it("renders CTADirect content and omits optional description and note", () => {
    render(
      <CTADirect
        title="Start with one clear step"
        primaryAction={{ label: "Start now", href: "/start" }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Start with one clear step" }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: "Start now" })).toHaveAttribute(
      "href",
      "/start",
    );
    expect(
      screen.queryByText("A supporting description"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("We will reply tomorrow"),
    ).not.toBeInTheDocument();
  });

  it("renders reassurance conditions, response information, and an external link", () => {
    render(
      <CTAReassurance
        title="Ask before deciding"
        primaryAction={{
          label: "Ask a question",
          href: "https://example.com/contact",
        }}
        conditions={["Free first conversation", "No commitment"]}
        responseNote="We reply within one working day."
      />,
    );

    expect(screen.getByText("Free first conversation")).toBeVisible();
    expect(screen.getByText("No commitment")).toBeVisible();
    expect(screen.getByText("We reply within one working day.")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Ask a question" }),
    ).toHaveAttribute("href", "https://example.com/contact");
  });

  it("renders CTAChoice actions with a primary visual priority", () => {
    render(
      <CTAChoice
        title="Choose the next route"
        primaryAction={{ label: "Discuss the project", href: "/contact" }}
        secondaryAction={{ label: "View the work", href: "/work" }}
      />,
    );

    expect(
      screen.getByRole("link", { name: "Discuss the project" }),
    ).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "View the work" })).toHaveAttribute(
      "href",
      "/work",
    );
    expect(
      screen.getByRole("link", { name: "Discuss the project" }),
    ).toHaveAttribute("data-variant", "default");
    expect(screen.getByRole("link", { name: "View the work" })).toHaveAttribute(
      "data-variant",
      "outline",
    );
  });
});
