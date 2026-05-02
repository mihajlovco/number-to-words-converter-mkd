// This large numbers as composites of smaller numbers,
// but we must handle special cases for large numbers
export enum LargeNumbersOrder {
  Thousands = 'thousands',
  Millions = 'millions',
  Billions = 'billions'
}

export enum SmallNumbersOrder {
  Units = 'units',
  Tens = 'tens',
  Hundreds = 'hundreds'
}

export type NumberOrderType = LargeNumbersOrder | SmallNumbersOrder;

export type NumberRange = {
  from: number;
  to: number;
};

export type ClassifiedNumber = {
  order: NumberOrderType;
  length: NumberRange;
  divider: number;
};

export type LargeNumbersMetaOptions = {
  // Example: 1034039 - 1 million is leading part of this number
  isLargestNumberOrderPart: boolean;
};

export type DictionaryEntry = {
  [key: number | string]: string;
  singularSuffix: string;
  pluralSuffix: string;
  suffixUnder20: string;
};

export type Dictionary = Record<NumberOrderType, DictionaryEntry> & {
  minus: string;
};

export type ToWordsOptions = {
  /**
   * When true (default), only finite integers are accepted.
   * When false, finite floats are truncated toward zero with `Math.trunc` before conversion.
   */
  strictInteger?: boolean;
};
