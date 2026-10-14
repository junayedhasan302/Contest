// JUNAYED HASAN

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i: number = 0; i < arr.length; i += size) {
    const chunk: T[] = [];
    for (let j: number = i; j < i + size && j < arr.length; j++) {
      chunk[chunk.length] = arr[j];
    }
    result[result.length] = chunk;
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// [[1, 2, 3], [4, 5, 6], [7]]

console.log(chunkArray([], 2));
// []
