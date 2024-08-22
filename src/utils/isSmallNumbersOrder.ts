import { SmallNumbersOrder } from "../types";

export function isSmallNumbersOrder(value: string): value is SmallNumbersOrder {
    return Object.values(SmallNumbersOrder).includes(value as SmallNumbersOrder);
}