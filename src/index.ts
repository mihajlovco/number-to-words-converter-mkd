import { convertToWords } from "./convertToWords"
import { isValidNumber } from "./utils/isValidNumber";
import { dictionary } from './dictionary';

export const toWords = (number: number): string => {

    if(!isValidNumber(number)){
        throw new Error("Can't be converted to words, please enter valid number");
    }

    return number < 0 ? `${dictionary.minus} ${convertToWords(Math.abs(number))}` : convertToWords(number);
}