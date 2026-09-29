// JUNAYED HASAN
function missingNumber(numbers: number[]): number {
    const totalNumbers = numbers.length;
    // Formula: n * (n + 1) / 2
    const expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < totalNumbers; i++) {
        actualSum += numbers[i];
    }
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2