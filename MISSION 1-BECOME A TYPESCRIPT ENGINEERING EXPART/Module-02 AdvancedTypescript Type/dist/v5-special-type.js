//* Top types
let helloWorld = "Hello World";
helloWorld = 254;
helloWorld.length;
const something = "Hello World";
// something.length
//* Core types
let something2;
//? Top(any, unknown) এর মধ্যে core type assign করলে Error দিবেনা, Branch Level(void, null) এর মধ্যে Error দিবে
const num = 123;
something2 = num;
let someStatus;
let status = "pending";
someStatus = status;
//! এখানে আবার error হবে somethin2 এর type এখনও unknown
// const anotherNum: number = something2; 
let something3;
let nothing;
something2 = nothing;
const user = {
    name: "Hasan"
};
const currentUser = user;
//* Unit types
const greet = () => {
    console.log("Hello World");
};
greet();
//* Sub-type of unit type
const anotherGreet = () => {
    console.log("Hello World");
    return undefined;
};
const greetings = anotherGreet(); //? কারন type void এ type undefined assign করা যায়
//* Bottom type
const getError = (msg) => {
    throw new Error(msg);
};
const x = getError("ABC"); //? never type সব type এ assign করা যাবে Like(string, number, null, undefined, .....) এবং এটা কোথাও ব্যবহার হবে না, typescript কোন error দিবে না তা বুঝার জন্য শিখানো হয়েছে।
export {};
