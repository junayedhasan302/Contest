// JUNAYED HASAN
type Student = {
    name: string;
    marks: number;
};
type GradeGroups = {
    A: Student[];
    B: Student[];
    C: Student[];
    F: Student[];
};
function groupStudentsByGrade(students: Student[]): GradeGroups {
    const result: GradeGroups = {
        A: [],
        B: [],
        C: [],
        F: []
    };
    
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.marks >= 80) {
            result.A.push(student);
        } else if (student.marks >= 70) {
            result.B.push(student);
        } else if (student.marks >= 60) {
            result.C.push(student);
        } else {
            result.F.push(student);
        }
    }
    return result;
}

console.log(
    groupStudentsByGrade([
        { name: "Alice", marks: 85 },
        { name: "Bob", marks: 72 },
        { name: "Charlie", marks: 58 },
        { name: "David", marks: 91 }
    ])
);