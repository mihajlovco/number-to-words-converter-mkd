import { shouldAppendAnd, appendAnd } from './grammar/conjunctions';
import { getClassifiedNumberByLength } from './grammar/numberOrderClassification';
import { smallNumbersToWords } from './utils/smallNumbersToWords';
import { largeNumberPartToWords } from './toLargeNumbersWords';
import { isLargeNumbersOrder } from './utils/isLargeNumbersOrder';
import { isSmallNumbersOrder } from './utils/isSmallNumbersOrder';
import { numberLength } from './utils/numberLength';
import { splitNumber } from './utils/splitNumber';

export const convertToWords = (number: number): string => {
  let words = '';

  const numLength = numberLength(number);
  let classifiedNumber = getClassifiedNumberByLength(numLength);
  if (!classifiedNumber) {
    throw new RangeError('Number order is not supported.');
  }

  if (isSmallNumbersOrder(classifiedNumber.order)) {
    return smallNumbersToWords(number);
  }

  let currentNumber: number = number;

  // Flag to indicate if we're processing the largest(or the first) part of the number
  let isLargestNumberOrderPart = true;

  // Process large number parts (e.g., millions, billions)
  while (isLargeNumbersOrder(classifiedNumber.order)) {
    const { quotient, reminder } = splitNumber(
      currentNumber,
      classifiedNumber.divider
    );

    // Convert the current large number part to words
    const currentLargeNumberWords = largeNumberPartToWords(
      quotient,
      classifiedNumber,
      { isLargestNumberOrderPart }
    );

    // Classify the reminder for the next iteration
    const reminderClassifiedNumber = getClassifiedNumberByLength(
      numberLength(reminder)
    );
    if (!reminderClassifiedNumber) {
      throw new RangeError('Number order is not supported.');
    }

    // Check if this is the last large number part
    const isLastLargeOrderNumberPart = isSmallNumbersOrder(
      reminderClassifiedNumber.order
    );

    // Add the current large number part to the result
    if (isLargestNumberOrderPart) {
      // The first word
      words += currentLargeNumberWords;
    } else {
      // Determine if we need to append 'and'
      const shouldAppend =
        shouldAppendAnd(
          quotient,
          classifiedNumber.order,
          isLastLargeOrderNumberPart
        ) && reminder === 0;

      words += shouldAppend
        ? appendAnd.before(currentLargeNumberWords)
        : ` ${currentLargeNumberWords}`;
    }

    // Update variables for the next iteration
    currentNumber = reminder;
    classifiedNumber = reminderClassifiedNumber;
    isLargestNumberOrderPart = false;
  }

  // If there's no remainder, return the result
  if (currentNumber === 0) {
    return words;
  }

  // Process the remaining small number or smaller that 1000 (if any).
  const smallNumberWords = smallNumbersToWords(currentNumber);

  // Determine if we need to append 'and' before the small number
  if (shouldAppendAnd(currentNumber, classifiedNumber.order)) {
    const result = `${appendAnd.after(words)}${smallNumberWords}`;
    return result;
  }

  // If no 'and' is needed, just append the small number words
  return `${words} ${smallNumberWords}`;
};
