import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  TestimonialsCollection,
  TestimonialsFeatured,
  TestimonialsStories,
} from "@/components/Testimonials";

const AVATAR_IMAGE = {
  src: "/works/field-notes.svg",
  alt: "Abstract illustrative avatar",
} as const;

describe("Testimonials variants", () => {
  it("renders a collection of quotes and authors with different item counts and lengths", () => {
    const { rerender } = render(
      <TestimonialsCollection
        title="Customer feedback"
        items={[
          {
            id: "brief",
            quote: "The work made our next step clear.",
            author: { name: "Alex Morgan", role: "Director" },
            rating: 5,
            source: { label: "Read source", href: "/source" },
          },
          {
            id: "long",
            quote:
              "The team helped us turn several competing priorities into a single shared direction that remained useful after the first launch decision.",
            author: {
              name: "Sam Lee",
              company: "Example Studio",
              avatar: AVATAR_IMAGE,
            },
          },
        ]}
      />,
    );

    expect(
      screen.getByText(/The work made our next step clear\./),
    ).toBeVisible();
    expect(screen.getByText("Alex Morgan")).toBeVisible();
    expect(screen.getByText("Sam Lee")).toBeVisible();
    expect(screen.getByRole("link", { name: "Read source" })).toHaveAttribute(
      "href",
      "/source",
    );
    expect(
      screen.getByTestId("testimonials-collection-grid"),
    ).toHaveTextContent("shared direction");

    rerender(
      <TestimonialsCollection
        items={[
          {
            id: "minimal",
            quote: "A concise testimonial without optional content.",
            author: { name: "Taylor Kim" },
          },
        ]}
      />,
    );

    expect(screen.getByText("Taylor Kim")).toBeVisible();
    expect(screen.queryByLabelText(/out of 5 stars/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders a high-priority featured quote with and without optional media", () => {
    const { rerender } = render(
      <TestimonialsFeatured
        title="Featured feedback"
        quote="The team gave us a way to keep making stronger decisions."
        author={{
          name: "Jordan Rivera",
          role: "Founder",
          company: "Example Collective",
        }}
        result="An illustrative measurable result"
        source={{ label: "Read example", href: "/example" }}
        media={{ type: "image", image: AVATAR_IMAGE }}
      />,
    );

    expect(screen.getByTestId("testimonials-featured")).toHaveTextContent(
      "The team gave us a way to keep making stronger decisions.",
    );
    expect(screen.getByText("Jordan Rivera")).toBeVisible();
    expect(screen.getByText("Measurable result")).toBeVisible();
    expect(
      screen.getByRole("img", { name: "Abstract illustrative avatar" }),
    ).toBeVisible();

    rerender(
      <TestimonialsFeatured
        quote="The quote stays prominent when no media is supplied."
        author={{ name: "Casey Brown" }}
      />,
    );

    expect(screen.getByText("Casey Brown")).toBeVisible();
    expect(
      screen.getByText(/The quote stays prominent when no media is supplied\./),
    ).toBeVisible();
    expect(screen.queryByText("Measurable result")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("distinguishes the situation, change, and customer quote in stories", () => {
    render(
      <TestimonialsStories
        items={[
          {
            id: "story",
            context: "A fictional team preparing for a public launch.",
            situation:
              "Their priorities were fragmented across several groups.",
            outcome: "They agreed on one useful decision framework.",
            quote:
              "We could finally explain the change in language everyone recognised.",
            author: { name: "Morgan Chen", role: "Programme lead" },
          },
        ]}
      />,
    );

    expect(screen.getByText("Starting situation")).toBeVisible();
    expect(screen.getByText("Change after the work")).toBeVisible();
    expect(
      screen.getByText(
        /We could finally explain the change in language everyone recognised\./,
      ),
    ).toBeVisible();
    expect(screen.getByText("Morgan Chen")).toBeVisible();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
