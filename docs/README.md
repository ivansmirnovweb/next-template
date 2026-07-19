# Website Development Documentation

This directory is the required starting point before developing or substantially changing a website.

Read the documents in this order:

1. [niche.md](./niche.md) — how an effective website should work in this niche.
2. [company.md](./company.md) — verified information about the specific company.
3. [workflow.md](./workflow.md) — the required process and completion criteria.

During page planning, read [components/README.md](../components/README.md) before inspecting component source code. It is the concise catalogue for choosing section variants.

## How to use this documentation

- `niche.md` and `company.md` together define the website's content and visual direction. Use them to choose sections, components, the page journey, theme, and colour palette.
- `company.md` is the source of truth for company facts. Do not invent prices, figures, testimonials, case studies, contact details, guarantees, licences, timelines, or any other claims that are not documented there.
- If required information is missing, identify what needs clarification before proceeding. Do not fill gaps with demonstration or fictional content.
- `components/README.md` is the selection guide for reusable sections and UI primitives. Internal showcase routes exist only to visually inspect the library; their examples are not content for a company website.
- The component library is read-only during normal website implementation. Compose pages from existing sections and provide content through typed props; modify or create library components only when the user explicitly requests it.

## Source-of-truth priority

When sources conflict, use this priority order:

1. An explicit clarification from the user in the current task.
2. `company.md` for company facts.
3. `niche.md` for strategy, structure, and communication.
4. `workflow.md` for the development process.
5. Code and showcase routes only for technical implementation and pattern selection.
