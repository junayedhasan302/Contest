// JUNAYED HASAN

const checkMathOperationsForNine=(a: number, b: number): string => {
  if(a+b===9 || a-b===9 || a*b===9 || a/b===9){
    return "Nine";
  } return "Nein";
}

// Test Case
console.log(checkMathOperationsForNine(5,4));
console.log(checkMathOperationsForNine(19,10));
console.log(checkMathOperationsForNine(3,3));
console.log(checkMathOperationsForNine(3,6));
console.log(checkMathOperationsForNine(18,2));
console.log(checkMathOperationsForNine(18,8));
