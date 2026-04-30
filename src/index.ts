import type { ToWordsOptions } from '../types';
import { convertToWords } from './convertToWords';
import { dictionary } from './dictionary';
import { isFiniteNumber, isValidNumber } from './utils/isValidNumber';

export type { ToWordsOptions } from '../types';

export const MAX_SUPPORTED_NUMBER = 999_999_999_999;

export const toWords = (number: number, options?: ToWordsOptions): string => {
  if (!isFiniteNumber(number)) {
    throw new TypeError(
      'Number is not valid. Expected a finite numeric value.'
    );
  }

  const strictInteger = options?.strictInteger !== false;

  if (strictInteger && !isValidNumber(number)) {
    throw new TypeError(
      'Number is not valid. Expected a finite integer value.'
    );
  }

  const normalized = strictInteger ? number : Math.trunc(number);

  if (Math.abs(normalized) > MAX_SUPPORTED_NUMBER) {
    throw new RangeError(
      `Number is out of supported range. Expected an absolute value <= ${MAX_SUPPORTED_NUMBER}.`
    );
  }

  return normalized < 0
    ? `${dictionary.minus} ${convertToWords(Math.abs(normalized))}`
    : convertToWords(normalized);
};
