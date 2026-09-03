# Engineering constitution

This file governs all human and AI contributors.

## Authority order

1. `docs/DOCUMENTATION-INDEX.md`
2. `docs/PRODUCT-SPEC.md`
3. `packages/contracts` + generated `docs/api/*`
4. Accepted ADRs in `docs/decisions/`
5. Subsystem specs in `docs/`
6. Code and tests

If artifacts conflict, stop and escalate. Do not silently redefine a contract.

## Hard prohibitions

- No OpenAI, Anthropic, AWS, or Microsoft AI models, SDKs, or agent frameworks.
- No reuse of Delegara source code.
- No screenplay text, entity names, queries, evidence excerpts, reviewer comments,
  or raw provider payloads in logs, traces, metrics, or error responses.
- No model-assigned clearance status or confidence score.
- No `Research-cleared` without a passing evidence gate and confidence >= 85.
- No final `Blocked` outside professional review.
- No fabricated citations, mocked evidence, or fallback results in the demo path.
- No secrets in source, CI logs, job arguments, or client bundles.

## Required patterns

- Zod first: every payload has a schema; parse Firestore reads and provider output.
- Provider SDK types stay inside adapters.
- Domain services own state transitions and authorization.
- Every mutable aggregate uses a version precondition.
- UUIDv7 identifiers, generated server-side.
- Errors use RFC Problem Details with a stable `code`.
- Checkpoint workflow state after every completed entity.
- Write a usage-ledger entry after every provider call.

## Definition of done

- Requirement ID referenced in the PR.
- Contracts updated and generated artifacts regenerated.
- Unit, contract, and affected e2e tests pass.
- Coverage gates hold (90% lines/branches/functions/statements).
- Authorization negative tests included for new resources.
- Content-free logging verified.
- No critical/high dependency vulnerability.
