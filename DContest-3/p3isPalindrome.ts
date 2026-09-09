// JUNAYED HASAN
// 3. Is It a Palindrome?

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));