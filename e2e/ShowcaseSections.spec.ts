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
  await expect(page.getByRole("heading", { name: "HeroOffer" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "HeroPersonal" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "HeroProof" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "HeroShowcase" }),
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

  await page.getByRole("link", { name: /HeroPersonal/i }).click();

  await expect(page).toHaveURL(/\/sections\/hero-personal$/);
  await expect(
    page.getByRole("heading", { name: "HeroPersonal" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });

  const primaryAction = page.getByRole("link", {
    name: "Start a conversation",
  });

  await expect(primaryAction).toBeVisible();
});
