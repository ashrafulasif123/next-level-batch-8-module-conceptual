
const addTwo = (a: number, b: number) => {
    return a + b
}
// console.log(addTwo(1000, 15))

/** 1-7: Array, Tuple and readonly modifier */
const arr1: Array<string> = ["Programming", "Hero"]
const arr2: string[] = ["Programming", "Hero"]
const numbArr: number[] = [1, 5, 78, 87]

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125] // Tuple এর ক্ষেত্রে readonly বসালে কোন প্রকার push বা পরিবর্তন করা যাবে না।
// dhakaLatLong.push(200) // Error দেখাবে
// console.log(dhakaLatLong)
/** 1-8: Optional, Default Parameters & rest paremeters */
// Optional Parameter
const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName
    }
    return `${firstName} ${lastName}`
}
// console.log(concatName("Mir"))

// Default Parameter
const greetings = (fullName: string, greeting = "Hello"): void => {
    // যদি কোন variable এর value বসিয়ে দেয়া হয়, তাহলে type বসানোর প্র
    // কোন কিছু return করার প্রয়োজন না হলে,  
    //Default Paremeter সবার শেষে থাকলে Argument এ undefined দেয়ার প্রয়োজন নেই, খালি রাখলেই হবে।
    // console.log(greeting + " " + fullName)
}
greetings("Md Ashraful Hossain")

//* rest parameters(...args)
// const numbArr2 : number[] = [1, 5, 78, 87] ^^^^
const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0)
}
const total = sum(6, 4, 4, 6)
// console.log(total)


// const dhakaLatLong2 : readonly [number, number] = [23.8103, 90.4125] ^^^^
const logerUserAction = (...args: [name: string, age: number, isActive?: boolean]): void => {
    const [name2, age2] = args
    console.log(name2 + " Age is " + age2)
}
logerUserAction("hasan", 60)

//* 1-10: Object, Type Alias and Interface
// Object (Without Type Alias বারংবার type লিখতে হচ্ছে)
const student: {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void,
    badges: string[]

} = {
    name: "Hasan",
    age: 32,
    isActive: false,
    action: () => false,
    badges: ["React, Java, Nextjs"]
}

const student2: {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void,
    badges: string[]
} = {
    name: "Kuddus",
    age: 25,
    isActive: true,
    action: () => true,
    badges: ["Alfa, Fikrat, Justin"]
}
//* Type Alias(বারবার type দেয়ার প্রয়োজন নেই)
type TUser = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void,
    badges: string[],
}

const user: TUser = {
    name: "Hasan",
    age: 32,
    isActive: false,
    action: () => false,
    badges: ["React, Java, Nextjs"],

}

const user2: TUser = {
    name: "Hasan",
    age: 32,
    isActive: false,
    action: () => false,
    badges: ["React, Java, Nextjs"],
}

//* Interface (interface & type alias এর মধ্যে কিছু পার্থক্য আছে যা পরবর্তী Module এর জানানো হবে)
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void,
    badges: string[]
}


const iuser: IUser = {
    name: "Hasan",
    age: 32,
    isActive: false,
    action: () => false,
    badges: ["React, Java, Nextjs"]
}

const iuser2: IUser = {
    name: "Hasan",
    age: 32,
    isActive: false,
    action: () => false,
    badges: ["React, Java, Nextjs"]
}

/* const product: {
    productName: string;
    status: string;
    price: number;
    verified: boolean,
    address: {
        streetName: string,
        holdingNumber: number
    }
} = {
    productName: "Laptop",
    status: "Pending",
    price: 25000,
    verified: true,
    address: {
        streetName: "Mater Goli",
        holdingNumber: 25 / 4
    }
} */
//* Type Alias With Nested Object
type Address = {
    streetName: string;
    holdingNumber: number
}
type Product = {
    productName: string;
    status: string;
    price: number;
    verified: boolean;
    address: Address
}

const product: Product = {
    productName: "Laptop",
    status: "Pending",
    price: 25000,
    verified: true,
    address: {
        streetName: "Mater Goli",
        holdingNumber: 25 / 4
    }
}




