import { dictionary } from './dictionary';
import { AND } from './grammar/conjunctions';
import { toHundredsWords } from './toHundredsWords';
import { toTensWords } from './toTensWords';
import { toUnitsWords } from './toUnitsWords';
import {
  ClassifiedNumber,
  LargeNumbersMetaOptions,
  LargeNumbersOrder
} from '../types';
import { numberLenght } from './utils/numberLenght';

/**
 * Large numbers are considered from thousnds and bigger numbers in order
 * like millions, billions ect..
 * All of this numbers use the same words from units to hundreds plus specific name for the large number.
 * Examle: 1212 - една илјада двеста и дванаесет
 */
export const largeNumberPartToWords = (
  number: number,
  classifiedNumber: ClassifiedNumber,
  options?: Partial<LargeNumbersMetaOptions>
): string => {
  const lenght = numberLenght(number);

  if (lenght === 1)
    return toLargeOneDigitNumberWords(
      number,
      classifiedNumber.order as LargeNumbersOrder,
      { ...options }
    );
  const words =
    lenght === 2
      ? toLargeTwoDigitNumberWords(
          number,
          classifiedNumber.order as LargeNumbersOrder
        )
      : toLargeThreeDigitNumberWords(
          number,
          classifiedNumber.order as LargeNumbersOrder
        );
  return words;
};

export const largestNumberOrderToWords = (
  number: number,
  reminder: number,
  order: LargeNumbersOrder
) => {
  return toLargeOneDigitNumberWords(number, order, {
    isLargestNumberOrderPart: reminder === 0
  });
};

/* 
* We have few special cases for larger numbers for the units
* 1. Numbers 1 and 2 have different names for singular and plural that default unit numbers
* 2. Word of the number is not present when the number is leading like 1000 - we write only thousand and not one thousand.
* 3. We write one thousand if the number is part of the largetr number like 5001000 five million and one thousand
*/
export const toLargeOneDigitNumberWords = (
  number: number,
  order: LargeNumbersOrder,
  options?: Partial<LargeNumbersMetaOptions>
): string => {
  if (number === 1) {
    if (options?.isLargestNumberOrderPart) {
      // When the number is first and largest order number, skip the number and add the order name
      // милион
      return `${dictionary[order].singularSufix}`;
    }
    // number and order name
    // еден милион
    return `${dictionary[order]['1']} ${dictionary[order].singularSufix}`;
  }

  // 2000 - две илјади
  if (number === 2) {
    // special cases for thousands and billions
    // Example: две илјади, две милијарди
    return `${dictionary[order]['2']} ${dictionary[order].pluralSufix}`;
  }

  // the rest are the standard numbering
  return `${toUnitsWords(number)} ${dictionary[order].pluralSufix}`;
};

export const toLargeTwoDigitNumberWords = (
  number: number,
  order: LargeNumbersOrder
): string => {
  // In case small number is provided
  if (number < 10) {
    return toLargeOneDigitNumberWords(number, order);
  }

  if (number > 99) {
    throw "Larger number then 99 can't converted.";
  }

  if (number > 9 && number < 20) {
    return `${toTensWords(number)} ${dictionary[order].pluralSufix}`;
  }

  // the rest of the numbers bigger than 19
  const quotient = Math.floor(number / 10);
  const reminder = number % 10;

  // case: 21 - дваесет и една илијада, 22 дваесет и две илјади
  if (reminder === 1 || reminder === 2) {
    return `${toTensWords(quotient * 10)} ${AND} ${toLargeOneDigitNumberWords(reminder, order, { isLargestNumberOrderPart: false })}`;
  }
  // case 43 - четириесет и три илјади
  return `${toTensWords(number)} ${dictionary[order].pluralSufix}`;
};

export const toLargeThreeDigitNumberWords = (
  number: number,
  order: LargeNumbersOrder
): string => {
  const quotient = Math.floor(number / 100);
  const reminder = number % 100;

  // 100 - сто илјади
  if (reminder === 0) {
    return `${toHundredsWords(number)} ${dictionary[order].pluralSufix}`;
  }

  // Examples  with case where reminder is not zero
  // Numbers: 101 100 and 102 532.
  // 102 - сто и две илјади
  // 101 - сто и една илјада
  if (reminder < 10) {
    return `${toHundredsWords(quotient * 100)} ${AND} ${toLargeOneDigitNumberWords(reminder, order, { isLargestNumberOrderPart: false })}`;
  }

  const twoDigitReminder = reminder % 10;
  // 101 - сто и една илјада, 121 - сто и дваесет и една илјада
  if (twoDigitReminder !== 0) {
    return `${toHundredsWords(quotient * 100)} ${toLargeTwoDigitNumberWords(reminder, order)}`;
  }

  // 114 - сто и четиринаесет
  // 130 - сто и триесет
  return `${toHundredsWords(number)} ${dictionary[order].pluralSufix}`;
};
