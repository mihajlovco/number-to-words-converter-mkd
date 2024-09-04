// This large numbers as composites of smaller numbers,
// but we must handle special cases for large numbers
export enum LargeNumbersOrder {
  Thousands = 'thousands',
  Millions = 'millions',
  Billions = 'billions'
}

export enum SmallNumbersOrder {
  Units = 'units',
  Tens = 'tens',
  Hundreds = 'hundreds'
}

export type NumberOrderType = LargeNumbersOrder | SmallNumbersOrder;

export type ClassifiedNumber = {
  order: NumberOrderType;
  lenght: { from: number; to: number };
  divider: number;
};

export type LargeNumbersMetaOptions = {
  // Example: 1034039 - 1 million is leading part of this number
  isLargestNumberOrderPart: boolean;
  orderType: NumberOrderType;
};

export type Dictionary = {
  [key in NumberOrderType]: {
    [key: number | string]: string;
    singularSuffix: string;
    pluralSuffix: string;
    sufixUnder20?: string;
  };
};


export interface Config {
  classifiedNumberOrder: ClassifiedNumber[];
}
