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
    page.getByRole("heading", { name: "AboutOverview" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "AboutStory" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "AboutPeople" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "BenefitsOutcomes" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "BenefitsContrast" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "BenefitsVisual" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ServicesCatalog" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ServicesGuided" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ServicesFeatured" }),
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

test("renders About variants without horizontal overflow", async ({ page }) => {
  await page.goto("/sections/about-overview");

  await expect(
    page.getByRole("heading", { name: "AboutOverview" }),
  ).toBeVisible();
  await expect(page.getByText("1–2")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Weekly")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.goto("/sections/about-story");
  await expect(
    page.getByText("The launch plan outgrew the page"),
  ).toBeVisible();

  await page.goto("/sections/about-people");
  await expect(page.getByText("Maya Chen")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});

test("renders the visual benefits showcase without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/sections/benefits-visual");

  await expect(
    page.getByRole("heading", { name: "BenefitsVisual" }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Person resting by the sea at sunset" }),
  ).toBeVisible();
  await expect(page.getByText("Today’s plan")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });

  await expect(page.getByText("Today’s plan")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});

test("renders services variants without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/sections/services-featured");

  await expect(page.getByText("Launch-ready website")).toBeVisible();
  await expect(page.getByText("Offer strategy")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Offer → proof → conversation")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});
