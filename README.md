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

```ts
import { toWords } from '@m9c/number-to-words-converter-mkd';

toWords(381401152);
// триста осумдесет и еден милион четиристотини и една илјада сто педесет и два

toWords(-1201);
// минус илјада двесте и еден
```

## API

### `toWords(value: number): string`

Converts an integer number into Macedonian words.

#### Input contract

- `value` must be a finite integer.
- Supported absolute range is `<= 999_999_999_999`.

#### Errors

- Throws `TypeError` when `value` is not a finite integer.
- Throws `RangeError` when `value` is outside the supported range.

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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Security

See [SECURITY.md](./SECURITY.md).

## License

MIT
