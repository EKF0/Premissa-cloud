# ADR-0008: Immutable script, run and report versions

- Status: Accepted
- Date: 2026-08-31

## Decision

Script versions, research runs, review revisions and approved report versions are
immutable. Corrections create new versions. Mutable aggregates use integer version
preconditions.

## Rationale

Clearance work is evidentiary. Reviewers and insurers need a stable record of what
was known, when, and under which policy version.

## Consequences

- More storage and more identifiers.
- Deletion is an explicit auditable workflow rather than in-place mutation.
- Reports pin schema, evidence-policy and confidence-formula versions.
