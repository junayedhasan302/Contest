// JUNAYED HASAN

type Direction = "UP" | "DOWN";

function trackElevator(
  startFloor: number,
  minFloor: number,
  maxFloor: number,
  commands: Direction[],
): number {
  let currentFloor: number = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      currentFloor = Math.min(currentFloor + 1, maxFloor);
    } else if (command === "DOWN") {
      currentFloor = Math.max(currentFloor - 1, minFloor);
    }
  }

  return currentFloor;
}

// Test Case 1: Normal movement
console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"])); // Expected: 2

// Test Case 2: Maximum floor boundary
console.log(trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"])); // Expected: 9

// Test Case 3: Minimum floor boundary
console.log(trackElevator(1, 0, 10, ["DOWN", "DOWN", "DOWN"])); // Expected: 0

// Test Case 4: Empty commands
console.log(trackElevator(5, 0, 10, [])); // Expected: 5

// Test Case 5: Only UP commands
console.log(trackElevator(2, 0, 5, ["UP", "UP", "UP", "UP"])); // Expected: 5

// Test Case 6: Negative floor
console.log(trackElevator(-2, -5, 5, ["DOWN", "DOWN", "UP"])); // Expected: -3

// Test Case 7: No movement beyond boundaries
console.log(trackElevator(0, 0, 3, ["DOWN", "DOWN", "UP"])); // Expected: 1
