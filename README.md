# Convert numbers to words on Macedonian language

Package: `@m9c/number-to-words-converter-mkd`

Convert integer numbers to Macedonian words with a small, focused API for Node.js and TypeScript projects.

## npm

[![npm version](https://img.shields.io/npm/v/@m9c/number-to-words-converter-mkd.svg?logo=npm)](https://www.npmjs.com/package/@m9c/number-to-words-converter-mkd)

- npm page: [@m9c/number-to-words-converter-mkd](https://www.npmjs.com/package/@m9c/number-to-words-converter-mkd)

## Table of Contents

- [Why this package](#why-this-package)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Supported number range](#supported-number-range)
- [Contributing](#contributing)
- [Open to contributions and corrections](#open-to-contributions-and-corrections)
- [Maintainer docs](#maintainer-docs)
- [Security](#security)
- [License](#license)

## Why this package

- Converts numeric values to Macedonian words in a consistent format.
- Supports ESM and CommonJS usage.
- Validates input and throws clear errors for invalid values.

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
    // Use { strictInteger: false } if you intentionally want float truncation.
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

Converts a number to Macedonian words.

#### Options

- `strictInteger` (optional, default `true`): when `false`, finite floats are accepted and truncated toward zero with `Math.trunc` before conversion. Use this only when you intentionally allow the fractional part to be discarded.

You can import the options type:

```ts
import type { ToWordsOptions } from '@m9c/number-to-words-converter-mkd';
```

#### Input contract

- `value` must be a finite number.
- By default (`strictInteger` omitted or `true`), `value` must be an integer.
- When `strictInteger` is `false`, non-integer finite values are truncated; `NaN` and `Infinity` still throw.
- Supported absolute range (after truncation, when applicable) is `<= 999_999_999_999`.

#### Errors

- `TypeError`: `value` is not finite, or it is not an integer while `strictInteger` is `true`.
- `RangeError`: value used for conversion (after truncation when enabled) is outside the supported range.

Quick troubleshooting: if the number format is invalid use `TypeError` handling; if the number is too large/small use `RangeError` handling.

## Supported number range

- Minimum: `-999_999_999_999`
- Maximum: `999_999_999_999`

## Contributing

Contributors are welcome to open a pull request.

- Start with [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
- Include a changeset in your PR when package behavior changes.

## Open to contributions and corrections

I am open for contributions, improvements, and any corrections.

If you see an issue in wording, grammar, examples, or conversion behavior, please open an issue or submit a PR.

## Maintainer docs

Maintainer-specific release and development workflows are documented in [docs/maintainers.md](./docs/maintainers.md).

## Security

See [SECURITY.md](./SECURITY.md).

## License

MIT
