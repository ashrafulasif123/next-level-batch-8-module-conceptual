//* type alias vs interface

//? Interface is more connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

//TODO : type alias 

type ID = number

//! interface id = number

type Role = "admin" | "member"

//! interface Role  "admin" | "member"

interface User {
    name: string,
    id: ID,
    role: Role
}

const user: User = {
    name: "Mir",
    id: 321,
    role: "admin"
}

// TODO : interface

interface Animal {
    species: string
}

interface Cat extends Animal {
    breed: string
}

const cat: Cat = {
    breed: "Persian",
    species: "Felix Catus"
}

type Vehicle = {
    brand: string
}

type Car = Vehicle & {
    //? "&" symbol is used to perform intersection
    model: string
}

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
}

//? Duplication interface is valid & marge

interface IEmployee {
    name: string
}

interface IEmployee {
    id: number
}

const employee: IEmployee = {
    id: 123,
    name: "ABC"
}

//! Duplication Alis Type is not valid
/* type TEmployee = {
    id: number,
}

type TEmployee = {

}
 */