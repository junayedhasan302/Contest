// JUNAYED HASAN

function isValidEmail(email: string): boolean {
  const parts = email.split("@");

  if (parts.length !== 2) return false;

  const local = parts[0];
  const domainParts = parts[1].split(".");

  if (local.length === 0) return false;
  if (domainParts.length !== 2) return false;

  const domain = domainParts[0];
  const tld = domainParts[1];

  if (domain.length === 0 || tld.length < 2) return false;

  // Validate local part.
  for (let i = 0; i < local.length; i++) {
    const ch = local[i];

    if (
      !(
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9") ||
        ch === "." ||
        ch === "_" ||
        ch === "-"
      )
    ) {
      return false;
    }
  }

  // Validate domain.
  for (let i = 0; i < domain.length; i++) {
    const ch = domain[i];

    if (
      !(
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9") ||
        ch === "-"
      )
    ) {
      return false;
    }
  }

  // Validate TLD: letters only.
  for (let i = 0; i < tld.length; i++) {
    const ch = tld[i];

    if (!((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
      return false;
    }
  }

  return true;
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid.email@")); // false
