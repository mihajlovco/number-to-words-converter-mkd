import { ClassifiedNumber, NumberOrderType } from '../../types';

// // max '999' bilions + '999' milions + '999' thousnds + '999' hundreds + '99' tends + '9' units
export const billions = {
  order: 'billions',
  lenght: { from: 10, to: 12 },
  divider: 1000000000
} as ClassifiedNumber;

export const millions = {
  order: 'millions',
  lenght: { from: 7, to: 9 },
  divider: 1000000
} as ClassifiedNumber;

export const thousands = {
  order: 'thousands',
  lenght: { from: 4, to: 6 },
  divider: 1000
} as ClassifiedNumber;

export const hundreds = {
  order: 'hundreds',
  lenght: { from: 3, to: 3 },
  divider: 100
} as ClassifiedNumber;

export const tens = {
  order: 'tens',
  lenght: { from: 2, to: 2 },
  divider: 10
} as ClassifiedNumber;

export const units = {
  order: 'units',
  lenght: { from: 1, to: 1 },
  divider: 1
} as ClassifiedNumber;

export const getClassifiedNumberByLenght = (
  numberLenght: number
): ClassifiedNumber | null => {
  if (numberLenght === 0 || numberLenght === 1) {
    return units;
  }

  if (numberLenght === 2) {
    return tens;
  }

  if (numberLenght === 3) {
    return hundreds;
  }

  if (numberLenght >= 4 && numberLenght <= 6) {
    return thousands;
  }

  if (numberLenght >= 7 && numberLenght <= 9) {
    return millions;
  }

  if (numberLenght >= 10 && numberLenght <= 12) {
    return billions;
  }

  return null;
};

export const getClassifiedNumberByOrder = (
  order: NumberOrderType
): ClassifiedNumber => {
  switch (order) {
    case 'billions':
      return billions;
    case 'millions':
      return millions;
    case 'thousands':
      return thousands;
    case 'hundreds':
      return hundreds;
    case 'tens':
      return tens;
  }

  return units;
};
