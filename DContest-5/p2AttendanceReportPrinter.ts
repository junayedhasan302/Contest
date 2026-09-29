// JUNAYED HASAN
type Student = {
  name: string;
  present: number;
  total: number;
};
function formatAttendanceReport(students: Student[]): string[] {
  const reports: string[] = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const percentage = Math.round((student.present / student.total) * 100);
    let status: string;
    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }
    const report = `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
    reports.push(report);
  }
  return reports;
}

console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));
// ["Rafi: 18/20 (90%) - Excellent"]

console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);
// ["Lina: 15/20 (75%) - Good", "Sam: 12/20 (60%) - At Risk"]
