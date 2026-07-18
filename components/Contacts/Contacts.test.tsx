import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ContactsChannels,
  ContactsLocation,
  ContactsRouting,
} from "@/components/Contacts";

describe("Contacts variants", () => {
  it("renders labelled channels with telephone, email, and external links", () => {
    render(
      <ContactsChannels
        title="Choose a contact channel"
        channels={[
          {
            id: "phone",
            kind: "Phone",
            label: "Call the studio",
            value: "+1 (415) 555-0142",
            href: "tel:+14155550142",
            description: "For a detailed conversation.",
            availability: "Weekdays",
          },
          {
            id: "email",
            kind: "Email",
            label: "Send a brief",
            value: "hello@example.com",
            href: "mailto:hello@example.com",
          },
          {
            id: "messenger",
            kind: "Messenger",
            label: "Ask a quick question",
            value: "Open the chat",
            href: "https://chat.example/contact",
          },
        ]}
      />,
    );

    expect(screen.getByText("For a detailed conversation.")).toBeVisible();
    expect(screen.getByText("Weekdays")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "+1 (415) 555-0142" }),
    ).toHaveAttribute("href", "tel:+14155550142");
    expect(
      screen.getByRole("link", { name: "hello@example.com" }),
    ).toHaveAttribute("href", "mailto:hello@example.com");
    expect(screen.getByRole("link", { name: "Open the chat" })).toHaveAttribute(
      "href",
      "https://chat.example/contact",
    );
  });

  it("omits optional channel details when they are not supplied", () => {
    render(
      <ContactsChannels
        channels={[
          {
            id: "phone",
            kind: "Phone",
            label: "Call the studio",
            value: "+1 (415) 555-0142",
          },
        ]}
      />,
    );

    expect(screen.queryByText("Response")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();
  });

  it("renders a location address and directions, with or without a map", () => {
    const { rerender } = render(
      <ContactsLocation
        locations={[
          {
            id: "studio",
            title: "Demo studio",
            address: "85 Market Street, Demo City",
            hours: "Weekdays, 09:00–17:00",
            directions: {
              label: "Build a route",
              href: "https://maps.example/directions/studio",
            },
            map: <div data-testid="map-preview">Map preview</div>,
          },
        ]}
      />,
    );

    expect(screen.getByText("85 Market Street, Demo City")).toBeVisible();
    expect(screen.getByRole("link", { name: "Build a route" })).toHaveAttribute(
      "href",
      "https://maps.example/directions/studio",
    );
    expect(screen.getByTestId("map-preview")).toBeVisible();

    rerender(
      <ContactsLocation
        locations={[
          {
            id: "studio",
            title: "Demo studio",
            address: "85 Market Street, Demo City",
          },
        ]}
      />,
    );

    expect(screen.queryByTestId("map-preview")).not.toBeInTheDocument();
    expect(screen.getByText("85 Market Street, Demo City")).toBeVisible();
  });

  it("renders routes with one and several contact methods", () => {
    render(
      <ContactsRouting
        routes={[
          {
            id: "project",
            title: "New project",
            description: "Discuss a new engagement.",
            owner: "New business",
            contacts: [
              {
                id: "project-email",
                label: "Email",
                value: "projects@example.com",
                href: "mailto:projects@example.com",
              },
            ],
          },
          {
            id: "support",
            title: "Support",
            description: "Get help with an existing project.",
            owner: "Delivery support",
            responseTime: "Same business day",
            contacts: [
              {
                id: "support-email",
                label: "Email",
                value: "support@example.com",
                href: "mailto:support@example.com",
              },
              {
                id: "support-phone",
                label: "Phone",
                value: "+1 (415) 555-0156",
                href: "tel:+14155550156",
              },
            ],
          },
        ]}
      />,
    );

    expect(screen.getByText("New project")).toBeVisible();
    expect(screen.getByText("Support")).toBeVisible();
    expect(screen.getByText("Same business day")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "projects@example.com" }),
    ).toHaveAttribute("href", "mailto:projects@example.com");
    expect(
      screen.getByRole("link", { name: "+1 (415) 555-0156" }),
    ).toHaveAttribute("href", "tel:+14155550156");
  });
});
