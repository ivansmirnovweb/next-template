import { expect, test } from "@playwright/test";

test("renders the baseline template page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Next\.js project template/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(/a clean shell for app router, ui primitives/i),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /open ui/i })).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: /browse sections/i }),
  ).toBeVisible();
});
