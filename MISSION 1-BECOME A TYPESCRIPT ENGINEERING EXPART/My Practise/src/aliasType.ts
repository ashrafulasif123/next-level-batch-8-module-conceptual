type StudentInfo = {
    name: string,
    id: number,
    age?: number,
    isPass: boolean
    subjects: string[]
}


const student1: StudentInfo = {
    name: "Hasan",
    id: 111026,
    isPass: true,
    subjects: ["Physics", "Chemistry", "Math"]
}

const student2: StudentInfo = {
    name: "Jaber",
    id: 111027,
    age: 29,
    isPass: false,
    subjects: ["Physics", "Chemistry", "Math"]
}
const student3: StudentInfo = {
    name: "Ahmed",
    id: 111030,
    age: 25,
    isPass: true,
    subjects: ["Physics", "Chemistry", "Math"]
}


// const students: StudentInfo[] = [
//     {
//         name: "Hasan",
//         id: 111026,
//         isPass: true,
//         subjects: ["Physics", "Chemistry", "Math"]
//     },
//     {
//         name: "Jaber",
//         id: 111027,
//         age: 29,
//         isPass: false,
//         subjects: ["Physics", "Chemistry", "Math"]
//     },
//     {
//         name: "Ahmed",
//         id: 111030,
//         age: 25,
//         isPass: true,
//         subjects: ["Physics", "Chemistry", "Math"]
//     }
// ]
// console.log(students)