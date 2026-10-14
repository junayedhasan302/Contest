interface CartItem {
  price: number;
  quantity: number;
  discount: number;
}

// JUNAYED HASAN

function calculateCartTotal(items: CartItem[], taxRate: number): number {
  let subtotal: number = 0;

  for (let i: number = 0; i < items.length; i++) {
    const itemTotal = items[i].price * items[i].quantity * ((100/100) - items[i].discount / 100);
    subtotal += itemTotal;
  }
  const total = subtotal * (1 + taxRate / 100);
  return Math.round(total * 100) / 100;
}

// ACCEPTED

console.log(
  calculateCartTotal(
    [
      { price: 100, quantity: 2, discount: 10 },
      { price: 50, quantity: 1, discount: 0 },
    ],
    10,
  ),
);

console.log(
  calculateCartTotal([{ price: 19.99, quantity: 3, discount: 15 }], 8),
);
