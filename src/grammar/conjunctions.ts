import { NumberOrderType } from "../types";
import { hasOnlyZerosAfterQuotitient } from "../utils/hasOnlyZerosAfterQuotitient";
import { isSmallNumbersOrder } from "../utils/isSmallNumbersOrder";

export const AND = 'и';

const appendAfter = (words: string): string =>  {
    return `${words} ${AND} `;
}

const appendBefore = (words: string): string =>  {
    return ` ${AND} ${words}`;
}

export const shouldAppendAnd = (quotient: number, order: NumberOrderType, isLastNumber?: boolean): boolean => {

    // Example: 1-19
    if (quotient > 0 && quotient < 20) {
        return isSmallNumbersOrder(order) || isLastNumber;
    }

    // 20, 50, 100, 200, 10000, 50000 ...
    if (hasOnlyZerosAfterQuotitient(quotient)) {
        return true;
    }

    // 21, 34, 234, 505, 5343 ... 
    return false;
};


export const appendAnd = {
    after: appendAfter,
    before: appendBefore
}