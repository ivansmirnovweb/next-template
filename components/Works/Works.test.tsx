import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  WorksCaseStudies,
  WorksFeatured,
  WorksGallery,
} from "@/components/Works";

const CONCEPT_IMAGE = {
  src: "/works/field-notes.svg",
  alt: "Abstract concept interface",
} as const;

describe("Works variants", () => {
  it("renders gallery projects, tags, and links while omitting missing optional content", () => {
    const { rerender } = render(
      <WorksGallery
        title="Selected concepts"
        items={[
          {
            id: "archive",
            title: "Archive concept",
            category: "Editorial",
            description: "A browsable public archive.",
            image: CONCEPT_IMAGE,
            tags: ["Strategy"],
            action: { label: "View archive", href: "/archive" },
          },
          {
            id: "platform",
            title: "Platform concept",
            category: "Product",
            description: "A clearer working surface.",
            image: { ...CONCEPT_IMAGE, aspectRatio: "portrait" },
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Selected concepts" }),
    ).toBeVisible();
    expect(screen.getByText("Platform concept")).toBeVisible();
    expect(screen.getByText("Strategy")).toBeVisible();
    expect(screen.getByRole("link", { name: "View archive" })).toHaveAttribute(
      "href",
      "/archive",
    );

    rerender(
      <WorksGallery
        items={[
          {
            id: "plain",
            title: "Plain concept",
            category: "Research",
            description: "A project without optional content.",
            image: CONCEPT_IMAGE,
          },
        ]}
      />,
    );

    expect(screen.getByText("Plain concept")).toBeVisible();
    expect(screen.queryByText("Strategy")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "View archive" }),
    ).not.toBeInTheDocument();
  });

  it("keeps the lead featured project distinct and supports one or many projects", () => {
    const leadProject = {
      id: "lead",
      title: "Lead concept",
      context: "A decisive concept project.",
      services: ["Experience design"],
      image: CONCEPT_IMAGE,
      action: { label: "View lead", href: "/lead" },
    };

    const { rerender } = render(<WorksFeatured items={[leadProject]} />);

    expect(screen.getByTestId("works-featured-primary")).toHaveTextContent(
      "Lead concept",
    );
    expect(
      screen.queryByTestId("works-featured-secondary"),
    ).not.toBeInTheDocument();

    rerender(
      <WorksFeatured
        items={[
          leadProject,
          {
            id: "supporting",
            title: "Supporting concept",
            context: "A complementary direction.",
            services: ["Product strategy"],
            image: { ...CONCEPT_IMAGE, aspectRatio: "square" },
          },
        ]}
      />,
    );

    expect(screen.getByTestId("works-featured-secondary")).toHaveTextContent(
      "Supporting concept",
    );
    expect(screen.getByRole("link", { name: "View lead" })).toHaveAttribute(
      "href",
      "/lead",
    );
  });

  it("renders challenge, solution, and result without requiring a metric or other optional fields", () => {
    render(
      <WorksCaseStudies
        items={[
          {
            id: "qualitative",
            title: "Qualitative concept",
            context: "A fictional programme.",
            challenge: "Make the programme easier to discover.",
            solution: "Create a reusable editorial system.",
            result: "A clearer invitation for new participants.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Challenge")).toBeVisible();
    expect(screen.getByText("Solution")).toBeVisible();
    expect(screen.getByText("Result")).toBeVisible();
    expect(
      screen.getByText("A clearer invitation for new participants."),
    ).toBeVisible();
    expect(screen.queryByText("Measurable impact")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
