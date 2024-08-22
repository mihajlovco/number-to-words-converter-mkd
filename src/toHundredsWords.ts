import { dictionary } from './dictionary';
import { toTensWords } from './toTensWords';
import { toUnitsWords } from './toUnitsWords';
import { numberLenght } from './utils/numberLenght';

/***
 * Only number that represents the hundreds from 100 - 999
 */
export const toHundredsWords = (hundreds: number): string => {
  if (numberLenght(hundreds) != 3) {
    return '';
  }

  const quotient = Math.floor(hundreds / 100);
  const reminder = hundreds % 100;

  let words = '';

  // handle special cases 100, 200, 300 and 600
  if ((quotient >= 1 && quotient <= 3) || quotient === 6) {
    words = dictionary.hundreds[quotient * 100];
  } else {
    // the rest like 400, 500 up to 900 have suffix
    // example: четиристотини, петстотини..
    words = toUnitsWords(quotient) + dictionary.hundreds.pluralSufix;
  }

  if (reminder === 0) {
    return words;
  }

  if (reminder > 9) {
    const tensReminder = reminder % 10;
    // Example 112 - сто и дванаесет, 120 - сто и дваесет
    if (tensReminder === 0 || (reminder >= 10 && reminder <= 20)) {
      return `${words} и ${toTensWords(reminder)}`;
    }
  }

  // 301 - триста и еден
  if (reminder >= 0 && reminder <= 9) {
    return `${words} и ${toUnitsWords(reminder)}`;
  }

  // 321 - триста + (дваесет и еден)
  return `${words} ${toTensWords(reminder)}`;
};
