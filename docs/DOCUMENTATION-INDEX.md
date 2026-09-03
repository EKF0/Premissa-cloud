# Documentation index

Authority order:

1. This index
2. `PRODUCT-SPEC.md`
3. `packages/contracts` and generated `docs/api/*`
4. Accepted ADRs in `decisions/`
5. Subsystem specifications
6. Code and tests

## Canonical specifications

The frozen v0.1 specification set lives in Notion and is mirrored here as needed:

| Document                               | Governs                                     |
| -------------------------------------- | ------------------------------------------- |
| Product Specification & MVP Scope      | scope, users, statuses, acceptance criteria |
| System Architecture & Technology Stack | components, runtime, topology               |
| Frontend & Experience Specification    | routes, states, accessibility               |
| Backend, API & Data Contracts          | modules, endpoints, state machines          |
| AI, Agent & Evidence Policy            | agents, tools, evidence tiers               |
| Status Decision Table                  | admissibility per status                    |
| Deterministic Confidence Formula       | scoring, caps, invalidations                |
| Source Freshness & Reuse Matrix        | retrieval, publication, registry ages       |
| Provider & Tool Contracts              | Gemini, Parallel, Grafana boundaries        |
| Infrastructure, Security & Operations  | Terraform, IAM, telemetry                   |
| Threat Model, IAM & Audit Policy       | trust boundaries, audit                     |
| Data Lifecycle, Backup & Recovery      | deletion, backups, restores                 |
| Cost Model & Runtime Budget Policy     | budgets, quotas, alerts                     |
| API & Schema Conventions               | Zod, UUIDv7, Problem Details, cursors       |
| Golden Screenplay & Oracle             | fixture and expected findings               |
| Test, CI/CD, Release & Compliance Plan | gates, rollback, evidence                   |
| Implementation Decision Record         | consolidated accepted decisions             |

## Change process

1. Open a decision proposal referencing requirement IDs.
2. Record impact on product, security, cost, tests and public claims.
3. Obtain product and technical owner approval.
4. Add or supersede an ADR.
5. Update contracts and regenerate artifacts.
6. Update tests and traceability.
