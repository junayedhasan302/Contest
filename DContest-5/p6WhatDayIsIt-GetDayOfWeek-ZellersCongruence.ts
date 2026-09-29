// JUNAYED HASAN
// Get Day of Week — Zeller's Congruence
function getDayOfWeek(
    year: number,
    month: number,
    day: number
): string {

    const weekdays = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];

    if (month < 3) {
        month += 12;
        year--;
    }

    const century = Math.floor(year / 100);
    const yearOfCentury = year % 100;

    const weekdayIndex =
        (
            day +
            Math.floor((13 * (month + 1)) / 5) +
            yearOfCentury +
            Math.floor(yearOfCentury / 4) +
            Math.floor(century / 4) +
            5 * century
        ) % 7;

    return weekdays[weekdayIndex];
}

console.log(getDayOfWeek(2024, 5, 11)); // Saturday
console.log(getDayOfWeek(2023, 1, 1));  // Sunday


/*
Zeller's Congruence

The main goal of this problem is to find which day of the week a given date falls on.

For example, if we are given **May 11, 2024**, the answer should be **Saturday**.

Normally, we could use JavaScript's `Date` object and `getDay()` function. But in this solution, we don't use `getDay()`. Instead, we use an algorithm called **Zeller's Congruence**.

Zeller's Congruence uses the given year, month, and day to calculate a number between 0 and 6. Each number represents a day of the week.

The mapping is:

* 0 → Saturday
* 1 → Sunday
* 2 → Monday
* 3 → Tuesday
* 4 → Wednesday
* 5 → Thursday
* 6 → Friday

There is one special rule in this algorithm. January and February are treated as the 13th and 14th months of the previous year. So, for example, January 2023 is treated as month 13 of 2022.

After making this adjustment, we use the year, month, and day in the Zeller's Congruence formula. The formula gives us a number from 0 to 6. We then use that number to get the weekday name.

For example, when we calculate **May 11, 2024**, the result is **0**. Since 0 represents Saturday, the final answer is **"Saturday"**.

So the basic idea is:

**Date → Adjust month/year → Apply formula → Get number → Find weekday**

The algorithm takes constant time, **O(1)**, because it always performs the same number of calculations regardless of the date. It also uses **O(1)** extra space.

*/