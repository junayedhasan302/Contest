// JUNAYED HASAN
// 5. Find Second Largest Unique Number

function findSecondLargestUnique(numbers: number[]): number | null {
    let largest: number | null = null;
    let secondLargest: number | null = null;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num === largest || num === secondLargest) {
            continue;
        }
        if (largest === null || num > largest) {
            secondLargest = largest;
            largest = num;
        } 
        else if (secondLargest === null || num > secondLargest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}