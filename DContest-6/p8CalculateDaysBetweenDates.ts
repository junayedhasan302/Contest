
// JUNAYED HASAN

function daysBetweenDates(date1: string, date2: string): number {
  const firstDate: number = Date.parse(date1 + "T00:00:00Z");
  const secondDate: number = Date.parse(date2 + "T00:00:00Z");

  const difference: number = Math.abs(firstDate - secondDate);

  const days: number = difference / (1000 * 60 * 60 * 24);

  return days;
}
// Accepted
console.log(daysBetweenDates("2020-01-15", "2020-01-20")); // 5
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); // 15
console.log(daysBetweenDates("2024-02-28", "2024-03-01")); // 2
console.log(daysBetweenDates("2020-01-20", "2020-01-15")); // 5
