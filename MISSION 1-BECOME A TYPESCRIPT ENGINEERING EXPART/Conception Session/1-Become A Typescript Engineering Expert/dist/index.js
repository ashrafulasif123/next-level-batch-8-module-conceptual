import "./pizza";
import "./oven";
const student = {
    name: "Rohan",
    id: 12345
};
const fullS = {
    name: "Hasan",
    roll: 254,
    fee: 500,
    grade: "D"
};
const pay = (p) => {
    if (p.method === "bikash") {
        // console.log("Send to bKash Number", p.number)
        return;
    }
    if (p.method === "card") {
        // console.log(`Card no: ${p.cardNo} with ${p.cvc}`)
        return;
    }
    // console.log("pay cash")
};
pay({ method: "bikash", number: 785 });
const greet = (name, mood) => {
    // console.log(`${name} is ${mood ?? "okey"}`)
};
greet("Hasan");
//# sourceMappingURL=index.js.map