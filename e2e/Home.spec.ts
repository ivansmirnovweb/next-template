import { expect, test } from '@playwright/test';

test('renders the baseline template page', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: /Next\.js starter wired for providers/i,
    }),
  ).toBeVisible();
  await expect(page.getByText('Health Check')).toBeVisible();
  await expect(page.getByText('healthy')).toBeVisible();
});
