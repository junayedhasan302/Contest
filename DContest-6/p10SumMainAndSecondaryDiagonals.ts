// JUNAYED HASAN

function diagonalSums(
  matrix: number[][]
): { main: number; secondary: number } {
  let main: number = 0;
  let secondary: number = 0;

  const n: number = matrix.length;

  for (let i: number = 0; i < n; i++) {
    main += matrix[i][i];
    secondary += matrix[i][n - 1 - i];
  }

  return { main, secondary };
}
// ACCEPTED



console.log(
  diagonalSums([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
// { main: 15, secondary: 15 }

console.log(
  diagonalSums([
    [1, 2],
    [3, 4]
  ])
);
// { main: 5, secondary: 5 }

console.log(diagonalSums([]));
// { main: 0, secondary: 0 }
