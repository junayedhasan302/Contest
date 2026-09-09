// JUNAYED HASAN
// 5. Repeated Digit Sum - Digital Root

function repeatedDigitSum(n: number): number {
  if (n === 0) {
    return 0;
  } return 1 + ((n - 1) % 9);

  //OR
  //   while (n >= 10) {
  //     let sum = 0;
  //     const digits = n.toString();
  //     for (const digit of digits) {
  //       sum += Number(digit);
  //     }
  //     n = sum;
  //   }
  //   return n;
}

console.log(repeatedDigitSum(9));
console.log(repeatedDigitSum(90));
console.log(repeatedDigitSum(91));
console.log(repeatedDigitSum(93));
