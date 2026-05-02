# Contributing

Thanks for contributing.

## Who this guide is for

This guide is for contributors opening issues and pull requests.

- For package usage and API behavior, see [README.md](./README.md).
- For release and publishing operations, see [docs/maintainers.md](./docs/maintainers.md).

## Prerequisites

- Node.js 18+
- pnpm 8+

## Setup

```bash
pnpm install
```

## Local development checks

Run targeted checks while developing:

```bash
pnpm run lint
pnpm run test
pnpm run build
```

Run full checks before opening a PR:

```bash
pnpm run ci
```

## Pull request workflow

1. Pick or open an issue (recommended for larger changes).
2. Implement your change and keep the PR focused.
3. Add or update tests for behavior changes.
4. Add a changeset when package-facing behavior changes.
5. Run `pnpm run ci`.
6. Open a PR with a clear summary and testing notes.

## What to include in your PR description

- Problem statement: what is being fixed or improved.
- Approach summary: how the change works.
- Test evidence: what was run and what passed.
- Behavior impact: user-facing or package-facing changes.

## Documentation contributions

Corrections to wording, grammar, and examples are welcome.

If behavior changes, update related docs (for example `README.md`) in the same PR when possible.

## Project conventions

- Preserve Macedonian grammar behavior unless intentionally changing it.
- Keep conversion functions pure and deterministic.
- Prefer strict typing and explicit error handling.

