# Next Template

Reusable `Next.js` baseline for App Router projects with:

- `TanStack Query` provider setup and SSR hydration pattern
- mirrored `api/endpoints/*` and `api/hooks/*` structure
- internal `GET /api/health` example
- `next-themes`, `nuqs`, `sonner`, `react-hook-form`, `zod`, `motion`
- `Vitest`, `Playwright`, `Husky`, `lint-staged`

## Stack Baseline

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `shadcn/ui`

## Environment

Copy the contract from [.env.example](./.env.example):

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Typed env access lives in `lib/env.ts`.

## Providers

Root providers are composed in `app/providers.tsx`:

- `NuqsAdapter`
- `ThemeProvider`
- `QueryClientProvider`
- `Sonner` toaster

`lib/react-query.ts` contains the shared Query Client baseline:

- browser singleton for client components
- fresh client per server request
- SSR-friendly defaults with `staleTime`, `retry`, and `refetchOnWindowFocus`

## API Structure

Use this mirrored pattern:

```text
api/
  endpoints/
    system/
      get-health.ts
  hooks/
    system/
      use-health-query.ts
```

Rules:

- `api/endpoints/*` is the network layer
- `api/hooks/*` wraps endpoints with `TanStack Query`
- internal server logic lives outside this layer
- route handlers adapt server logic to HTTP

Current example:

- shared source: `lib/server/health.ts`
- route handler: `app/api/health/route.ts`
- endpoint: `api/endpoints/system/get-health.ts`
- hook: `api/hooks/system/use-health-query.ts`

## SSR Query Pattern

Server prefetch lives in `app/page.tsx`:

1. create a server-side `QueryClient`
2. prefetch with the same query key used on the client
3. wrap the client tree with `HydrationBoundary`

Client components then consume the cached data with the mirrored hook.

## Scripts

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm test --run
pnpm test:e2e
```

## Tests

- unit: `tests/api-client.test.ts`
- component: `tests/template-demo-form.test.tsx`
- e2e smoke: `e2e/home.spec.ts`
