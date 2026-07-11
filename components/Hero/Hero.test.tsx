import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  HeroOffer,
  HeroPersonal,
  HeroProof,
  HeroShowcase,
} from "@/components/Hero";

describe("Hero variants", () => {
  it("renders HeroOffer content and omits optional blocks", () => {
    render(
      <HeroOffer
        title="A clear offer"
        description="A focused explanation of its value."
        primaryAction={{ label: "Get started", href: "/start" }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "A clear offer" }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: "Get started" })).toHaveAttribute(
      "href",
      "/start",
    );
    expect(screen.queryByText("Trusted by teams")).not.toBeInTheDocument();
    expect(screen.queryByTestId("offer-visual")).not.toBeInTheDocument();
  });

  it("renders every supported HeroProof evidence type", () => {
    render(
      <HeroProof
        title="Proof before promises"
        description="Evidence supports the offer."
        primaryAction={{ label: "Review evidence", href: "/evidence" }}
        proofs={[
          { id: "metric", kind: "metric", value: "42%", label: "faster" },
          { id: "rating", kind: "rating", value: "4.9", label: "rating" },
          {
            id: "assurance",
            kind: "assurance",
            title: "Guaranteed review",
            description: "Within one day.",
          },
          { id: "logo", kind: "logo", label: "Northstar" },
        ]}
      />,
    );

    expect(screen.getByText("42%")).toBeVisible();
    expect(screen.getByText("4.9")).toBeVisible();
    expect(screen.getByText("Guaranteed review")).toBeVisible();
    expect(screen.getByText("Northstar")).toBeVisible();
  });

  it("renders HeroShowcase visual, caption, proof, and secondary action", () => {
    render(
      <HeroShowcase
        title="The product in context"
        description="The visual demonstrates the outcome."
        primaryAction={{ label: "Explore", href: "/explore" }}
        secondaryAction={{ label: "Learn more", href: "/learn" }}
        visual={<div data-testid="showcase-visual">External visual</div>}
        caption="Visual caption"
        proof="Verified result"
      />,
    );

    expect(screen.getByTestId("showcase-visual")).toHaveTextContent(
      "External visual",
    );
    expect(screen.getByText("Visual caption")).toBeVisible();
    expect(screen.getByText("Verified result")).toBeVisible();
    expect(screen.getByRole("link", { name: "Learn more" })).toHaveAttribute(
      "href",
      "/learn",
    );
  });

  it("renders HeroPersonal portrait and supports portrait positioning", () => {
    render(
      <HeroPersonal
        role="Independent advisor"
        title="A deliberately long personal positioning headline that remains readable without overflowing its layout"
        description="A concise personal introduction."
        portrait={{
          src: "/PersonalImage.webp",
          alt: "Portrait of an independent advisor",
          objectPosition: "35% 20%",
        }}
        primaryAction={{ label: "Book a call", href: "/contact" }}
      />,
    );

    const portrait = screen.getByRole("img", {
      name: "Portrait of an independent advisor",
    });
    const primaryAction = screen.getByRole("link", { name: "Book a call" });

    expect(screen.getByText("Independent advisor")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /deliberately long personal positioning headline/i,
      }),
    ).toBeVisible();
    expect(portrait).toHaveAttribute(
      "alt",
      "Portrait of an independent advisor",
    );
    expect(portrait.getAttribute("src")).toContain("PersonalImage.webp");
    expect(portrait).toHaveStyle({ objectPosition: "35% 20%" });
    expect(
      screen.queryByRole("link", { name: "Read more" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("12 years of practice")).not.toBeInTheDocument();

    primaryAction.focus();
    expect(primaryAction).toHaveFocus();
  });

  it("renders optional HeroPersonal action and proofs", () => {
    render(
      <HeroPersonal
        role="Creative director"
        title="A personal point of view"
        description="Short description."
        portrait={{ src: "/PersonalImage.webp", alt: "Portrait" }}
        primaryAction={{ label: "Get in touch", href: "/contact" }}
        secondaryAction={{ label: "Read more", href: "/about" }}
        proofs={[{ id: "experience", label: "12 years of practice" }]}
      />,
    );

    expect(screen.getByRole("link", { name: "Read more" })).toBeVisible();
    expect(screen.getByText("12 years of practice")).toBeVisible();
  });
});
