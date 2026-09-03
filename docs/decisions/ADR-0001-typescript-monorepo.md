# ADR-0001: TypeScript full-stack monorepo

- Status: Accepted
- Date: 2026-08-31

## Context

Nine implementation days, one engineer, shared validation between browser, API and
jobs. Contract drift is the main delivery risk.

## Decision

Single pnpm + Turborepo monorepo in TypeScript. `@permissa/contracts` (Zod) is the
only source of payload truth; `@permissa/policy` owns deterministic evidence logic
and is imported by both API and jobs.

## Alternatives

- Python backend with Google ADK Python: better ADK samples, but duplicates every
  schema and doubles the review surface.
- Separate repositories: slower cross-cutting changes, no shared contract package.

## Consequences

- One toolchain, one lint/test/coverage pipeline.
- ADK usage must be exercised through supported TypeScript/HTTP paths; verify
  eligibility before tranche 3.
