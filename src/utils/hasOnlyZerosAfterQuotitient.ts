import { getClassifiedNumberByLenght } from "../grammar/numberClassification";
import { numberLenght } from "./numberLenght";

export const hasOnlyZerosAfterQuotitient = (reminder: number): boolean => {
    const classifiedNum = getClassifiedNumberByLenght(numberLenght(reminder));
    return (reminder % classifiedNum.divider) === 0;
}