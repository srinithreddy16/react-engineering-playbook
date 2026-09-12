export default function add(a: number, b: number) {
  return a + b;
}
export function sub(a: number, b: number) {
  return a - b;
}
export function mul(a: number, b: number) {
  return a * b;
}
export function isEven(n: number) {
  return n % 2 === 0;
}
export function sumOfDigits(n: number) {
  return String(Math.abs(n))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}