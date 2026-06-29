import { expect, test } from "@playwright/test";

test("renders section catalog, opens a detail page, and verifies mobile menu", async ({
  page,
}) => {
  await page.goto("/sections");

  await expect(
    page.getByRole("heading", {
      name: /section showcase navigation/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "HeaderSimple" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "HeaderWithContacts" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "HeaderCentered" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FooterSimple" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FooterColumns" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FooterWithContacts" }),
  ).toBeVisible();

  await page.getByRole("link", { name: /FooterColumns/i }).click();

  await expect(page).toHaveURL(/\/sections\/footer-columns$/);
  await expect(
    page.getByRole("heading", { name: "FooterColumns" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });

  const resourcesTrigger = page.getByRole("button", { name: "Resources" });

  await resourcesTrigger.click();

  await expect(resourcesTrigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();

  await resourcesTrigger.click();

  await expect(resourcesTrigger).toHaveAttribute("aria-expanded", "false");
});
