export function convertToReadableNumber(number: number) {
  return Intl.NumberFormat("pt-br").format(number);
}
