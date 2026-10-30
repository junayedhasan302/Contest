// JUNAYED HASAN

type Interval = [number, number];

function findFreeTime(
  bookedIntervals: Interval[],
  workingHours: Interval,
): Interval[] {
  const [workStart, workEnd] = workingHours;

  const clippedIntervals: Interval[] = [];

  // Keep only bookings inside working hours
  for (const interval of bookedIntervals) {
    const start: number = Math.max(interval[0], workStart);
    const end: number = Math.min(interval[1], workEnd);

    if (start < end) {
      clippedIntervals.push([start, end]);
    }
  }

  // Sort intervals by starting time
  clippedIntervals.sort((a, b) => a[0] - b[0]);

  // Merge overlapping intervals
  const mergedIntervals: Interval[] = [];

  for (const interval of clippedIntervals) {
    const lastInterval = mergedIntervals[mergedIntervals.length - 1];

    if (mergedIntervals.length === 0 || interval[0] > lastInterval[1]) {
      mergedIntervals.push([...interval]);
    } else {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    }
  }

  // Find free time gaps
  const freeIntervals: Interval[] = [];
  let currentTime: number = workStart;

  for (const interval of mergedIntervals) {
    if (currentTime < interval[0]) {
      freeIntervals.push([currentTime, interval[0]]);
    }

    currentTime = interval[1];
  }

  // Check remaining free time
  if (currentTime < workEnd) {
    freeIntervals.push([currentTime, workEnd]);
  }

  return freeIntervals;
}







// Test Case 1: Normal bookings
console.log(
  findFreeTime(
    [
      [10, 12],
      [14, 16],
    ],
    [9, 17],
  ),
);
// Expected: [[9, 10], [12, 14], [16, 17]]

// Test Case 2: Overlapping bookings
console.log(
  findFreeTime(
    [
      [10, 12],
      [14, 16],
      [11, 15],
    ],
    [9, 17],
  ),
);
// Expected: [[9, 10], [16, 17]]

// Test Case 3: No bookings
console.log(findFreeTime([], [9, 17]));
// Expected: [[9, 17]]

// Test Case 4: Fully booked
console.log(findFreeTime([[9, 17]], [9, 17]));
// Expected: []

// Test Case 5: Booking outside working hours
console.log(
  findFreeTime(
    [
      [7, 10],
      [16, 19],
    ],
    [9, 17],
  ),
);
// Expected: [[10, 16]]

// Test Case 6: Multiple overlapping bookings
console.log(
  findFreeTime(
    [
      [10, 13],
      [11, 14],
      [12, 15],
    ],
    [9, 17],
  ),
);
// Expected: [[9, 10], [15, 17]]

// Test Case 7: Empty gap between bookings
console.log(
  findFreeTime(
    [
      [9, 12],
      [12, 15],
    ],
    [9, 17],
  ),
);
// Expected: [[15, 17]]
