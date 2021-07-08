export function convertToReadableNumber(number: number): string {
  return Intl.NumberFormat("pt-br").format(number);
}
