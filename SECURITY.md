# Security policy

## Reporting

Report suspected vulnerabilities privately to the PERMISSA platform admin. Do not open
a public issue. Include reproduction steps and impact. Do not include third-party
screenplay content.

## Scope

Supported: current `main` deployment.

Priority classes:

- Cross-tenant data access
- Signed-upload misuse
- Provider credential exposure
- Prompt injection that alters tools, policy, or workflow state
- Evidence-gate bypass producing an unsupported `Research-cleared`
- Cost-exhaustion paths
- Content leakage into logs, telemetry, audit records, or backups

## Handling

Affected users are notified after confirmed unauthorized access or material impact.
Secrets are rotated immediately on suspected exposure.
