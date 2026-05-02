import { toHundredsWords } from '../toHundredsWords';
import { toTensWords } from '../toTensWords';
import { toUnitsWords } from '../toUnitsWords';
import { numberLength } from './numberLength';

export const smallNumbersToWords = (num: number): string => {
  const numLength = numberLength(num);

  if (numLength === 1) {
    return toUnitsWords(num);
  }

  if (numLength === 2) {
    return toTensWords(num);
  }

  if (numLength === 3) {
    return toHundredsWords(num);
  }

  throw new RangeError('Small number conversion supports numbers up to 999.');
};
