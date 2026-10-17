// JUNAYED HASAN

function isValidBdMobileNumber(phoneNumber: string): boolean {
  let startIndex: number;

  if (phoneNumber.startsWith("+8801")) {
    startIndex = 5;

    if (phoneNumber.length !== 14) {
      return false;
    }
  } else if (phoneNumber.startsWith("8801")) {
    startIndex = 4;

    if (phoneNumber.length !== 13) {
      return false;
    }
  } else if (phoneNumber.startsWith("01")) {
    startIndex = 2;

    if (phoneNumber.length !== 11) {
      return false;
    }
  } else {
    return false;
  }

  const operatorDigit: number = Number(phoneNumber[startIndex]);

  if (operatorDigit < 3 || operatorDigit > 9) {
    return false;
  }

  for (let i: number = startIndex; i < phoneNumber.length; i++) {
    if (phoneNumber[i] < "0" || phoneNumber[i] > "9") {
      return false;
    }
  }

  return true;
}
