# Agent Workflow for Website Development

## 1. Preparation

1. Read `docs/README.md`, then `niche.md` and `company.md`.
2. Identify verified facts, constraints, the primary conversion action, and missing information.
3. If critical information is missing, state exactly what requires clarification. Do not create fictional facts to fill page sections.

## 2. Page Planning

1. Define the visitor journey: initial understanding → value → proof → objection handling → action.
2. Define the visual direction from `niche.md` and the company brand: theme, colour palette, density, image type, and interface character. Apply the selected theme through the shared design tokens in `app/globals.css`, not by introducing unrelated colours in individual sections.
3. Read `components/README.md` and select section variants based on the niche goals and company facts. Do not add a section merely because it is available in the library; every section must serve a clear purpose in the user journey.
4. Open the source and typed props only for the selected components. Confirm that `company.md` contains the facts, assets, and actions required by every selected section.
5. Create a concise implementation plan that names the selected theme and section sequence. When the task is to implement the website, proceed with that plan without waiting for approval unless critical company information is missing.
6. For significant decisions, briefly explain the connection between the documentation and the selected theme or section.

## 3. Development

1. Compose the page from the planned existing sections and UI primitives. Do not modify or create library components unless the user explicitly requests it.
2. Pass content through typed props and keep page composition in `views/`.
3. Replace template metadata, navigation, links, contacts, form copy, and legal links with company-specific data.
4. Use real or approved assets. Add accurate `alt` text to every meaningful image.
5. Do not copy demonstration names, figures, testimonials, links, or images from showcase routes into the company website.
6. For every new public page, add its canonical URL to `app/sitemap.ts` and provide unique title, description, and canonical metadata. Add JSON-LD only when it accurately represents the page or company.

## 4. Optional Sub-Agent Use

The main agent owns site planning, implementation, integration, and final decisions. Use sub-agents only when their work is independent of the main implementation.

Appropriate uses include:

- Independent niche or company research when the required documentation has not been provided.
- Isolated implementation tasks that do not modify the same files or shared global styles.
- A post-implementation content audit for unsupported claims, placeholder content, and inconsistencies with `company.md`.
- A post-implementation UI and technical audit for responsiveness, accessibility, metadata, links, forms, and relevant checks.

Do not split one page, one component, global design tokens, or a shared layout between parallel sub-agents. Review every sub-agent finding before making the final implementation decision.

## 5. Completion Check

- Every public claim appears in `company.md` or was confirmed by the user.
- Sections support the user journey described in `niche.md`.
- The primary action is visible in the first screen and repeated at appropriate points on the page.
- Check the mobile layout, form states, links, navigation, and contrast.
- Update metadata and required SEO information.
- Confirm that every public page is included in `app/sitemap.ts` with its final canonical URL and has unique metadata.
- Run relevant checks: `pnpm typecheck`, `pnpm lint`, tests, and e2e tests when UI or routes change.
- Ensure no template data, fictional proof, or unused code related to the finished website remains in the project.
