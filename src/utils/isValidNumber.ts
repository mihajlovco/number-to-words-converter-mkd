
export const isValidNumber = (number: number | string): boolean => {
    return !isNaN(parseFloat(number as string)) && isFinite(number as number);
};
