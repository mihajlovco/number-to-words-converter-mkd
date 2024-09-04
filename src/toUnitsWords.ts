import { dictionary } from './dictionary';

export const toUnitsWords = (number: number): string => {
  return dictionary.units[number];
};
