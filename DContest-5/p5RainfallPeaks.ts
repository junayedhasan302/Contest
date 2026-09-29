// JUNAYED HASAN
function findRainfallPeaks(rainfall: number[]): number[] {
  const peakDays: number[] = [];
  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
        peakDays.push(i + 1);
    }
}
    return peakDays;
}

console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6])); // [2, 5]
console.log(findRainfallPeaks([1, 2, 3, 2, 1])); // [3]
console.log(findRainfallPeaks([])); // []
console.log(findRainfallPeaks([5])); // []
