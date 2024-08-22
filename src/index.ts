import { convertToWords } from "./convertToWords"
import { isValidNumber } from "./utils/isValidNumber";
import { dictionary } from './dictionary';

export const toWords = (number: number): string => {

    if(!isValidNumber(number)){
        throw new Error("Number is not valid, can't be converted to words.");
    }

    return number < 0 ? `${dictionary.minus} ${convertToWords(Math.abs(number))}` : convertToWords(number);
}