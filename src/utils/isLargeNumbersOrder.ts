import { LargeNumbersOrder } from '../../types';

export function isLargeNumbersOrder(value: string): value is LargeNumbersOrder {
  return (
    value === LargeNumbersOrder.Thousands ||
    value === LargeNumbersOrder.Millions ||
    value === LargeNumbersOrder.Billions
  );
}
