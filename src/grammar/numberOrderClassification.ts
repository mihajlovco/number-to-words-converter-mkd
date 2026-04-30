import { ClassifiedNumber, NumberOrderType } from '../../types';

// // max '999' bilions + '999' milions + '999' thousnds + '999' hundreds + '99' tends + '9' units
export const billions = {
  order: 'billions',
  length: { from: 10, to: 12 },
  divider: 1000000000
} as ClassifiedNumber;

export const millions = {
  order: 'millions',
  length: { from: 7, to: 9 },
  divider: 1000000
} as ClassifiedNumber;

export const thousands = {
  order: 'thousands',
  length: { from: 4, to: 6 },
  divider: 1000
} as ClassifiedNumber;

export const hundreds = {
  order: 'hundreds',
  length: { from: 3, to: 3 },
  divider: 100
} as ClassifiedNumber;

export const tens = {
  order: 'tens',
  length: { from: 2, to: 2 },
  divider: 10
} as ClassifiedNumber;

export const units = {
  order: 'units',
  length: { from: 1, to: 1 },
  divider: 1
} as ClassifiedNumber;

const classificationByLength: ClassifiedNumber[] = [
  units,
  tens,
  hundreds,
  thousands,
  millions,
  billions
];

export const getClassifiedNumberByLength = (
  numberLength: number
): ClassifiedNumber | null => {
  return (
    classificationByLength.find(
      ({ length }) => numberLength >= length.from && numberLength <= length.to
    ) ?? null
  );
};

export const getClassifiedNumberByOrder = (
  order: NumberOrderType
): ClassifiedNumber => {
  return classificationByLength.find((entry) => entry.order === order) ?? units;
};

// Backward-compatible alias for internal typo migration.
export const getClassifiedNumberByLenght = getClassifiedNumberByLength;
