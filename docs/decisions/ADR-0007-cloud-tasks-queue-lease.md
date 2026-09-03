# ADR-0007: Cloud Tasks coordinator with Firestore execution lease

- Status: Accepted
- Date: 2026-08-31

## Decision

Run admission enqueues a Cloud Task. A coordinator transactionally acquires a
global Firestore execution lease, then launches one Cloud Run Job execution.
Workflow state is checkpointed after every completed entity; the usage ledger is
written after every provider call.

## Rationale

Durable queueing survives API restarts, enforces one concurrent run, and makes
duplicate task delivery safe. Per-entity checkpoints avoid repaying for completed
Parallel calls after a pause.

## Consequences

- Queued runs need position, expiry and cancellation semantics.
- Lease expiry must be handled to avoid a stuck queue.
- Resume launches a new job execution from the checkpoint.
