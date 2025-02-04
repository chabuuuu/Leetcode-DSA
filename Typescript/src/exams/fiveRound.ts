export function solve(number: number) {
  const lastDigit = number % 10;
  if (lastDigit < 5) {
    return number - lastDigit;
  }
  if (lastDigit > 5) {
    return number + (5 - lastDigit);
  }
  return lastDigit;
}

console.log(solve(0));
