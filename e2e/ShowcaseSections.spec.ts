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

  await page
    .getByRole("link", { name: /open detail page/i })
    .first()
    .click();

  await expect(page).toHaveURL(/\/sections\/header-simple$/);
  await expect(
    page.getByRole("heading", { name: "HeaderSimple" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });

  await page
    .getByRole("button", { name: /open navigation menu/i })
    .nth(1)
    .click();

  await expect(
    page.getByRole("link", { name: /book walkthrough/i }).last(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /support orchestration/i }),
  ).toBeVisible();

  await page.keyboard.press("Escape");

  await expect(
    page.getByRole("link", { name: /book walkthrough/i }),
  ).not.toBeVisible();
});
