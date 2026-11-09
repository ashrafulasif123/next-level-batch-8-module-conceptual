import "./pizza"
import "./oven"
type Student = {
    readonly name: string
    id: number
}

const student: Student = {
    name: "Rohan",
    id: 12345
}

// student.name = "Hasan"
type Grade = "A" | "B" | "C" | "D"
type hasName = { name: string }
type hasRole = { roll: number }
type hasFee = { fee: number }

type FullStudent = hasName & hasRole & hasFee & { grade: Grade }

const fullS: FullStudent = {
    name: "Hasan",
    roll: 254,
    fee: 500,
    grade: "D"
}

type BikashPay = { method: "bikash"; number: number }
type CardPay = { method: "card", cardNo: number, expiryDate: string, cvc: number }
type CashPay = { method: "cash" }

type Payment = BikashPay | CardPay | CashPay

const pay = (p: Payment) => {
    if (p.method === "bikash") {
        // console.log("Send to bKash Number", p.number)
        return
    }
    if (p.method === "card") {
        // console.log(`Card no: ${p.cardNo} with ${p.cvc}`)
        return
    }
    // console.log("pay cash")
}

pay({ method: "bikash", number: 785 })

const greet = (name: string, mood?: string) => {
    // console.log(`${name} is ${mood ?? "okey"}`)
}
greet("Hasan")