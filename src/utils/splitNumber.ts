
/**
 * Split number to quotient and reminder
 */
export const splitNumber = (number: number, divider: number): { quotient: number, reminder: number } => {
     const quotient = Math.floor(number / divider);
     const reminder = number % divider;

    return { quotient, reminder };
}