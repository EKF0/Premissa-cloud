# ADR-0003: Firestore as operational store and event stream

- Status: Accepted
- Date: 2026-08-31

## Decision

Firestore holds projects, script versions, entities, runs, checkpoints, findings,
reviews, reports and the activity event stream. The browser subscribes to an
owner-scoped event projection.

## Rationale

- Live progress without holding SSE/WebSocket connections on Cloud Run.
- Built-in reconnection and missed-event recovery.
- The same collection doubles as the audit timeline.

## Consequences

- Security Rules are a first-class deliverable with their own tests.
- Events must be content-free; milestone events persist for project lifetime while
  low-level telemetry expires after seven days.
- Migrations must be backward compatible.
