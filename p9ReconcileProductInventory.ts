
// JUNAYED HASAN

// Define the transaction type
type InventoryTransaction = {
  productId: string;
  quantity: number;
  type: "in" | "out";
};

// Reconcile product inventory
function reconcileInventory(
  initialInventory: Record<string, number>,
  transactions: InventoryTransaction[],
): Record<string, number> {
  // Create a copy of the initial inventory
  const inventory: Record<string, number> = {
    ...initialInventory,
  };

  // Process each transaction
  for (const transaction of transactions) {
    const { productId, quantity, type } = transaction;

    // Initialize new products with zero stock
    if (!(productId in inventory)) {
      inventory[productId] = 0;
    }

    // Add stock
    if (type === "in") {
      inventory[productId] += quantity;
    }
    // Remove stock without going below zero
    else if (type === "out") {
      inventory[productId] = Math.max(
        0,
        inventory[productId] - quantity,
      );
    }
  }

  // Return the updated inventory
  return inventory;
}

// Test Case 1
console.log(
  reconcileInventory({ apple: 10, banana: 5 }, [
    { productId: "apple", quantity: 3, type: "in" },
    { productId: "banana", quantity: 2, type: "out" },
  ]),
);
// Expected: { apple: 13, banana: 3 }

// Test Case 2
console.log(
  reconcileInventory({ orange: 2 }, [
    { productId: "orange", quantity: 2, type: "out" },
    { productId: "grape", quantity: 7, type: "in" },
  ]),
);
// Expected: { orange: 0, grape: 7 }

// Test Case 3: Stock cannot become negative
console.log(
  reconcileInventory({ mango: 5 }, [
    { productId: "mango", quantity: 10, type: "out" },
  ]),
);
// Expected: { mango: 0 }

// Test Case 4: Multiple transactions for the same product
console.log(
  reconcileInventory({ apple: 10 }, [
    { productId: "apple", quantity: 5, type: "in" },
    { productId: "apple", quantity: 8, type: "out" },
    { productId: "apple", quantity: 2, type: "in" },
  ]),
);
// Expected: { apple: 9 }
