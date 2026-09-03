# Contributing

1. Read `AGENTS.md` and `docs/DOCUMENTATION-INDEX.md`.
2. Branch from `main`. `main` is protected; merges deploy to production.
3. Reference a requirement ID and, for architecture changes, an ADR.
4. Run `pnpm lint typecheck test contracts:check` before opening a PR.
5. Never commit real screenplays, secrets, or provider payloads.
6. Use only synthetic fixtures under `tests/fixtures/`.
