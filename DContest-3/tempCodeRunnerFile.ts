// JUNAYED HASAN
// 4. Classify Password Strength

const classifyPassword = (password: string): string => {
  // Strong
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  ) {
    return "Strong";
  }

  // Medium // 6 possible pairs (4C2)
  if (password.length >= 6 &&
    ((/[A-Z]/.test(password) && /[a-z]/.test(password)) ||
      (/[A-Z]/.test(password) && /[0-9]/.test(password)) ||
      (/[A-Z]/.test(password) && /[!@#$%^&*]/.test(password)) ||
      (/[a-z]/.test(password) && /[0-9]/.test(password)) ||
      (/[a-z]/.test(password) && /[!@#$%^&*]/.test(password)) ||
      (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password))))
      {
    return "Medium";
  }

  // Weak
  return "Weak";
};
