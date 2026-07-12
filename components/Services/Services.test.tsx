import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ServicesCatalog,
  ServicesFeatured,
  ServicesGuided,
} from "@/components/Services";

describe("Services variants", () => {
  it("renders catalog services, their CTA, and optional content when provided", () => {
    const { rerender } = render(
      <ServicesCatalog
        title="Ways to work together"
        items={[
          {
            id: "identity",
            title: "Identity system",
            description: "A durable visual foundation.",
            included: ["Visual direction"],
            action: { label: "Explore identity", href: "/identity" },
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Ways to work together" }),
    ).toBeVisible();
    expect(screen.getByText("Visual direction")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Explore identity" }),
    ).toHaveAttribute("href", "/identity");

    rerender(
      <ServicesCatalog
        items={[
          {
            id: "strategy",
            title: "Offer strategy",
            description: "Find the useful starting point.",
          },
          {
            id: "website",
            title: "Website design",
            description: "Bring the offer online.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Offer strategy")).toBeVisible();
    expect(screen.getByText("Website design")).toBeVisible();
    expect(screen.queryByText("Visual direction")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Explore identity" }),
    ).not.toBeInTheDocument();
  });

  it("renders every guided scenario with its solution and typed destination", () => {
    render(
      <ServicesGuided
        items={[
          {
            id: "launch",
            need: "I need to launch a new service",
            solution: "Shape the offer before building the page.",
            destination: {
              type: "services",
              items: ["Discovery", "Launch page"],
            },
            action: { label: "Plan a launch", href: "/launch" },
          },
          {
            id: "refresh",
            need: "I need to improve an existing website",
            solution: "Audit the journey and remove the blockers.",
            destination: {
              type: "result",
              value: "A clearer conversion path.",
            },
          },
        ]}
      />,
    );

    expect(screen.getByText("I need to launch a new service")).toBeVisible();
    expect(
      screen.getByText("Shape the offer before building the page."),
    ).toBeVisible();
    expect(screen.getByText("Discovery")).toBeVisible();
    expect(screen.getByText("A clearer conversion path.")).toBeVisible();
    expect(screen.getByRole("link", { name: "Plan a launch" })).toHaveAttribute(
      "href",
      "/launch",
    );
  });

  it("keeps the featured service distinct from compact supporting services", () => {
    render(
      <ServicesFeatured
        featured={{
          title: "Launch-ready website",
          description: "A complete website engagement.",
          outcomes: ["Clear service structure", "Implementation handoff"],
          primaryAction: { label: "Discuss a website", href: "/contact" },
        }}
        items={[
          {
            id: "strategy",
            title: "Offer strategy",
            description: "Clarify the business case first.",
          },
        ]}
      />,
    );

    expect(screen.getByTestId("services-featured-primary")).toHaveTextContent(
      "Launch-ready website",
    );
    expect(screen.getByTestId("services-featured-secondary")).toHaveTextContent(
      "Offer strategy",
    );
    expect(
      screen.getByRole("link", { name: "Discuss a website" }),
    ).toHaveAttribute("href", "/contact");
  });
});
