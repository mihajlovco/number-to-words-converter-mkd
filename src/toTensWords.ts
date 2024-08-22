import { dictionary } from './dictionary';
import { toUnitsWords } from './toUnitsWords';

export const toTensWords = (number: number): string | null => {
  if (number > 99) {
    return null;
  }

  if (number < 10) {
    return toUnitsWords(number);
  }

  const reminder = number % 10;

  // 11 and 16 are special cases
  // and all of the number where last number is 0 like 10, 20, 30.. until 90 are in dictionary
  if (number === 11 || number === 16 || reminder === 0) {
    return dictionary.tens[number];
  }

  // 12, 13, 17 ... 19 have sufix
  if (number < 20) {
    // last number name plus sufix will give the word
    return toUnitsWords(reminder) + dictionary.tens.sufixUnder20;
  }

  const quotient = Math.floor(number / 10) * 10; // to match the dictionary of 10, 20, 30...
  const quotientWords = dictionary.tens[quotient];
  const unitWord = toUnitsWords(reminder);

  return `${quotientWords} и ${unitWord}`;
};
