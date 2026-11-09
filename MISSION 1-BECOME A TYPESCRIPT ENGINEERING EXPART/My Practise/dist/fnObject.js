const showResult = (result) => {
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
showResult(student);
showResult(teacher);
export {};
