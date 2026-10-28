// JUNAYED HASAN

function formatCountdown(totalSeconds: number): string {
  const hours: number = Math.floor(totalSeconds / 3600);

  const remainingSeconds: number = totalSeconds % 3600;

  const minutes: number = Math.floor(remainingSeconds / 60);

  const seconds: number = remainingSeconds % 60;

  const formattedHours: string = String(hours).padStart(2, "0");
  const formattedMinutes: string = String(minutes).padStart(2, "0");
  const formattedSeconds: string = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(formatCountdown(3661)); // "01:01:01"
console.log(formatCountdown(59)); // "00:00:59"
console.log(formatCountdown(3600)); // "01:00:00"
console.log(formatCountdown(0)); // "00:00:00"
console.log(formatCountdown(86400)); // "24:00:00"
