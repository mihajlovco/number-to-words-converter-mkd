# Contributing

Thanks for contributing.

## Prerequisites

- Node.js 18+
- pnpm 8+

## Setup

```bash
pnpm install
```

## Local checks

Run all checks before opening a PR:

```bash
pnpm run ci
```

## Pull request guidelines

- Keep PRs focused and small.
- Add tests for behavior changes.
- Add a changeset when package-facing behavior changes.
- Use clear commit messages.

## Project conventions

- Preserve Macedonian grammar behavior unless intentionally changing it.
- Keep conversion functions pure and deterministic.
- Prefer strict typing and explicit error handling.
