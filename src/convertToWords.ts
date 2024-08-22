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



/* export const convertToWords = (num: number): string => {

    let words = "";

    const numLenght = numberLenght(num);
    let classifiedNum = getClassifiedNumberByLenght(numLenght);

    if(isSmallNumbersOrder(classifiedNum.order)) {
      return smallNumbersToWords(num);
    }

    // for numbers equal or larger than thousands
    let quotient = Math.floor(num / classifiedNum.divider);
    let remainder = num % classifiedNum.divider;

    words = largeNumberPartToWords(quotient, classifiedNum);
    // if the remainder is 0, return the words
    // example: 1000000000 -> "милијарда"
    if(remainder === 0) {
        return words;
    }

    // if the remainder is less than 999, add "и" before the remainder
    if(remainder < 999) {
        return words + ` ${AND} ${smallNumbersToWords(remainder)}`;
    }

    // current number
    while(isLargeNumbersOrder(classifiedNum.order)) {
        
      console.log("remainder first", remainder);

      classifiedNum = getClassifiedNumberByLenght(numberLenght(remainder));
        
        console.log(classifiedNum);
        
        quotient = Math.floor(remainder / classifiedNum.divider);
        remainder = num % classifiedNum.divider;

        console.log(words + ", quotient",  quotient, "remainder " + remainder);
        console.log(addAnd(quotient,remainder));
        
        if(addAnd(quotient, remainder)) {
            words += ` ${AND} ${largeNumberPartToWords(quotient, classifiedNum, { isLeadingNumberPart: true })}`;
        } else {
            words += ` ${largeNumberPartToWords(quotient, classifiedNum, { isLeadingNumberPart: true })}`;
        }

        // if the reminder is a small number, break the loop
        const reminderLenght = numberLenght(remainder);
        if(reminderLenght <= 3) {
          classifiedNum = getClassifiedNumberByLenght(reminderLenght);
          break;
        }
    }

    if(isSmallNumbersOrder(classifiedNum.order) && remainder > 0) {
      words += `${quotient <  10 ? " " + AND + " " : " "}${smallNumbersToWords(remainder)}`;
    }

    return words;
} */
