// JUNAYED HASAN

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
// ACCEPTED

console.log(gcd(12, 18)); // 6
console.log(gcd(7, 13)); // 1
console.log(gcd(0, 5)); // 5
console.log(gcd(0, 0)); // 0
