//* alias type Generic
type Marks = { math: number, physics: number, chemistry: number }
type StudentInfo<T, U, B, A> = {
    name: T
    id: U
    age: U
    isPass: B
    subjects: A
    pending: boolean
}

const student1: StudentInfo<string, number, boolean, Marks> = {
    name: "Hasan",
    id: 111026,
    age: 65,
    isPass: true,
    subjects: { math: 80, physics: 52, chemistry: 87 },
    pending: true
}
const student2: StudentInfo<string, string, boolean, string[]> = {
    name: "Jaber",
    id: "111027",
    age: "29",
    isPass: false,
    subjects: ["Physics", "Chemistry", "Math"],
    pending: true
}

console.log(student1)