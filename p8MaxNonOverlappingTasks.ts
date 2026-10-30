// JUNAYED HASAN

type Task = [number, number];

function maxTasks(tasks: Task[]): number {
  const sortedTasks: Task[] = [...tasks];

  // Sort tasks by finish time
  sortedTasks.sort((a, b) => a[1] - b[1]);

  let totalTasks: number = 0;
  let lastFinishTime: number = -Infinity;

  // Select non-overlapping tasks
  for (const task of sortedTasks) {
    if (task[0] >= lastFinishTime) {
      totalTasks++;
      lastFinishTime = task[1];
    }
  }

  return totalTasks;
}

// Test Case 1: Mixed overlapping tasks
console.log(
  maxTasks([
    [1, 4],
    [2, 3],
    [3, 5],
    [7, 9],
  ]),
); // Expected: 3

// Test Case 2: No overlapping tasks
console.log(
  maxTasks([
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
); // Expected: 3

// Test Case 3: All tasks overlap
console.log(
  maxTasks([
    [1, 5],
    [2, 6],
    [3, 7],
  ]),
); // Expected: 1

// Test Case 4: Empty array
console.log(maxTasks([])); // Expected: 0

// Test Case 5: Single task
console.log(maxTasks([[5, 10]])); // Expected: 1

// Test Case 6: Negative time intervals
console.log(
  maxTasks([
    [-5, -2],
    [-3, 0],
    [0, 3],
  ]),
); // Expected: 2

// Test Case 7: Same finish time
console.log(
  maxTasks([
    [1, 5],
    [2, 5],
    [5, 8],
  ]),
); // Expected: 2
