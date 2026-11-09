type Result<T> = {
    data: T
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

const showResult = <T>(result: Result<T>) => {
    console.log(result.data)
}


const student: Result<Student> = {
    data: { name: "Hasan", id: 111026, marks: 45 },
    success: true
}

const teacher: Result<Teacher> = {
    data: { name: "Jahangir", subject: "physics" },
    success: true
}

showResult(student)
showResult(teacher)

