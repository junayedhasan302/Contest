// JUNAYED HASAN

interface ReturnedObj {
  even: number;
  odd: number;
  positive: number;
  negative: number;
}

function countNumberProperties(numbers: number[]): ReturnedObj {
let even = 0, odd = 0, positive = 0, negative = 0;
  for (const num of numbers) {
    // EVEN ODD
    if (num % 2 === 0) {even++;}
    else {odd++;}

    // POS NEG
    if (num > 0) {positive++;}
    else if (num < 0) {negative++;}
  }
  return {even,odd,positive,negative};
}

// Input
const numbers: number[] = [-5, 0, 3, -4, 1];
// Output --> { even: 2, odd: 3, positive: 2, negative: 2 }
console.log(countNumberProperties(numbers));