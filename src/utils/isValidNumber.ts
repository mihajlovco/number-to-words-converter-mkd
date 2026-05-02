export const isFiniteNumber = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isFinite(value);
};

export const isValidNumber = (value: unknown): value is number => {
  return isFiniteNumber(value) && Number.isInteger(value);
};
