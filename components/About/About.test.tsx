import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutOverview, AboutPeople, AboutStory } from "@/components/About";

describe("About variants", () => {
  it("renders Overview content, facts, image, and action", () => {
    render(
      <AboutOverview
        title="A focused practice"
        paragraphs={["We work with teams making a launch decision."]}
        image={{ src: "/PersonalImage.webp", alt: "Studio portrait" }}
        facts={[{ id: "years", value: "12", label: "years of practice" }]}
        action={{ label: "See the process", href: "/process" }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "A focused practice" }),
    ).toBeVisible();
    expect(screen.getByText("12")).toBeVisible();
    expect(screen.getByText("years of practice")).toBeVisible();
    expect(
      screen.getByRole("img", { name: "Studio portrait" }),
    ).toHaveAttribute("alt", "Studio portrait");
    expect(
      screen.getByRole("link", { name: "See the process" }),
    ).toHaveAttribute("href", "/process");
  });

  it("renders Overview without optional blocks", () => {
    render(
      <AboutOverview
        title="The essential overview"
        paragraphs={["Only the main content is required."]}
      />,
    );

    expect(
      screen.getByText("Only the main content is required."),
    ).toBeVisible();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders Story stages and omits optional visual content", () => {
    render(
      <AboutStory
        title="The origin story"
        intro="The short introduction."
        problem="The original customer problem."
        idea="The idea that changed the work."
        stages={[
          {
            id: "first",
            title: "The first milestone",
            description: "What changed at this point.",
          },
          {
            id: "second",
            label: "Today",
            title: "The current milestone",
            description: "How the practice works now.",
          },
        ]}
      />,
    );

    expect(screen.getByText("The original customer problem.")).toBeVisible();
    expect(screen.getByText("The idea that changed the work.")).toBeVisible();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("The current milestone")).toBeVisible();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders one person and a small team with optional facts and links", () => {
    const singlePerson = {
      id: "alex",
      name: "Alex Rivera",
      role: "Research lead",
      image: { src: "/PersonalImage.webp", alt: "Portrait of Alex Rivera" },
      description: "Turns research into useful decisions.",
    };

    const { rerender } = render(
      <AboutPeople title="The expert" people={[singlePerson]} />,
    );

    expect(screen.getByText("Alex Rivera")).toBeVisible();
    expect(
      screen.getByRole("img", { name: "Portrait of Alex Rivera" }),
    ).toHaveAttribute("alt", "Portrait of Alex Rivera");
    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    rerender(
      <AboutPeople
        title="The team"
        people={[
          singlePerson,
          {
            id: "sam",
            name: "Sam Lee",
            role: "Design lead",
            image: { src: "/PersonalImage.webp", alt: "Portrait of Sam Lee" },
            description: "Shapes the final interface.",
            facts: ["Product design"],
            action: { label: "Meet Sam", href: "/people/sam" },
          },
        ]}
      />,
    );

    expect(screen.getByText("Sam Lee")).toBeVisible();
    expect(screen.getByText("Product design")).toBeVisible();
    expect(screen.getByRole("link", { name: "Meet Sam" })).toHaveAttribute(
      "href",
      "/people/sam",
    );
  });
});
