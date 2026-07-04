import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Compass, MessageCircleMore } from "lucide-react";
import { describe, expect, it } from "vitest";

import {
  HeaderCentered,
  HeaderSimple,
  HeaderWithContacts,
} from "@/components/Header";

const logo = {
  label: "Northstar OS",
  href: "/",
  subtitle: "Support operations platform",
  icon: <Compass className="size-4" />,
};

const navigation = [
  { label: "Pricing", href: "/pricing" },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Support orchestration", href: "/solutions/support" },
      { label: "Knowledge routing", href: "/solutions/knowledge" },
    ],
  },
];

describe("Header variants", () => {
  it("opens and closes HeaderSimple mobile menu with aria updates and nested items", async () => {
    const user = userEvent.setup();

    render(
      <HeaderSimple
        logo={logo}
        navigation={[...navigation]}
        cta={{ label: "Book walkthrough", href: "/book" }}
        secondaryLinks={[{ label: "Customer login", href: "/login" }]}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Support orchestration")).toBeVisible();
    expect(screen.getByRole("link", { name: /customer login/i })).toBeVisible();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("closes HeaderSimple mobile menu after link selection", async () => {
    const user = userEvent.setup();

    render(
      <HeaderSimple
        logo={logo}
        navigation={[...navigation]}
        cta={{ label: "Book walkthrough", href: "/book" }}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    await user.click(trigger);
    await user.click(screen.getByRole("link", { name: /pricing/i }));

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("renders HeaderWithContacts contact content and social links", () => {
    render(
      <HeaderWithContacts
        logo={logo}
        navigation={[...navigation]}
        cta={{ label: "Schedule visit", href: "/visit" }}
        phone={{
          label: "Phone",
          value: "+1 (415) 555-0148",
          href: "tel:+14155550148",
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
      />,
    );

    expect(screen.getAllByText("+1 (415) 555-0148").length).toBeGreaterThan(0);
    expect(screen.getByText("1458 Bayfront Avenue, Suite 200")).toBeVisible();
    expect(screen.getByText("Mon-Fri, 8:00-19:00")).toBeVisible();
    expect(
      screen.getAllByRole("link", { name: /whatsapp/i }).length,
    ).toBeGreaterThan(0);
  });

  it("renders HeaderCentered left and right navigation groups separately", () => {
    render(
      <HeaderCentered
        logo={logo}
        leftNavigation={[
          { label: "Catalog", href: "/catalog" },
          { label: "Collections", href: "/collections" },
        ]}
        rightNavigation={[
          { label: "Journal", href: "/journal" },
          { label: "Visits", href: "/visits" },
        ]}
        cta={{ label: "Request lookbook", href: "/lookbook" }}
        contacts={[
          { label: "Studio line", value: "+1 (415) 555-0161" },
          { label: "Visits", value: "By appointment" },
        ]}
      />,
    );

    const leftNav = screen.getByRole("navigation", {
      name: /left navigation/i,
    });
    const rightNav = screen.getByRole("navigation", {
      name: /right navigation/i,
    });

    expect(
      within(leftNav).getByRole("link", { name: "Catalog" }),
    ).toBeVisible();
    expect(
      within(leftNav).getByRole("link", { name: "Collections" }),
    ).toBeVisible();
    expect(
      within(rightNav).getByRole("link", { name: "Journal" }),
    ).toBeVisible();
    expect(
      within(rightNav).getByRole("link", { name: "Visits" }),
    ).toBeVisible();
  });
});
