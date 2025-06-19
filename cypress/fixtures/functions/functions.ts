export function calculateFactorial(num: number): string {
  if (num < 0) return 'Invalid input';

  if (num === 0 || num === 1) return '1';
  if (num > 500) return 'Infinity';

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result.toString();
}