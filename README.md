# @m9c/number-to-words-converter-mkd

Convert integer numbers to Macedonian words.

## Installation

```bash
pnpm add @m9c/number-to-words-converter-mkd
```

```bash
npm install @m9c/number-to-words-converter-mkd
```

## Usage

### Basic examples (TypeScript / ESM)

```ts
import { toWords } from '@m9c/number-to-words-converter-mkd';

toWords(0);
// нула

toWords(21);
// дваесет и еден

toWords(1999);
// илјада деветстотини деведесет и девет

toWords(381401152);
// триста осумдесет и еден милион четиристотини и една илјада сто педесет и два

toWords(-1201);
// минус илјада двесте и еден

// Opt-in: truncate finite floats toward zero (ignore fractional part)
toWords(12.9, { strictInteger: false });
// исто како toWords(12)
```

### CommonJS example (Node.js)

```js
const { toWords } = require('@m9c/number-to-words-converter-mkd');

console.log(toWords(1234567));
// милион двесте триесет и четири илјади петстотини шеесет и седум
```

### Error handling example

```ts
import { toWords } from '@m9c/number-to-words-converter-mkd';

const values = [12.5, Number.NaN, 1000000000000];

for (const value of values) {
  try {
    // Use { strictInteger: false } if you intentionally want float truncation
    console.log(toWords(value, { strictInteger: false }));
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Invalid input: expected a finite number (integer by default).');
    } else if (error instanceof RangeError) {
      console.error('Out of range: expected absolute value <= 999_999_999_999.');
    } else {
      console.error('Unexpected conversion error.');
    }
  }
}
```

## API

### `toWords(value: number, options?: ToWordsOptions): string`

Converts an integer number into Macedonian words.

#### Options

- `strictInteger` (optional, default `true`): when `false`, finite floats are accepted and truncated toward zero with `Math.trunc` before conversion. Use this only when you explicitly accept losing the fractional part.

You can import the options type:

```ts
import type { ToWordsOptions } from '@m9c/number-to-words-converter-mkd';
```

#### Input contract

- `value` must be a finite number.
- By default (`strictInteger` omitted or `true`), `value` must be an integer.
- When `strictInteger` is `false`, non-integer finite values are truncated; `NaN` and `Infinity` still throw.
- Supported absolute range (after any truncation) is `<= 999_999_999_999`.

#### Errors

- Throws `TypeError` when `value` is not finite, or when it is not an integer while `strictInteger` is true.
- Throws `RangeError` when the value used for conversion (after truncation if applicable) is outside the supported range.

## Supported number range

- Minimum: `-999_999_999_999`
- Maximum: `999_999_999_999`

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

## Publishing for Maintainers

### 1) Prepare and verify your local branch

```bash
pnpm install
pnpm run ci
```

### 2) Add a changeset (if your PR changes package behavior)

```bash
pnpm changeset
```

Choose the package and bump type (`patch`, `minor`, `major`), then add a short summary.

### 3) Create the version bump and changelog update

```bash
pnpm changeset version
```

This updates `package.json` version and `CHANGELOG.md`.

### 4) Commit and push versioning changes

```bash
git add .
git commit -m "chore: release version bump"
git push
```

### 5) Authenticate with npm

```bash
npm login
npm whoami
```

If account access is lost, use npm recovery pages:
- [Forgot username](https://www.npmjs.com/forgot)
- [Forgot password](https://www.npmjs.com/forgot)
- [npm Support](https://www.npmjs.com/support)

### 6) Publish

```bash
pnpm release
```

This runs `pnpm run ci` and then `changeset publish`.

### 7) Verify the published version

```bash
npm view @m9c/number-to-words-converter-mkd version
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Security

See [SECURITY.md](./SECURITY.md).

## License

MIT
