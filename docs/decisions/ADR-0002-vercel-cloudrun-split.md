# ADR-0002: Vercel web plus Cloud Run API and jobs

- Status: Accepted
- Date: 2026-08-31

## Decision

Next.js on Vercel; NestJS API, parser job and clearance job on Cloud Run in
`us-central1`.

## Rationale

- Instant preview deployments and fast frontend rollback.
- Long-running research work belongs in Cloud Run Jobs, not serverless requests.
- Keeps Google Cloud and Gemini/ADK/Parallel unambiguously in the runtime path.

## Consequences

- Rollback is two-sided: promote previous Cloud Run revision and previous Vercel
  deployment.
- CORS and signed-upload origins must be restricted to approved Vercel domains.
- README and demo must make Google Cloud runtime usage explicit.
