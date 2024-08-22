import { shouldAppendAnd, appendAnd } from "./grammar/conjunctions";
import { getClassifiedNumberByLenght } from "./grammar/numberClassification";
import { smallNumbersToWords } from "./smallNumbersToWords";
import { largeNumberPartToWords } from "./toLargeNumbersWords";
import { isLargeNumbersOrder } from "./utils/isLargeNumbersOrder";
import { isSmallNumbersOrder } from "./utils/isSmallNumbersOrder";
import { numberLenght } from "./utils/numberLenght";
import { splitNumber } from "./utils/splitNumber";




export const convertToWords = (number: number): string => {

  let words = "";

  const numLenght = numberLenght(number);
  let classifiedNumber = getClassifiedNumberByLenght(numLenght);

  if(isSmallNumbersOrder(classifiedNumber.order)) {
    return smallNumbersToWords(number);
  }

  let currentNumber: number = number;
  // first quotient is the largest order number
  let isLargestNumberOrderPart = true;

  while(isLargeNumbersOrder(classifiedNumber.order)) {

    const { quotient, reminder } = splitNumber(currentNumber, classifiedNumber.divider);

    const currentLargeNumberWords = largeNumberPartToWords(quotient, classifiedNumber, 
      { isLargestNumberOrderPart });

      const reminderClassifiedNumber = getClassifiedNumberByLenght(numberLenght(reminder));
      const isLastLargeOrderNumber = isSmallNumbersOrder(reminderClassifiedNumber.order);
    
     if (isLargestNumberOrderPart) {
       words += currentLargeNumberWords;
     } else {
       const shouldAppend = shouldAppendAnd(quotient, classifiedNumber.order, isLastLargeOrderNumber) && reminder === 0;
       words += shouldAppend ? appendAnd.before(currentLargeNumberWords) : ` ${currentLargeNumberWords}`;
     }

    currentNumber = reminder;
    classifiedNumber = reminderClassifiedNumber;
    isLargestNumberOrderPart = false;
  }

  if(currentNumber === 0){
    return words;
  }

  // if small number or < 1000 is left, convert to words and append to the 
  // existing large number words
  const smallNumberWords = smallNumbersToWords(currentNumber);
  // process the rest of the number
  if(shouldAppendAnd(currentNumber, classifiedNumber.order)){
    const result = `${appendAnd.after(words)}${smallNumberWords}`;
    return result;
  }

  return `${words} ${smallNumberWords}`;
}