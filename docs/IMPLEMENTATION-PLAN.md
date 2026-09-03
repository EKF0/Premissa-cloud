# Implementation plan

Nine tranches. Each tranche ends with green CI, updated contracts and a
demonstrable behavior. No tranche may weaken the evidence gate.

## Tranche 0 - Foundations

Monorepo, contracts, policy package, CI, Terraform skeleton, Firestore rules,
health endpoints, golden fixture committed.

Exit: `pnpm lint typecheck test contracts:check` green; evidence-gate unit tests
pass; prohibited-dependency check passes.

## Tranche 1 - Identity and projects

Firebase Google sign-in, ID token verification, organization bootstrap, roles,
project create/list/load/delete, authorization negative tests.

Exit: no cross-tenant read or write is possible; deletion is auditable.

## Tranche 2 - Ingestion

Signed upload session, completion validation, browser PDF unlocking, low-privilege
parser job, scene extraction, script version immutability.

Exit: golden PDF and FDX both normalize to six scenes with identical entities.

## Tranche 3 - Entity register and queue

Gemini extraction of candidate entities, producer curation (edit, merge, remove,
add), register confirmation, Cloud Tasks admission, Firestore execution lease,
clearance job skeleton with per-entity checkpoints.

Exit: exactly one run executes at a time; duplicate task delivery is safe; resume
works from a checkpoint.

## Tranche 4 - Research and evidence

ADK root orchestrator, three specialists, Parallel adapter, citation normalization,
ownership/independence resolution, freshness policy, deterministic gate wiring,
usage ledger.

Exit: golden run reproduces the twelve-entity oracle; injection line never changes
a status.

## Tranche 5 - Review experience

Risk board, finding detail with citations and confidence breakdown, producer review,
changes-requested loop, reviewer invitation link, reviewer edits with evidence,
automatic recalculation.

Exit: only a professional reviewer can finalize Blocked.

## Tranche 6 - Reports

Immutable approved snapshot, Playwright/Chromium PDF renderer, rewrite worksheet,
evidence appendix, private storage and download.

Exit: rendered PDF matches the approved snapshot and leaks no raw payloads.

## Tranche 7 - Operations

Grafana MCP preflight and dashboards, budget alerts, kill switches, retention and
deletion worker, backup and restore rehearsal, runbook validation.

Exit: budget pause, degraded Grafana and provider outage all behave as specified.

## Tranche 8 - Submission readiness

Full golden e2e run, coverage gates, accessibility audit of critical flows,
rules-compliance matrix, claims-evidence matrix, three-minute demo script, rollback
rehearsal.

Exit: a cold-start demo run completes within ten minutes and inside budget.
