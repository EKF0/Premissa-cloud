# ADR-0004: Root orchestrator plus three specialists

- Status: Accepted
- Date: 2026-08-31

## Decision

Google ADK root orchestrator delegates to People/Character, Brand-Business-Product
and Production Title specialists. Maximum two specialist tasks run concurrently.

## Rationale

- Matches the three supported entity classes exactly.
- Bounded prompts and tool scopes per class improve query quality.
- Concurrency of two respects the ten-minute deadline and the 50-call cap.

## Consequences

- Adding an entity class requires a new specialist contract and oracle update.
- Specialists return typed proposals only; they cannot write persistence or
  finalize status.
