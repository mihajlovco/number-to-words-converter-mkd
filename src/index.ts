import { convertToWords } from './convertToWords';
import { isValidNumber } from './utils/isValidNumber';
import { dictionary } from './dictionary';

export const MAX_SUPPORTED_NUMBER = 999_999_999_999;

export const toWords = (number: number): string => {
  if (!isValidNumber(number)) {
    throw new TypeError(
      'Number is not valid. Expected a finite integer value.'
    );
  }

  if (Math.abs(number) > MAX_SUPPORTED_NUMBER) {
    throw new RangeError(
      `Number is out of supported range. Expected an absolute value <= ${MAX_SUPPORTED_NUMBER}.`
    );
  }

  return number < 0
    ? `${dictionary.minus} ${convertToWords(Math.abs(number))}`
    : convertToWords(number);
};
