// JUNAYED HASAN
type User = {
  name?: string | null;
  address?: {
    city?: string | null;
  } | null;
  social?: {
    followers?: number | null;
  } | null;
};

function generateProfileCard(user: User): string {
  const name = user.name ?? "Anonymous";
  const city = user.address?.city ?? "Unknown";
  const followers = user.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}

console.log(
  generateProfileCard({
    name: "Rafi",
    address: { city: "Dhaka" },
    social: { followers: 0 },
  }),
);
// "Rafi | Dhaka | followers: 0"

console.log(
  generateProfileCard({
    name: "Alice",
    social: { followers: 120 },
  }),
);
// "Alice | Unknown | followers: 120"

console.log(generateProfileCard({}));
// "Anonymous | Unknown | followers: 0"

console.log(
  generateProfileCard({
    name: "",
    address: { city: "" },
    social: { followers: 999 },
  }),
);
// " |  | followers: 999"
