# Maintainer Docs

Maintainer workflows for `@m9c/number-to-words-converter-mkd`.

Use this document for release operations and maintainer-only publishing tasks.
For regular contributions, use [CONTRIBUTING.md](../CONTRIBUTING.md).
For package usage and API details, use [README.md](../README.md).

## Development

```bash
pnpm install
pnpm run lint
pnpm run test
pnpm run build
```

## Release process

This project uses [Changesets](https://github.com/changesets/changesets) and pnpm.

- Add a changeset in your PR when package behavior changes.
- Publishing is handled by the `Publish` GitHub workflow on `main`.
- The release command is `pnpm release` (`pnpm run ci` + `changeset publish`).

## Publishing for Maintainers

### 1) Pre-release checklist

Before versioning or publishing, confirm all checks below:

- You are on the expected branch and synced with remote `main`.
- Working tree is clean (`git status`).
- CI passes locally: `pnpm run ci`.
- Pending changesets are present for behavior changes.
- npm access is valid (`npm whoami`).

### 2) Prepare and verify your local branch

```bash
pnpm install
pnpm run ci
```

### 3) Add a changeset (if your PR changes package behavior)

```bash
pnpm changeset
```

Choose the package and bump type (`patch`, `minor`, `major`), then add a short summary.

### 4) Create the version bump and changelog update

```bash
pnpm changeset version
```

This updates `package.json` version and [CHANGELOG.md](../CHANGELOG.md).
Review generated diffs before committing.

### 5) Commit and push versioning changes

```bash
git add .
git commit -m "chore: release version bump"
git push
```

### 6) Authenticate with npm

```bash
npm login
npm whoami
```

If account access is lost, use npm recovery pages:
- [Forgot username](https://www.npmjs.com/forgot)
- [Forgot password](https://www.npmjs.com/forgot)
- [npm Support](https://www.npmjs.com/support)

### 7) Publish

```bash
pnpm release
```

This runs `pnpm run ci` and then `changeset publish`.

## Post-release verification

Validate that npm and repo metadata reflect the release:

```bash
npm view @m9c/number-to-words-converter-mkd version
npm view @m9c/number-to-words-converter-mkd dist-tags
```

Then verify:

- Published version matches the expected release.
- `latest` dist-tag points to the intended version.
- [CHANGELOG.md](../CHANGELOG.md) entry is present and accurate.

## Troubleshooting and recovery

### npm auth errors

- Re-run `npm login` and confirm with `npm whoami`.
- Verify your account has publish rights for the package.

### Version already exists

- The target version was already published.
- Re-run `pnpm changeset version`, choose the next valid bump, commit, and publish again.

### Partial release state

- If publish fails after local version bump, do not force-fix blindly.
- Confirm npm published version with `npm view ... version`.
- If unpublished, fix the issue and rerun `pnpm release`.
- If published, align local branch/changelog with published state before the next release.

## Quick commands reference

```bash
pnpm run ci
pnpm changeset
pnpm changeset version
pnpm release
npm whoami
npm view @m9c/number-to-words-converter-mkd version
npm view @m9c/number-to-words-converter-mkd dist-tags
```
