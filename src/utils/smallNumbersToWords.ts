import { toHundredsWords } from '../toHundredsWords';
import { toTensWords } from '../toTensWords';
import { toUnitsWords } from '../toUnitsWords';
import { numberLenght } from './numberLenght';

export const smallNumbersToWords = (num: number) => {
  const numLenght = numberLenght(num);

  if (numLenght === 0 || numLenght === 1) {
    return toUnitsWords(num);
  }

  if (numLenght === 2) {
    return toTensWords(num);
  }

  if (numLenght === 3) {
    return toHundredsWords(num);
  }
};
