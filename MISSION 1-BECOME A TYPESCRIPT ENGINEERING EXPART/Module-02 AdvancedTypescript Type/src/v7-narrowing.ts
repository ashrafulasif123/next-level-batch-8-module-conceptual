//* "typeof"

let x = ["abc"]
console.log(typeof x === "object") //? array of object অথবা null কে typescript Object হিসেবে বিবেচনা করে।

//* Type Guard

const print = (value: string | number) => {
    //? Narrowing করতে করতে আর কোন কিছু check করার বাদ থাকে না, তা else এ never type হয়েছে
    if (typeof value === "string") {
        return value.toUpperCase()
    } else if (typeof value === "number") {
        return value
    } else {
        return value
    }
}

//* Truthiness

type User = {
    name: string;
    address?: {
        street: string
    }
} | null

const loggedInUser: User = {
    name: "Hasan",
    address: {
        street: "Tmss Goli"
    }
}

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street)
        return
    }
    throw new Error("user not found")
}
showAddress(loggedInUser)

//* some caveat of Type Guard

const printAll1 = (x: string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str)
        }
    }
    else if (typeof x === "string") {
        console.log(x)
    }
    else {
        console.log("")
    }
}
printAll1(null)


const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y)
    }
}
const printAll3 = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                // console.log(str)
            }
            return
        }
        // console.log(x)
        return
    }
    // console.log("")
}
printAll3(null)

const printAll2 = (x: string | string[] | null) => {

    // 1. প্রথমে null check
    if (x === null) {
        console.log("No value");
        return;
    }

    // 2. এরপর Array check
    if (Array.isArray(x)) {
        x.forEach(item => console.log(item));
        return;
    }

    // 3. বাকি থাকল string
    console.log(x.toUpperCase());
};

// printAll2("Hasan");
// printAll2(["Hasan", "Jaber"]);
// printAll2(null);
//* "in" Operator

//? function parameter এ union এ ক্ষেত্রে Object Property acess করার জন্য "in" ব্যবহার করতে হবে।
type Bird = { fly: () => void }
type Fish = { swim: () => void }

const bird: Bird = { fly: () => console.log("Bird is Flying") }
const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly()
        return
    }
    animal.swim()
}
move(bird)

//* "instanceof" check

// const date = new Date()
// const err = new Error("Something went wrong")

// console.log(date instanceof Date)
// console.log(err instanceof Error)


const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString())
        return
    }
    const date = new Date(x)
    console.log(date.toISOString())
}
showDate("12-16-2021")

//* Discriminated union

interface Circle {
    kind: "circle";
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}

const circle: Circle = {
    kind: "circle",
    radius: 45
}

const square: Square = {
    kind: "square",
    sideLength: 100
}


const getArea = (shape: Circle | Square) => {
    if (shape.kind === "circle") {
        console.log(shape.radius)
    } else {
        console.log(shape.sideLength)
    }
}
getArea(circle)
