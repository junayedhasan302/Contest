// JUNAYED HASAN
// 2. Temperature Converter

function convertTemperature(value: number, unit: "C" | "F"): number {
  if (unit === "C") {
    return Math.round(((value * 9) / 5 + 32) * 100) / 100;
  }
  else if (unit === "F") {
    return Math.round((((value - 32) * 5) / 9) * 100) / 100;
  }
  return 0;
}

// function convertTemperature(value: number, unit: "C" | "F"): number {
//   if (unit === "C") {
//     return (value * 9 / 5) + 32;
//   }
//   else if (unit === "F") {
//     return (value - 32) * 5 / 9;
//   }
// }

console.log(convertTemperature(100, "C"));
console.log(convertTemperature(100, "F"));
