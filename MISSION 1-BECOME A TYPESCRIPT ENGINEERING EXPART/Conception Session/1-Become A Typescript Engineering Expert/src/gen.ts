// const numbers1 = [10, 20, 30, 40, 50]
// const numbers2: number[] = [5, 15, 25, 35, 45]
// const fruits1: string[] = ["Mango", "Apple", "Banana"]
// const fruits2: string[] = ["Orange", "Grape", "Pineapple"]
// const mixed2: any[] = ["Apple", 50, false, [1, 2, 3]]
// const booleans1: boolean[] = [true, false, true]

// const first = (arr) => {
//     return arr[0]
// }

// console.log(first([10, 20, 30, 40, 50]))




// const numbers1: number[] = [10, 20, 30, 40, 50]
// const first = <T>(arr: T[]) => {
//     return arr[2]
// }
// console.log(first(numbers1)) 

interface LuncBox<T> {
    food: T,

}

const myLuncBox: LuncBox<{
    name: string,
    koytaAche: number
}> = {
    food: {
        name: "dim vaji",
        koytaAche: 9
    },

}

const rakibLunchBox: LuncBox<{
    name: string,
}> = {
    food: {
        name: "dim vaji",
    }
}
console.log("Lunch", rakibLunchBox)

// interface Product<T, U> {
//     model: T,
//     storeNumber: U,
//     category: string
// }

// const laptop: Product<string, number> = {
//     model: "Dell",
//     storeNumber: 784,
//     category: "Category"
// }

// console.log(laptop)

const students = [
    {
        id: 101,
        name: "Rahim",
        age: 20,
        marks: 85
    },
    {
        id: 102,
        name: "Karim",
        age: 22,
        marks: 90
    },
    {
        id: 103,
        name: "Sumon",
        age: 21,
        marks: 78
    }
]

type ApiResponse<T> = {
    data: T
    success: boolean
}

type StudentsResponse = ApiResponse<{
    id: number,
    name: string,
    age: number,
    marks: number
}>

const student: StudentsResponse = {
    data: {
        id: 101,
        name: "Rahim",
        age: 20,
        marks: 85
    },
    success: true
}

console.log(student)
type ErrorResponse = ApiResponse<{ message: string }>