<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Rules

## Structure

- Keep `app/` thin: routes, `layout`, providers, `globals.css`, and route handlers only.
- Put page and feature composition in `views/`.
- Put shared app-level components in `components/`.
- Put low-level UI primitives and shadcn/Radix wrappers in `components/ui/`.
- Put shared utilities and runtime config in `lib/`.
- Put API transport in `api/client.ts` and endpoint-specific calls in `api/endpoints/*`.
- Put shared domain types in `types/`.
- One React component per file. Do not create `shared.tsx`-style files that export multiple components, and do not hide extra components inside local JSX helpers like `renderSomething()`. If a function returns JSX and represents a reusable UI piece, move it into its own component file. Components live in component files, types in `types`, and texts/constants in dedicated constants files.

## Next.js

- Before changing framework behavior, read the relevant docs in `node_modules/next/dist/docs/`.
- Prefer route files that only wire data and render a view from `views/`.
- Keep page UI out of `app/**/page.tsx` when it can live in `views/`.
- Follow the existing Next 16 patterns already used in the repo, including async route params where applicable.

## TypeScript

- Use `type`, not `interface`.
- Use `import type` for type-only imports.
- Keep types close to their domain: shared types in `types/`, feature-specific types next to the feature.
- Avoid unnecessary abstractions and over-generic helpers.
- Public or reusable constants must use explicit types where appropriate and be named in `UPPER_SNAKE_CASE` format, for example `HEADER_NAVIGATION`.

## React

- Use arrow functions for feature and shared components:
  `export const Component = () => { ... }`.
- `page.tsx` and `layout.tsx` may use `default function`.
- Do not rewrite `components/ui` wrappers just to force arrow-function style.
- Add `use client` only when hooks, browser APIs, or client interactivity require it.
- Break large screens into small focused components.
- Prefer concise conditional rendering with `condition && <Component />` instead of `condition ? <Component /> : null`.

## Imports And Exports

- Use the `@/*` alias for root imports.
- Group imports by external first, internal second, with a blank line between groups.
- Use `index.ts` barrel exports for `views/*` public entry points.

## Styling

- Use Tailwind utility classes directly in JSX.
- Reuse tokens and shared utilities from `app/globals.css`.
- Use `cn()` from `@/lib/utils` for class merging.
- Preserve the existing visual language: soft borders, rounded corners, layered surfaces, restrained blur, and clean typography.
- Do not introduce a new styling approach when Tailwind and the current globals already solve the problem.

## UI And API

- Reuse existing primitives from `components/ui` before creating new ones.
- When extending `components/ui`, follow the current shadcn/Radix wrapper style with `React.ComponentProps`, `className`, `cn()`, and `cva` where appropriate.
- Do not scatter raw `fetch` calls across the app when the existing API client fits the use case.
- Reuse existing API and payload types from `types/`.

## Testing

- Use `Vitest` for unit/integration tests and `Playwright` for e2e.
- If UI, routes, or API behavior changes, check whether tests should be added or updated.

## General

- Follow SOLID and KISS.
- Prefer clean, simple, maintainable code over clever code.
- Remove unused code.
- If a local pattern already exists in the file or feature, continue it unless there is a strong reason to change it.
