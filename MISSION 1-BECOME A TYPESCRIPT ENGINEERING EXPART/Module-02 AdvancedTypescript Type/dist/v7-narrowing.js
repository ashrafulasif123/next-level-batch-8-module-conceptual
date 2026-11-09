//* "typeof"
let x = ["abc"];
console.log(typeof x === "object"); //? array of object অথবা null কে typescript Object হিসেবে বিবেচনা করে।
//* Type Guard
const print = (value) => {
    //? Narrowing করতে করতে আর কোন কিছু check করার বাদ থাকে না, তা else এ never type হয়েছে
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "Hasan",
    address: {
        street: "Tmss Goli"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("user not found");
};
showAddress(loggedInUser);
//* some caveat of Type Guard
// const printAll = (x: string | string[] | null) => {
//     if (x && typeof x === "object") {
//         for (let str of x) {
//             console.log(str)
//         }
//     }
//     else if (typeof x === "string") {
//         console.log(x)
//     }
//     else {
//         console.log("")
//     }
// }
// printAll(null)
//* Eqvality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                // console.log(str)
            }
            return;
        }
        // console.log(x)
        return;
    }
    // console.log("")
};
printAll(null);
const bird = { fly: () => console.log("Bird is Flying") };
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
move(bird);
//* "instanceof" check
// const date = new Date()
// const err = new Error("Something went wrong")
// console.log(date instanceof Date)
// console.log(err instanceof Error)
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-16-2021");
const circle = {
    kind: "circle",
    radius: 45
};
const square = {
    kind: "square",
    sideLength: 100
};
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
getArea(circle);
export {};
