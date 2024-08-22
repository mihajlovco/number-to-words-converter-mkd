import { LargeNumbersOrder } from '../types';

export function isLargeNumbersOrder(value: string): value is LargeNumbersOrder {
  return Object.values(LargeNumbersOrder).includes(value as LargeNumbersOrder);
}
