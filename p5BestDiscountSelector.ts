// JUNAYED HASAN

type DiscountOffer = {
  name: string;
  type: "flat" | "percent";
  value: number;
  minPrice: number;
};

function selectBestDiscount(
  price: number,
  offers: DiscountOffer[],
): DiscountOffer | null {
  let bestOffer: DiscountOffer | null = null;
  let lowestPrice: number = price;

  for (const offer of offers) {
    if (price >= offer.minPrice) {
      let discountedPrice: number;

      if (offer.type === "flat") {
        discountedPrice = price - offer.value;
      } else {
        discountedPrice = price - (price * offer.value) / 100;
      }

      discountedPrice = Math.max(0, discountedPrice);

      if (discountedPrice < lowestPrice) {
        lowestPrice = discountedPrice;
        bestOffer = offer;
      }
    }
  }

  return bestOffer;
}

// Test Case 1: Flat discount
console.log(
  selectBestDiscount(100, [
    { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
    { name: "HALF", type: "percent", value: 50, minPrice: 150 },
  ]),
);

// Expected: FLAT15

// Test Case 2: Best percentage discount
console.log(
  selectBestDiscount(200, [
    { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
    { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 },
  ]),
);

// Expected: 25PERCENT

// Test Case 3: No eligible offer
console.log(
  selectBestDiscount(100, [
    { name: "SAVE50", type: "flat", value: 50, minPrice: 200 },
  ]),
);

// Expected: null

// Test Case 4: Empty offers
console.log(selectBestDiscount(500, []));

// Expected: null

// Test Case 5: Discount cannot make price negative
console.log(
  selectBestDiscount(50, [
    { name: "BIGSAVE", type: "flat", value: 100, minPrice: 20 },
  ]),
);

// Expected: BIGSAVE

// Test Case 6: Same discount, first offer wins
console.log(
  selectBestDiscount(100, [
    { name: "FIRST", type: "flat", value: 20, minPrice: 50 },
    { name: "SECOND", type: "flat", value: 20, minPrice: 50 },
  ]),
);

// Expected: FIRST

// Test Case 7: No offer reduces the price
console.log(
  selectBestDiscount(100, [
    { name: "ZERO", type: "flat", value: 0, minPrice: 50 },
  ]),
);

// Expected: null
