// JUNAYED HASAN
// 2. Count Even and Odd Numbers
function countEvenOdd(numbers: number[]): { even: number; odd: number } {
    let evenCount = 0;
    let oddCount = 0;
    numbers.map(number => number % 2 === 0 ? evenCount++ : oddCount++);
    return {
        even: evenCount,
        odd: oddCount
    };
}

// console.log(countEvenOdd([1,2,3,4,5]));
// console.log(countEvenOdd([1,3,5,7,9]));