const showStudentResult = (result) => {
    console.log(result.data);
};
const showTeacherResult = (result) => {
    console.log(result.data);
};
const student = {
    data: { name: "Hasan", id: 111026, marks: 45 },
    success: true
};
const teacher = {
    data: { name: "Jahangir", subject: "physics" },
    success: true
};
showStudentResult(student);
showTeacherResult(teacher);
export {};
