// JUNAYED HASAN

function longestIncreasingStreak(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  // This is how github streak Works
  let currentStreak: number = 1;
  let maxStreak: number = 1;

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
  }

  return maxStreak;
}

// ACCEPTED

console.log(longestIncreasingStreak([1, 2, 3, 1, 2])); // 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1])); // 1
console.log(longestIncreasingStreak([])); // 0
