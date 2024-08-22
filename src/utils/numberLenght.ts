export const numberLenght = (num: number): number => {
  return Math.ceil(Math.log10(num + 1));
};
