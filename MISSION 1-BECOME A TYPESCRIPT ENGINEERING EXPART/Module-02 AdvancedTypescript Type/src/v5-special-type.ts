
//* Top types
let helloWorld: any = "Hello World"
helloWorld = 254
helloWorld.length

const something: unknown = "Hello World"
// something.length

//* Core types
let something2: unknown
//? Top(any, unknown) এর মধ্যে core type assign করলে Error দিবেনা, Branch Level(void, null) এর মধ্যে Error দিবে
const num: number = 123
something2 = num

type Status = "pending" | "success"
let someStatus: string

let status: Status = "pending"
someStatus = status



//! এখানে আবার error হবে somethin2 এর type এখনও unknown
// const anotherNum: number = something2; 

let something3: unknown
let nothing: void
something2 = nothing

//* Nullish types
/* interface User {
    name: string
}
const currentUser: User = {
    name: "Hasan"
}
 */
interface User {
    name: string
}
const user: User = {
    name: "Hasan"
}

type loggedInUser = User | null


const currentUser: loggedInUser = user

//* Unit types

const greet = () => {
    console.log("Hello World")
}
greet()

//* Sub-type of unit type

const anotherGreet = (): undefined => {
    console.log("Hello World")
    return undefined
}
const greetings: void = anotherGreet() //? কারন type void এ type undefined assign করা যায়

//* Bottom type

const getError = (msg: string): never => {
    throw new Error(msg)
}

const x: "admin" = getError("ABC") //? never type সব type এ assign করা যাবে Like(string, number, null, undefined, .....) এবং এটা কোথাও ব্যবহার হবে না, typescript কোন error দিবে না তা বুঝার জন্য শিখানো হয়েছে।

