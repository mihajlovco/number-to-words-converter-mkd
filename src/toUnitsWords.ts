import { dictionary } from './dictionary';

/**
 * Units words are same for the larger numbers like thousands, millions.
 * We have few special cases for larger numbers for the units
 * 1. Numbers 1 and 2 have different names for singular and plural that default unit numbers
 * 2. Word of the number is not present when the number is leading like 1000 - we write only thousand and not one thousand.
 * 3. We write one thousand if the number is part of the largetr number like 5001000 finve million and one thousand
 * @param number
 * @param order
 * @returns
 */
export const toUnitsWords = (number: number): string => {
  return dictionary.units[number];
};
