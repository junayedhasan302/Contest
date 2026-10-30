// JUNAYED HASAN

type Student = {
  name: string;
  score: number;
};

type RankedStudent = Student & {
  rank: number;
};

function rankStudents(students: Student[]): RankedStudent[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((a, b) => b.score - a.score);

  const result: RankedStudent[] = [];
  let currentRank: number = 1;

  for (let i = 0; i < sortedStudents.length; i++) {
    if (i > 0 && sortedStudents[i].score !== sortedStudents[i - 1].score) {
      currentRank = i + 1;
    }

    result.push({
      ...sortedStudents[i],
      rank: currentRank,
    });
  }

  return result;
}

// Test Case 1: Different and tied scores
console.log(
  rankStudents([
    { name: "Alice", score: 90 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 85 },
  ]),
);

// Expected: Bob(1), Alice(2), Charlie(2), David(4)

// Test Case 2: All students have equal scores
console.log(
  rankStudents([
    { name: "Eva", score: 100 },
    { name: "Frank", score: 100 },
    { name: "Grace", score: 100 },
  ]),
);

// Expected: All rank 1

// Test Case 3: Empty array
console.log(rankStudents([]));

// Expected: []

// Test Case 4: Single student
console.log(rankStudents([{ name: "John", score: 80 }]));

// Expected: John rank 1

// Test Case 5: No tied scores
console.log(
  rankStudents([
    { name: "Alex", score: 95 },
    { name: "Sam", score: 85 },
    { name: "Mike", score: 75 },
  ]),
);

// Expected: Alex(1), Sam(2), Mike(3)

// Test Case 6: Multiple ties
console.log(
  rankStudents([
    { name: "A", score: 90 },
    { name: "B", score: 90 },
    { name: "C", score: 80 },
    { name: "D", score: 80 },
    { name: "E", score: 70 },
  ]),
);

// Expected: A(1), B(1), C(3), D(3), E(5)
