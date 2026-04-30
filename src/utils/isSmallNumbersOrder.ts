import { SmallNumbersOrder } from '../../types';

export function isSmallNumbersOrder(value: string): value is SmallNumbersOrder {
  return (
    value === SmallNumbersOrder.Units ||
    value === SmallNumbersOrder.Tens ||
    value === SmallNumbersOrder.Hundreds
  );
}
