import { expect, test } from "@playwright/test";

test("renders the showcase catalog and navigates to a detail page", async ({
  page,
}) => {
  await page.goto("/components");

  await expect(
    page.getByRole("heading", { name: /component showcase navigation/i }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Button" })).toBeVisible();

  await page
    .getByRole("link", { name: /open detail page/i })
    .first()
    .click();

  await expect(page).toHaveURL(/\/components\/button$/);
  await expect(page.getByRole("heading", { name: "Button" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /back to catalog/i }),
  ).toBeVisible();
});
