# Runtime verification checklist

Complete before tranche 3. Record the exact resolved values in this file.

| Item | To confirm | Recorded value |
| --- | --- | --- |
| Gemini model IDs | Available fast and strong model identifiers on the regional Vertex AI endpoint | pending |
| Vertex endpoint | `us-central1` regional host and required IAM role | pending |
| ADK package | Supported TypeScript/HTTP path and version | pending |
| Parallel SDK | Package name, version, auth header, rate limits | pending |
| Parallel spend cap | Provider-side financial ceiling configured | pending |
| Grafana MCP | Server URL, auth method, allowlisted tool names | pending |
| Cloud Run Jobs | Max timeout and checkpoint-safe termination signal | pending |
| Cloud Tasks | OIDC target configuration for the coordinator | pending |
| Firebase Admin | Token verification and custom claim strategy | pending |

Rule: no implementation may hardcode an unverified model, package or endpoint.
Until a row is confirmed, the adapter must fail closed rather than guess.
