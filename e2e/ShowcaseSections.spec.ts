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
    page.getByRole("heading", { name: "TestimonialsCollection" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "TestimonialsFeatured" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "TestimonialsStories" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ProcessSteps" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ProcessDeliverables" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ProcessCollaboration" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FAQEssential" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FAQCategories" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "FAQWithContact" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "CTADirect" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "CTAReassurance" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "CTAChoice" })).toBeVisible();
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

test("renders testimonial variants without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/sections/testimonials-collection");

  await expect(page.getByText("Illustrative customer feedback")).toBeVisible();
  await expect(page.getByText("Rina Solberg")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Tom Ellis")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.goto("/sections/testimonials-featured");
  await expect(page.getByText("Leila Morton")).toBeVisible();
  await expect(
    page.getByText(
      "Illustrative client note — fictional demonstration content.",
    ),
  ).toBeVisible();

  await page.goto("/sections/testimonials-stories");
  await expect(page.getByText("Starting situation").first()).toBeVisible();
  await expect(page.getByText("Change after the work").first()).toBeVisible();
  await expect(page.getByText("Nora Bell")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});

test("renders process variants without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/sections/process-steps");

  await expect(page.getByText("Step 01")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Put the result to work")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.goto("/sections/process-deliverables");
  await expect(
    page.getByText(
      "A concise brief with priorities, risks, and the agreed scope.",
    ),
  ).toBeVisible();

  await page.goto("/sections/process-collaboration");
  await expect(page.getByText("Client").first()).toBeVisible();
  await expect(page.getByText("Team").first()).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});

test("renders CTA variants without horizontal overflow", async ({ page }) => {
  await page.goto("/sections/cta-direct");

  await expect(
    page.getByRole("link", { name: "Start a conversation" }),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(
    page.getByText("We will reply with the next practical step."),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.goto("/sections/cta-reassurance");
  await expect(page.getByText("No technical brief is required.")).toBeVisible();

  await page.goto("/sections/cta-choice");
  await expect(
    page.getByRole("link", { name: "Discuss the launch" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View selected work" }),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});

test("renders FAQ variants with accessible accordions and without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/sections/faq-essential");

  const costQuestion = page.getByRole("button", {
    name: "How is the project cost determined?",
  });

  await expect(costQuestion).toHaveAttribute("aria-expanded", "false");
  await costQuestion.click();
  await expect(costQuestion).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText(/scope, milestones, and fixed investment/i),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(
    page.getByText("What materials do you need from us?"),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);

  await page.goto("/sections/faq-categories");
  await expect(
    page.getByRole("heading", { name: "Planning the work" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Delivery and follow-through" }),
  ).toBeVisible();

  await page.goto("/sections/faq-with-contact");
  await expect(
    page.getByRole("link", { name: "Ask a project question" }),
  ).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => element.scrollWidth <= element.clientWidth),
  ).toBe(true);
});
