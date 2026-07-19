# Components Library Catalogue

Read this catalogue after `docs/niche.md` and `docs/company.md`, before opening component source code. It helps select the right section variant for the website being planned.

This is a decision guide, not a replacement for typed props. After selecting a section, inspect only that component's source and types to confirm its exact data contract.

Every public claim, proof point, image, contact detail, and action used by a selected section must be supported by `docs/company.md` or an explicit user confirmation.

## Header

### HeaderSimple

Best for: websites that need a focused brand mark, primary navigation, and one clear conversion action.

Use when: company context does not require prominent contacts or a split, editorial navigation layout.

Requires: a logo, navigation links, and optionally a CTA or secondary mobile-only links.

### HeaderWithContacts

Best for: local or service businesses where a phone number and operational details are important before the first scroll.

Use when: visitors need immediate access to a phone number, address, opening hours, or social profiles.

Requires: a logo, navigation links, and a phone contact; address, hours, social links, and CTA are optional.

### HeaderCentered

Best for: brand-led websites that benefit from a centred logo and balanced navigation on both sides.

Use when: the primary navigation can be meaningfully divided into left and right groups, with optional compact contact details.

Requires: a logo and separate left and right navigation arrays; CTA, mobile quick action, contacts, and social links are optional.

## Hero

### HeroOffer

Best for: a direct commercial proposition with a clear primary conversion action.

Use when: the headline and offer should remain the focus, optionally supported by trust content or a visual.

Requires: a title, description, and primary action; eyebrow, secondary action, trust content, and visual are optional.

### HeroProof

Best for: companies whose main proposition is strengthened by verified metrics, ratings, guarantees, or client recognition.

Use when: the visitor needs concrete evidence of credibility alongside the main offer.

Requires: a title, description, primary action, and one or more structured proof items; optional proof elements must be verified company facts.

### HeroShowcase

Best for: businesses that need to demonstrate a tangible product, project, interface, portfolio item, or result immediately.

Use when: a strong visual explains or sells the offer better than text alone.

Requires: a title, description, primary action, and visual; eyebrow, secondary action, caption, and supporting proof are optional.

### HeroPersonal

Best for: founder-led, expert-led, or relationship-driven companies where a specific person builds trust.

Use when: the visitor should meet the responsible specialist or leader before deciding to contact the company.

Requires: a title, role, description, portrait with meaningful alt text, and primary action; secondary action and concise proof labels are optional.

## About

### AboutOverview

Best for: a concise introduction to the company, its approach, and its most relevant verified facts.

Use when: the page needs a flexible company overview rather than a chronological story or individual profiles.

Requires: a title and one or more paragraphs; image, factual metrics, and action are optional.

### AboutStory

Best for: companies with a distinctive founding problem, idea, or evolution that reinforces their positioning.

Use when: the company narrative helps visitors understand why the approach exists and how it developed.

Requires: a title, introduction, problem, idea, and one or more chronological stages; image and action are optional.

### AboutPeople

Best for: teams, studios, practices, or service companies where named people and expertise are central trust signals.

Use when: the buyer benefits from knowing who will perform or lead the work.

Requires: a title and one or more people with name, role, portrait, description, and meaningful image alt text; expertise facts and actions are optional.

## Benefits

### BenefitsOutcomes

Best for: communicating a clear set of customer outcomes or advantages in a scannable card grid.

Use when: each benefit can stand independently without needing a comparison or visual demonstration.

Requires: one or more items with a title and description; section title, description, and icons are optional.

### BenefitsContrast

Best for: showing how the company resolves common customer problems or replaces an undesirable alternative.

Use when: the contrast between a current pain point and a better solution is a primary persuasion mechanism.

Requires: one or more items with a problem and solution; descriptions and labels for the two sides are optional.

### BenefitsVisual

Best for: benefits that are more convincing when paired with imagery, diagrams, before-and-after material, or custom visual content.

Use when: visitors need to see the result, process, or proof behind each advantage.

Requires: one or more items with title, description, and either an image with meaningful alt text or custom visual content; captions are optional.

## Services

### ServicesCatalog

Best for: a clear, relatively equal set of services that visitors can compare and explore independently.

Use when: the company has a defined service list and each direction can be described as a separate offer.

Requires: one or more service items with title and description; visuals, icons, inclusions, and per-service actions are optional.

### ServicesGuided

Best for: audiences who arrive with a situation or problem rather than knowing which service to choose.

Use when: the site should map customer needs to a recommended solution, services, or expected result.

Requires: one or more items with a customer need, recommended solution, and either relevant services or an expected result; actions are optional.

### ServicesFeatured

Best for: companies with one priority service that deserves stronger emphasis than supporting offers.

Use when: the site should direct demand toward a flagship service while keeping additional services visible.

Requires: a featured service with title, description, outcomes, and primary action, plus an array of optional supporting services; the featured visual is optional.

## Works

### WorksGallery

Best for: a visual portfolio of several projects that visitors can scan and compare quickly.

Use when: each project has an image, category, concise description, and optionally tags or a detail-page action.

Requires: a set of real project images with accurate alt text, titles, categories, and descriptions.

### WorksFeatured

Best for: a portfolio with one priority project that deserves more emphasis than the supporting work.

Use when: the company has a standout project and can describe the services delivered and, ideally, its result.

Requires: an ordered project list with images, context, and services for every item; the first item becomes featured.

### WorksCaseStudies

Best for: evidence-led work that needs to explain how a challenge was solved and what changed.

Use when: visitors need detailed proof before choosing a high-consideration or complex service.

Requires: verified context, challenge, solution, and result for each case, plus any claimed metrics, duration, industry, services, images, or links.

## Testimonials

### TestimonialsCollection

Best for: a compact collection of short client endorsements that provides broad social proof.

Use when: the company has several attributable testimonials that do not need extensive background.

Requires: a verified quote and named author for every item, plus real ratings, logos, avatars, or source links where provided.

### TestimonialsFeatured

Best for: one especially persuasive client perspective that should become a focal proof point.

Use when: a single customer quote, outcome, brand logo, image, or supporting media is stronger than a collection of short reviews.

Requires: a verified quote and attributable author, plus any stated result, logo, source link, image, or custom media.

### TestimonialsStories

Best for: detailed customer stories that show a before-and-after transformation alongside the testimonial.

Use when: the audience needs to understand the client's starting situation, the outcome, and the credibility behind the quote.

Requires: a verified quote, attributable author, context, starting situation, outcome, and any claimed metric, image, or source link.

## Process

### ProcessSteps

Best for: a clear, straightforward chronological explanation of how the service is delivered.

Use when: the company needs to reduce uncertainty by showing sequential stages, timings, and responsibilities at a high level.

Requires: an ordered list of real steps with titles and descriptions, plus only confirmed durations, markers, or icons.

### ProcessDeliverables

Best for: a process where the tangible output of every stage is an important buying argument.

Use when: visitors need to see not only what happens during the work but also what they receive after each step.

Requires: an ordered list of real steps with descriptions and a specific deliverable for each, plus only confirmed durations or supporting accents.

### ProcessCollaboration

Best for: a transparent partnership model with meaningful responsibilities on both the client and provider sides.

Use when: successful delivery depends on customer participation and the site should make expectations explicit.

Requires: an ordered list of real stages with accurate client actions, provider actions, and any confirmed durations or shared outcomes.

## Contacts

### ContactsChannels

Best for: presenting several direct communication channels such as phone, email, messenger, or sales contact.

Use when: visitors should choose the most convenient way to reach the company or a specific contact person.

Requires: verified channel labels, values, and links, plus only confirmed descriptions, response availability, contact people, and icons.

### ContactsLocation

Best for: companies with one or more physical offices, showrooms, branches, or service locations.

Use when: visitors need an address, opening hours, phone number, arrival details, accessibility information, directions, or a map.

Requires: verified location names and addresses, plus only confirmed hours, phone links, landmarks, accessibility details, direction links, and map embeds.

### ContactsRouting

Best for: companies that need to direct different enquiries to the appropriate person, department, or service route.

Use when: the visitor's request type determines who should handle it and which contact methods are relevant.

Requires: verified route titles, descriptions, owners, and one or more real contact methods for every route, plus only confirmed response times and actions.

## FAQ

### FAQEssential

Best for: a focused set of common questions that needs a simple, distraction-free answer list.

Use when: the company has one clear FAQ topic and no need to separate questions by service, audience, or stage.

Requires: a non-empty list of confirmed questions and answers.

### FAQCategories

Best for: a large or diverse FAQ that benefits from grouping questions into distinct topics.

Use when: questions naturally belong to categories such as services, pricing, process, guarantees, or delivery.

Requires: one or more non-empty categories, each with a clear title and confirmed questions and answers.

### FAQWithContact

Best for: visitors who may still need personal guidance after reviewing common questions.

Use when: the company can offer a meaningful next step, such as a consultation, estimate, or direct contact.

Requires: confirmed FAQ content plus a contact-card title, primary action, and any stated response expectation.

## CTA

### CTADirect

Best for: a clear, low-friction final action with no need to explain additional conditions.

Use when: the desired conversion action is obvious and the visitor is ready to proceed.

Requires: a specific primary action, destination, and optional supporting note.

### CTAReassurance

Best for: offers where trust, safety, or perceived risk needs to be addressed before conversion.

Use when: the company has concrete conditions such as guarantees, transparent pricing, response times, or commitment-free consultations.

Requires: a primary action and a list of confirmed reassurance statements; never use generic or unverified claims.

### CTAChoice

Best for: audiences with two valid next steps or different levels of purchase readiness.

Use when: the company should let visitors choose between actions such as requesting an estimate or viewing completed work.

Requires: two clearly distinct actions and an optional note explaining the choice.

## Footer

### FooterSimple

Best for: a compact landing page with minimal navigation and a lightweight closing area.

Use when: the site needs only a logo, a small set of links, optional social links, and legal information.

Requires: a logo, copyright text, and any applicable navigation, social, or legal links.

### FooterColumns

Best for: a content-rich site that needs grouped navigation, contacts, social links, and legal information.

Use when: the company has several important destinations or service groups that must remain accessible at the end of the page.

Requires: a logo, copyright text, and at least one meaningful navigation group; contacts and social links are optional.

### FooterWithContacts

Best for: service companies where phone, email, address, working hours, and a direct contact action support conversion.

Use when: the footer should act as a final contact point rather than only a navigation area.

Requires: a logo, copyright text, and confirmed contact details; navigation, social links, CTA, and legal links are optional.

## Supporting Components

### LeadForm

Best for: collecting a visitor's name, email address, and short project request.

Use when: the lead API is configured and the default three-field form matches the company's conversion flow.

Requires: a working lead submission endpoint and verified form copy if the default English labels are not appropriate.

### ThemeToggle

Best for: internal development or products where visitors should explicitly choose light, dark, or system appearance.

Use when: theme switching is intentionally part of the product experience, not merely a template demonstration feature.

Requires: the application theme provider and support for light, dark, and system themes.

## UI Primitives

These are implementation primitives, not selectable landing-page sections. Reuse them instead of recreating equivalent controls.

- `Accordion`
- `Badge`
- `Button`
- `Card`
- `Checkbox`
- `Dialog`
- `DropdownMenu`
- `Input`
- `Label`
- `RadioGroup`
- `Select`
- `Sheet`
- `Switch`
- `Tabs`
- `Textarea`
