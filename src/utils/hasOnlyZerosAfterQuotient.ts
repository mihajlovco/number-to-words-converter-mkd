import { getClassifiedNumberByLength } from '../grammar/numberOrderClassification';
import { numberLength } from './numberLength';

export const hasOnlyZerosAfterQuotient = (reminder: number): boolean => {
  const classifiedNum = getClassifiedNumberByLength(numberLength(reminder));
  if (!classifiedNum) {
    return false;
  }

  return reminder % classifiedNum.divider === 0;
};
