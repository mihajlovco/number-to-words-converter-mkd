export const numberLength = (num: number): number => {
  if (num === 0) {
    return 1;
  }

  return Math.trunc(Math.abs(num)).toString().length;
};
