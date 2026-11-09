type StudentResult = {
    data: Student
    success: boolean
}

type TeacherResult = {
    data: Teacher
    success: boolean
}

type Student = {
    name: string
    id: number
    marks: number
}

type Teacher = {
    name: string
    subject: string
}

const showStudentResult = (result: StudentResult) => {
    console.log(result.data)
}

const showTeacherResult = (result: TeacherResult) => {
    console.log(result.data)
}

const student: StudentResult = {
    data: { name: "Hasan", id: 111026, marks: 45 },
    success: true
}

const teacher: TeacherResult = {
    data: { name: "Jahangir", subject: "physics" },
    success: true
}

showStudentResult(student)
showTeacherResult(teacher)