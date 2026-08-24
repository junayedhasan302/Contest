// JUNAYED HASAN
function getMonthName(monthNumber: number): string {
  // if (monthNumber < 1 || monthNumber > 12) {
  //   return "Invalid Month";
  // }
  const monthName: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthName[monthNumber - 1];
}

// Test Case - INPUT
for(let i=1; i<=12; i++){
    console.log(getMonthName(i));
}


// OUTPUT

// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December