import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Compass, MessageCircleMore, PhoneCall } from "lucide-react";
import { describe, expect, it } from "vitest";

import {
  FooterColumns,
  FooterSimple,
  FooterWithContacts,
} from "@/components/Footer";

const logo = {
  label: "Northstar OS",
  href: "/",
  subtitle: "Support operations platform",
  icon: <Compass className="size-4" />,
};

describe("Footer variants", () => {
  it("renders FooterSimple navigation and legal links", () => {
    render(
      <FooterSimple
        logo={logo}
        navigation={[
          { label: "Pricing", href: "/pricing" },
          { label: "Case studies", href: "/cases" },
        ]}
        socialLinks={[{ label: "LinkedIn", href: "/linkedin" }]}
        copyright="© 2026 Northstar OS."
        legalLinks={[
          { label: "Privacy policy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ]}
      />,
    );

    const nav = screen.getByRole("navigation", { name: /footer navigation/i });
    const legalNav = screen.getByRole("navigation", { name: /legal links/i });

    expect(within(nav).getByRole("link", { name: "Pricing" })).toBeVisible();
    expect(
      within(legalNav).getByRole("link", { name: "Privacy policy" }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  });

  it("renders dynamic FooterColumns groups and toggles the mobile accordion", async () => {
    const user = userEvent.setup();

    render(
      <FooterColumns
        logo={logo}
        description="Routing and service operations."
        groups={[
          {
            title: "Platform",
            links: [{ label: "Automations", href: "/automations" }],
          },
          {
            title: "Resources",
            links: [
              { label: "Documentation", href: "/docs" },
              { label: "Status", href: "/status" },
            ],
          },
        ]}
        contacts={[
          {
            label: "Phone",
            value: "+1 (415) 555-0193",
            href: "tel:+14155550193",
          },
        ]}
        copyright="© 2026 Northstar OS."
        legalLinks={[{ label: "Privacy policy", href: "/privacy" }]}
      />,
    );

    expect(screen.getAllByText("Platform").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Resources").length).toBeGreaterThan(0);

    const trigger = screen.getByRole("button", { name: "Resources" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const accordion = trigger.closest('[data-slot="accordion"]');

    expect(accordion).not.toBeNull();
    expect(
      within(accordion as HTMLElement).getByRole("link", {
        name: "Documentation",
      }),
    ).toBeVisible();

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("renders FooterWithContacts contact content and cta", () => {
    render(
      <FooterWithContacts
        logo={logo}
        description="Preventive care and recovery planning."
        phone={{
          label: "Phone",
          value: "+1 (415) 555-0148",
          href: "tel:+14155550148",
        }}
        email={{
          label: "Email",
          value: "hello@example.com",
          href: "mailto:hello@example.com",
        }}
        address={{
          label: "Address",
          value: "1458 Bayfront Avenue, Suite 200",
        }}
        hours={{
          label: "Hours",
          value: "Mon-Fri, 8:00-19:00",
        }}
        socialLinks={[
          {
            label: "WhatsApp",
            href: "/whatsapp",
            icon: <MessageCircleMore className="size-4" />,
          },
        ]}
        navigation={[{ label: "Programs", href: "/programs" }]}
        cta={{
          label: "Schedule visit",
          href: "/schedule",
          variant: "secondary",
        }}
        copyright="© 2026 Harbor Wellness."
        legalLinks={[{ label: "Privacy policy", href: "/privacy" }]}
        supplementaryText="Billing details available after booking."
      />,
    );

    expect(screen.getAllByText("+1 (415) 555-0148").length).toBeGreaterThan(0);
    expect(screen.getByText("hello@example.com")).toBeVisible();
    expect(screen.getByText("1458 Bayfront Avenue, Suite 200")).toBeVisible();
    expect(screen.getByText("Mon-Fri, 8:00-19:00")).toBeVisible();
    expect(screen.getByRole("link", { name: /schedule visit/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /whatsapp/i })).toBeVisible();
  });

  it("omits optional FooterWithContacts blocks when data is not provided", () => {
    render(
      <FooterWithContacts
        logo={{
          label: "Service Desk",
          href: "/",
          icon: <PhoneCall className="size-4" />,
        }}
        copyright="© 2026 Service Desk."
      />,
    );

    expect(
      screen.queryByRole("navigation", { name: /footer navigation/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("navigation", { name: /legal links/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /schedule visit/i }),
    ).not.toBeInTheDocument();
  });
});
