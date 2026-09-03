# Generated API artifacts

`json-schema/` is generated from `packages/contracts` by:

```bash
pnpm contracts:generate
```

CI runs `pnpm contracts:check` and fails on drift. Do not hand-edit generated files.

`openapi.yaml` is authored alongside the contracts and must reference the same
schemas; endpoint surface is defined in the Backend, API & Data Contracts spec.
