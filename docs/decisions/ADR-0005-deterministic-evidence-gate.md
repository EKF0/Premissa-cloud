# ADR-0005: Deterministic evidence gate outside the model

- Status: Accepted
- Date: 2026-08-31

## Decision

`@permissa/policy` computes confidence and admissibility from typed evidence
signals. Gemini proposes a status; the gate admits, downgrades or rejects it.
`RESEARCH_CLEARED` requires a passing gate and confidence >= 85. Only a
professional reviewer may finalize `BLOCKED`.

## Rationale

False clearance is the worst possible failure. A non-generative validator makes the
safety property testable and immune to prompt injection.

## Consequences

- The gate is the most heavily tested module in the repository.
- Reviewers change status only by adding admissible evidence, which triggers
  automatic recalculation.
- Formula and policy versions are persisted with every finding.
