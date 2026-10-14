// JUNAYED HASAN

function mergeSortedArrays(arr1: number[],arr2: number[]): number[] {
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;

  const result: number[] = [];

  // Merge both arrays.
  for(; i < arr1.length && j < arr2.length;) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements from arr1.
  for(; i < arr1.length; i++) {
    result[k] = arr1[i];
    k++;
  }

  // Copy remaining elements from arr2.
  for(; j < arr2.length; j++) {
    result[k] = arr2[j];
    k++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeSortedArrays([], [1, 2]));
