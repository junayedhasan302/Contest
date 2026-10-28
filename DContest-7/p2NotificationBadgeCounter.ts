// JUNAYED HASAN

type NotificationEvent = {
  type: "ADD" | "READ" | "CLEAR";
  count?: number;
};

function updateNotificationCount(
  initialCount: number,
  events: NotificationEvent[],
): number {
  let count: number = initialCount;

  for (const event of events) {
    const amount: number = event.count ?? 1;

    if (event.type === "ADD") {
      count += amount;
    } else if (event.type === "READ") {
      count = Math.max(0, count - amount);
    } else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}

// Test Case 1: ADD and READ
console.log(
  updateNotificationCount(2, [
    { type: "ADD", count: 3 },
    { type: "READ", count: 1 },
  ]),
); // Expected: 4

// Test Case 2: READ, ADD, and CLEAR
console.log(
  updateNotificationCount(5, [
    { type: "READ", count: 10 },
    { type: "ADD", count: 2 },
    { type: "CLEAR" },
  ]),
); // Expected: 0

// Test Case 3: Default count is 1
console.log(updateNotificationCount(3, [{ type: "ADD" }, { type: "READ" }])); // Expected: 3

// Test Case 4: Count cannot become negative
console.log(updateNotificationCount(2, [{ type: "READ", count: 5 }])); // Expected: 0

// Test Case 5: Multiple ADD events
console.log(
  updateNotificationCount(0, [
    { type: "ADD" },
    { type: "ADD", count: 4 },
    { type: "ADD", count: 2 },
  ]),
); // Expected: 7

// Test Case 6: Empty events array
console.log(updateNotificationCount(10, [])); // Expected: 10
