# PERMISSA

Evidence-gated screenplay clearance research for independent producers.

PERMISSA parses a screenplay, extracts a producer-confirmed register of clearable
entities, researches each one live through the Parallel Search API, and produces a
risk-first clearance packet in which every status is backed by retrieved citations.

**PERMISSA produces research support. It does not produce legal advice, legal
opinions, clearance certification, or insurer/studio approval.**

## Status

Pre-implementation scaffold (v0.1). The specification set is frozen; feature code is
not yet written.

## Stack

| Layer         | Technology                                      |
| ------------- | ----------------------------------------------- |
| Web           | Next.js, React, TypeScript, Vercel              |
| API           | NestJS, TypeScript, Cloud Run                   |
| Workers       | Cloud Run Jobs (parser, clearance), Cloud Tasks |
| Model         | Gemini via Vertex AI (`us-central1`)            |
| Agents        | Google ADK root orchestrator + 3 specialists    |
| Research      | Parallel Search API (runtime, mandatory)        |
| Observability | OpenTelemetry + Grafana Cloud MCP               |
| Data          | Firestore, Cloud Storage, Secret Manager        |
| Infra         | Terraform                                       |

## Layout

```text
apps/web           Next.js application
apps/api           NestJS /v1 API
apps/worker        Clearance + parser job entrypoints
packages/contracts Zod contracts (single source of truth)
packages/policy    Deterministic evidence gate + confidence formula
docs/              Specifications, ADRs, generated API artifacts
infra/terraform    Infrastructure as code
tests/fixtures     Golden screenplay fixture and oracle
```

## Commands

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm contracts:generate   # regenerate OpenAPI + JSON Schema
pnpm contracts:check      # fail on generated-artifact drift
```

## Golden fixture

`tests/fixtures/golden/` holds _The Final Witness_, a synthetic 10-page bilingual
screenplay with 12 canonical entities and a manually approved expected-findings
oracle. Deterministic tests assert the oracle; live runs follow current evidence.

## Licence

AGPL-3.0-only. See `LICENSE`.
