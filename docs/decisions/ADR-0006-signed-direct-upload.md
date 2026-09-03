# ADR-0006: Signed direct upload

- Status: Accepted
- Date: 2026-08-31

## Decision

The browser uploads directly to a private Cloud Storage object using a
single-object signed URL valid for about ten minutes. The API validates identity,
quota and declared metadata before issuing it, then verifies size, extension,
signature and checksum before processing. Encrypted PDFs are unlocked in the
browser; the password is never transmitted.

## Rationale

Keeps large confidential files out of the API and Vercel request paths, and removes
any need to store or forward a PDF password.

## Consequences

- Two-step upload protocol with an explicit completion call.
- Incomplete or invalid objects are deleted.
- CORS is restricted to approved origins.
